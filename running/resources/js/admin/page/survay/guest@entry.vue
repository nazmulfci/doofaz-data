<template id="">
  <span>
    <div class="card">
      <div class="card-header-tab card-header alert-info">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-pencil icon-gradient bg-premium-dark"></i>
          <h4>Guest Entry</h4>
        </div>
      </div>

      <form @submit.prevent="AddGuestEntry" method="POST">
        <div class="supplier-entry py-4 px-2 comm-form-back-img">
          <!-- ===================================================================== -->
          <!-- ===================== shop Address information =============== -->
          <!-- ===================================================================== -->
          <div
            class="col-lg-7 px-lg-10 col-sm-11 offset-sm-2 col-12 supplier-border comm-form-box-back-color"
          >
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label>
                    নাম
                    <i
                      class="fa fa-star text-danger text-10 cursor-pointer"
                      title="Mandatory Field"
                      data-placement="top"
                      data-toggle="tooltip"
                      data-original-title="Mandatory Field"
                    ></i>
                  </label>

                  <input
                    type="text"
                    v-model="form.shopOfficeName"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('shopOfficeName') }"
                    placeholder="Name"
                  />
                  <has-error :form="form" field="shopOfficeName"></has-error>
                </div>

                <div class="form-group">
                  <label>পেশা </label>
                  <select class="form-control" v-model="form.occupation">
                      <option value="">Select Occupation</option>
                      <option :value="occupation.occupationName" v-for="occupation,index in occupationList" :key="occupation.id">
                          {{ occupation.occupationName }}
                      </option>
                  </select>
                </div>

                <div class="form-group">
                  <label>ডেসিগনেশন</label>
                  <select class="form-control" v-model="form.designation">
                      <option value="">Select Designation</option>
                      <option :value="designation.designationName" v-for="designation,index in designationList" :key="designation.id">
                          {{ designation.designationName }}
                      </option>
                  </select>
                </div>

                <div class="form-group">
                  <label
                    >মোবাইল নাম্বার
                    <i
                      class="fa fa-star text-danger text-10 cursor-pointer"
                      title="Mandatory Field"
                      data-placement="top"
                      data-toggle="tooltip"
                      data-original-title="Mandatory Field"
                    ></i>
                  </label>

                  <input
                    type="text"
                    v-model="form.mobileNo"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('mobileNo') }"
                    placeholder="Mobile No"
                  />
                  <has-error :form="form" field="mobileNo"></has-error>
                </div>

                <div class="form-group">
                  <label> হোয়াটসআপ </label>

                  <input
                    type="text"
                    v-model="form.whatsapp"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('whatsapp') }"
                    placeholder="Whatsapp"
                  />
                  <has-error :form="form" field="whatsapp"></has-error>
                </div>

                <div class="form-group">
                  <label>
                    ইমেইল
                    <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                  </label>

                  <input
                    type="email"
                    v-model="form.email"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('email') }"
                    placeholder="Email"
                  />
                  <has-error :form="form" field="email"></has-error>
                </div>

                <div class="form-group">
                  <label>এড্রেস </label>
                  <input
                    type="text"
                    v-model="form.addresss"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('addresss') }"
                    placeholder="Address"
                  />
                </div>

                <div class="form-group">
                  <label>
                    ফেইসবুক
                    <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                  </label>

                  <input
                    type="text"
                    v-model="form.facebook"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('facebook') }"
                    placeholder="Facebook"
                  />
                  <has-error :form="form" field="facebook"></has-error>
                </div>

                <div class="form-group">
                  <label>Refer By</label>
                  <input
                    type="text"
                    v-model="form.refer_by"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('refer_by') }"
                    placeholder="Refer By"
                  />
                </div>

                <div class="form-group">
                  <label>কোথায় পরিচয় হয়েছে </label>
                  <input
                    type="text"
                    v-model="form.introduce_place"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('introduce_place') }"
                    placeholder="Where is it introduced?"
                  />
                </div>

                <div class="form-group">
                  <label
                    >মতামত
                    <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                  </label>

                  <textarea
                    type="text"
                    v-model="form.aboutSoftwareComment"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('aboutSoftwareComment') }"
                    placeholder=""
                  ></textarea>
                  <has-error :form="form" field="aboutSoftwareComment"></has-error>
                </div>
              </div>

              <!------------------     ----------------------->
            </div>
          </div>

          <!-- ===================================================================== -->
          <!-- ==================== // shop address information ==================== -->
          <!-- ===================================================================== -->
        </div>

        <!-- -----------------------------   card footer  -->

        <div class="d-block pt-3 pb-4 card-footer overflow-hidden">
          <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">
            <button
              type="reset"
              class="btn-pill btn-shadow btn btn-outline-danger float-left"
            >
              <span class="mr-1"> Clear </span>
            </button>

            <button
              type="submit"
              class="btn-pill btn-shadow btn btn-primary float-right"
              :disabled="loading"
            >
              <span
                v-if="loading"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>

              <span v-else class="mr-1"> Submit </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </span>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: new Form({
        shopOfficeName: "",
        occupation: "",
        designation: "",
        mobileNo: "",
        whatsapp: "",
        email: "",
        address: "",
        facebook: "",
        refer_by: "",
        aboutSoftwareComment: "",
        introduce_place: "",
      }),
      occupationList:[],
      designationList:[],
    };
  },

  mounted() {
    this.OccupationShow();
    this.DesignationShow();
  },

  methods: {
    /*occupation*/
    OccupationShow() {
      axios.get("guest/occupation/show").then((response) => {
        this.occupationList = response.data.data;
      });
    },
    /*occupation*/

    /*designation*/
    DesignationShow() {
      axios.get("guest/designation/show").then((response) => {
        this.designationList = response.data.data;
      });
    },
    /*designation*/

    AddGuestEntry() {
      this.loading = true;
      this.form.post("guestEntry").then((response) => {
        this.form.reset();
        Toast.fire({
          icon: "success",
          title: "Data Insert Successfully",
        });
        this.$router.push("/guest@lists");
      });
    },
  },
};
</script>

<style scoped>
input[type="radio"]:checked + label {
  &::after {
    display: none;
  }
}

input[type="radio"]:checked + label {
  background: transparent;
  box-shadow: none;
  color: #000;
}
.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 90%;
  color: #d92550;
}
.modal-header {
  background: #d0eeff;
}
.col-12.supplier-border.comm-form-box-back-color {
  padding: 10px;
}
</style>
