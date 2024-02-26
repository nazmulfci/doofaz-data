<template id="">
  <span>
    <div class="card">
      <div class="card-header">
        <h3>
          <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i
          >Asset Status
        </h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form @submit.prevent="addAsset()">
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
              <label>Select Product Name/Code</label>
              <select
                v-model="form.shopAssetEntryId"
                name="shopAssetEntryId"
                :class="{ 'is-invalid': form.errors.has('shopAssetEntryId') }"
                class="form-control"
                @change.prevent="getBrandList()"
              >
                <option value="">Select One</option>
                <option
                  v-for="shopAssetEntryList in shopAssetEntryLists"
                  :value="shopAssetEntryList.shopAssetEntryId"
                >
                  {{ shopAssetEntryList.assetPorductName }} /
                  {{ shopAssetEntryList.assetPorductCode }}
                </option>
              </select>
              <has-error :form="form" field="shopAssetEntryId"></has-error>
            </div>
            
            <div class="form-group">
              <label>Select Brand</label>
              <select
                v-model="form.assetBrandId"
                name="assetBrandId"
                :class="{ 'is-invalid': form.errors.has('assetBrandId') }"
                class="form-control"
                @change.prevent="assetPriceList()"
              >
                <option value="">Select One</option>
                <option
                  v-for="shopAssetBrandList in shopAssetBrandLists"
                  :value="shopAssetBrandList.assetBrandEntryId"
                >
                  {{ shopAssetBrandList.assetBrandName }} 
                </option>
              </select>
              <has-error :form="form" field="assetBrandId"></has-error>
            </div>
              
              
              <div class="form-group">
              <label>Product Cost</label>
              <select
                v-model="form.productCost"
                type="text"
                name="productCost"
                :class="{ 'is-invalid': form.errors.has('productCost') }"
                placeholder="Product Cost"
                class="form-control"
                @change.prevent="assetEntryIdCatch()"
              >
              <option value=""> Select Product Cost </option>
              <option
                  v-for="shopAssetPriceList in shopAssetPriceLists"
                  :value="shopAssetPriceList.productCost"
                >
                  {{ shopAssetPriceList.productCost }} 
                </option>
              </select>
              <has-error :form="form" field="productCost"></has-error>
            </div>
            
            <div class="form-group">
              <label>Asset Supplier Name</label>
              <input
                disabled
                v-model="form.assetSupplierId"
                type="text"
                name="assetSupplierId"
                placeholder="Asset Supplier Name"
                :class="{ 'is-invalid': form.errors.has('assetSupplierId') }"
                class="form-control"
              />
              <has-error :form="form" field="assetSupplierId"></has-error>
            </div>
            
            <div class="form-group">
              <label>Purchase Date</label>
              <input
                disabled
                v-model="form.purchasedate"
                type="date"
                name="purchasedate"
                :class="{ 'is-invalid': form.errors.has('purchasedate') }"
                class="form-control"
              />
              <has-error :form="form" field="purchasedate"></has-error>
            </div>
            <div class="form-group">
              <label>Mfg Date</label>
              <input
                disabled
                v-model="form.mfgDate"
                type="date"
                name="mfgDate"
                :class="{ 'is-invalid': form.errors.has('mfgDate') }"
                class="form-control"
              />
              <has-error :form="form" field="mfgDate"></has-error>
            </div>
            <div class="form-group">
              <label>Expiry Date</label>
              <input
                disabled
                v-model="form.expiryDate"
                type="date"
                name="expiryDate"
                :class="{ 'is-invalid': form.errors.has('expiryDate') }"
                class="form-control"
              />
              <has-error :form="form" field="expiryDate"></has-error>
            </div>
            <div class="form-group">
              <label>Invoice No</label>
              <input
                disabled
                v-model="form.invoiceNo"
                type="text"
                name="invoiceNo"
                :class="{ 'is-invalid': form.errors.has('invoiceNo') }"
                placeholder="Invoice No"
                class="form-control"
              />
              <has-error :form="form" field="invoiceNo"></has-error>
            </div>
            <div class="form-group">
              <label>Model No</label>
              <input
                disabled
                v-model="form.modelNo"
                type="text"
                name="modelNo"
                :class="{ 'is-invalid': form.errors.has('modelNo') }"
                placeholder="Model No"
                class="form-control"
              />
              <has-error :form="form" field="modelNo"></has-error>
            </div>


            <!-- ----------------------------------------------------------- -->

            <div class="form-group">
              <label> Send or Receive </label>
              <select
                v-model="form.typeSelectId"
                name="typeSelectId"
                :disabled="typeSelect ? true : false"
                :class="{ 'is-invalid': form.errors.has('typeSelectId') }"
                class="form-control"
                @change.prevent="typeSelectFunction()"
              >
                <option value="">Select One</option>
                <option value="1" >Send</option>
                <option value="2" >Receive</option>
              </select>
              <has-error :form="form" field="typeSelectId"></has-error>
            </div>
            <div class="form-group" v-if="sendRemark">
              <label>Remark (Send Time)</label>
              <textarea
                v-model="form.remarkSendTime"
                :disabled="remarkSendTimedis ? true : false"
                name="remarkSendTime"
                :class="{ 'is-invalid': form.errors.has('remarkSendTime') }"
                cols="3"
                class="form-control"
              >
              </textarea>
              <has-error :form="form" field="remarkSendTime"></has-error>
            </div>
            <div class="form-group" v-if="receiveRemark">
              <label>Remark (Receive Time)</label>
              <textarea
                v-model="form.remarkReceiveTime"
                :disabled="remarkReceiveTimeDis ? true : false"
                name="remarkReceiveTime"
                :class="{ 'is-invalid': form.errors.has('remarkReceiveTime') }"
                cols="3"
                class="form-control"
              >
              </textarea>
              <has-error :form="form" field="remarkReceiveTime"></has-error>
            </div>
            <div class="ml-2" v-if="sendProductList">
              <div class="form-group">
                <input @click="check_checkbox(2)"
                  type="checkbox"
                  :disabled="sendProductDis ? true : false"
                  v-model="form.damageId"
                  id="damageId"
                  name="damageId"
                  value="2"
                  class="form-check-input"
                />
                <label for="damageId" class="form-check-label"> নষ্ট হওয়া </label>
              </div>
              <div class="form-group">
                <input @click="check_checkbox(3)"
                  type="checkbox"
                  :disabled="sendProductDis ? true : false"
                  v-model="form.warantyId"
                  id="warantyId"
                  name="warantyId"
                  value="3"
                  class="form-check-input"
                />
                <label for="warantyId" class="form-check-label">ওয়ারেন্টিতে পাঠানো </label>
              </div>
              <div class="form-group">
                <input @click="check_checkbox(4)"
                  type="checkbox"
                  :disabled="sendProductDis ? true : false"
                  v-model="form.guaranteeId"
                  id="guaranteeId"
                  name="guaranteeId"
                  value="4"
                  class="form-check-input"
                />
                <label for="guaranteeId" class="form-check-label">গ্যারান্টিতে পাঠানো  </label>
              </div>
              <div class="form-group">
                <input @click="check_checkbox(5)"
                  type="checkbox"
                  :disabled="sendProductDis ? true : false"
                  v-model="form.unusedId"
                  id="unusedId"
                  name="unusedId"
                  value="5"
                  class="form-check-input"
                />
                <label for="unusedId" class="form-check-label">অব্যবহৃত </label>
              </div>
              <div class="form-group">
                <input @click="check_checkbox(6)"
                  type="checkbox"
                  :disabled="sendProductDis ? true : false"
                  v-model="form.theftId"
                  id="theftId"
                  name="theftId"
                  value="6"
                  class="form-check-input"
                />
                <label for="theftId" class="form-check-label">হারিয়ে যাওয়া  </label>
              </div>
            </div>

            <input type="hidden" v-model="fromStatus">


            <!-- ----------------------------------------------------------- -->
            <div class="form-group">
              <label> Product Quantity </label>
           
              <input
                
                v-model="form.productQuantity"
                type="text"
                name="productQuantity"
                :class="{ 'is-invalid': form.errors.has('productQuantity') }"
                placeholder="Product Quantity"
                class="form-control"
                @keyup.prevent="totalProductCostCal()"
              />
              <input
                
                v-model="form.productQuantityPro"
                type="hidden"
                name="productQuantityPro"
                :class="{ 'is-invalid': form.errors.has('productQuantityPro') }"
                placeholder="Product Quantity"
                class="form-control"
              />
           
              
              <has-error :form="form" field="productQuantity"></has-error>
            </div>
            
            <div class="form-group">
              <label>Total Product Cost</label>
              <input
                disabled
                v-model="form.totalProductCost"
                type="text"
                name="totalProductCost"
                :class="{ 'is-invalid': form.errors.has('totalProductCost') }"
                placeholder="Total Product Cost"
                class="form-control"
              />
              <has-error :form="form" field="totalProductCost"></has-error>
            </div>
            <div class="form-group">
              <label> Current Payable </label>
              <input
                disabled
                v-model="form.currentPayable"
                type="text"
                name="currentPayable"
                :class="{ 'is-invalid': form.errors.has('currentPayable') }"
                placeholder="Current Payable"
                class="form-control"
              />
              <input
                v-model="form.currentPayableMain"
                type="hidden"
                :class="{ 'is-invalid': form.errors.has('currentPayableMain') }"
                placeholder=""
                class="form-control"
              />
              <has-error :form="form" field="currentPayable"></has-error>
            </div>
            
            
            
            
          
          </div>
        </form>
      </div>
    </div>

    <div class="card">
      
      <div class="supplier-entry p-0 comm-form-back-img">
        <form action="" @submit.prevent="addStatus()">
          
          <!-- -----------------------------   card footer  -->

          <div class="d-block p-0 pt-3 pb-4 card-footer overflow-hidden">
            <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">
              <button
                type="reset" class="btn-pill btn-shadow btn btn-outline-danger btn-lg float-left">
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
  </span>
