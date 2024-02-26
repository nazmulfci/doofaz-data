<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Salary Increment Entry</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form @submit.prevent="salaryGradeUpdate()">
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
              <label>Employee Type</label>
              <div>
                <select
                  class="form-control"
                  v-model="form.employeeTypeId"
                  :class="{ 'is-invalid': form.errors.has('employeeTypeId') }"
                  name="employeeTypeId"
                  @change.prevent="employeeTypeSelect()"
                >
                  <option value="">Select One</option>
                  <option
                    v-for="employeeTypeList in employeeTypeLists"
                    :value="employeeTypeList.shopEmployeeTypeId"
                    :key="employeeTypeList.id"
                  >
                    {{
                      employeeTypeList.shopEmployeeTypeName
                    }}
                  </option>
                </select>
                <has-error :form="form" field="employeeTypeId"></has-error>
              </div>
            </div>
            <div class="form-group">
              <label>Job Department</label>
              <div>
                <select
                  class="form-control"
                  v-model="form.jobDepartmentId"
                  :class="{
                    'is-invalid': form.errors.has('jobDepartmentId'),
                  }"
                  name="jobDepartmentId"
                  @change.prevent="showEmployee()"
                >
                  <option value="">Select One</option>
                  <option
                    v-for="jobDepartmentList in jobDepartmentLists"
                    :value="jobDepartmentList.jobDepartmentEntryId"
                    :key="jobDepartmentList.id"
                  >
                    {{ jobDepartmentList.jobDepartmentName }}
                  </option>
                </select>
                <has-error :form="form" field="jobDepartmentId"></has-error>
              </div>
            </div>
            <div class="form-group">
              <label>Employee Name</label>
              <select
                @change.prevent="showSalaryInfo()"
                v-model="form.employeEntryId"
                name="employeEntryId"
                :class="{ 'is-invalid': form.errors.has('employeEntryId') }"
                class="form-control"
              >
                <option value="">Select One</option>
                <option
                  v-for="employeeName in employeeNames"
                  :key="employeeName.id"
                  :value="employeeName.shopEmployeeEntryId"
                >
                  {{ employeeName.userName }}
                </option>
              </select>
              <has-error :form="form" field="employeEntryId"></has-error>
            </div>
            <div class="form-group">
              <label>Salary Grade Amount</label>
              <input
                type="text"
                disabled
                v-model="form.grade"
                name="salaryGradeAmount"
                :class="{ 'is-invalid': form.errors.has('salaryGradeAmount') }"
                placeholder="Salary Grade Amount"
                class="form-control"
              />
              <has-error :form="form" field="salaryGradeAmount"></has-error>
            </div>
            <div class="form-group">
              <label>Salary Grade Amount</label>
              <input
                type="text"
                disabled
                v-model="form.amount"
                name="salaryGradeAmount"
                :class="{ 'is-invalid': form.errors.has('salaryGradeAmount') }"
                placeholder="Salary Grade Amount"
                class="form-control"
              />
              <has-error :form="form" field="salaryGradeAmount"></has-error>
            </div>
            <div class="form-group">
              <label>Employee Type</label>
              <div>
                <select
                  class="form-control"
                  v-model="form.employeeType"
                  :class="{ 'is-invalid': form.errors.has('employeeTypeId') }"
                  name="employeeTypeId"
                  @change.prevent="employeeTSelect()"
                >
                  <option value="">Select One</option>
                  <option
                    v-for="employeeTypeList in employeeTypeLists"
                    :value="employeeTypeList.shopEmployeeTypeId"
                    :key="employeeTypeList.id"
                  >
                    {{
                      employeeTypeList.shopEmployeeTypeName
                    }}
                  </option>
                </select>
                <has-error :form="form" field="employeeTypeId"></has-error>
              </div>
            </div>
            <div class="form-group">
              <label>Job Department</label>
              <div>
                <select
                  class="form-control"
                  v-model="form.jobDepartment"
                  :class="{
                    'is-invalid': form.errors.has('jobDepartment'),
                  }"
                  name="jobDepartment"
                >
                  <option value="">Select One</option>
                  <option
                    v-for="jobDepartmentList in jobLists"
                    :value="jobDepartmentList.jobDepartmentEntryId"
                    :key="jobDepartmentList.id"
                  >
                    {{ jobDepartmentList.jobDepartmentName }}
                  </option>
                </select>
                <has-error :form="form" field="jobDepartmentId"></has-error>
              </div>
            </div>
            <div class="form-group">
              <label>Salary Grade Name</label>
              <select
                v-model="form.gradeEntryId"
                name="gradeEntryId"
                @change.prevent="salaryGradeAmount()"
                :class="{ 'is-invalid': form.errors.has('gradeEntryId') }"
                class="form-control"
              >
                <option value="">Select One</option>
                <option
                  v-for="salaryGradeList in salaryGradeLists"
                  :key="salaryGradeList.id"
                  :value="salaryGradeList.gradeEntryId"
                >
                  {{ salaryGradeList.gradeName }} ({{
                    salaryGradeList.gradeAmount
                  }})
                </option>
              </select>
              <has-error :form="form" field="gradeEntryId"></has-error>
            </div>
            <div class="form-group">
              <label>Salary Grade Amount</label>
              <input
                type="text"
                disabled
                v-model="form.salaryGradeAmount"
                name="salaryGradeAmount"
                :class="{ 'is-invalid': form.errors.has('salaryGradeAmount') }"
                placeholder="Salary Grade Amount"
                class="form-control"
              />
              <has-error :form="form" field="salaryGradeAmount"></has-error>
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
                class="btn-pill btn-shadow btn btn-primary btn-lg float-right"
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
        <h3>Salary Grade Setup List</h3>
      </div>
      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>Employee<span class="textTransparent">_</span>Name</th>
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
                Salary<span class="textTransparent">_</span>Grade<span
                  class="textTransparent"
                  >_</span
                >Setup<span class="textTransparent">_</span>Status
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                salaryGradeSetupList, index
              ) in salaryGradeSetupLists.data"
              :key="salaryGradeSetupList.id"
            >
              <td>{{ index + 1 }}</td>
              <td>
                <span v-if="salaryGradeSetupList.shop_employee_list">{{
                  salaryGradeSetupList.shop_employee_list.userName
                }}</span>
              </td>
              <td>
                <span v-if="salaryGradeSetupList.grade_list">{{
                  salaryGradeSetupList.grade_list.gradeName
                }}</span>
              </td>
              <td>
                <span v-if="salaryGradeSetupList.grade_list">{{
                  salaryGradeSetupList.grade_list.gradeAmount
                }}</span>
              </td>
              <td>
                <div v-if="salaryGradeSetupList.salaryGradeSetupStatus == 1">
                  <span
                    @click="
                      changeStatus(salaryGradeSetupList.salaryGradeSetupId)
                    "
                    class="badge btn-hover-shine badge-success"
                    >Published</span
                  >
                </div>
                <div v-else>
                  <span
                    @click="
                      changeStatus(salaryGradeSetupList.salaryGradeSetupId)
                    "
                    class="badge btn-hover-shine badge-danger"
                    >Unpublish</span
                  >
                </div>
              </td>
              <td>
                <router-link
                  :to="`/salarygradesetup@edit${salaryGradeSetupList.salaryGradeSetupId}`"
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
          :data="salaryGradeSetupLists"
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
export default {
  data() {
    return {
      form: new Form({
        employeEntryId: "",
        gradeEntryId: "",
        salaryGradeAmount: "",
        employeeTypeId: "",
        jobDepartmentId: "",
        employeeType: "",
        jobDepartment: "",
        grade: "",
        amount: "",
        salaryGradeSetupStatus: "",
      }),
      employeeNames: {},
      salaryGradeLists: {},
      salaryGradeSetupLists: {},
      employeeTypeLists: {},
      jobDepartmentLists: {},
      jobLists: {},
      loading: false,
    };
  },
  props: {
    limit: {
      type: Number,
      default: 2,
    },
  },
  mounted() {
    this.salaryGradeList();
    this.salaryGradeSetupList();
    this.getPaginateList();
    this.employeeTypeList();
  },
  methods: {
    salaryGradeList() {
      axios.get("/salaryGradeList").then((res) => {
        this.salaryGradeLists = res.data.salaryGradeList;
      });
    },
    employeeTypeList() {
      axios.get("/shopEmployeeEntry/create").then((res) => {
        this.employeeTypeLists = res.data.employeeTypeList;
      });
    },
    employeeTypeSelect() {
      axios
        .get("/shopEmployeeEntry/" + this.form.employeeTypeId)
        .then((res) => {
          this.jobDepartmentLists = res.data.jobDepartmentList;
        });
    },
    employeeTSelect() {
      axios.get("/shopEmployeeEntry/" + this.form.employeeType).then((res) => {
        this.jobLists = res.data.jobDepartmentList;
      });
    },
    showEmployee() {
      axios
        .get(
          `showEmployee/${this.form.employeeTypeId}/${this.form.jobDepartmentId}`
        )
        .then((res) => {
          this.employeeNames = res.data.employeeSetupName;
        });
    },
    showSalaryInfo() {
      axios.get(`salaryInfo/${this.form.employeEntryId}`).then((res) => {
        this.form.grade = res.data.salaryGradeAmount.gradeName;
        this.form.amount = res.data.salaryGradeAmount.gradeAmount;
      });
    },
    salaryGradeAmount() {
      axios.get("/salaryGradeAmount/" + this.form.gradeEntryId).then((res) => {
        this.form.salaryGradeAmount = res.data.salaryGradeAmount;
      });
    },
    salaryGradeUpdate() {
      this.loading = true;
      this.form
        .post(
          `/salaryGradeUpdate/${this.form.employeEntryId}/${this.form.gradeEntryId}`
        )
        .then((res) => {
          this.loading = false;

          Toast.fire({
            icon: "success",
            title: "Salary Grade update Successfully",
          });

          this.form.reset();
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
      axios.get("/salaryGradeSetup").then((res) => {
        this.salaryGradeSetupLists = res.data.salaryGradeSetupList;
      });
    },
    getPaginateList(page = 1) {
      axios.get("/salaryGradeSetup?page=" + page).then((response) => {
        this.salaryGradeSetupLists = response.data.salaryGradeSetupList;
      });
    },
    changeStatus(salaryGradeSetupId) {
      axios.get("/salaryGradeSetup/" + salaryGradeSetupId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Salary Grade Setup Status Change Successfully",
        });
        this.salaryGradeSetupList();
      });
    },
  },
};
</script>
