<template id="">
  <span>
    <div class="card">
      <div
        class="card-header"
        style="
          background: rgba(221, 221, 221, 0.2);
          border: 1px solid rgba(0, 0, 0, 0.05);
        "
      >
        <h3 style="color: black">Sales Product Price Entry</h3>
      </div>
      <form @submit.prevent="productPriceEntry()">
        <div class="supplier-entry py-4 px-2">
          <div
            class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border"
          >
            <div class="form-group">
              <label>Product Name/Code</label>

              <input
                type="hidden"
                v-model="form.purchaseProductId1"
                class="form-control"
              />

              <select
                v-model="form.purchaseProductId"
                class="form-control"
                @change.prevent="showProductBrand()"
              >
                <option value=""> Select One </option>
                <option
                  v-for="purchaseProductList in purchaseProductLists"
                  :value="purchaseProductList.product_name.productNameId">

                  {{ purchaseProductList.product_name.productName }}
                  ({{ purchaseProductList.product_name.productCode }})
                </option>
              </select>
              <has-error :form="form" field="purchaseProductId"></has-error>
            </div>

            <div class="form-group" v-if="productBrand">
              <label> Product Brand </label>

              <select
                v-model="form.productBrandId"
                class="form-control"
                @change.prevent="selectBrand1()"
              >
                <option value=""> Select One </option>

                <option
                  v-for="brandList in brandLists"
                  :key="brandList.brandId"
                  :value="brandList.brandId">
                  <span
                    v-for="productBrandList in productBrandLists"
                    :key="productBrandList.productBrandEntryId"
                    :value="productBrandList.productBrandEntryId"
                    v-if="
                      productBrandList.productBrandEntryId == brandList.brandId
                    "
                  >
                    {{ productBrandList.productBrandName }}
                  </span>
                </option>
              </select>
              <has-error :form="form" field="productBrandId"></has-error>
            </div>
            <div class="form-group" v-if="productTable">
              <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered table-striped">
                <tr>
                  <th>SL</th>
                  <th>Product</th>
                  <th>Brand</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Action</th>
                </tr>
                  
                  
                  <tr v-for="(brandWiseProductList,index) in brandWiseProductLists" >
                    <td> {{++index}} </td>
                    <td> {{brandWiseProductList.product_name.productName}} </td>
                    <td> {{brandWiseProductList.brand_name.productBrandName}} </td>
                    <td> <span v-for="colorList in colorLists"
                     v-if="colorList.id==brandWiseProductList.colorId">
                     {{colorList.colorName}} </span> </td>
                    <td> <span v-for="sizeList in sizeLists"
                     v-if="sizeList.id==brandWiseProductList.sizeId">
                     {{sizeList.sizeName}} </span> </td>
                    <td> <button type="button" class="btn btn-primary" @click="priceEntry(brandWiseProductList.purchaseProductId)"> Price Entry </button> </td>
                  </tr>

              </table>
              </div>
              </div>
            <div class="form-group" v-if="colorStatus">
              <label> Product Color </label>

              <select
                  class="form-control"
                  v-model="form.colorId"
                  @change="selectColor()"
                  name="countryId">
                  <option value="">Select One</option>
                  <option
                    v-for="colorList in colorLists"
                    :value="colorList.id">
                    {{ colorList.colorName }}
                  </option>
                </select>
              <has-error :form="form" field="colorId"></has-error>
            </div>

            <div class="form-group" v-if="sizeStatus">
              <label> Product Size </label>

              <select
                  class="form-control"
                  v-model="form.sizeId"
                  @change="selectSize()"
                  name="countryId">
                  <option
                    v-for="sizeList in sizeLists"
                    :value="sizeList.id">
                    {{ sizeList.sizeName }}
                  </option>
                </select>
              <has-error :form="form" field="colorId"></has-error>
            </div>

            <div class="form-group" v-if="productPurchaseType">
              <label> Product Purchase Type </label>
              <select
                v-model="form.productPurchaseTypeId"
                class="form-control"
                @change.prevent="productIdCatch()"
              >
                <!-- @change.prevent="showProductPurchaseType()" -->
                <option value="">Select One</option>
                <option
                  v-for="purchaseTypeList in purchaseTypeLists"
                  :key="purchaseTypeList.purchaseType"
                  :value="purchaseTypeList.purchaseType"
                >
                  <span
                    v-for="productPurchaseTypeList in productPurchaseTypeLists"
                    :key="productPurchaseTypeList.id"
                    v-if="
                      purchaseTypeList.purchaseType ==
                      productPurchaseTypeList.id
                    "
                  >
                    {{ productPurchaseTypeList.purchaseType }}
                  </span>
                </option>
              </select>
              <has-error :form="form" field="productBrandId"></has-error>
            </div>
          </div>
        </div>
        <div class="py-4 px-2">
          <div
            class="offset-sm-1 col-9 pl-sm-5 supplier-border"
            v-if="productInformation"
          >
            <div class="form-row">
              <div class="col-12 mt-2">
                <center>
                    <span class="badge badge-primary mr-2"> {{productText}} </span>
                    <span class="badge badge-primary mr-2"> {{productBrandText}} </span>
                    <span v-if="productColorText" class="badge badge-primary mr-2"> <span v-for="colorList in colorLists" v-if="colorList.id==productColorText">{{colorList.colorName}} </span> </span>
                    <span v-if="productSizeText" class="badge badge-primary mr-2"> <span v-for="sizeList in sizeLists" v-if="sizeList.id==productSizeText">{{sizeList.sizeName}} </span> </span>
                  </center>
              </div>
              <div class="col-sm-8 col-12">
                <input
                  type="hidden"
                  disabled
                  v-model="form.productNameId"
                  name="productNameId"
                  :class="{ 'is-invalid': form.errors.has('productNameId') }"
                  class="form-control"
                  placeholder="Product Name"
                />
                <has-error :form="form" field="productNameId"></has-error>
              </div>
            </div>
            <div class="form-row pt-3" style="display:none">
              <div class="col-sm-3 col-6 mt-2">
                <label class="p-0">Purchase Unit Price</label>
              </div>
              <div class="col-sm-8 col-12">
                <input
                  type="text"
                  disabled
                  v-model="form.unitPrice"
                  name="unitPrice"
                  class="form-control"
                  placeholder="Purchase Unit Price"
                />
                <has-error :form="form" field="unitPrice"></has-error>
              </div>
            </div>
            <div class="form-row pt-3">
              <div class="col-sm-3 col-6 mt-2">
                <label class="p-0">MRP Price</label>
              </div>
              <div class="col-sm-8 col-12">
                <span v-if="negative" style="color: red"
                  >Negative Value Not Allowed</span
                >
                <input
                  type="text"
                  v-model="form.mrpPrice"
                  @keyup="mrp"
                  @keyup.prevent="inputValueCheck()"
                  name="mrpPrice"
                  class="form-control"
                  placeholder="MRP Price"
                />
                <has-error :form="form" field="mrpPrice"></has-error>
              </div>
            </div>
            <div class="form-row pt-3">
              <div class="col-sm-3 col-6 mt-2">
                <label class="p-0">Sales Price</label>
              </div>
              <div class="col-sm-8 col-12">
                <span v-if="negative1" style="color: red"
                  >Negative Value Not Allowed</span
                >
                <input
                  type="text"
                  v-model="form.salesPrice"
                  @keyup="sales"
                  @keyup.prevent="inputValueCheck()"
                  name="salesPrice"
                  class="form-control"
                  placeholder="Sales Price"
                />
                <has-error :form="form" field="salesPrice"></has-error>
              </div>
            </div>
            <div class="form-row pt-3">
              <div class="col-sm-3 col-6 mt-2">
                <label class="p-0">Wholesale Price</label>
              </div>
              <div class="col-sm-8 col-12">
                <span v-if="negative2" style="color: red"
                  >Negative Value Not Allowed</span
                >
                <input
                  type="text"
                  v-model="form.wholesalePrice"
                  @keyup="wholesale"
                  @keyup.prevent="inputValueCheck()"
                  name="wholesalePrice"
                  class="form-control"
                  placeholder="Whole sale Price"
                />
              </div>
            </div>
            <div class="form-row pt-3">
              <div class="col-sm-3 col-6 mt-2">
                <label class="p-0">Special Price</label>
              </div>
              <div class="col-sm-8 col-12">
                <span v-if="negative3" style="color: red"
                  >Negative Value Not Allowed</span
                >
                <input
                  type="text"
                  v-model="form.specialPrice"
                  @keyup="special"
                  @keyup.prevent="inputValueCheck()"
                  name="specialPrice"
                  class="form-control"
                  placeholder="Special Price"
                />
                <has-error :form="form" field="specialPrice"></has-error>
              </div>
            </div>
            <div class="form-row pt-3">
              <div class="col-sm-3 col-6 mt-2">
                <label class="p-0">E-Commerce Price</label>
              </div>
              <div class="col-sm-8 col-12">
                <span v-if="negative4" style="color: red"
                  >Negative Value Not Allowed</span
                >
                <input
                  type="text"
                  v-model="form.eCommercePrice"
                  @keyup="ecommerce"
                  @keyup.prevent="inputValueCheck()"
                  name="eCommercePrice"
                  class="form-control"
                  placeholder="E-Commerce Price"
                />
                <has-error :form="form" field="eCommercePrice"></has-error>
              </div>
            </div>
            <input
              type="hidden"
              v-model="form.inputValueCheck"
              name="inputCheck"
              class="form-control"
            />

            <div class="col-11 text-right pr-0 pt-3">
              <button
                type="submit"
                class="btn-pill btn-hover-shine btn btn-primary"
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
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="card mt-5">
      <div
        class="card-header"
        style="
          background-color: rgb(1, 176, 241);
          border: 1px solid rgba(0, 0, 0, 0.05);
        "
      >
        <h3 style="color: black">Sales Product Price List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered table-striped">
          <thead>
            <tr>
              <th>SN</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Color/Size</th>
              <th>MRP Price</th>
              <th>Sales Price</th>
              <th>Wholesale Price</th>
              <th>Special Price</th>
              <th>E-Commerce Price</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                salesProductPriceList, index
              ) in salesProductPriceLists.data"
            >
              <td>{{ index + 1 }}</td>
              <td>
                <span v-if="salesProductPriceList.product_name"
                  >{{ salesProductPriceList.product_name.productName }} ({{
                    salesProductPriceList.product_name.productCode
                  }})</span
                >
              </td>
              
              <td>
                <span v-for="allProductBrandList in allProductBrandLists"
                v-if="salesProductPriceList.brandId==allProductBrandList.productBrandEntryId">
                    {{allProductBrandList.productBrandName}}
                </span>
                </td>
                <td>
                                            <span
                                            v-for="colorList in colorLists"
                                            v-if="colorList.id==salesProductPriceList.colorId">{{
                                              colorList.colorName
                                            }}</span>
                                            
                                            <span
                                            v-for="sizeList in sizeLists"
                                            v-if="sizeList.id==salesProductPriceList.sizeId">/ {{
                                              sizeList.sizeName
                                            }}</span>
                                          </td>
              <td>{{ salesProductPriceList.mrpPrice }}</td>
              <td>{{ salesProductPriceList.salesPrice }}</td>
              <td>{{ salesProductPriceList.wholesalePrice }}</td>
              <td>{{ salesProductPriceList.specialPrice }}</td>
              <td>{{ salesProductPriceList.eCommercePrice }}</td>
              <td>{{ salesProductPriceList.created_at }}</td>
              <td>
                <router-link
                  :to="`/productprice@entryEdit${salesProductPriceList.salesProductPriceEntryId}`"
                  class="mr-2 btn-hover-shine btn btn-shadow btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <span class="card_footer">
        <pagination
          :data="salesProductPriceLists"
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
        productPurchaseTypeId: "",
        purchaseProductId: "",
        purchaseProductId1: "",
        productNameId: "",
        productId: "",
        colorId: "",
        sizeId: "",
        productBrandId: "",
        unitPrice: "",
        mrpPrice: "",
        salesPrice: "",
        wholesalePrice: "",
        specialPrice: "",
        eCommercePrice: "",

        inputValueCheck: "",
      }),
      loading:false,
      productTable:false,
      productText:'',
      productBrandText:'',
      productColorText:'',
      productSizeText:'',
      shopProductBrandLists: [],
      productPurchaseTypeLists: [],
      purchaseTypeLists: [],
      brandLists: [],
      allProductBrandLists: [],
      productBrandLists: [],
      purchaseProductLists: {},
      salesProductPriceLists: {},
      productInformation: false,
      productBrand: false,
      productPurchaseType: false,
      colorStatus: false,
      sizeStatus: false,
      colorLists: [],
      sizeLists: [],
      brandWiseProductLists:[],
    };
  },
  props: {
    limit: {
      type: Number,
      default: 2,
    },
  },
  mounted() {
    this.getPaginateList();
    this.salesProductNameList();
    this.salesProductPriceList();
    this.ShowDataLists();
    this.productBrandList();
    this.colorList();
    this.sizeList();
  },
  methods: {
        selectBrand1(){
          this.productInformation = false;
      axios
        .get("/salesProductListBrandWise/" +this.form.purchaseProductId +"/" +this.form.productBrandId)
        .then((res) => {
          this.productTable = true;
          this.brandWiseProductLists = res.data.productList;
        });
        },

        priceEntry(e){
          this.productTable=false;
          axios
        .get("/salesProductPurchaseId/" +e)
        .then((res) => {
          this.form.productPurchaseTypeId=e;
           this.form.colorId=res.data.productList.colorId;
           this.form.sizeId=res.data.productList.sizeId;
           this.productInformation = true;

           this.productText = res.data.productList.product_name.productName;
           this.productBrandText = res.data.productList.brand_name.productBrandName;
           this.productColorText = res.data.productList.colorId;
           this.productSizeText = res.data.productList.sizeId;

           this.form.unitPrice = res.data.productList.unitPrice;
          this.form.productNameId =
            res.data.productList.product_name.productName;
          this.form.productId = res.data.productList.productId;
          this.form.purchaseProductId1 =
            res.data.productList.purchaseProductId;

            
           });
        },
        selectBrand(){
           this.form.productPurchaseTypeId='';
           this.form.colorId='';
           this.form.sizeId='';
           this.productInformation = false;

           // check color or size have 
            axios.get("/checkColorSizeHave/"+this.form.purchaseProductId+'/'+this.form.productBrandId).then((res) => {
            if(res.data.have==1){
              axios.get("colorListByBrandId/"+this.form.purchaseProductId+'/'+this.form.productBrandId).then((res) => {
              this.colorStatus = res.data.colorStatus;
              this.colorLists = res.data.colorList;
              });

              axios.get("/sizeListByBrandId/"+this.form.purchaseProductId+'/'+this.form.productBrandId).then((res) => {
                this.sizeLists = res.data.sizeList; 
                this.sizeStatus = res.data.sizeStatus; 
              });

              this.showProductPurchaseType();

            }
            else if(res.data.have==2){
              axios.get("colorListByBrandId/"+this.form.purchaseProductId+'/'+this.form.productBrandId).then((res) => {
              this.colorStatus = res.data.colorStatus;
              this.colorLists = res.data.colorList;
              });
            }
            else if(res.data.have==3){
              axios.get("/sizeListByBrandId/"+this.form.purchaseProductId+'/'+this.form.productBrandId).then((res) => {
                this.sizeLists = res.data.sizeList; 
                this.sizeStatus = res.data.sizeStatus; 
                
              });
            }
            else{
              this.showProductPurchaseType();
            }
            });
           // check color or size have 
    },
    selectColor(){
       this.form.productPurchaseTypeId='';
       this.form.sizeId='';
         this.productInformation = false;
      axios.get("/sizeListByColorId/"+this.form.purchaseProductId+'/'+this.form.productBrandId+'/'+this.form.colorId).then((res) => {
        this.sizeLists = res.data.sizeList; 
        this.sizeStatus = res.data.sizeStatus; 
        if(res.data.sizeStatus==0){
          this.supplierStatus=true;
        this.showSupplier();
      }
      });
    },
    selectSize(){
         this.form.productPurchaseTypeId='';
         this.productInformation = false;
      this.showProductPurchaseType();
    },
    salesProductNameList() {
      axios.get("/salesProductNameShow").then((res) => {
        this.purchaseProductLists = res.data.purchaseProductLists;
      });
    },
    mrp(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.mrpPrice !== "") {
        this.negative = true;

        this.form.mrpPrice = "";
      } else {
        if (this.form.mrpPrice < 0) {
          this.negative = true;
          this.form.mrpPrice = "";
        } else {
          this.negative = false;
        }
        this.negative = false;
      }
    },
    sales(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.salesPrice !== "") {
        this.negative1 = true;

        this.form.salesPrice = "";
      } else {
        if (this.form.salesPrice < 0) {
          this.negative1 = true;
          this.form.salesPrice = "";
        } else {
          this.negative1 = false;
        }
        this.negative1 = false;
      }
    },
    wholesale(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.wholesalePrice !== "") {
        this.negative2 = true;

        this.form.wholesalePrice = "";
      } else {
        if (this.form.wholesalePrice < 0) {
          this.negative2 = true;
          this.form.wholesalePrice = "";
        } else {
          this.negative2 = false;
        }
        this.negative2 = false;
      }
    },
    special(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.specialPrice !== "") {
        this.negative3 = true;

        this.form.specialPrice = "";
      } else {
        if (this.form.specialPrice < 0) {
          this.negative3 = true;
          this.form.specialPrice = "";
        } else {
          this.negative3 = false;
        }
        this.negative3 = false;
      }
    },
    ecommerce(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.eCommercePrice !== "") {
        this.negative4 = true;

        this.form.eCommercePrice = "";
      } else {
        if (this.form.eCommercePrice < 0) {
          this.negative4 = true;
          this.form.eCommercePrice = "";
        } else {
          this.negative4 = false;
        }
        this.negative4 = false;
      }
    },
    inputValueCheck() {
      this.form.inputValueCheck = 1;
    },
    ShowDataLists() {
      axios.get("/shopproductBrandEntry").then((res) => {
        this.shopProductBrandLists = res.data.shopProductBrandList;
      });
    },
    productBrandList() {
      axios.get("/productBrandList").then((res) => {
        this.allProductBrandLists = res.data.productBrandList;
      });
    },

    showProductBrand() {
       this.productPurchaseType = false;
       this.productInformation = false;
       this.productTable = false;
       this.colorStatus = false;
       this.sizeStatus = false;
       this.form.productBrandId='';
       this.form.productPurchaseTypeId='';

      axios
        .get("/productUnitePrice/" + this.form.purchaseProductId)
        .then((res) => {
          this.brandLists = res.data.brandList;
          this.productBrandLists = res.data.productBrandList;
          this.productBrand = true;
        });
    },
