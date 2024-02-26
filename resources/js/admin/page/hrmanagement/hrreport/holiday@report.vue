<template id="">
  <span>
    <div class="card main-card  element-block-example">
      <div class="card-header alert-info">
        <h3>Holiday Setup Report </h3>
      </div>
        <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-striped table-bordered ">
            <thead>
            <tr class="alert-info">
                 <th>SN</th>
                 <th>Holiday<span class="textTransparent">_</span>Type<span class="textTransparent">_</span>Name</th>
                 <th>Holiday<span class="textTransparent">_</span>Start<span class="textTransparent">_</span>Date </th>
                 <th>Holiday<span class="textTransparent">_</span>End<span class="textTransparent">_</span>Date </th>
                 <th>Day<span class="textTransparent">_</span>Remain</th>
                 <th>Upcoming</th>
                 <th>Holiday<span class="textTransparent">_</span>Setup<span class="textTransparent">_</span>Status</th>
               </tr>
              </thead>
              <tbody>
                <tr v-for="(holidaySetupOWnerList, index) in holidaySetupOWnerLists.data">
                  <td>{{ index+1 }}</td>
                  <td v-if="holidaySetupOWnerList.admin_holiday_type_relation">{{ holidaySetupOWnerList.admin_holiday_type_relation.holidayTypeName	 }}</td>
                  <td v-else></td>
                  <td>{{ holidaySetupOWnerList.holidayStartDate	 }}</td>
                  <td>{{ holidaySetupOWnerList.holidayEndDate	 }}</td>
                  <td>     {{ parseDateL( holidaySetupOWnerList.holidayStartDate , holidaySetupOWnerList.holidayEndDate	)+1 }}</td>
                   <td>
                   
             {{ parseDate( moment(new Date(), 'YYYY-MM-DD') , holidaySetupOWnerList.holidayStartDate	) }}
                 
                

                </td>
                  <td>
                      <div v-if="holidaySetupOWnerList.holidaySetupStatus == 1">
                        <span  class="badge btn-hover-shine badge-success">Published</span>
                      </div>
                      <div v-else>
                        <span class="badge btn-hover-shine badge-danger">Unpublish</span>
                      </div>
                  </td>
                </tr>
              </tbody>
           </table>
         </div>
         <span class="card_footer">
           <pagination :data="holidaySetupOWnerLists" :limit="limit"  @pagination-change-page="getPaginateList">
             <span slot="prev-nav">&lt; Previous</span>
             <span slot="next-nav">Next &gt;</span>
           </pagination>
        </span>
     </div>

     

  </span>
</template>
<script>
import moment from "moment";
    export default {
        data(){
            return{
                holidaySetupOWnerLists:{},
                holidaySetupGlobalLists:{},
                currentDateMonth:{},
                   moment: moment,
            }
        },
        props:{
            limit: {
                type: Number,
                default: 2
            }
        },
        mounted(){
            this.holidaySetupReport();
            this.getPaginateList();
        },
        methods:{
            parseDate (start, end) {
        const dt= moment(end, 'YYYY-MM-DD ').diff(moment(start, 'YYYY-MM-DD '), "days")
        const futureDate = moment(start).add(dt, 'days');
        const diff = moment.duration(futureDate.diff(start));
        if(`${diff.months()}`==0){
               return (`${diff.days()} Days`);
        }else{
       return (`${diff.months()} Months and ${diff.days()} Days`);
        }
    },
            parseDateL (start, end) {
        return moment(end, 'YYYY-MM-DD ').diff(moment(start, 'YYYY-MM-DD '), "days")
    },
       
            holidaySetupReport(){
              axios.get('/holidaySetupReport').then(res =>{
                  this.holidaySetupOWnerLists = res.data.holidaySetupOWnerList
                  this.holidaySetupGlobalLists = res.data.holidaySetupGlobalList
              })
               this.currentDateMonth = new Date().toLocaleString().split(',')[0];
            },
            getPaginateList(page = 1){
              axios.get('/holidaySetupReport?page=' + page).then(response => {
                  this.holidaySetupOWnerLists = response.data.holidaySetupOWnerList;
                  this.holidaySetupGlobalLists = response.data.holidaySetupGlobalList;
              });
            },
        }
    }

</script>
