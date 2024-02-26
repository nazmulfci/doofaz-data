<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Job Department Entry</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form @submit.prevent="jobDepartmentCreate()">
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
              <select
                class="form-control"
                v-model="form.employeeTypeId"
                :class="{ 'is-invalid': form.errors.has('employeeTypeId') }"
                name="employeeTypeId"
              >
                <option value="">Select One</option>
                <option
                  v-for="employeeTypeList in employeeTypeLists"
                  :value="employeeTypeList.shopEmployeeTypeId"
                  :key="employeeTypeList.vue"
                >
                  {{ employeeTypeList.shopEmployeeTypeName }}
                </option>
              </select>
              <has-error :form="form" field="employeeTypeId"></has-error>
            </div>
            <div class="form-group">
              <label>Job Department Name</label>
              <input
                type="text"
                v-model="form.jobDepartmentName"
                name="jobDepartmentName"
                :class="{ 'is-invalid': form.errors.has('jobDepartmentName') }"
                placeholder="Job Department Name"
                class="form-control"
              />
              <has-error :form="form" field="jobDepartmentName"></has-error>
            </div>
            <div class="form-group">
              <label>Job Department Status</label>
              <select
                v-model="form.jobDepartmentStatus"
                name="jobDepartmentStatus"
                :class="{
                  'is-invalid': form.errors.has('jobDepartmentStatus'),
                }"
                class="form-control"
              >
                <option value="">Select One</option>
                <option value="1">Publish</option>
                <option value="0">Unpublish</option>
              </select>
              <has-error :form="form" field="jobDepartmentStatus"></has-error>
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
        <h3>Job Department List</h3>
      </div>
      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>
                Employee<span class="textTransparent">_</span>Type<span
                  class="textTransparent"
                  >_</span
                >Name
              </th>
              <th>
                Job<span class="textTransparent">_</span>Department<span
                  class="textTransparent"
                  >_</span
                >Name
              </th>
              <th>
                Job<span class="textTransparent">_</span>Department<span
                  class="textTransparent"
                  >_</span
                >Status
              </th>
              <th>
             Action
              </th>

       
            </tr>
          </thead>
          <tbody>
            <tr v-for="(showData, index) in showDatas.data" :key="showData.id">
              <td>{{ index + 1 }}</td>
              <td>{{ showData.employee_type_name.shopEmployeeTypeName }}</td>
              <td>{{ showData.jobDepartmentName }}</td>
              <td>
                <div v-if="showData.jobDepartmentStatus == 1">
                  <span
                    @click="changeStatus(showData.jobDepartmentEntryId)"
                    class="badge btn-hover-shine badge-success"
                    >Published</span
                  >
                </div>
                <div v-else>
                  <span
                    @click="changeStatus(showData.jobDepartmentEntryId)"
                    class="badge btn-hover-shine badge-danger"
                    >Unpublish</span
                  >
                </div>
              </td>
              <td  v-if="showData.employee==null">
                <router-link
                  :to="`/jobdepartment@entryEdit${showData.jobDepartmentEntryId}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine
                  "
                  ><i class="fa fa-edit"></i
                ></router-link>
                <button
                  @click="distroy(showData.jobDepartmentEntryId)"
                  class="
                    btn-wide btn-pill btn btn-outline-danger btn-hover-shine
                  "
                >
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <span class="card_footer">
        <pagination
          :data="showDatas"
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
        employeeTypeId: "",
        jobDepartmentName: "",
        jobDepartmentStatus: 1,
      }),
      showDatas: {},
      employeeTypeLists: {},
      role: {},
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
    this.jobDepartmentShow();
    this.employeeTypeList();
    this.conditon();
  },
  methods: {
    employeeTypeList() {
      axios.get("/jobDepartmentEntry/create").then((res) => {
        this.employeeTypeLists = res.data.employeeTypeList;
      });
    },
    jobDepartmentCreate() {
      this.loading = true;
      this.form
        .post("/jobDepartmentEntry")
        .then((res) => {
          this.loading = false;
          if (res.data.changeJobDepartmentName) {
            Toast.fire({
              icon: "error",
              title: "Please Change Job Department Name",
            });
          } else {
            this.form.reset();
            Toast.fire({
              icon: "success",
              title: "Job Department Save Successfully",
            });
            this.jobDepartmentShow();
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
    jobDepartmentShow() {
      axios.get("/jobDepartmentEntry").then((res) => {
        this.showDatas = res.data.show;
      });
    },
    getPaginateList(page = 1) {
      axios.get("jobDepartmentEntry?page=" + page).then((response) => {
        this.ShowData = response.data.show;
      });
    },
    changeStatus(jobDepartmentEntryId) {
      axios.get("/jobDepartmentEntry/" + jobDepartmentEntryId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Job Department Status Change Successfully",
        });
        this.jobDepartmentShow();
      });
    },
    distroy(jobDepartmentEntryId) {
      axios
        .delete("/jobDepartmentEntry/" + jobDepartmentEntryId)
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: "Job Department Deleted Successfully",
          });
          this.jobDepartmentShow();
        });
    },
    conditon() {
      axios.get("/condition").then((res) => {
        this.role = res.data.authInfo;
      });
    },
  },
};
</script>
