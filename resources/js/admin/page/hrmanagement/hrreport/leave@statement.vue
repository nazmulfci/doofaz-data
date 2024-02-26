<template id="">
  <span>
   

    <div class="card main-card element-block-example mt-5">
      <div class="card-header alert-info">
        <h3>Employee Leave List</h3>
      </div>
      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>Employee<span class="textTransparent">_</span>Name</th>
              <th>
                Leave<span class="textTransparent">_</span>Start<span
                  class="textTransparent"
                  >_</span
                >Date
              </th>
              <th>
                Leave<span class="textTransparent">_</span>End<span
                  class="textTransparent"
                  >_</span
                >Date
              </th>
              <th>Day<span class="textTransparent">_</span>Remain</th>
              <th>Commitment</th>
            
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(leaveEntryList, index) in leaveEntryLists.data"
              :key="leaveEntryList.vue"
            >
              <td>{{ index + 1 }}</td>
              <td>
                <span v-if="leaveEntryList.employee_name"
                  >{{ leaveEntryList.employee_name.userName }}
                </span>
              </td>
              <td>{{ leaveEntryList.startDate }}</td>
              <td>{{ leaveEntryList.endDate }}</td>
              <td>
                 {{ parseDate( leaveEntryList.startDate , leaveEntryList.endDate	)+1 }} Days
                <!-- <span
                  v-if="
                    parseFloat(leaveEntryList.endDate.split('-')[1]) -
                    parseFloat(currentDateMonth.split('/')[0])
                  "
                >
                  {{
                    parseFloat(leaveEntryList.endDate.split("-")[1]) -
                    parseFloat(currentDateMonth.split("/")[0])
                  }}
                  Month
                </span>
                <span
                  v-if="
                    parseFloat(leaveEntryList.endDate.split('-')[2]) -
                      parseFloat(currentDateMonth.split('/')[1]) >
                    0
                  "
                >
                  {{
                    parseFloat(leaveEntryList.endDate.split("-")[2]) -
                    parseFloat(currentDateMonth.split("/")[1])
                  }}
                  Day
                </span>
                <span v-else>0 Day</span>
                <span
                  v-if="
                    parseFloat(leaveEntryList.endDate.split('-')[2]) -
                      parseFloat(currentDateMonth.split('/')[1]) ==
                    0
                  "
                >
                  0 Day
                </span> -->
              </td>
              <td>
                {{ leaveEntryList.commitment | shortlength("80", "...") }}
              </td>
            
            </tr>
          </tbody>
        </table>
      </div>

      <span class="card_footer">
        <pagination
          :data="leaveEntryLists"
          :limit="limit"
          @pagination-change-page="getPaginateList"
        >
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
  data() {
    return {
     
      leaveEntryLists: {},
      currentDateMonth: {},
      loading: false,
          moment: moment,
    };
    
  },
  props: {
    limit: {
      type: Number,
      default: 2,
    },
  },
  mounted() {
 
    this.employeeLeaveList();
  },
  methods: {
        parseDate (start, end) {
        return moment(end, 'YYYY-MM-DD ').diff(moment(start, 'YYYY-MM-DD '), "days")
    },  
    employeeLeaveList() {
      axios.get("/employeeLeaveEntry/"+this.$route.params.id).then((res) => {
        this.leaveEntryLists = res.data.leaveEntryLists;
      });
    },
    getPaginateList(page = 1) {
      axios.get('employeeLeaveEntry/'+this.$route.params.id+"?page=" + page).then((response) => {
        this.leaveEntryLists = response.data.leaveEntryLists;
      });
    },
  },
};
</script>