</template>
<script>
import { VueEditor } from "vue2-editor";

export default {
  data() {
    return {
      form: new Form({
        shopAssetEntryId: "",
        assetSupplierId: "",
        assetBrandId: "",
        purchasedate: "",
        mfgDate: "",
        expiryDate: "",
        invoiceNo: "",
        modelNo: "",
        productQuantityPro: "",
        productQuantity: "",
        currentQuantity: "",
        productCost: "",
        totalProductCost: "",
        currentPayable: "",
        currentPayableMain: "",
        fromStatus: "",
        warranty: "",
        selectMothOrYearWarranty: "",
        guarantee: "",
        selectMothOrYearGuarantee: "",
        color: "",
        size: "",
        description: "",
        depreciationDay: "",
        depreciationMonth: "",
        depreciationYear: "",
        checkDepreciation: "",
        totalDepreciation: "",

        // Second form
        typeSelectId: "",
        remarkSendTime: "",
        remarkReceiveTime: "",
        damageId: "",
        warantyId: "",
        guaranteeId: "",
        unusedId: "",
        theftId: "",
      }),
      shopAssetEntryLists: {},
      shopAssetBrandLists: {},
      shopAssetPriceLists: {},

      typeSelect: true,
      sendProductList: false,
      sendRemark: false,
      receiveRemark: false,
      sendProductDis: false,
      receiveProductDis: false,

      remarkSendTimedis: false,
      remarkReceiveTimeDis: false,

      typeValueSend: false,
      typeValueReceive: false,
      loading: false,
    };
  },
  components: {
    VueEditor,
  },
  mounted() {
    this.assetCodeEntryList();
  },
  methods: {
    check_checkbox(e){
      
      let status = e;
      this.form.fromStatus = status;

      if(this.form.typeSelectId==2){
      axios.get("/getAssetQuantityForReceive/"+this.form.typeSelectId+'/'+this.form.shopAssetEntryId+'/'+status+'/'+this.form.assetBrandId+'/'+this.form.productCost).then((res) => {
        this.form.productQuantity = res.data.productQuantity;
        this.form.productQuantityPro = res.data.productQuantity;
      });
      }else{
        axios.get("/getAssetQuantityForReceive/"+this.form.typeSelectId+'/'+this.form.shopAssetEntryId+'/1'+'/'+this.form.assetBrandId+'/'+this.form.productCost).then((res) => {
        this.form.productQuantity = res.data.productQuantity;
        this.form.productQuantityPro = res.data.productQuantity;
      });
      }


      $( ".form-check-input" ).prop( "checked", false );

      if(e==2){
        $( "#damageId" ).prop( "checked", true );
      }
      else if(e==3){
        $( "#warantyId" ).prop( "checked", true );
      }
      else if(e==4){
        $( "#guaranteeId" ).prop( "checked", true );
      }
      else if(e==5){
        $( "#unusedId" ).prop( "checked", true );
      }
      else if(e==6){
        $( "#theftId" ).prop( "checked", true );
      }
    },
    totalProductCostCal(){
      if(this.form.productQuantity>0){
      this.form.totalProductCost = this.form.productQuantity*this.form.productCost;
      this.form.currentPayable = this.form.currentPayableMain-(this.form.productQuantity*this.form.productCost);
      }else{
        this.form.productQuantity = 1;
      }
    },
    addStatus() { 
      this.loading = true;
      this.form
        .post("/assetStatus")
        .then((res) => {  

          if(res.data.insertStatus == 1){
            this.loading = false;
            Toast.fire({
            icon: "error",
            title: "Available quantity is "+this.form.productQuantityPro,
          });
          }
          else{
          this.loading = false;
          Toast.fire({
            icon: "success",
            title: "Asset Status Entry Successfully",
          });
          this.typeSelect = true;
          this.sendProductList = false;
          this.sendRemark = false;
          this.receiveRemark = false;
          this.typeValueSend = false;
          this.typeValueReceive = false;
          this.form.reset();
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
    assetCodeEntryList() {
      axios.get("/assetStatus/create").then((res) => {
        this.shopAssetEntryLists = res.data.shopAssetEntryLists;
      });
    },
    assetBrandList() {
      axios.get("/getAssetBrandList/"+this.form.shopAssetEntryId).then((res) => {
        this.shopAssetBrandLists = res.data.brandList;
      });
    },
    assetPriceList() {
      axios.get("/getAssetPriceList/"+this.form.shopAssetEntryId+'/'+this.form.assetBrandId).then((res) => {
        this.shopAssetPriceLists = res.data.priceList;
      });
    },
    getBrandList(){
      this.assetBrandList();
      this.form.assetSupplierId = '';
      this.form.assetBrandId = '';
          this.form.purchasedate = '';
          this.form.mfgDate = '';
          this.form.expiryDate = '';
          this.form.invoiceNo = '';
          this.form.modelNo = '';
          this.form.productQuantity = '';
          this.form.productCost = '';
          this.form.totalProductCost = '';
          this.form.currentPayable = '';
          this.form.previousPayableDue = '';
          this.form.depreciation = '';
          this.form.depreciationDay = '';
          this.form.depreciationMonth = '';
          this.form.depreciationYear = '';
          this.form.warranty = '';
          this.form.selectMothOrYearWarranty = '';
          this.form.guarantee = '';
          this.form.selectMothOrYearGuarantee = '';
          this.form.color = '';
          this.form.size = '';
          this.form.description = '';
    },
    assetEntryIdCatch() {
      axios.get("/getAssetStatusInfo/" + this.form.shopAssetEntryId+'/'+this.form.assetBrandId+'/'+this.form.productCost).then((res) => {
        if (res.data.assetSingleData == null) {
          
          this.form.assetSupplierId = '';
          this.form.purchasedate = '';
          this.form.mfgDate = '';
          this.form.expiryDate = '';
          this.form.invoiceNo = '';
          this.form.modelNo = '';
          this.form.productQuantity = '';
          this.form.productCost = '';
          this.form.totalProductCost = '';
          this.form.currentPayable = '';
          this.form.previousPayableDue = '';
          this.form.depreciation = '';
          this.form.depreciationDay = '';
          this.form.depreciationMonth = '';
          this.form.depreciationYear = '';
          this.form.warranty = '';
          this.form.selectMothOrYearWarranty = '';
          this.form.guarantee = '';
          this.form.selectMothOrYearGuarantee = '';
          this.form.color = '';
          this.form.size = '';
          this.form.description = '';
        } else {

          this.typeSelect = false;

          this.form.assetSupplierId = res.data.assetSingleData.assetSupplierId;
          this.form.purchasedate = res.data.assetSingleData.purchasedate;
          this.form.mfgDate = res.data.assetSingleData.mfgDate;
          this.form.expiryDate = res.data.assetSingleData.expiryDate;
          this.form.invoiceNo = res.data.assetSingleData.invoiceNo;
          this.form.modelNo = res.data.assetSingleData.modelNo;
          this.form.productQuantity = res.data.assetSingleData.productQuantity;
          // this.form.productCost = res.data.assetSingleData.productCost;
          this.form.totalProductCost = res.data.assetSingleData.totalProductCost;
          this.form.currentPayable = res.data.assetSingleData.currentPayable;
          this.form.previousPayableDue = res.data.assetSingleData.previousPayableDue;
          this.form.depreciation = res.data.assetSingleData.depreciation;
          this.form.depreciationDay = res.data.assetSingleData.depreciationDay;
          this.form.depreciationMonth = res.data.assetSingleData.depreciationMonth;
          this.form.depreciationYear = res.data.assetSingleData.depreciationYear;
          this.form.warranty = res.data.assetSingleData.warranty;
          this.form.selectMothOrYearWarranty = res.data.assetSingleData.selectMothOrYearWarranty;
          this.form.guarantee = res.data.assetSingleData.guarantee;
          this.form.selectMothOrYearGuarantee = res.data.assetSingleData.selectMothOrYearGuarantee;
          this.form.color = res.data.assetSingleData.color;
          this.form.size = res.data.assetSingleData.size;
          this.form.description = res.data.assetSingleData.description;
            
                 this.form.productQuantity=res.data.assetSingleData.productQuantity
                 this.form.productQuantityPro=res.data.assetSingleData.productQuantity
          
          this.form.currentPayableMain = res.data.assetSingleData.currentPayable;
          this.form.totalDepreciation = res.data.assetSingleData.depreciation;
          this.form.assetSupplierId =
            res.data.assetSingleData.supplier_name.assetSupplierName;

          if (res.data.productReceive) {
            this.typeValueSend = true;
          } else if (res.data.productSend) {
            this.sendProductDis = true;
            this.remarkSendTimedis = true;
            this.typeValueReceive = true;
            this.typeValueSend = false;

            if (res.data.dateInfo.typeOptionId == 2) {
              this.form.damageId = res.data.dateInfo.typeOptionId;
            } else if (res.data.dateInfo.typeOptionId == 3) {
              this.form.warantyId = res.data.dateInfo.typeOptionId;
            } else if (res.data.dateInfo.typeOptionId == 4) {
              this.form.guaranteeId = res.data.dateInfo.typeOptionId;
            } else if (res.data.dateInfo.typeOptionId == 5) {
              this.form.unusedId = res.data.dateInfo.typeOptionId;
            } else if (res.data.dateInfo.typeOptionId == 6) {
              this.form.theftId = res.data.dateInfo.typeOptionId;
            }
          } else {
            this.typeValueSend = true;
          }
        }
      });
    },
    
    typeSelectFunction() {

      $( ".form-check-input" ).prop( "checked", false );


      if (this.form.typeSelectId == 1) {
        this.sendRemark = true;
           this.receiveRemark = false;
        this.sendProductList = true;
      }
      else if (this.form.typeSelectId == 2) {
        this.receiveRemark = true;
         this.sendRemark = false;
        this.sendProductList = true;
        this.form.productQuantity = '';
        this.form.productQuantityPro = '';
      }
    },
  },
};
</script>
