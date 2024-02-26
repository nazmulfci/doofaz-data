<template id="">
  <span>
   <div class="card main-card  element-block-example">
      <div class="card-header alert-info">
        <h3>Yearly Leave</h3>
      </div>
  
 <center><span> Select Month</span><month-picker-input :no-default="true" @change="showDate"></month-picker-input></center>
  
      <div class="table-responsive bg-white mt-3" v-if="yearly==true">
        <table class="table table-hover table-striped table-bordered ">
            <thead>
            <tr class="alert-info">
             
               <th v-for="num in 31">
                  {{ num }}
               </th>
             </tr>
            </thead>
            <tbody>
              <tr >
                
                <td v-for="(num, index) in number" >
                    <span v-for="list in holidaySetupOWnerLists" :title="list.admin_holiday_type_relation.holidayTypeName"  >
                    <span v-for="i in  (parseFloat(list.holidayEndDate.split('-')[2])-parseFloat(list.holidayStartDate.split('-')[2]))+1"  >
                 <span style="color:red" v-if="(parseFloat(list.holidayStartDate.split('-')[2])+i)-1 == num&&momentFormatMonth==list.holidayStartDate.split('-')[1]" > Holiday</span>
                    </span>
                    </span>
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      <div class="table-responsive bg-white mt-3" v-if="yearly==false">
        <table class="table table-hover table-striped table-bordered ">
            <thead>
            <tr class="alert-info">
             
               <th v-for="num in 31">
                  {{ num }}
               </th>
             </tr>
            </thead>
            <tbody>
              <tr >
                
                <td v-for="(num, index) in number" >
                    <span v-for="list in holidaySetupOWnerLists" :title="list.admin_holiday_type_relation.holidayTypeName"  >
                    <span v-for="i in  (parseFloat(list.holidayEndDate.split('-')[2])-parseFloat(list.holidayStartDate.split('-')[2]))+1"  >
                 <span style="color:red" v-if="(parseFloat(list.holidayStartDate.split('-')[2])+i)-1 == num" > Holiday</span>
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
                   holidaySetupOWnerLists:{},
                    currentDateMonth: {},
               
                momentFormat: {},
                momentFormatMonth: {},
                momentFormatDate: {},
                yearly:true,
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
            this.holidaySetupReport();

        },
        methods:{
          showDate (date) {
			this.date = date
  this.yearly=false;
          axios.get(`/yearlyLeave/${this.date.monthIndex}/${this.date.year}`).then(res =>{
                
                  this.holidaySetupOWnerLists = res.data.holidaySetupOWnerListPagi
                  this.holidaySetupGlobalLists = res.data.holidaySetupGlobalList
              

              })
		},
            holidaySetupReport(){
              axios.get('/holidaySetupReport').then(res =>{
                  this.holidaySetupOWnerLists = res.data.holidaySetupOWnerListPagi
                  this.holidaySetupGlobalLists = res.data.holidaySetupGlobalList
              })
                 this.currentDateMonth = new Date().toLocaleString();

                    this.momentFormat = moment(String(this.currentDateMonth)).format('MM/DD/YYYY');
                    this.momentFormatMonth = this.momentFormat.split('/')[0];
                    this.momentFormatDate = this.momentFormat.split('/')[1];
            },
        },
    }
</script>
