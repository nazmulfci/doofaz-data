<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Holiday Setup</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form @submit.prevent="holidaySetupCreate()">
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
              <label>Holiday Type Name</label>
              <select
                v-model="form.holidayTypeId"
                name="holidayTypeId"
                :class="{ 'is-invalid': form.errors.has('holidayTypeId') }"
                class="form-control"
              >
                <option value="">Select One</option>
                <option
                  v-for="holidayTypeShow in holidayTypeShows"
                  :key="holidayTypeShow.id"
                  :value="holidayTypeShow.holidayTypeId"
                >
                  {{ holidayTypeShow.holidayTypeName }}
                </option>
              </select>
              <has-error :form="form" field="holidayTypeId"></has-error>
            </div>
            <div class="form-group">
              <label>Holiday Start Date</label>
              <input
                type="date"
                v-model="form.holidayStartDate"
                name="holidayStartDate"
                :class="{ 'is-invalid': form.errors.has('holidayStartDate') }"
                class="form-control"
              />
              <has-error :form="form" field="holidayStartDate"></has-error>
            </div>
            <div class="form-group">
              <label>Holiday End Date</label>
              <input
                type="date"
                v-model="form.holidayEndDate"
                name="holidayEndDate"
                :class="{ 'is-invalid': form.errors.has('holidayEndDate') }"
                class="form-control"
              />
              <has-error :form="form" field="holidayEndDate"></has-error>
            </div>
            <div class="form-group">
              <label>Holiday Setup Status</label>
              <select
                v-model="form.holidaySetupStatus"
                name="holidaySetupStatus"
                :class="{ 'is-invalid': form.errors.has('holidaySetupStatus') }"
                class="form-control"
              >
                <option value="">Select One</option>
                <option value="1">Publish</option>
                <option value="0">Unpublish</option>
              </select>
              <has-error :form="form" field="holidaySetupStatus"></has-error>
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
        <h3>Holiday Setup List</h3>
      </div>

      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>
                Holiday<span class="textTransparent">_</span>Type<span
                  class="textTransparent"
                  >_</span
                >Name
              </th>
              <th>
                Holiday<span class="textTransparent">_</span>Start<span
                  class="textTransparent"
                  >_</span
                >Date
              </th>
              <th>
                Holiday<span class="textTransparent">_</span>End<span
                  class="textTransparent"
                  >_</span
                >Date
              </th>
              <th>
                Holiday<span class="textTransparent">_</span>Setup<span
                  class="textTransparent"
                  >_</span
                >Status
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(holidaySetupShow, index) in holidaySetupShows.data"
              :key="holidaySetupShow.id"
            >
              <td>{{ index + 1 }}</td>
              <td v-if="holidaySetupShow.admin_holiday_type_relation">
                {{
                  holidaySetupShow.admin_holiday_type_relation.holidayTypeName
                }}
              </td>
              <td v-else></td>
              <td>{{ holidaySetupShow.holidayStartDate }}</td>
              <td>{{ holidaySetupShow.holidayEndDate }}</td>
              <td>
                <div v-if="holidaySetupShow.holidaySetupStatus == 1">
                  <span
                    @click="changeStatus(holidaySetupShow.holidaySetupId)"
                    class="badge btn-hover-shine badge-success"
                    >Published</span
                  >
                </div>
                <div v-else>
                  <span
                    @click="changeStatus(holidaySetupShow.holidaySetupId)"
                    class="badge btn-hover-shine badge-danger"
                    >Unpublish</span
                  >
                </div>
              </td>
              <td>
                <router-link
                  :to="`/holiday@setupedit${holidaySetupShow.holidaySetupId}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine
                  "
                  ><i class="fa fa-edit"></i
                ></router-link>
                <button
                  type="button"
                  @click="distroy(holidaySetupShow.holidaySetupId)"
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
          :data="holidaySetupShows"
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
        holidayTypeId: "",
        holidayStartDate: "",
        holidayEndDate: "",
        holidaySetupStatus:1,
      }),
      holidayTypeShows: {},
      holidaySetupShows: {},
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
    this.holidayTypeShow();
    this.holidaySetupShow();
    this.getPaginateList();
    this.conditon();
  },
  methods: {
    holidaySetupCreate() {
      this.loading = true;
      this.form.post("/holidaySetup")
        .then((res) => {
          this.loading = false;
          // if (res.data.changeholidayTypeName){
          //     Toast.fire({
          //         icon: 'error',
          //         title: 'Change Your Holiday Type Name'
          //     })
          // }
          // else {}
          Toast.fire({
            icon: "success",
            title: "Holiday Setup Create Successfully",
          });
          this.form.reset();

          this.holidaySetupShow();
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
    },
    holidayTypeShow() {
      axios.get("/holidaySetup/create").then((res) => {
        this.holidayTypeShows = res.data.AdminHolidayType;
      });
    },
    holidaySetupShow() {
      axios.get("/holidaySetup").then((res) => {
        this.holidaySetupShows = res.data.adminHolidaySetup;
      });
    },
    getPaginateList(page = 1) {
      axios.get("/holidaySetup?page=" + page).then((response) => {
        this.holidaySetupShows = response.data.adminHolidaySetup;
      });
    },
    changeStatus(holidaySetupId) {
      axios.get("/holidaySetup/" + holidaySetupId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Holiday Setup Status Change Successfully",
        });
        this.holidaySetupShow();
      });
    },
    distroy(holidaySetupId) {
      axios.delete("/holidaySetup/" + holidaySetupId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Holiday Setup Delete Successfully",
        });
        this.holidaySetupShow();
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
