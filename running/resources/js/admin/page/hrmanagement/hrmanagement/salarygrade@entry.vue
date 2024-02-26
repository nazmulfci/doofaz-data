<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Salary Grade Entry</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form @submit.prevent="gradeEntry()">
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
              <label>Grade Name</label>
              <input
                type="text"
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
                v-model="form.gradeAmount"
                @keyup="gAmount()"
                name="gradeAmount"
                :class="{ 'is-invalid': form.errors.has('gradeAmount') }"
                placeholder="Grade Amount"
                class="form-control"
              />
              <has-error :form="form" field="gradeAmount"></has-error>
            </div>
            <div class="form-group">
              <label>Grade Status</label>
              <select
                v-model="form.gradeStatus"
                name="gradeStatus"
                :class="{ 'is-invalid': form.errors.has('gradeStatus') }"
                class="form-control"
              >
                <option value="">Select One</option>
                <option value="1">Publish</option>
                <option value="0">Unpublish</option>
              </select>
              <has-error :form="form" field="gradeStatus"></has-error>
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
        <h3>Salary Grade List</h3>
      </div>
      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>Grade<span class="textTransparent">_</span>Name</th>
              <th>Grade<span class="textTransparent">_</span>Amount</th>
              <th>Grade<span class="textTransparent">_</span>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(gradeList, index) in gradeLists.data"
              :key="gradeList.vue"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ gradeList.gradeName }}</td>
              <td>{{ gradeList.gradeAmount }}</td>
              <td>
                <div v-if="gradeList.gradeStatus == 1">
                  <span
                    @click="changeStatus(gradeList.gradeEntryId)"
                    class="badge btn-hover-shine badge-success"
                  >
                    Published
                  </span>
                </div>
                <div v-else>
                  <span
                    @click="changeStatus(gradeList.gradeEntryId)"
                    class="badge btn-hover-shine badge-danger"
                  >
                    Unpublish
                  </span>
                </div>
              </td>
              <td v-if="gradeList.glist==null">
                <router-link
                  :to="`/salarygrade@edit${gradeList.gradeEntryId}`"
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
          :data="gradeLists"
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
        gradeName: "",
        gradeAmount: "",
        gradeStatus: 1,
      }),
      gradeLists: {},
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
    this.gradeList();
    this.getPaginateList();
  },
  methods: {
    gradeEntry() {
      this.loading = true;
      this.form
        .post("/salaryGradeEntry")
        .then((res) => {
          this.loading = false;
          if(res.data.exists){
           Toast.fire({
            icon: "error",
            title: "Grade Name Already Exists",
          });
          }
          else{
          Toast.fire({
            icon: "success",
            title: "Grade Entry Successfully",
          });
          this.form.reset();
          this.gradeList();
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
    gradeList() {
      axios.get("/salaryGradeEntry").then((res) => {
        this.gradeLists = res.data.gradeLists;
      });
    },
    getPaginateList(page = 1) {
      axios.get("/salaryGradeEntry?page=" + page).then((response) => {
        this.gradeLists = response.data.gradeLists;
      });
    },
    gAmount() {
      if (this.form.gradeAmount < 0) {
        alert("Negative Amount is Not Allowed");
        this.form.gradeAmount = 0;
      }
    },
    changeStatus(gradeEntryId) {
      axios.get("/salaryGradeEntry/" + gradeEntryId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Grade Entry Status Change Successfully",
        });
        this.gradeList();
      });
    },
  },
};
</script>
