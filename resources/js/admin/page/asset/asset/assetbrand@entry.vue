<template id="">
  <span>
    <div class="card">
      <div class="card-header">
        <h3>
          <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i
          >Asset Brand Entry
        </h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form @submit.prevent="assetBrandCreate()">
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
              <label> Brand Name
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
              </label>
              <input
                v-model="form.assetBrandName"
                type="text"
                name="uniteEntryName"
                :class="{ 'is-invalid': form.errors.has('assetBrandName') }"
                placeholder="Asset Brand Name"
                class="form-control"
              />
              <has-error :form="form" field="assetBrandName"></has-error>
            </div>
            <div class="form-group" style="display:none;">
              <label>Asset Brand Status
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
              </label>
              <select
                v-model="form.assetBrandStatus"
                name="assetBrandStatus"
                :class="{ 'is-invalid': form.errors.has('assetBrandStatus') }"
                class="form-control"
              >
                <option value="">Select One</option>
                <option value="1">Publish</option>
                <option value="0">Unpublish</option>
              </select>
              <has-error :form="form" field="assetBrandStatus"></has-error>
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

                <span v-else class="mr-2 opacity-7">
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
      <div class="card-header">
        <h3>
          <i
            class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
          ></i
          >Asset Brand List
        </h3>
      </div>
      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>
                Asset<span class="textTransparent">_</span>Brand<span
                  class="textTransparent"
                  >_</span
                >Name
              </th>
              <!-- <th>
                Asset<span class="textTransparent">_</span>Brand<span
                  class="textTransparent"
                  >_</span>
                  Status
              </th> -->
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(brandData, index) in assetBrandData.data"
              :key="brandData.id"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ brandData.assetBrandName }}</td>
              <td>
                <router-link
                  :to="`/assetBrand@entryEdit${brandData.assetBrandEntryId}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine
                  "
                  ><i class="fa fa-edit"></i
                ></router-link>
               </td>
               <td>
               <button type="button"  v-if="brandData.brand==null"
                  @click="distroy(brandData.assetBrandEntryId)"
                  class="
                    btn-wide btn-pill btn btn-outline-danger btn-hover-shine
                  "
                  ><i class="fa fa-trash"></i
                ></button>

                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <span class="card_footer">
        <pagination
          :data="assetBrandData"
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
        assetBrandName: "",
        assetBrandStatus: "1",
      }),
      assetBrandData: {},
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
    this.getShopAssetData();
    this.getPaginateList();
  },
  methods: {
    assetBrandCreate() {
      this.loading = true;
      this.form
        .post("/shopAssetBrandEntry")
        .then((res) => {
          this.loading = false;
          if (res.data.changeAssetBrandName) {
            Toast.fire({
              icon: "error",
              title: "Change Your Asset Brand Name",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Asset Brand Entry Successfully",
            });
            this.form.reset();
          }
          this.getShopAssetData();
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },
    getShopAssetData() {
      axios.get("/shopAssetBrandEntry").then((res) => {
        this.assetBrandData = res.data.assetBrandList;
      });
    },

    getPaginateList(page = 1) {
      axios.get("/shopAssetBrandEntry?page=" + page).then((response) => {
        this.assetBrandData = response.data.assetBrandList;
      });
    },
    changeStatus(assetBrandEntryId) {
      axios.get("/assetBrandEntry/" + assetBrandEntryId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Status Change Successfully",
        });
        this.getShopAssetData();
      });
    },

    distroy(assetBrandEntryId) {
      axios.delete("assetBrandEntry/" + assetBrandEntryId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Delete Successfully",
        });
        this.getShopAssetData();
      });
    },
  },
};
</script>
