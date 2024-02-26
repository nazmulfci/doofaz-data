<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Salary Grade Setup</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form @submit.prevent="salaryGradeSetup()">
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
                  :key="employeeName.id"
                  :value="employeeName.shopEmployeeEntryId"
                >
                  {{ employeeName.userName }}
                </option>
              </select>
              <has-error :form="form" field="employeEntryId"></has-error>
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
            <div class="form-group">
              <label>Salary Grade Setup Status</label>
              <select
                v-model="form.salaryGradeSetupStatus"
                name="salaryGradeSetupStatus"
                :class="{
                  'is-invalid': form.errors.has('salaryGradeSetupStatus'),
                }"
                class="form-control"
              >
                <option value="">Select One</option>
                <option value="1">Publish</option>
                <option value="0">Unpublish</option>
              </select>
              <has-error
                :form="form"
                field="salaryGradeSetupStatus"
              ></has-error>
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
              <!-- //status on off -->
              <!-- <td>
                    <div v-if="salaryGradeSetupList.salaryGradeSetupStatus == 1">
                      <span  @click="changeStatus(salaryGradeSetupList.salaryGradeSetupId)" class="badge btn-hover-shine badge-success">Published</span>
                    </div>
                    <div v-else>
                      <span  @click="changeStatus(salaryGradeSetupList.salaryGradeSetupId)" class="badge btn-hover-shine badge-danger">Unpublish</span>
                    </div>
                </td> -->
              <!-- //status on off -->
              <td>
                <div v-if="salaryGradeSetupList.salaryGradeSetupStatus == 1">
                  <span class="badge btn-hover-shine badge-success"
                    >Published</span
                  >
                </div>
                <div v-else>
                  <span class="badge btn-hover-shine badge-danger"
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
        salaryGradeSetupStatus: 1,
      }),
      employeeNames: {},
      salaryGradeLists: {},
      salaryGradeSetupLists: {},
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
    this.employeeNameList();
    this.salaryGradeList();
    this.salaryGradeSetupList();
    this.getPaginateList();
  },
  methods: {
    employeeNameList() {
      axios.get("/employeeName").then((res) => {
        this.employeeNames = res.data.employeeName;
      });
    },
    salaryGradeList() {
      axios.get("/salaryGradeList").then((res) => {
        this.salaryGradeLists = res.data.salaryGradeList;
      });
    },
    salaryGradeAmount() {
      axios.get("/salaryGradeAmount/" + this.form.gradeEntryId).then((res) => {
        this.form.salaryGradeAmount = res.data.salaryGradeAmount;
      });
    },
    salaryGradeSetup() {
      this.loading = true;
      this.form
        .post("/salaryGradeSetup")
        .then((res) => {
          this.loading = false;
          if (res.data.gradeSetup) {
            Toast.fire({
              icon: "error",
              title: "Already Salary Grade Setup",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Salary Grade Setup Successfully",
            });
            this.employeeNameList();
            this.form.reset();
            this.salaryGradeSetupList();
          }
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
