<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Employee Leave Entry</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form @submit.prevent="employeeLeaveEntry()">
          <div
            class="
              col-lg-7
              px-lg-5
              col-sm-8
              offset-sm-2
              col-12
              pb-2
              pt-2
              mb-3
              supplier-border
              comm-form-box-back-color
            "
          >
            <div class="form-group">
              <label>Employee Name</label>
              <select
                v-model="form.employeEntryId"
                name="employeEntryId"
                :class="{ 'is-invalid': form.errors.has('employeEntryId') }"
                class="form-control"
              >
                <option value="">Select One</option>
                <option
                  v-for="employeeName in employeeNames"
                  :value="employeeName.shopEmployeeEntryId"
                  :key="employeeName.id"
                >
                  {{ employeeName.userName }}
                </option>
              </select>
              <has-error :form="form" field="employeEntryId"></has-error>
            </div>
            <div class="form-group">
              <label>Start Date</label>
              <input
                type="date"
                v-model="form.startDate"
                name="startDate"
                :class="{ 'is-invalid': form.errors.has('startDate') }"
                placeholder="Job Department Name"
                class="form-control"
              />
              <has-error :form="form" field="startDate"></has-error>
            </div>
            <div class="form-group">
              <label>End Date</label>
              <input
                type="date"
                v-model="form.endDate"
                name="endDate"
                :class="{ 'is-invalid': form.errors.has('endDate') }"
                class="form-control"
              />
              <has-error :form="form" field="endDate"></has-error>
            </div>
            <div class="form-group">
              <label>Commitment</label>
              <textarea
                v-model="form.commitment"
                name="commitment"
                class="form-control"
                placeholder="Commitment"
                :class="{ 'is-invalid': form.errors.has('commitment') }"
                style="height: 130px"
              >
              </textarea>
              <has-error :form="form" field="commitment"></has-error>
            </div>
          </div>

          <!-- -----------------------------   card footer  -->

          <div class="d-block p-0 pt-3 pb-4 card-footer overflow-hidden">
            <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">
              <button
                type="reset"
                class="
                  btn-pill btn-shadow btn btn-outline-danger btn-lg
                  float-left
                "
              >
                <span class="mr-2 opacity-7">
                  <i class="fa fa-undo"></i>
                </span>
                <span class="mr-1"> Clear </span>
              </button>

              <button
                type="submit"
                class="
                  btn-pill btn-shadow btn btn-primary btn-lg
                  float-right
                  btn-hover-shine
                "
                :disabled="loading"
              >
                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>

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
              <th>Action</th>
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
              <td>
                <router-link
                  :to="`/leave@entryEdit${leaveEntryList.employeeLeaveId}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine
                  "
                  ><i class="fa fa-edit"></i
                ></router-link>
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
      form: new Form({
        employeEntryId: "",
        startDate: "",
        endDate: "",
        commitment: "",
      }),
      employeeNames: {},
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
    this.employeeNameList();
    this.employeeLeaveList();
  },
  methods: {
       parseDate (start, end) {
        return moment(end, 'YYYY-MM-DD ').diff(moment(start, 'YYYY-MM-DD '), "days")
    },
    employeeNameList() {
      axios.get("/employeeLeaveEntry/create").then((res) => {
        this.employeeNames = res.data.employeeNames;
        this.currentDateMonth = new Date().toLocaleString().split(",")[0];
      });
    },
    employeeLeaveEntry() {
      this.loading = true;
      this.form
        .post("/employeeLeaveEntry")
        .then((res) => {
          this.loading = false;
          Toast.fire({
            icon: "success",
            title: "Employee Leave Entry Successfully",
          });
          this.form.reset();
          this.employeeLeaveList();
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
    },
    employeeLeaveList() {
      axios.get("/employeeLeaveEntry").then((res) => {
        this.leaveEntryLists = res.data.leaveEntryLists;
      });
    },
    getPaginateList(page = 1) {
      axios.get("employeeLeaveEntry?page=" + page).then((response) => {
        this.leaveEntryLists = response.data.leaveEntryLists;
      });
    },
  },
};
</script>