colorList(){
      axios.get("/colorListAll/").then((res) => {
        this.colorLists = res.data.colorList;
      });
    },
    sizeList(){
      axios.get("/sizeListAll/").then((res) => {
        this.sizeLists = res.data.sizeList;
      });
    },
    
    showProductPurchaseType() {
      let url = '';
      if(this.form.sizeId){
      if(this.form.colorId){
        url = "/salesProductBrandShowSize/" +this.form.purchaseProductId +"/" +this.form.productBrandId+"/" +this.form.colorId+"/" +this.form.sizeId;
      }
      else{
        url = "/salesProductBrandShowSizeWithoutColor/" +this.form.purchaseProductId +"/" +this.form.productBrandId+"/" +this.form.sizeId;
      }
      }
      else if(this.form.colorId){
        url = "/salesProductBrandShowColor/" +this.form.purchaseProductId +"/" +this.form.productBrandId+"/" +this.form.colorId;
      }
      else{
        url = "/salesProductBrandShow/" +this.form.purchaseProductId +"/" +this.form.productBrandId;
      }
      axios
        .get(url)
        .then((res) => {
          this.productPurchaseTypeLists = res.data.productPurchaseTypeList;
          this.purchaseTypeLists = res.data.purchaseTypeList;
          this.productPurchaseType = true;
        });
    },

    productIdCatch() {
      this.productInformation = true;
      // alert(this.form.purchaseProductId+','+this.form.productBrandId+','+this.form.productPurchaseTypeId);
      axios
        .get(
          "/productUnitePrice1/" +
            this.form.purchaseProductId +
            "/" +
            this.form.productBrandId +
            "/" +
            this.form.productPurchaseTypeId
        )
        .then((res) => {
          this.form.unitPrice = res.data.productUnitePrice.unitPrice;
          this.form.productNameId =
            res.data.productUnitePrice.product_name.productName;
          this.form.productId = res.data.productUnitePrice.productId;
          this.form.purchaseProductId1 =
            res.data.productUnitePrice.purchaseProductId;
        });
    },

    productPriceEntry() {
      if (this.form.inputValueCheck == 1) {
        this.loading = true;
        this.form.post("/salesProductPriceEntry").then((res) => {
          if (res.data.alReadyEntry) {
            Toast.fire({
              icon: "error",
              title: "Already Sales Product Price Entry",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Sales Product Price Entry",
            });
            this.loading = false;
            (this.productInformation = false),
              // (this.productBrand = false),
              (this.productPurchaseType = false),

              this.productText = this.form.purchaseProductId;

              this.form.reset();
              this.form.purchaseProductId = this.productText;
              axios
        .get("/productUnitePrice/" + this.form.purchaseProductId)
        .then((res) => {
          this.brandLists = res.data.brandList;
          this.productBrandLists = res.data.productBrandList;
          this.productBrand = true;
        });
            this.salesProductPriceList();
            this.salesProductNameList();
          }
        }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "Enter Your Product Price",
        });
      }
    },
    salesProductPriceList() {
      axios.get("/salesProductPriceEntry").then((res) => {
        this.salesProductPriceLists = res.data.salesProductPriceLists;
      });
    },
    getPaginateList(page = 1) {
      axios.get("/salesProductPriceEntry?page=" + page).then((response) => {
        this.salesProductPriceLists = response.data.salesProductPriceLists;
      });
    },
  },
};
</script>
