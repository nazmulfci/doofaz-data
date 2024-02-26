<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Salary Start Setup</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form @submit.prevent="salaryStartSetup()">
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
                @change.prevent="employeeEntryId()"
              >
                <option value="">Select One</option>
                <option
                  v-for="employeeName in employeeNames"
                  :key="employeeName.id"
                  :value="employeeName.shopEmployeeEntryId"
                  v-if="!employeeName.start"
                >
                  {{ employeeName.userName }}
                </option>
              </select>
              <has-error :form="form" field="employeEntryId"></has-error>
            </div>
            <div class="form-group">
              <label>Employee Department</label>
              <input
                type="text"
                disabled
                v-model="form.employeeDepartment"
                name="employeeDepartment"
                :class="{ 'is-invalid': form.errors.has('employeeDepartment') }"
                placeholder="Employee Department Name"
                class="form-control"
              />
              <has-error :form="form" field="employeeDepartment"></has-error>
            </div>
            <div class="form-group">
              <label>Grade Name</label>
              <input
                type="text"
                disabled
                v-model="form.gradeName"
                name="gradeName"
                :class="{ 'is-invalid': form.errors.has('gradeName') }"
                placeholder="Grade Name"
                class="form-control"
              />
              <has-error :form="form" field="gradeName"></has-error>
            </div>
            <div class="form-group">
              <label>Grade Amount</label>
              <input
                type="text"
                disabled
                v-model="form.gradeAmount"
                name="gradeAmount"
                :class="{ 'is-invalid': form.errors.has('gradeAmount') }"
                placeholder="Grade Amount"
                class="form-control"
              />
              <has-error :form="form" field="gradeAmount"></has-error>
            </div>
            <div class="form-group mb-5 pb-5">
             <div style="margin: auto; padding: 22px">
        <span>Select Month</span>
        <month-picker-input
          @change="showDate"
          :no-default="true"
        ></month-picker-input>
      </div>

      
            </div>

            <input
              type="hidden"
              v-model="form.gradeEntryId"
              name="gradeEntryId"
              class="form-control"
            />

            <!-- <div class="form-group">
              <label>Salary Setup Status</label>
              <select
                v-model="form.salarySetupStatus"
                name="salarySetupStatus"
                :class="{ 'is-invalid': form.errors.has('salarySetupStatus') }"
                class="form-control"
              >
                <option value="">Select One</option>
                <option value="1">Publish</option>
                <option value="0">Unpublish</option>
              </select>
              <has-error :form="form" field="salarySetupStatus"></has-error>
            </div> -->
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
        <h3>Salary Grade Setup</h3>
      </div>
      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>Employee<span class="textTransparent">_</span>Name</th>
              <th>
                Employee<span class="textTransparent">_</span>Job<span
                  class="textTransparent"
                  >_</span
                >Department
              </th>
              <th>
                Salary<span class="textTransparent">_</span>Grade<span
                  class="textTransparent"
                  >_</span
                >Name
              </th>
              <th>
                Salary<span class="textTransparent">_</span>Grade<span
                  class="textTransparent"
                  >_</span
                >Amount
              </th>
              <th>
                Salary<span class="textTransparent">_</span>Start<span
                  class="textTransparent"
                  >_</span
                >Date
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(salarySetupList, index) in salarySetupLists.data"
              :key="salarySetupList.id"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ salarySetupList.shop_employee_name.userName }}</td>
              <td>{{ salarySetupList.job_departments.jobDepartmentName }}</td>
              <td>{{ salarySetupList.grade_entry_list.gradeName }}</td>
              <td>{{ salarySetupList.grade_entry_list.gradeAmount }}</td>
              <td>
                <span v-if=" salarySetupList.salaryMonthYear==1">Jan&nbsp;{{salarySetupList.salaryStartYear}}</span>
                <span v-if=" salarySetupList.salaryMonthYear==2">Feb&nbsp;{{salarySetupList.salaryStartYear}}</span>
                <span v-if=" salarySetupList.salaryMonthYear==3">March&nbsp;{{salarySetupList.salaryStartYear}}</span>
                <span v-if=" salarySetupList.salaryMonthYear==4">April&nbsp;{{salarySetupList.salaryStartYear}}</span>
                <span v-if=" salarySetupList.salaryMonthYear==5">May&nbsp;{{salarySetupList.salaryStartYear}}</span>
                <span v-if=" salarySetupList.salaryMonthYear==6">Jun&nbsp;{{salarySetupList.salaryStartYear}}</span>
                <span v-if=" salarySetupList.salaryMonthYear==7">July&nbsp;{{salarySetupList.salaryStartYear}}</span>
                <span v-if=" salarySetupList.salaryMonthYear==8">Aug&nbsp;{{salarySetupList.salaryStartYear}}</span>
                <span v-if=" salarySetupList.salaryMonthYear==9">Sep&nbsp;{{salarySetupList.salaryStartYear}}</span>
                <span v-if=" salarySetupList.salaryMonthYear==10">Oct&nbsp;{{salarySetupList.salaryStartYear}}</span>
                <span v-if=" salarySetupList.salaryMonthYear==11">Nov&nbsp;{{salarySetupList.salaryStartYear}}</span>
                <span v-if=" salarySetupList.salaryMonthYear==12">Dec&nbsp;{{salarySetupList.salaryStartYear}}</span>
              
              </td>
              <!-- <td>
                    <div v-if="salarySetupList.salarySetupStatus == 1">
                      <button type="button"  @click="changeStatus(salarySetupList.salarySetupId)" class="btn btn-hover-shine btn-success">Published</button>
                    </div>
                    <div v-else>
                      <button type="button"  @click="changeStatus(salarySetupList.salarySetupId)" class="btn btn-hover-shine btn-danger">Unpublish</button>
                    </div>
                </td> -->
              <td>
                <router-link
                  :to="`/salarystartsetup@edit${salarySetupList.salarySetupId}`"
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
          :data="salarySetupLists"
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
import { MonthPicker } from 'vue-month-picker'
import { MonthPickerInput } from 'vue-month-picker'
Vue.use(MonthPicker)
Vue.use(MonthPickerInput)
export default {
  data() {
    return {
      form: new Form({
        employeEntryId: "",
        employeeDepartment: "",
        gradeEntryId: "",
        gradeName: "",
        gradeAmount: "",
       
				from: null,
				to: null,
				month: null,
        monthIndex:null,
				year: null,
				monthInfo: '',
			
        salarySetupStatus:1,
      }),
      employeeNames: {},
       
      salarySetupLists: {},
      loading: false,
    };
  },
  props: {
    limit: {
      type: Number,
      default: 2,
    },
  },
   components: {
		MonthPicker,
    MonthPickerInput
	},
  mounted() {
    this.employeeNameList();
    this.getPaginateList();
  },
  methods: {
      showDate (date) {
			        this.form.year = date.year,
			        this.form.monthIndex = date.monthIndex
			        this.form.monthInfo = date.year+'-'+date.monthIndex+'-'+'01'
             
      },
    employeeNameList() {
      axios.get("/employeeName").then((res) => {
        this.employeeNames = res.data.employeeSetupName;
      });
    },
    employeeEntryId() {
      axios.get("/salaryGradeName/" + this.form.employeEntryId).then((res) => {
        this.form.gradeEntryId = res.data.salaryGradeinfo.gradeEntryId;
        this.form.gradeName = res.data.salaryGradeinfo.gradeName;
        this.form.gradeAmount = res.data.salaryGradeinfo.gradeAmount;
        this.form.employeeDepartment =
          res.data.jobDepartmentinfo.jobDepartmentName;
      });
    },
    salaryStartSetup() {
      this.loading = true;
      this.form
        .post("/salaryStartSetup")
        .then((res) => {
          this.loading = false;
            
              this.form.employeEntryId= "",
        this.form.employeeDepartment= "",
       this.form.gradeEntryId= "",
        this.form.gradeName= "",
        this.form.gradeAmount="",
           
            Toast.fire({
              icon: "success",
              title: "Salary Setup Successfully",
            });
               this.employeeNameList();
         
            this.salaryGradeSetupList();
          
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
    },
    salaryGradeSetupList() {
      axios.get("/salaryStartSetup").then((res) => {
        this.salarySetupLists = res.data.salarySetupLists;
      });
    },
    getPaginateList(page = 1) {
      axios.get("/salaryStartSetup?page=" + page).then((response) => {
        this.salarySetupLists = response.data.salarySetupLists;
      });
    },
    changeStatus(salarySetupId) {
      axios.get("/salaryStartSetup/" + salarySetupId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Salary Setup Status Change Successfully",
        });
        this.salaryGradeSetupList();
      });
    },
  },
};
</script>
