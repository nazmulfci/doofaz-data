<template id="">
  <span>
    <div class="card">
      <div class="card-header">
        <h3>
          <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i>Add
          Asset Supplier
        </h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form @submit.prevent="addAssetSupplierCreate()">
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
              <label> Asset Supplier Name
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
              </label>
              <input
                v-model="form.assetSupplierName"
                type="text"
                name="assetSupplierName"
                :class="{ 'is-invalid': form.errors.has('assetSupplierName') }"
                placeholder="Asset Supplier Name"
                class="form-control"
              />
              <has-error :form="form" field="assetSupplierName"></has-error>
            </div>

            <div class="form-group">
              <label> Asset Supplier Code
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
              </label>
              <input
                v-model="form.assetSupplierCode"
                type="text"
                name="assetSupplierCode"
                :class="{ 'is-invalid': form.errors.has('assetSupplierCode') }"
                placeholder="Asset Supplier Code"
                disabled
                class="form-control"
              />
              <has-error :form="form" field="assetSupplierCode"></has-error>
            </div>

            <div class="form-group">
              <label> Asset Supplier Phone Number
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
              </label>
              <input
                v-model="form.assetSupplierPhone"
                type="text"
                name="assetSupplierPhone"
                :class="{ 'is-invalid': form.errors.has('assetSupplierPhone') }"
                placeholder="Asset Supplier Phone"
                class="form-control"
              />
              <has-error :form="form" field="assetSupplierPhone"></has-error>
            </div>

            <div class="form-group">
              <label> Asset Supplier Hot Line</label>
              <input
                v-model="form.assetSupplierHotLine"
                type="text"
                name="assetSupplierHotLine"
                :class="{
                  'is-invalid': form.errors.has('assetSupplierHotLine'),
                }"
                placeholder="Asset Supplier Hot Line"
                class="form-control"
              />
              <has-error :form="form" field="assetSupplierHotLine"></has-error>
            </div>

            <div class="form-group">
              <label> Asset Supplier Mail</label>
              <input
                v-model="form.assetSupplierMail"
                type="text"
                name="assetSupplierMail"
              
                placeholder="Asset Supplier Mail..."
                class="form-control"
              />
             
            </div>

            <div class="form-group">
              <label> Asset Supplier Facebook</label>
              <input
                v-model="form.assetSupplierFb"
                type="text"
                name="assetSupplierFb"
                :class="{ 'is-invalid': form.errors.has('assetSupplierFb') }"
                placeholder="Asset Supplier Facebook..."
                class="form-control"
              />
              <has-error :form="form" field="assetSupplierFb"></has-error>
            </div>

            <div class="form-group">
              <label> Asset Supplier Web</label>
              <input
                v-model="form.assetSupplierWeb"
                type="text"
                name="assetSupplierWeb"
                :class="{ 'is-invalid': form.errors.has('assetSupplierWeb') }"
                placeholder="Asset Supplier Web..."
                class="form-control"
              />
              <has-error :form="form" field="assetSupplierWeb"></has-error>
            </div>

            <div class="form-group">
              <label> Asset Supplier IMO</label>
              <input
                v-model="form.assetSupplierImo"
                type="text"
                name="assetSupplierImo"
                :class="{ 'is-invalid': form.errors.has('assetSupplierImo') }"
                placeholder="Asset Supplier IMO..."
                class="form-control"
              />
              <has-error :form="form" field="assetSupplierImo"></has-error>
            </div>

            <div class="form-group">
              <label>Address
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
              </label>
              <textarea
                v-model="form.assetSupplierAddress"
                type="text"
                name="assetSupplierAddress"
                :class="{
                  'is-invalid': form.errors.has('assetSupplierAddress'),
                }"
                placeholder="Asset Supplier Address"
                class="form-control"
              ></textarea>
              <has-error :form="form" field="assetSupplierAddress"></has-error>
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
      <div class="card-header">
        <h3>
          <i
            class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
          ></i
          >Shop Asset Supplier List
        </h3>
      </div>
      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>Supplier<span class="textTransparent">_</span>Name</th>
              <th>Supplier<span class="textTransparent">_</span>Code</th>
              <th>Supplier<span class="textTransparent">_</span>Phone</th>
              <th>
                Supplier<span class="textTransparent">_</span>Hot<span
                  class="textTransparent"
                  >_</span
                >Line
              </th>
              <th>Supplier<span class="textTransparent">_</span>Mail</th>
              <th>Supplier<span class="textTransparent">_</span>Web</th>
              <th>Supplier<span class="textTransparent">_</span>Facebook</th>
              <th>Supplier<span class="textTransparent">_</span>Imo</th>
              <th>Supplier<span class="textTransparent">_</span>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                assetSupplierAllData, index
              ) in assetSupplierAllDatas.data"
              :key="assetSupplierAllData.id"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ assetSupplierAllData.assetSupplierName }}</td>
              <td>{{ assetSupplierAllData.assetSupplierCode }}</td>
              <td>{{ assetSupplierAllData.assetSupplierPhone }}</td>
              <td>{{ assetSupplierAllData.assetSupplierHotLine }}</td>
              <td>{{ assetSupplierAllData.assetSupplierMail }}</td>
              <td>{{ assetSupplierAllData.assetSupplierWeb }}</td>
              <td>{{ assetSupplierAllData.assetSupplierFb }}</td>
              <td>{{ assetSupplierAllData.assetSupplierImo }}</td>
              <td>{{ assetSupplierAllData.assetSupplierAddress }}</td>
              <td>
                <router-link
                  :to="`/assetsupplier@entryEdit${assetSupplierAllData.assetSupplierId}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine
                  "
                  ><i class="fa fa-edit"></i
                ></router-link>
             <span v-if="assetSupplierAllData.asset">   
             </span>
             <span v-else> 
               <button
                  type="button"
                  @click="distroy(assetSupplierAllData.assetSupplierId)"
                  class="
                    btn-wide btn-pill btn btn-outline-danger btn-hover-shine
                  "
                >
                  <i class="fa fa-trash"></i>
                </button>
             </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <span class="card_footer">
        <pagination
          :data="assetSupplierAllDatas"
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
        assetSupplierName: "",
        assetSupplierCode: "",
        assetSupplierPhone: "",
        assetSupplierHotLine: "",
        assetSupplierMail: "",
        assetSupplierWeb: "",
        assetSupplierFb: "",
        assetSupplierImo: "",
        assetSupplierAddress: "",
      }),
      assetSupplierAllDatas: {},
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
    this.getData();
    this.getPaginateList();
    this.autoIncrementCode();
  },
  methods: {
    addAssetSupplierCreate() {
      this.loading = true;
      this.form
        .post("/addAssetSupplier")
        .then((res) => {
          this.loading = false;
          Toast.fire({
            icon: "success",
            title: "Asset Supplier Entry Successfully",
          });
          this.form.reset();
          this.getData();
          this.autoIncrementCode();
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
    },
    getData() {
      axios.get("/addAssetSupplier").then((res) => {
        this.assetSupplierAllDatas = res.data.assetSupplierGetData;
      });
    },
    getPaginateList(page = 1) {
      axios.get("/addAssetSupplier?page=" + page).then((response) => {
        this.assetSupplierAllDatas = response.data.assetSupplierGetData;
      });
    },
    autoIncrementCode() {
      axios.get("/addAssetSupplier/create").then((res) => {
        this.form.assetSupplierCode = res.data.autoIncrementCode;
      });
    },
    distroy(assetSupplierId) {
      axios.delete("/addAssetSupplier/" + assetSupplierId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Data Delete Succuss",
        });
        this.getData();
      });
    },
  },
};
</script>
