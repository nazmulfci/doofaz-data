<template id="">
  <span>
    <div class="card">
      <div class="card-header-tab card-header alert-info">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-pencil icon-gradient bg-premium-dark"></i>
          <h4>Designation Update</h4>
        </div>
      </div>

      <form @submit.prevent="UpdateDesignation">
        <div class="supplier-entry py-4 px-2 comm-form-back-img">
          <div
            class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color p-2"
          >
            <div class="form-row">
              <div class="col-md-4 col-12">
                <label>Designation Name</label>
              </div>
              <div class="col-md-8 col-12">
                <input
                  type="text"
                  v-model="form.designationName"
                  :class="{ 'is-invalid': form.errors.has('designationName') }"
                  class="form-control"
                  placeholder="Category Name"
                />
                <has-error :form="form" field="designationName"></has-error>
              </div>
              <input type="hidden" v-model="form.id" class="form-control" />
            </div>
          </div>
        </div>

        <div class="d-block pt-3 pb-4 card-footer overflow-hidden">
          <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">
            <button
              type="text"
              class="btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left"
            >
              <span class="mr-2 opacity-7">
                <i class="fa fa-undo"></i>
              </span>
              <span class="mr-1"> Back </span>
            </button>

            <button
              type="submit"
              class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right"
            >
              <span class="mr-2 opacity-7">
                <i class="fa fa-paper-plane"></i>
              </span>
              <span class="mr-1"> Update </span>
            </button>
          </div>
        </div>

        <!-- -----------------------------   // card footer  -->
      </form>
    </div>
  </span>
</template>
<script>
export default {
  data() {
    return {
      form: new Form({
        designationName: "",
        id: "",
      }),
    };
  },
  mounted() {
    this.DesignationEdit();
  },
  methods: {
    UpdateDesignation() {
      this.form.post("designation/update").then((response) => {
        Toast.fire({
          icon: "success",
          title: "Update Successfully",
        });
        this.form.reset();
        this.$router.push("/designation@entry");
      });
    },

    DesignationEdit() {
      axios.get(`designation/edit/${this.$route.params.id}`).then((response) => {
        this.form.designationName = response.data.data.designationName;
        this.form.id = response.data.data.id;
      });
    },
  },
};
</script>
