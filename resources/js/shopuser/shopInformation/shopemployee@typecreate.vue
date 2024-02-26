<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Employee Type Entry</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form @submit.prevent="employeeTypeCreate()">
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
              <label>Employee Type Name</label>
              <input
                type="text"
                v-model="form.shopEmployeeTypeName"
                name="shopEmployeeTypeName"
                placeholder="Employee Type Name"
                class="form-control"
                :class="{
                  'is-invalid': form.errors.has('shopEmployeeTypeName'),
                }"
              />
              <has-error :form="form" field="shopEmployeeTypeName"></has-error>
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
                  mr-2
                  btn-pill btn-hover-shine btn
                  float-right
                  btn-hover-shine btn-primary
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
        <h3>Employee Type List</h3>
      </div>
      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>Employee Type Name</th>
              <th>Employee Type Status</th>
              <!-- <th>Action</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(employeeTypeList, index) in employeeTypeLists.data"
              :key="employeeTypeList.Id"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ employeeTypeList.shopEmployeeTypeName }}</td>
              <td>
                <div v-if="employeeTypeList.shopEmployeeTypeStatus == 1">
                  <span
                    @click="changeStatus(employeeTypeList.shopEmployeeTypeId)"
                    class="badge btn-hover-shine badge-success"
                    >Published</span
                  >
                </div>
                <div v-else>
                  <span
                    @click="changeStatus(employeeTypeList.shopEmployeeTypeId)"
                    class="badge btn-hover-shine badge-danger"
                    >Unpublish</span
                  >
                </div>
              </td>
              <!-- <td>
                    <router-link :to="`/shopemployee@typeEdit${employeeTypeList.shopEmployeeTypeId}`" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"><i class=" fa fa-edit"></i></router-link>
                    <button  class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine" @click.prevent="distroy(employeeTypeList.shopEmployeeTypeId)"><i class=" fa fa-trash"></i></button>
                 </td> -->
            </tr>
          </tbody>
        </table>
      </div>
      <span class="card_footer">
        <pagination
          :data="employeeTypeLists"
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
        shopEmployeeTypeName: "",
      }),
      employeeTypeLists: {},
      loading: false,
    };
  },
  mounted() {
    this.employeeTypeList();
    this.getPaginateList();
  },
  methods: {
    employeeTypeCreate() {
      this.loading = true;
      this.form
        .post("/shopEmployeeType")
        .then((res) => {
          this.loading = false;
          Toast.fire({
            icon: "success",
            title: "Shop Employee Type Successfully",
          });
          this.form.reset();
          this.employeeTypeList();
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
    },
    employeeTypeList() {
      axios.get("/shopEmployeeType").then((res) => {
        this.employeeTypeLists = res.data.employeeTypeList;
      });
    },
    getPaginateList(page = 1) {
      axios.get("/shopEmployeeType?page=" + page).then((response) => {
        this.employeeTypeLists = response.data.employeeTypeList;
      });
    },
    changeStatus(shopEmployeeTypeId) {
      axios.get("shopEmployeeType/" + shopEmployeeTypeId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Employee Type Status Change Successfully",
        });
        this.employeeTypeList();
      });
    },
    distroy(shopEmployeeTypeId) {
      axios.delete("shopEmployeeType/" + shopEmployeeTypeId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Employee Type Delete Successfully",
        });
        this.employeeTypeList();
      });
    },
  },
};
</script>
