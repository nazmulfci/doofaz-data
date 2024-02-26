<template id="">
  <span>
    <div class="card">
      <div class="card-header">
        <h3>
          <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i
          >Asset Category Entry
        </h3>
      </div>
      <div class="category">
        <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form action="" method="post" @submit.prevent="addAssetCategory()">
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
              <div class="form-row">
                <div class="col-sm-4 col-12">
                  <label class="p-0">Asset Category</label>
                </div>
                <div class="col-sm-8 col-12">
                  <select
                    v-model="form.assetCategory"
                    @change.prevent="assetCategorySelect()"
                    name="assetCategory"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('assetCategory') }"
                  >
                    <option value="">Select One</option>
                    <option
                      v-for="assetCategoryList in assetCategoryLists"
                      :value="assetCategoryList.assetCategoryId"
                    >
                      {{ assetCategoryList.assetCategoryName }}
                    </option>
                  </select>
                  <has-error :form="form" field="assetCategory"></has-error>
                </div>
              </div>
              <div class="form-row pt-2" v-if="subShow">
                <div class="col-sm-4 col-12">
                  <label class="p-0">Asset Sub Category</label>
                </div>
                <div class="col-sm-8 col-12">
                  <select
                    v-model="form.assetSubCategory"
                    @change.prevent="assetSubCategorySelect()"
                    name="assetSubCategory"
                    class="form-control"
                  >
                    <option value="">Select One</option>
                    <option
                      v-for="assetSubCategorySelectList in assetSubCategorySelectLists"
                      :value="assetSubCategorySelectList.assetCategoryId"
                    >
                      {{ assetSubCategorySelectList.assetCategoryName }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-row pt-2" v-if="thirdShow">
                <div class="col-sm-4 col-12">
                  <label class="p-0">Asset Third Category</label>
                </div>
                <div class="col-sm-8 col-12">
                  <select
                    v-model="form.assetThirdCategory"
                    @change.prevent="assetThirdCategorySelect()"
                    name="assetThirdCategory"
                    class="form-control"
                  >
                    <option value="">Select One</option>
                    <option
                      v-for="assetThirdCategorySelectList in assetThirdCategorySelectLists"
                      :value="assetThirdCategorySelectList.assetCategoryId"
                    >
                      {{ assetThirdCategorySelectList.assetCategoryName }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-row pt-2" v-if="fourShow">
                <div class="col-sm-4 col-12">
                  <label class="p-0">Asset Four Category</label>
                </div>
                <div class="col-sm-8 col-12">
                  <select
                    v-model="form.assetFourCategory"
                    @change.prevent="assetFourCategorySelect()"
                    name="assetFourCategory"
                    class="form-control"
                  >
                    <option value="">Select One</option>
                    <option
                      v-for="assetFourCategorySelectList in assetFourCategorySelectLists"
                      :value="assetFourCategorySelectList.assetCategoryId"
                    >
                      {{ assetFourCategorySelectList.assetCategoryName }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-row pt-2" v-if="fiveShow">
                <div class="col-sm-4 col-12">
                  <label class="p-0">Asset Five Category</label>
                </div>
                <div class="col-sm-8 col-12">
                  <select
                    v-model="form.assetFiveCategory"
                    @change.prevent="assetFiveCategorySelect()"
                    name="assetFiveCategory"
                    class="form-control"
                  >
                    <option value="">Select One</option>
                    <option
                      v-for="assetFiveCategorySelectList in assetFiveCategorySelectLists"
                      :value="assetFiveCategorySelectList.assetCategoryId"
                    >
                      {{ assetFiveCategorySelectList.assetCategoryName }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-row pt-2" v-if="sixShow">
                <div class="col-sm-4 col-12">
                  <label class="p-0">Asset Six Category</label>
                </div>
                <div class="col-sm-8 col-12">
                  <select
                    v-model="form.assetSixCategory"
                    @change.prevent="assetSixCategorySelect()"
                    name="assetSixCategory"
                    class="form-control"
                  >
                    <option value="">Select One</option>
                    <option
                      v-for="assetSixCategorySelectList in assetSixCategorySelectLists"
                      :key="assetSixCategorySelectList.id"
                      :value="assetSixCategorySelectList.assetCategoryId"
                    >
                      {{ assetSixCategorySelectList.assetCategoryName }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-row pt-2" v-if="sevenShow">
                <div class="col-sm-4 col-12">
                  <label class="p-0">Asset Seven Category</label>
                </div>
                <div class="col-sm-8 col-12">
                  <select
                    v-model="form.assetSevenCategory"
                    @change.prevent="assetSevenCategorySelect()"
                    name="assetSevenCategory"
                    class="form-control"
                  >
                    <option value="">Select One</option>
                    <option
                      v-for="assetSevenCategorySelectList in assetSevenCategorySelectLists"
                      :key="assetSevenCategorySelectList.id"
                      :value="assetSevenCategorySelectList.assetCategoryId"
                    >
                      {{ assetSevenCategorySelectList.assetCategoryName }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 col-12">
                  <label>Asset Category Name
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                </div>
                <div class="col-md-8 col-12">
                  <input
                    type="text"
                    v-model="form.assetCategoryName"
                    name="assetCategoryName"
                    :class="{
                      'is-invalid': form.errors.has('assetCategoryName'),
                    }"
                    class="form-control"
                    placeholder="Asset Category Name"
                  />
                  <has-error :form="form" field="assetCategoryName"></has-error>
                </div>
              </div>

              <div class="form-row" style="display:none;">
                <div class="col-md-4 col-12">
                  <label>Asset Category Position
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                </div>
                <div class="col-md-8 col-12">
                  <input
                    type="text"
                    disabled
                    v-model="form.assetCategoryPosition"
                    name="assetCategoryPosition"
                    :class="{
                      'is-invalid': form.errors.has('assetCategoryPosition'),
                    }"
                    class="form-control"
                    placeholder="Asset Category Position"
                  />
                  <has-error
                    :form="form"
                    field="assetCategoryPosition"
                  ></has-error>
                </div>
              </div>

              <div class="form-row"  style="display:none;">
                <div class="col-md-4 col-12">
                  <label>Asset Category Status
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                </div>
                <div class="col-md-8 col-12">
                  <select
                    v-model="form.assetCategoryStatus"
                    name="assetCategoryStatus"
                    class="form-control"
                    :class="{
                      'is-invalid': form.errors.has('assetCategoryStatus'),
                    }"
                  >
                    <option value="">Select One</option>
                    <option value="1">Publish</option>
                    <option value="0">Unpublish</option>
                  </select>
                  <has-error
                    :form="form"
                    field="assetCategoryStatus"
                  ></has-error>
                </div>
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
    </div>

    <div class="card main-card element-block-example mt-5">
      <div class="card-header">
        <h3>
          <i
            class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
          ></i
          >Asset Category List
        </h3>
      </div>
      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>
                Asset<span class="textTransparent">_</span>Category<span
                  class="textTransparent"
                  >_</span
                >name
              </th>
              <th>
                Asset<span class="textTransparent">_</span>Category<span
                  class="textTransparent">_</span>
                  Type
              </th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                shopAssetCategoryList, index
              ) in shopAssetCategoryLists.data"
              :key="shopAssetCategoryList.id"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ shopAssetCategoryList.assetCategoryName }}</td>
              <!-- <td>{{ shopAssetCategoryList.assetCategoryPosition }}</td> -->
              <td>
                <div v-if="shopAssetCategoryList.label == 1">
                  <span class="badge btn-hover-shine badge-success"
                    >Category</span
                  >
                </div>
                <div v-if="shopAssetCategoryList.label == 2">
                  <span class="badge btn-hover-shine badge-success"
                    >Sub Category</span
                  >
                </div>
                <div v-if="shopAssetCategoryList.label == 3">
                  <span class="badge btn-hover-shine badge-success"
                    >Third Category</span
                  >
                </div>
                <div v-if="shopAssetCategoryList.label == 4">
                  <span class="badge btn-hover-shine badge-success"
                    >Four Category</span
                  >
                </div>
                <div v-if="shopAssetCategoryList.label == 5">
                  <span class="badge btn-hover-shine badge-success"
                    >Five Category</span
                  >
                </div>
                <div v-if="shopAssetCategoryList.label == 6">
                  <span class="badge btn-hover-shine badge-success"
                    >Six Category</span
                  >
                </div>
                <div v-if="shopAssetCategoryList.label == 7">
                  <span class="badge btn-hover-shine badge-success"
                    >Seven Category</span
                  >
                </div>
                <div v-if="shopAssetCategoryList.label == 8">
                  <span class="badge btn-hover-shine badge-success"
                    >Eight Category</span
                  >
                </div>
              </td>
              
              <td>
                <router-link
                  :to="`/assetcategory@Edit${shopAssetCategoryList.assetCategoryId}`"
                  class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine">
                  <i class="fa fa-edit"></i>
                  </router-link>
              </td>
              <td>
                <button
                @click="deleteAssetCategory(shopAssetCategoryList.assetCategoryId)"
                  class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine">
                  <i class="fa fa-trash"></i>
                  </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <span class="card_footer">
        <pagination
          :data="shopAssetCategoryLists"
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
        assetCategory: "",
        assetSubCategory: "",
        assetThirdCategory: "",
        assetFourCategory: "",
        assetFiveCategory: "",
        assetSixCategory: "",
        assetSevenCategory: "",

        assetCategoryName: "",
        assetCategoryPosition: "",
        assetCategoryStatus: "1",
        assetSubCategoryStatus: "",
      }),
      subShow: false,
      thirdShow: false,
      fourShow: false,
      fiveShow: false,
      sixShow: false,
      sevenShow: false,
      shopAssetCategoryLists: {},

      assetCategoryLists: {},
      assetSubCategorySelectLists: {},
      assetThirdCategorySelectLists: {},
      assetFourCategorySelectLists: {},
      assetFiveCategorySelectLists: {},
      assetSixCategorySelectLists: {},
      assetSevenCategorySelectLists: {},
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
    this.assetCategoryListShow();
    this.getPaginateList();
    this.assetCategoryListSelect();
  },
  methods: {
    addAssetCategory() {
      this.loading = true;
      this.form
        .post("/shopAssetCategory")
        .then((res) => {
          this.loading = false;
          if (res.data.changeAssetName) {
            Toast.fire({
              icon: "error",
              title: "Change Your Asset Category Name",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Category Create Successfully",
            });
            this.form.reset();
            this.assetCategoryListShow();
            this.assetCategoryListSelect();
            this.subShow = false;
            this.thirdShow = false;
            this.fourShow = false;
            this.fiveShow = false;
            this.sixShow = false;
            this.sevenShow = false;
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
    assetCategoryListShow() {
      axios.get("/shopAssetCategory").then((res) => {
        this.shopAssetCategoryLists = res.data.shopAssetCategoryLists;
      });
    },
    getPaginateList(page = 1) {
      axios.get("/shopAssetCategory?page=" + page).then((response) => {
        this.adminAssetCategoryLists = response.data.adminAssetCategoryLists;
        this.shopAssetCategoryLists = response.data.shopAssetCategoryLists;
      });
    },
    assetCategoryListSelect() {
      axios.get("/assetCateorySelectList").then((res) => {
        this.assetCategoryLists = res.data.shopAssetCategoryList;
        this.form.assetCategoryPosition = res.data.assetCategoryPositionIncre;
      });
    },
    assetCategorySelect() {
      axios.get("/assetCategoryId/" + this.form.assetCategory).then((res) => {
        this.assetSubCategorySelectLists = res.data.assetSubCategoryList;
        this.form.assetCategoryPosition = res.data.assetCategoryPositionIncre;
        if (res.data.assetSubCategoryList != "") {
          this.subShow = true;
        } else {
          this.subShow = false;
        }
      });
    },
    assetSubCategorySelect() {
      axios
        .get("/assetSubCategoryId/" + this.form.assetSubCategory)
        .then((res) => {
          this.assetThirdCategorySelectLists = res.data.assetThirdCategoryList;
          this.form.assetCategoryPosition = res.data.assetCategoryPositionIncre;
          if (res.data.assetThirdCategoryList != "") {
            this.thirdShow = true;
          } else {
            this.thirdShow = false;
          }
        });
    },
    assetThirdCategorySelect() {
      axios
        .get("/assetThirdCategoryId/" + this.form.assetThirdCategory)
        .then((res) => {
          this.assetFourCategorySelectLists = res.data.assetFourCategoryList;
          this.form.assetCategoryPosition = res.data.assetCategoryPositionIncre;
          if (res.data.assetFourCategoryList != "") {
            this.fourShow = true;
          } else {
            this.fourShow = false;
          }
        });
    },
    assetFourCategorySelect() {
      axios
        .get("/assetFourCategoryId/" + this.form.assetFourCategory)
        .then((res) => {
          this.assetFiveCategorySelectLists = res.data.assetFiveCategoryList;
          this.form.assetCategoryPosition = res.data.assetCategoryPositionIncre;
          if (res.data.assetFiveCategoryList != "") {
            this.fiveShow = true;
          } else {
            this.fiveShow = false;
          }
        });
    },
    assetFiveCategorySelect() {
      axios
        .get("/assetFiveCategoryId/" + this.form.assetFiveCategory)
        .then((res) => {
          this.assetSixCategorySelectLists = res.data.assetSixCategoryList;
          this.form.assetCategoryPosition = res.data.assetCategoryPositionIncre;
          if (res.data.assetSixCategoryList != "") {
            this.sixShow = true;
          } else {
            this.sixShow = false;
          }
        });
    },
    assetSixCategorySelect() {
      axios
        .get("/assetSixCategoryId/" + this.form.assetSixCategory)
        .then((res) => {
          this.assetSevenCategorySelectLists = res.data.assetSevenCategoryList;
          this.form.assetCategoryPosition = res.data.assetCategoryPositionIncre;
          if (res.data.assetSevenCategoryList != "") {
            this.sevenShow = true;
          } else {
            this.sevenShow = false;
          }
        });
    },
    assetSevenCategorySelect() {
      axios
        .get("/assetSevenCategoryId/" + this.form.assetSevenCategory)
        .then((res) => {
          this.form.assetCategoryPosition = res.data.assetCategoryPositionIncre;
        });
    },
    changeStatus(assetCategoryId) {
      axios.get("/shopAssetCategory/" + assetCategoryId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Status Change Successfully",
        });
        this.assetCategoryListShow();
      });
    },
    deleteAssetCategory(assetCategoryId) {
      axios.delete("/shopAssetCategory/" + assetCategoryId).then((res) => {

        if(res.data.deleteStatus==0){
          Toast.fire({
          icon: "error",
          title: "Sorry. "+res.data.mes,
        });
        }
        else{
        Toast.fire({
          icon: "success",
          title: "Delete Successfully",
        });
        this.assetCategoryListShow();
        }
      });
    },
  },
};
</script>
