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
        <h3 style="color: black"> Re-purchase </h3>
      </div>
      <form @submit.prevent="productDiscountPriceEntry()">
        <div class="product-discount py-4 px-2">
          <div
            class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border"
          >
            <div class="form-group">
              <label>Product Name/Code</label>

              <select
                v-model="form.purchaseProductId"
                class="form-control"
                @change.prevent="showProductBrand()"
              >
                <option value="">Select One</option>
                <option
                  v-for="purchaseProductList in purchaseProductListGets"
                  :value="purchaseProductList.product_name.productNameId"
                >
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
                <option value="">Select One</option>

                <option
                  v-for="brandList in brandLists"
                  :key="brandList.brandId"
                  :value="brandList.brandId"
                >
                  {{ brandList.brand_name.productBrandName }}
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
                  v-model="form.colorId1"
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
                  v-model="form.sizeId1"
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
            <div class="form-group" v-if="supplierStatus">
              <label> Supplier</label>

              <select
                v-model="form.supplierId"
                class="form-control"
                @change.prevent="showInfo()"
              >
                <option value="">Select One</option>

                <option
                  v-for="supplier in suppliers"
                  :key="supplier.productSupplierId"
                  :value="supplier.productSupplierId"
                  v-if="supplier.product_supplier_name.openingStatus==0"
                >
                  {{ supplier.product_supplier_name.productSupplierName }}

                </option>
              </select>
              <has-error :form="form" field="productBrandId"></has-error>
              <input type="hidden" class="" v-model="form.openingPurchaseRepurchase">
            </div>
            <div class="form-group" v-if="lastPriceStatus">
              <label> Last Unit Price </label>

              <input
                v-model="form.lastUnitPrice"
               disabled
              >
       
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- purchase info -->
    <div class="card">
      <form action="" @submit.prevent="addPurchaseInvoice()">
        <div
          class="card-header"
          style="
            background: rgba(221, 221, 221, 0.2);
            border: 1px solid rgba(0, 0, 0, 0.05);
          "
        >
          <!-- <h3 style="color: black">New Purchase Entry</h3> -->
        </div>

        <div class="purchase-entery purchase-border p-3">
          <div class="row m-0">
            <div class="col-auto pl-lg-auto purcha-border p-3">
              <div class="table-responsive bg-white">
                <table class="table-hover mb-0">
                  <tr>
                    <td class="title-name">Purchase Date</td>
                    <td>
                      <div class="input-group">
                        <div class="input-group-prepend datepicker-trigger">
                          <div class="input-group-text">
                            <i class="fa fa-calendar-alt"></i>
                          </div>
                        </div>
                        <input
                          type="text"
                          v-model="form.purchaseDate"
                          name="purchaseDate"
                          class="form-control"
                          data-toggle="datepicker-icon"
                          placeholder="Data"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="title-name">Purchase Invoice No</td>
                    <td>
                      <div>
                        <input
                          disabled
                          type="text"
                          v-model="form.purchaseInvoiceNo"
                          name="purchaseInvoiceNo"
                          class="form-control"
                          placeholder="Invoice No"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="title-name">Product Supplier Name</td>
                    <td>
                      <div>
                        <select
                          class="form-control"
                          v-model="form.productSupplierId"
                          :class="{
                            'is-invalid': form.errors.has('productSupplierId'),
                          }"
                          @change.prevent="productSupplierId()"
                          name="productSupplierId"
                          disabled
                        >
                          <option value="">Select One</option>
                          <option
                            v-for="productSupplierList in productSupplierLists"
                            :value="productSupplierList.productSupplierId"
                          >
                            {{ productSupplierList.productSupplierName }}
                          </option>
                        </select>
                        <has-error
                          :form="form"
                          field="productSupplierId"
                        ></has-error>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="title-name">Moblie No</td>
                    <td>
                      <div>
                        <input
                          disabled
                          type="text"
                          v-model="form.moblieNo"
                          name="moblieNo"
                          class="form-control"
                          placeholder="Moblie No"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="title-name">Address</td>
                    <td>
                      <div>
                        <textarea
                          disabled
                          v-model="form.address"
                          name="address"
                          placeholder="Address"
                          class="form-control"
                          style="height: 80px"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div
          class="product-page pl-2 purcha-border"
          style="background: #e7f1e8"
        >
          <form action="" @submit.prevent="addProduct()">
            <div class="form-row">
              <div class="form-group col-sm-2 col-6 pt-2">
                <select
                  class="form-control"
                  v-model="form.productId"
                  name="productId"
                  disabled
                >
                  <option
                    v-for="productNameList in productNameLists"
                    :value="productNameList.productNameId"
                  >
                    {{ productNameList.productName }} ({{
                      productNameList.productCode
                    }})
                  </option>
                </select>
                <select
                  class="form-control"
                  v-model="form.brandId"
                  name="brandId"
                  disabled
                >
                  <option
                    v-for="brandList in brandListgets"
                    :value="brandList.productBrandEntryId"
                  >
                    {{ brandList.productBrandName }}
                  </option>
                </select>
              </div>
               
              <div class="form-group col-sm-1 col-6">
                <label>P.Type</label>
                <select
                  class="form-control"
                  v-model="form.purchaseTypeId"
                  name="purchaseTypeId"
                  disabled
                >
                  <option
                    v-for="purchaseType in purchaseTypes"
                    :value="purchaseType.id"
                  >
                    {{ purchaseType.purchaseType }}
                  </option>
                </select>
              </div>
              <div class="form-group col-sm-1 col-6">
                <label>Country</label>
                <select
                  class="form-control"
                  v-model="form.countryId"
                  name="countryId"
                  disabled
                >
                  <option
                    v-for="countryList in countryLists"
                    :value="countryList.id"
                  >
                    {{ countryList.name }}
                  </option>
                </select>
              </div>
              <div class="form-group col-sm-1 col-6">
                <label>Unit</label>
                <select
                  v-model="form.unitId"
                  disabled
                  name="unitId"
                  class="form-control"
                >
                  <option
                    v-for="unitNameShow in unitNameShows"
                    :value="unitNameShow.uniteEntryId"
                  >
                    {{ unitNameShow.uniteEntryName }}
                  </option>
                </select>
              </div>
              <div class="form-group col-sm-1 col-6">
                <label>Color</label>
                 <select
                  class="form-control"
                  v-model="form.colorId"
                  disabled
                  name="colorId">
                  <option
                    v-for="colorList in colorLists"
                    :value="colorList.id">
                    {{ colorList.colorName }}
                  </option>
                </select>
              </div>
              <div class="form-group col-sm-1 col-6">
                <label>Size</label>
                 <select
                  class="form-control"
                  v-model="form.sizeId"
                  disabled
                  name="sizeId">
                  <option
                    v-for="sizeList in sizeLists"
                    :value="sizeList.id">
                    {{ sizeList.sizeName }}
                  </option>
                </select>
              </div>
              <div class="form-group col-sm-1 col-6">
                <span v-if="negative" style="color: red"
                  >Negative Value Not Allowed</span
                >
                <label>Quantity</label>
                <input
                  type="text"
                  v-model="form.quantity"
                  @keyup="quantity"
                  @keyup.prevent="unitPrice()"
                  name="quantity"
                  placeholder="Quantity"
                  class="form-control"
                />
              </div>
              <div class="form-group col-sm-1 col-6">
                <span v-if="negative1" style="color: red"
                  >Negative Value Not Allowed</span
                >
                <label>Unit Price</label>
                <input
                  type="text"
                  v-model="form.unitPrice"
                  @keyup="unit"
                  @keyup.prevent="unitPrice()"
                  name="unitPrice"
                  placeholder="Unit Price"
                  class="form-control"
                />
              </div>
              <div class="form-group col-sm-1 col-6">
                <span v-if="negative2" style="color: red"
                  >Negative Value Not Allowed</span
                >
                <label>Discount</label>
                <input
                  type="text"
                  v-model="form.percetage"
                  @keyup="disnt"
                  @keyup.prevent="percetage()"
                  name="percetage"
                  placeholder="Percetage"
                  class="form-control"
                />
              </div>
              <div class="form-group col-sm-1 col-6">
                <label>Total Price</label>
                <input
                  type="text"
                  disabled
                  v-model="form.totalPrice"
                  name="totalPrice"
                  placeholder="Total Price"
                  class="form-control"
                />
              </div>
              <input
                type="hidden"
                disabled
                v-model="form.percetagePrice"
                name="percetagePrice"
                class="form-control"
              />
              <div class="btn-mr">
                <label></label>
             <button  :disabled="loading" type="submit" class="btn btn-info btn-padding">
                   <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>

                <span class="mr-2 opacity-7">
                  <i class="fa fa-plus"></i>
                </span>
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="table-responsive bg-white">
          <table class="table table-hover table-bordered mb-0">
            <thead>
              <tr style="background: rgba(242, 242, 242, 0.47)">
                <th>SN</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>P.Type</th>
                <th>Unit</th>
                <th>Color/Size</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(purchaseProductList, index) in purchaseProductLists"
                v-if="
                  cusPurchaseInvoice == purchaseProductList.purchaseInvoiceNo
                "
              >
                <td>{{ index + 1 }}</td>
                <td v-if="purchaseProductList.product_name">
                  {{ purchaseProductList.product_name.productName }} ({{
                    purchaseProductList.product_name.productCode
                  }})
                </td>
                <td>
                  <span
                    v-for="productBrandList in productBrandLists"
                    :key="productBrandList.productBrandEntryId"
                    v-if="
                      productBrandList.productBrandEntryId ==
                      purchaseProductList.brandId
                    "
                    >{{ productBrandList.productBrandName }}</span
                  >
                </td>
                <td>
                  <span
                    v-for="purchaseType in purchaseTypes"
                    :key="purchaseType.id"
                    v-if="purchaseType.id == purchaseProductList.purchaseType"
                  >
                    {{ purchaseType.purchaseType }}
                  </span>

                  <span
                    v-for="countryList in countryLists"
                    :key="countryList.id"
                    v-if="countryList.id == purchaseProductList.countryId"
                  >
                    <br />
                    ({{ countryList.name }})
                  </span>
                </td>
                <td>
                  <span v-if="purchaseProductList.unit_name">{{
                    purchaseProductList.unit_name.uniteEntryName
                  }}</span>
                </td>
                <td>
                  <span
                  v-for="colorList in colorLists"
                  v-if="colorList.id==purchaseProductList.colorId">{{
                    colorList.colorName
                  }}</span>
                  
                  <span
                  v-for="sizeList in sizeLists"
                  v-if="sizeList.id==purchaseProductList.sizeId">/ {{
                    sizeList.sizeName
                  }}</span>
                </td>
                <td>{{ purchaseProductList.quantity }}</td>
                <td>{{ purchaseProductList.unitPrice }}</td>
                <td>{{ purchaseProductList.totalPrice }}</td>
                <td>
                  <button
                    type="button"
                    @click="distroy(purchaseProductList.purchaseProductId)"
                    class="btn btn-hover-shine btn-danger"
                  >
                    <i class="fa fa-trash"></i>Delete
                  </button>
                  <button
                    type="button"
                    class="btn btn-hover-shine btn-success"
                    data-toggle="modal"
                    @click="
                      purchaseProductIdCatchInfo(
                        purchaseProductList.purchaseProductId,
                        purchaseProductList.productId,
                        purchaseProductList.productSupplierId
                      )
                    "
                    :data-target="
                      '#productId' + purchaseProductList.purchaseProductId
                    "
                  >
                    Details
                  </button>
                </td>
                <!-- Modal -->
                <div
                  class="modal fade"
                  :id="'productId' + purchaseProductList.purchaseProductId"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLongTitle"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                          Add Product More Detalis
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <form>
                        <div class="modal-body">
                          <div class="purchase-entry py-4 px-2">
                            <div class="col-12 supplier-border shadow-custom">
                              <div class="form-row">
                                <input
                                  v-model="form.purchaseProductIdCatch"
                                  type="hidden"
                                  name="purchaseProductIdCatch"
                                  class="form-control"
                                />

                                <div class="form-group col-md-6">
                                  <label><b>Model No </b></label>
                                  <input
                                    v-model="form.modelNo"
                                    type="text"
                                    name="modelNo"
                                    placeholder="Model No"
                                    class="form-control"
                                  />
                                </div>
                                <div class="form-group col-md-6">
                                  <label><b>Batch No </b></label>
                                  <input
                                    v-model="form.batchNo"
                                    type="text"
                                    name="batchNo"
                                    placeholder="Batch No"
                                    class="form-control"
                                  />
                                </div>
                              </div>

                              <div class="form-row">
                                <div class="form-group col-md-6">
                                  <label><b>Mfg Date </b></label>
                                  <input
                                    v-model="form.mfgDate"
                                    type="date"
                                    name="mfgDate"
                                    class="form-control"
                                  />
                                </div>

                                <div class="form-group col-md-6">
                                  <label><b>Expiry Date </b></label>
                                  <input
                                    v-model="form.expiryDate"
                                    type="date"
                                    name="expiryDate"
                                    class="form-control"
                                  />
                                </div>
                              </div>

                              <div class="form-row">
                                <div class="form-group col-md-6">
                                  <label><b>Mfg License No </b></label>
                                  <input
                                    v-model="form.mfgLicenseNO"
                                    type="text"
                                    name="mfgLicenseNO"
                                    placeholder="Mfg License No"
                                    class="form-control"
                                  />
                                </div>
                                <div class="form-group col-md-6">
                                  <label><b>QR Code </b></label>
                                  <input
                                    v-model="form.qrCode"
                                    type="text"
                                    name="qrCode"
                                    placeholder="QR Code"
                                    class="form-control"
                                  />
                                </div>
                              </div>

                              <div class="form-row">
                                <div class="form-group col-md-6">
                                  <label><b>Warranty </b></label>
                                  <div class="form-row">
                                    <div class="col-md-6">
                                      <input
                                        v-model="form.warranty"
                                        type="number"
                                        name="warranty"
                                        placeholder="Warranty"
                                        class="form-control"
                                      />
                                    </div>
                                    <div class="col-md-6">
                                      <select
                                        v-model="form.selectMothOrYearWarranty"
                                        name="selectMothOrYearWarranty"
                                        class="form-control"
                                      >
                                        <option value="">Select One</option>
                                        <option value="1">Day</option>
                                        <option value="2">Month</option>
                                        <option value="3">Years</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group col-md-6">
                                  <label><b>Guarantee </b></label>
                                  <div class="form-row">
                                    <div class="col-md-6">
                                      <input
                                        v-model="form.guarantee"
                                        type="number"
                                        name="guarantee"
                                        placeholder="Guarantee"
                                        class="form-control"
                                      />
                                    </div>
                                    <div class="col-md-6">
                                      <select
                                        v-model="form.selectMothOrYearGuarantee"
                                        name="selectMothOrYearGuarantee"
                                        class="form-control"
                                      >
                                        <option value="">Select One</option>
                                        <option value="1">Day</option>
                                        <option value="2">Month</option>
                                        <option value="3">Years</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="form-row">
                                <div class="form-group col-md-6">
                                  <label
                                    ><b>Tax </b>
                                    <hr />
                                  </label>
                                  <div
                                    class="
                                      custom-control
                                      custom-radio
                                      custom-control-inline
                                    "
                                  >
                                    <input
                                      type="radio"
                                      id="customRadioInline1"
                                      v-model="form.tax"
                                      name="tax"
                                      class="custom-control-input"
                                      value="1"
                                      @click.submit="taxYes()"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="customRadioInline1"
                                      >Yes</label
                                    >
                                  </div>
                                  <div
                                    class="
                                      custom-control
                                      custom-radio
                                      custom-control-inline
                                    "
                                  >
                                    <input
                                      type="radio"
                                      id="customRadioInline2"
                                      v-model="form.tax"
                                      name="tax"
                                      class="custom-control-input"
                                      value="0"
                                      @click.submit="taxNo()"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="customRadioInline2"
                                      >No</label
                                    >
                                  </div>
                                  <div
                                    class="form-group mb-0 mt-3"
                                    v-if="taxAmountTypeShow"
                                  >
                                    <div class="input-group">
                                      <input
                                        v-model="form.taxAmount"
                                        type="text"
                                        name="taxAmount"
                                        placeholder="Tax Amount"
                                        class="form-control"
                                      />
                                      <div class="input-group-prepend">
                                        <select
                                          v-model="form.taxAmountType"
                                          name="taxAmountType"
                                          class="input-group-text"
                                        >
                                          <option value="">Select One</option>
                                          <option value="1">Taka</option>
                                          <option value="2">Percetage</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group col-md-6">
                                  <label
                                    ><b>Quality Type</b>
                                    <hr
                                  /></label>
                                  <div
                                    class="
                                      custom-radio custom-control-inline
                                      p-0
                                      m-0
                                    "
                                  >
                                    <input
                                      type="radio"
                                      id="customRadioInline3"
                                      v-model="form.quantityType"
                                      name="quantityType"
                                      class="custom-control-input"
                                      value="1"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="customRadioInline3"
                                      >Low</label
                                    >
                                  </div>
                                  <div
                                    class="
                                      custom-radio custom-control-inline
                                      p-0
                                      m-0
                                    "
                                  >
                                    <input
                                      type="radio"
                                      id="customRadioInline4"
                                      v-model="form.quantityType"
                                      name="quantityType"
                                      class="custom-control-input"
                                      value="2"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="customRadioInline4"
                                      >Medium</label
                                    >
                                  </div>
                                  <div
                                    class="
                                      custom-radio custom-control-inline
                                      p-0
                                      m-0
                                    "
                                  >
                                    <input
                                      type="radio"
                                      id="customRadioInline5"
                                      v-model="form.quantityType"
                                      name="quantityType"
                                      class="custom-control-input"
                                      value="3"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="customRadioInline5"
                                      >High</label
                                    >
                                  </div>
                                </div>
                              </div>

                              <div class="form-group">
                                <label><b>Quantity Notification </b></label>
                                <input
                                  v-model="form.quantityNoti"
                                  type="number"
                                  name="quantityNoti"
                                  placeholder="Quantity Notification"
                                  class="form-control"
                                />
                              </div>

                              <div class="form-group">
                                <button
                                  type="button"
                                  class="btn btn-hover-shine btn-primary"
                                  @click.submit="addMoreField()"
                                  name="button"
                                >
                                  Add More Field
                                </button>
                              </div>

                              <div class="moreFieldForEdit">
                                <div class="form-row" v-if="fieldNameOneShow">
                                  <div class="form-group col-md-5">
                                    <label>Field Name</label>
                                    <input
                                      type="text"
                                      v-model="form.fieldNameOne"
                                      name="fieldNameOne"
                                      placeholder="Enter Name"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group col-md-5">
                                    <label>Field Work</label>
                                    <input
                                      type="text"
                                      v-model="form.workOne"
                                      name="workOne"
                                      placeholder="Enter Work"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group col-md-2">
                                    <label>Delete</label>
                                    <button
                                      type="button"
                                      class="btn btn-hover-shine btn-danger"
                                      @click.submit="
                                        oneFieldDelete(fieldNameOneShow)
                                      "
                                    >
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                                <div class="form-row" v-if="fieldNameTwoShow">
                                  <div class="form-group col-md-5">
                                    <input
                                      type="text"
                                      v-model="form.fieldNameTwo"
                                      name="fieldNameTwo"
                                      placeholder="Enter Name"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group col-md-5">
                                    <input
                                      type="text"
                                      v-model="form.workTwo"
                                      name="workTwo"
                                      placeholder="Enter Work"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group col-md-2">
                                    <button
                                      type="button"
                                      class="btn btn-hover-shine btn-danger"
                                      @click.submit="
                                        twoFieldDelete(fieldNameTwoShow)
                                      "
                                    >
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                                <div class="form-row" v-if="fieldNameThreeShow">
                                  <div class="form-group col-md-5">
                                    <input
                                      type="text"
                                      v-model="form.fieldNameThree"
                                      name="fieldNameThree"
                                      placeholder="Enter Name"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group col-md-5">
                                    <input
                                      type="text"
                                      v-model="form.workThree"
                                      name="workThree"
                                      placeholder="Enter Work"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group col-md-2">
                                    <button
                                      type="button"
                                      class="btn btn-hover-shine btn-danger"
                                      @click.submit="
                                        threeFieldDelete(fieldNameThreeShow)
                                      "
                                    >
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                                <div class="form-row" v-if="fieldNameFourShow">
                                  <div class="form-group col-md-5">
                                    <input
                                      type="text"
                                      v-model="form.fieldNameFour"
                                      name="fieldNameFour"
                                      placeholder="Enter Name"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group col-md-5">
                                    <input
                                      type="text"
                                      v-model="form.workFour"
                                      name="workFour"
                                      placeholder="Enter Work"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group col-md-2">
                                    <button
                                      type="button"
                                      class="btn btn-hover-shine btn-danger"
                                      @click.submit="
                                        fourFieldDelete(fieldNameFourShow)
                                      "
                                    >
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                                <small class="text-danger">
                                  Maximum field limit 4.
                                </small>
                              </div>
                            </div>
                            <div
                              class="col-12 supplier-border mt-5 shadow-custom"
                            >
                              <div class="form-group">
                                <label><b> Product Description </b></label>
                                <vue-editor
                                  v-model="form.proDescription"
                                  type="text"
                                  name="proDescription"
                                  placeholder="Product Description"
                                ></vue-editor>
                              </div>
                              <div class="form-group">
                                <label><b> Product Advantage </b></label>
                                <vue-editor
                                  v-model="form.proAdvantage"
                                  type="text"
                                  name="proAdvantage"
                                  placeholder="Product Advantage"
                                ></vue-editor>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- <div class="modal-footer">
                               <button type="button" class="btn btn-hover-shine btn-danger" data-dismiss="modal">Close</button>
                               <button  class="btn btn-hover-shine btn-success" @click.prevent="purchaseProductDetailsAdd()" data-dismiss="modal" >Add Detalis</button>
                             </div> -->
                      </form>
                    </div>
                  </div>
                </div>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="purchase-entery purchase-border p-3" v-if="product">
          <div class="row m-0">
            <div class="col-auto ml-auto purcha-border p-3">
              <div class="table-responsive bg-white">
                <table class="table-hover mb-0">
                  <tr style="display:none;">
                    <td class="title-name">Total Purchase Value</td>
                    <td>
                      <input
                        type="hidden"
                        disabled
                        v-model="form.totalProductQuantity"
                        name="totalProductQuantity"
                        class="form-control"
                        placeholder="Total Product Quantity"
                      />
                      <div>
                        <input
                          type="text"
                          disabled
                          v-model="form.totalPurchaseValue"
                          name="totalPurchaseValue"
                          class="form-control"
                          placeholder="Total Purchase Value"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr style="display:none;">
                    <td class="title-name">Carriage Inward</td>
                    <td>
                      <div>
                        <span v-if="negative3" style="color: red"
                          >Negative Value Not Allowed</span
                        >
                        <input
                          type="text"
                          v-model="form.carriageInward"
                          @keyup="inward"
                          @keyup.prevent="carriageInward()"
                          name="carriageInward"
                          class="form-control"
                          placeholder="Carriage Inward"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="title-name">Total Amount</td>
                    <td>
                      <div>
                        <input
                          type="text"
                          disabled
                          v-model="form.totalAmount"
                          name="totalAmount"
                          class="form-control"
                          placeholder="Total Amount"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2"><hr /></td>
                  </tr>
                  <tr>
                    <td class="title-name">Discount</td>
                    <td>
                      <div>
                        <span v-if="negative4" style="color: red"
                          >Negative Value Not Allowed</span
                        >
                        <input
                          type="text"
                          v-model="form.discount"
                          @keyup="dis"
                          @keyup.prevent="discount()"
                          name="discount"
                          class="form-control"
                          placeholder="Discount"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="title-name">Supplier Payable</td>
                    <td>
                      <div>
                        <input
                          type="text"
                          disabled
                          v-model="form.supplierPayable"
                          name="supplierPayable"
                          class="form-control"
                          placeholder="Supplier Payable"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr style="display:none;">
                    <td colspan="2"><hr /></td>
                  </tr>
                  <tr style="display:none;">
                    <td class="title-name">Other Cost</td>
                    <td>
                      <div>
                        <span v-if="negative5" style="color: red"
                          >Negative Value Not Allowed</span
                        >
                        <input
                          type="text"
                          v-model="form.otherCost"
                          @keyup="other"
                          @keyup.prevent="otherCosts()"
                          name="otherCost"
                          class="form-control"
                          placeholder="Other Cost"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr style="display:none;">
                    <td class="title-name">Damage &amp; Warranty</td>
                    <td>
                      <div>
                        <span v-if="negative6" style="color: red"
                          >Negative Value Not Allowed</span
                        >
                        <input
                          type="text"
                          @keyup="damage"
                          v-model="form.damageAndWarranty"
                          @keyup.prevent="damageAndWarrantys()"
                          name="damageAndWarranty"
                          class="form-control"
                          placeholder="Damage And Warranty"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2"><hr /></td>
                  </tr>
                  <tr>
                    <td class="title-name">Total Product Cost</td>
                    <td>
                      <div>
                        <input
                          type="text"
                          disabled
                          v-model="form.totalProductCost"
                          name="totalProductCost"
                          class="form-control"
                          placeholder="Total Product Cost"
                        />
                      </div>
                      <input
                        type="hidden"
                        disabled
                        v-model="form.totalDiscount"
                        name="totalDiscount"
                        class="form-control"
                        placeholder="Total Product Cost"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="title-name">Previous Payable</td>
                    <td>
                      <div>
                        <input
                          type="text"
                          disabled
                          v-model="form.previousPayable"
                          name="previousPayable"
                          class="form-control"
                          placeholder="Previous Payable"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="title-name">Current Payable</td>
                    <td>
                      <div>
                        <input
                          type="text"
                          disabled
                          v-model="form.currentPayable"
                          name="currentPayable"
                          class="form-control"
                          placeholder="Current Payable"
                        />
                      </div>
                    </td>
                  </tr>
                  <!-- <tr>
                     <td class="title-name">Payable</td>
                     <td>
                         <div>
                           <input type="text" v-model="form.payable" name="payable" class="form-control" placeholder="Payable ">
                         </div>
                      </td>
                   </tr> -->
                  <tr>
                    <td></td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        :data-target="'#pay'"
                        class="mt-3 ml-2 btn btn-warning"
                      >
                        <span class="mr-2 opacity-7">
                          <i class="fa fa-paper-plane"></i>
                        </span>
                        <span class="mr-1"> Pay Now </span>
                      </button>
                      <!-- <button type="submit" class="mt-3 mr-2 btn-pill btn-hover-shine btn btn-primary"> Submit </button> -->
                    </td>
                  </tr>
                </table>
                <!-- Modal Payment-->
                <div
                  class="modal fade"
                  :id="'pay'"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLongTitle"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header bg-primary text-light">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                          Pay Now
                        </h5>

                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>

                      <div class="modal-body">
                        <div class="row">
                          <div class="col-12 col-md-6 col-xs-12">
                            <div class="form-group m-0 row mt-2">
                              <div
                                class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0"
                              >
                                <label>Total : </label>
                              </div>
                              <div
                                class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0"
                              >
                                <input
                                  type="text"
                                  disabled
                                  v-model="form.currentPayable"
                                  class="form-control"
                                  placeholder="Cash Amount"
                                />
                              </div>
                            </div>
                            <div class="form-group m-0 row mt-2">
                              <div
                                class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0"
                              >
                                <label> Cash </label>
                              </div>
                              <div
                                class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0"
                              >
                                <input
                                  type="text"
                                  v-model="form.currentPaidAmount"
                                  @keyup="totalAmountCalculate"
                                  class="form-control"
                                  placeholder="Cash Amount"
                                />
                                <span
                                  style="color: red"
                                  v-if="negativepay == true"
                                  >Negative Ammount Not Allowed</span
                                ><br />
                                <span style="color: red" v-if="alert == true"
                                  >Insufficient Balance Avil Balance Is
                                  {{ this.avilable_balance }}</span
                                >
                              </div>
                            </div>
                            <div class="form-group m-0 row mt-2">
                              <div
                                class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0"
                              >
                                <label>Due: </label>
                              </div>
                              <div
                                class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0"
                              >
                                <input
                                  type="text"
                                  disabled
                                  v-model="form.currentDue"
                                  class="form-control"
                                  placeholder="Cash Amount"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-6 col-xs-12">
                           
                            <button v-if="morepay==false" class="btn btn-info" @click.prevent="open()" ><i class="fa fa-plus" aria-hidden="true"></i> More pay </button>
                            <button v-if="close==true" class="btn btn-danger" @click.prevent="closeForm()" ><i class="fa fa-minus" aria-hidden="true"></i>
 Close </button>
                            <div v-if="morepay">
                              <div class="form-group">
                                <label>Receiver Bank Type Name</label>
                                <select
                                  v-model="form.receiverbankTypeEntryId"
                                  name="bankTypeEntryId"
                                  class="form-control"
                                  :class="{
                                    'is-invalid':
                                      form.errors.has('bankTypeEntryId'),
                                  }"
                                  @change.prevent="receiverBankTypeIdCatch()"
                                >
                                  <option value="">Select One</option>
                                  <option
                                    v-for="showBankTypeData in showBankTypeDatas"
                                    :value="showBankTypeData.bankTypeEntryId"
                                  >
                                    {{ showBankTypeData.bankTypeEntryName }}
                                  </option>
                                </select>
                                <has-error
                                  :form="form"
                                  field="bankTypeEntryId"
                                ></has-error>
                              </div>
                              <div v-if="fromshow">
                                <div v-if="bankAccount">
                                  <div class="form-group">
                                    <label> Receiver Bank Name </label>
                                    <input
                                      type="text"
                                      v-model="form.receiverBankName"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group">
                                    <label> Receiver A/C No </label>
                                    <input
                                      type="text"
                                      v-model="form.receiverAcNo"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group">
                                    <label> Receiver A/C Name </label>
                                    <input
                                      type="text"
                                      v-model="form.receiverAcName"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group">
                                    <label> Branch </label>
                                    <input
                                      type="text"
                                      v-model="form.receiverBranchName"
                                      class="form-control"
                                    />
                                  </div>
                                </div>
                                <div v-if="bankCardAccount">
                                  <div class="form-group">
                                    <label> Receiver Bank Name </label>
                                    <input
                                      type="text"
                                      v-model="form.receiverBankName"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group">
                                    <label> Receiver Card No </label>
                                    <input
                                      type="text"
                                      v-model="form.receiverAcNo"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group">
                                    <label> Receiver Cardholder Name </label>
                                    <input
                                      type="text"
                                      v-model="form.receiverAcName"
                                      class="form-control"
                                    />
                                  </div>
                                  
                                </div>
                                <div v-if="mobileAccount">
                                  <div class="form-group">
                                    <label>
                                      Receiver Mobile A/C No
                                      <i
                                        class="
                                          fa fa-star
                                          text-danger text-10
                                          cursor-pointer
                                        "
                                        title="Mendatory Field"
                                        data-placement="top"
                                        data-toggle="tooltip"
                                        data-original-title="Mendatory Field"
                                      ></i
                                    ></label>
                                    <input
                                      type="text"
                                      v-model="form.receiverMobileAcNo"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group">
                                    <label> Trx No </label>
                                    <input
                                      type="text"
                                      v-model="form.receiverTrxNo"
                                      class="form-control"
                                    />
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label>Sender Bank Type Name</label>
                                  <select
                                    disabled
                                    v-model="form.senderbankTypeEntryId"
                                    name="bankTypeEntryId"
                                    class="form-control"
                                    :class="{
                                      'is-invalid':
                                        form.errors.has('bankTypeEntryId'),
                                    }"
                                    @change.prevent="bankTypeIdCatch()"
                                  >
                                    <option value="">Select One</option>
                                    <option
                                      v-for="showBankTypeData in showBankTypeDatas"
                                      :value="showBankTypeData.bankTypeEntryId"
                                    >
                                      {{ showBankTypeData.bankTypeEntryName }}
                                    </option>
                                  </select>
                                  <has-error
                                    :form="form"
                                    field="bankTypeEntryId"
                                  ></has-error>
                                </div>

                                <div class="form-group">
                                  <label>Sender Bank Name</label>
                                  <select
                                    v-model="form.senderbankEntryId"
                                    name="bankEntryId"
                                    class="form-control"
                                    :class="{
                                      'is-invalid':
                                        form.errors.has('bankEntryId'),
                                    }"
                                    @change.prevent="bankAccountIdCatch()"
                                  >
                                    <option value="">Select Bank Name</option>
                                    <option
                                      v-for="showBankName in showBankNames"
                                      :value="showBankName.bankEntryId"
                                    >
                                      {{ showBankName.bankName }}
                                    </option>
                                  </select>
                                  <has-error
                                    :form="form"
                                    field="bankEntryId"
                                  ></has-error>
                                </div>

                                <div class="form-group">
                                  <label>Sender Account No</label>
                                  <select
                                    v-model="form.senderbankAccountId"
                                    name="bankAccountId"
                                    class="form-control"
                                    :class="{
                                      'is-invalid':
                                        form.errors.has('bankAccountId'),
                                    }"
                                    @change="getBankMoreInfo()"
                                  >
                                    <option value="">
                                      Select Bank Account
                                    </option>
                                    <option
                                      v-for="showBankAccount in showBankAccounts"
                                      :value="showBankAccount.bankId"
                                    >
                                      <span
                                        v-if="showBankAccount.bankAccountName"
                                      >
                                        {{ showBankAccount.bankAccountName }}
                                      </span>

                                      <span v-else>
                                        {{ showBankAccount.bankAccountNumber }}
                                      </span>
                                    </option>
                                  </select>
                                  <has-error
                                    :form="form"
                                    field="bankAccountId"
                                  ></has-error>
                                </div>

                                <div v-if="bankInformationAccountInfoStatus">
                                  <div class="form-group" style="display: none">
                                    <label>Sender Branch Name </label>
                                    <input
                                      type="text"
                                      v-model="form.senderbranchName"
                                      class="form-control"
                                      readonly
                                    />
                                  </div>

                                  <div class="form-group">
                                    <label> Sender Account No</label>
                                    <input
                                      type="text"
                                      v-model="form.senderAccNo"
                                      class="form-control"
                                      readonly
                                    />
                                  </div>
                                </div>
                                <div class="form-group m-0 row mt-2">
                                  <div
                                    class="
                                      col-lg-4 col-md-6 col-sm-4 col-12
                                      pl-0
                                    "
                                  >
                                    <label>Amount </label>
                                  </div>
                                  <div
                                    class="
                                      col-lg-7 col-md-6 col-sm-8 col-12
                                      pl-0
                                    "
                                  >
                                    <input
                                      type="text"
                                      v-model="form.bankAmount"
                                      @keyup="bankAmountCalculate"
                                      class="form-control"
                                      placeholder="Bank  Amount"
                                    />
                                    <span
                                      style="color: red"
                                      v-if="negativepaybank == true"
                                      >Negative Ammount Not Allowed</span
                                    >
                                    <span
                                      style="color: red"
                                      v-if="alert1 == true"
                                      >Insufficient Balance Avil Balance Is
                                      {{ this.avilable_bal }}</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <center>
                          <span v-if="paybutton == false">
                                 <button
                              type="submit"
                              :disabled="loadingPay"
                              class="
                                mt-3
                                btn-pill btn-shadow btn-wide
                                fsize-1
                                btn btn-warning btn-lg
                              "
                            >
             
                <span
                  v-if="loadingPay"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                              <span class="mr-2 opacity-7">
                                <i class="fa fa-paper-plane"></i>
                              </span>
                              <span class="mr-1"> Pay Now </span>
                            </button>
                          </span>
                          <span v-if="paybutton">
                            <button
                              disabled
                              type="submit"
                           
                              class="
                                mt-3
                                btn-pill btn-shadow btn-wide
                                fsize-1
                                btn btn-warning btn-lg
                              "
                            >
                              <span class="mr-2 opacity-7">
                                <i class="fa fa-paper-plane"></i>
                              </span>
                              <span class="mr-1"> Pay Now </span>
                            </button>
                          </span>
                        </center>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-hover-shine btn-danger"
                          data-dismiss="modal"
                        >
                          Close
                        </button>

                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="card main-card element-block-example mt-5">
      <div
        class="card-header"
        style="
          background: rgba(221, 221, 221, 0.2);
          border: 1px solid rgba(0, 0, 0, 0.05);
        "
      >
        <h3 style="color: black">Re-Purchase Invoice List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
            <tr style="background: rgba(242, 242, 242, 0.47)">
              <th>SN</th>
              <th>Purchase Date</th>
              <th>Purchase Invoice No</th>
              <th>Supplier Name</th>
              <th>Purchase Type</th>
              <th>Total Purcase Value</th>
              <th>Total Purcase Cost</th>
              <th>View</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(purchaseInvoiceList, index) in purchaseInvoiceLists">
              <td>{{ index + 1 }}</td>
              <td>{{ purchaseInvoiceList.purchaseDate }}</td>
              <td>{{ purchaseInvoiceList.purchaseInvoiceNo }}</td>
              <td v-if="purchaseInvoiceList.product_supplier_name">
                {{
                  purchaseInvoiceList.product_supplier_name.productSupplierName
                }}
              </td>
              <td>
                {{ purchaseInvoiceList.purchase_type.purchaseType }}
              </td>
              <td>{{ purchaseInvoiceList.totalPurchaseValue }}</td>
              <td>{{ purchaseInvoiceList.totalProductCost }}</td>
              <td>
                <router-link
                  :to="`/ProductInvoiceView${purchaseInvoiceList.purchaseInvoiceId}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine
                  "
                  ><i class="fa fa-eye mr-1"></i> View</router-link
                >
              </td>
              <!-- <td>
                    <router-link :to="`/purchase@entryEdit${purchaseInvoiceList.purchaseInvoiceId}`" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"><i class=" fa fa-edit"></i>Edit</router-link>
                  </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </span>
</template>

<script>
import { VueEditor } from "vue2-editor";
import Datepicker from "vuejs-datepicker";
import moment from "moment";

export default {
  data() {
    return {
      form: new Form({

        openingPurchaseRepurchase:2,

        purchaseDate: "",
        purchaseInvoiceNo: "",
        productSupplierId: "",
        moblieNo: "",
        address: "",
        rePurchaseStatus: 1,
        // Product Field
        purchaseTypeId: [],
        productId: "",
        brandId: "",
        unitId: "",
        colorId: "",
        colorId1: "",
        sizeId: "",
        sizeId1: "",
        quantity: "",
        unitPrice: "",
        percetage: "",
        totalPrice: "",
        percetagePrice: "",
        // Total calculation
        totalProductQuantity: "",
        totalPurchaseValue: "",
        carriageInward: 0,
        totalAmount: "",
        discount: 0,
        supplierPayable: "",
        otherCost: 0,
        damageAndWarranty: 0,
        totalProductCost: "",
        totalDiscount: "",
        previousPayable: "",
        currentPayable: "",
        lastUnitPrice: "",
        // payable : '',

        // Modal Form
        purchaseProductIdCatch: "",
        modelNo: "",
        batchNo: "",
        qrCode: "",
        mfgLicenseNO: "",
        warranty: "",
        selectMothOrYearWarranty: "",
        guarantee: "",
        selectMothOrYearGuarantee: "",
        mfgDate: "",
        expiryDate: "",
        tax: "",
        taxAmount: "",
        taxAmountType: "",
        quantityType: "",
        quantityNoti: "",
        proDescription: "",
        proAdvantage: "",
        // Add More Field
        fieldNameOne: "",
        fieldNameTwo: "",
        fieldNameThree: "",
        fieldNameFour: "",
        workOne: "",
        workTwo: "",
        workThree: "",
        workFour: "",
        // Modal Form
        purchaseProductId: "",
        productBrandId: "",
        supplierId: "",
        detailsStatus: 1,
        //bank info sender
        receiverbankTypeEntryId: "",
        receiverBankName: "",
        receiverAcNo: "",
        receiverAcName: "",
        receiverBranchName: "",
        receiverMobileAcNo: "",
        receiverTrxNo: "",
        //receiver bank info
        senderbankTypeEntryId: "",
        senderbankEntryId: "",
        senderbankAccountId: "",
        senderbranchName: "",
        senderAccNo: "",
        currentPaidAmount: 0,
        currentDue: "",
        bankAmount: 0,
      }),

      productTable:false,
      
      colorStatus:false,
      sizeStatus:false,
      supplierStatus:false,
      purchaseProductListGets: {},
      brandWiseProductLists: [],
      brandLists: [],
      colorLists: [],
      sizeLists: [],
      brandListgets: [],
      suppliers: [],
      shopProductBrandLists: [],
      productSupplierLists: [],
      productNameLists: [],
      purchaseTypes: [],
      countryLists: [],
      countryLists: [],
      unitNameShows: [],
      purchaseProductLists: [],
      purchaseInvoiceLists: [],
      info: "",
      productBrand: false,
      listShow: false,
      negative: false,
      negative1: false,
      negative2: false,
      negative3: false,
      negative4: false,
      negative5: false,
      negative6: false,
      negative7: false,
      fromshow: false,
      negativepay: false,
      negativepaybank: false,
      guestInfo: true,
      //bank Inf0

      pendingCount: "",
      paymentTypeLists: {},
      showBankNames: [],
      showBankAccounts: [],
      showBankTypeDatas: [],
      bankInformationAccountInfoStatus: [],
      mobileAccount: false,
      bankAccount: false,
      bankCardAccount: false,
      alert: false,
      alert1: false,
      paybutton: false,
       morepay:false,
      close:false,
      avilable_balance: "",
      avilable_bal: "",
       loading:false,
      loadingPay:false,
      product:false,
    };
  },
  props: {
    limit: {
      type: Number,
      default: 2,
    },
  },
  components: {
    VueEditor,
    Datepicker,
  },
  mounted() {
    this.salesProductNameList();
    // re
    this.countryList();
    this.purchaseInvoiceNo();
    this.productSupplierList();
    this.purchaseTypeShow();
    this.unitNameShow();
    this.productNameShow();
    this.productList();
    this.totalPurchaseValue();
    this.purchaseInvoiceList();
    this.getData();
    this.colorList();
    this.sizeList();
  },
  methods: {
          
        priceEntry(e){
          this.productTable=false;
          axios
        .get("/salesProductPurchaseId/" +e)
        .then((res) => {
            // this.form.productPurchaseTypeId=e;
            this.form.colorId1 = res.data.productList.colorId;
            this.form.colorId = res.data.productList.colorId;
            this.form.sizeId1 = res.data.productList.sizeId;
            this.form.sizeId = res.data.productList.sizeId;

            this.showSupplier();
            // this.productInformation = true;

            // this.productText = res.data.productList.product_name.productName;
            // this.productBrandText = res.data.productList.brand_name.productBrandName;
            // this.productColorText = res.data.productList.colorId;
            // this.productSizeText = res.data.productList.sizeId;

            // this.form.unitPrice = res.data.productList.unitPrice;
            // this.form.productNameId = res.data.productList.product_name.productName;
            // this.form.productId = res.data.productList.productId;
            // this.form.purchaseProductId1 = res.data.productList.purchaseProductId;

            
           });
        },
            selectBrand1(){
          
      axios
        .get("/purchaseProductListBrandWise/" +this.form.purchaseProductId +"/" +this.form.productBrandId)
        .then((res) => {
          this.productTable = true;
          this.brandWiseProductLists = res.data.productList;
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
    currentDue(){
this.form.currentDue=this.form.currentPayable;
},
open(){
this.morepay=true;
this.close=true;
},
   
closeForm(){
this.morepay=false;
this.close=false;
},
    customFormatter(date) {
      return moment(date).format("DD-MM-YYYY");
    },
    salesProductNameList() {
      axios.get("/salesProductNameShow").then((res) => {
        this.purchaseProductListGets = res.data.purchaseProductListinfo;
      });
    },

    quantity(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.quantity !== "") {
        this.negative = true;

        this.form.quantity = 1;
      } else {
        if (this.form.quantity < 0) {
          this.negative = true;
          this.form.quantity = 1;
        } else {
          this.negative = false;
        }
        this.negative = false;
      }
    },
    unit(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.unitPrice !== "") {
        this.negative1 = true;

        this.form.unitPrice = 1;
      } else {
        if (this.form.unitPrice < 0) {
          this.negative1 = true;
          this.form.unitPrice = 1;
        } else {
          this.negative1 = false;
        }
        this.negative1 = false;
      }
    },
    disnt(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.percetage !== "") {
        this.negative2 = true;

        this.form.percetage = 1;
      } else {
        if (this.form.percetage < 0) {
          this.negative2 = true;
          this.form.percetage = 1;
        } else {
          this.negative2 = false;
        }
        this.negative2 = false;
      }
    },
    inward(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.carriageInward !== "") {
        this.negative3 = true;

        this.form.percetage = 0;
      } else {
        if (this.form.carriageInward < 0) {
          this.negative3 = true;
          this.form.carriageInward = 0;
        } else {
          this.negative3 = false;
        }
        this.negative3 = false;
      }
    },
    dis(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.discount !== "") {
        this.negative4 = true;

        this.form.discount = 0;
      } else {
        if (this.form.discount < 0) {
          this.negative4 = true;
          this.form.discount = 0;
        } else {
          this.negative4 = false;
        }
        this.negative4 = false;
      }
    },
    other(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.otherCost !== "") {
        this.negative5 = true;

        this.form.otherCost = 0;
      } else {
        if (this.form.otherCost < 0) {
          this.negative5 = true;
          this.form.otherCost = 0;
        } else {
          this.negative5 = false;
        }
        this.negative5 = false;
      }
    },
    damage(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.damageAndWarranty !== "") {
        this.negative6 = true;

        this.form.damageAndWarranty = 0;
      } else {
        if (this.form.damageAndWarranty < 0) {
          this.negative6 = true;
          this.form.damageAndWarranty = 0;
        } else {
          this.negative6 = false;
        }
        this.negative6 = false;
      }
    },
    showProductBrand() {
      
      this.colorStatus=false;
      this.sizeStatus=false;
      this.supplierStatus=false;
      this.lastPriceStatus=false;
      this.form.sizeId='';
      this.form.colorId='';

      axios
        .get("/productUnitePrice/" + this.form.purchaseProductId)
        .then((res) => {
          this.brandLists = res.data.brandListgt;
          this.productBrand = true;
        });
    },
    selectBrand(){
      axios.get("/colorListByBrandId/"+this.form.purchaseProductId+'/'+this.form.productBrandId).then((res) => {
        this.colorStatus = res.data.colorStatus;
        this.colorLists = res.data.colorList;
        if(res.data.colorStatus==0){
        this.showSupplier();
      }
      });

      
    },
    selectColor(){
      axios.get("/sizeListByColorId/"+this.form.purchaseProductId+'/'+this.form.productBrandId+'/'+this.form.colorId1).then((res) => {
        this.sizeLists = res.data.sizeList; 
        this.sizeStatus = res.data.sizeStatus; 
        if(res.data.sizeStatus==0){
          this.supplierStatus=true;
        this.showSupplier();
      }
      });
    },
    selectSize(){
      this.supplierStatus=true;
        this.showSupplier();
    },
    showSupplier() {
      this.supplierStatus=true;
      this.form.supplierId = '';
      axios
        .get(
          "/supplierListGetRepurchase/" +this.form.purchaseProductId+"/"+this.form.productBrandId+"/"+this.form.colorId+"/"+this.form.sizeId
        )
        .then((res) => {
          this.suppliers = res.data.suppliers;
          //  this.productBrand = true
        });

    },
    showColor(){
      axios.get("/colorListByBrandId/"+this.form.purchaseProductId+'/'+this.form.productBrandId).then((res) => {
        this.colorLists = res.data.colorList;
      });
    },
    showSize(){
      axios.get("/sizeListByColorId/"+this.form.purchaseProductId+'/'+this.form.productBrandId+'/'+this.form.colorId1).then((res) => {
        this.sizeLists = res.data.sizeList;
      });
    },
    showInfo() {
      
      this.lastPriceStatus=true;

      let url = '';
      if(this.form.sizeId1){
       url = "/rePurchaseGetSize/"+this.form.purchaseProductId +"/" +this.form.productBrandId +"/" +this.form.supplierId+"/" +this.form.colorId1+"/" +this.form.sizeId1
      }
      else if(this.form.colorId1){
       url = "/rePurchaseGetColor/"+this.form.purchaseProductId +"/" +this.form.productBrandId +"/" +this.form.supplierId+"/" +this.form.colorId1
      }
      else{
       url = "/rePurchaseGet/"+this.form.purchaseProductId +"/" +this.form.productBrandId +"/" +this.form.supplierId
      }
      axios
        .get(url)
        .then((res) => {
          this.form.productSupplierId = res.data.infos.productSupplierId;
          this.form.moblieNo =
            res.data.infos.product_supplier_name.productSupplierPhone;
          this.form.address =
            res.data.infos.product_supplier_name.productSupplierAddress;
          this.form.productId = res.data.infos.productId;
          this.form.brandId = res.data.infos.brandId;
          this.form.unitId = res.data.infos.unitId;
          this.form.colorId = res.data.infos.colorId;
          this.form.sizeId = res.data.infos.sizeId;
          this.form.lastUnitPrice = res.data.infos.unitPrice;
          this.form.countryId = res.data.infos.countryId;
          this.form.purchaseTypeId = res.data.infos.purchaseType;

          // this.form.previousPayable = res.data.previousdue;
          // this.cusPreviousPayable = res.data.previousdue;

          axios
            .get("getLastBalanceByAccCode/" + res.data.accCode)
            .then((res) => {
              this.form.previousPayable = res.data.balance;
              this.cusPreviousPayable = res.data.balance;
                 if (this.cusPreviousPayable > 0) {
          let totalcurrant =parseFloat(this.cusPreviousPayable) + parseFloat(this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        }
            });
          this.purchaseProductIdCatch();

          // moblieNo : '',
          // address : '',
          // // Product Field
          // purchaseTypeId : [],
          // productId : '',
          // brandId : '',
          // unitId : '',
          // quantity : '',
          // unitPrice : '',
          // percetage : '',
          // totalPrice : '',
          // percetagePrice : '',
          this.info = res.data.infos;
          //  this.productBrand = true
        });
    },
    // re
    addMoreField() {
      this.fieldNameOneShow = true;
      if (this.form.fieldNameOne != "" && this.form.workOne != "") {
        this.fieldNameTwoShow = true;
      }
      if (this.form.fieldNameTwo != "" && this.form.workTwo != "") {
        this.fieldNameThreeShow = true;
      }
      if (this.form.fieldNameThree != "" && this.form.workThree != "") {
        this.fieldNameFourShow = true;
      }
    },

    oneFieldDelete(id) {
      axios.get("/purchaseProductMoreFieldDelete/" + id).then((res) => {
        if (res.data.delete == 1) {
          this.fieldNameOneShow = false;
          if (this.form.fieldNameOne != null) {
            this.form.fieldNameOne = [];
            this.form.workOne = [];
          }
        } else {
          Toast.fire({
            icon: "error",
            title: "Data not delete",
          });
        }
      });
    },
    twoFieldDelete(id) {
      axios.get("/purchaseProductMoreFieldDelete/" + id).then((res) => {
        if (res.data.delete == 1) {
          this.fieldNameTwoShow = false;
          if (this.form.fieldNameTwo != null) {
            this.form.fieldNameTwo = [];
            this.form.workTwo = [];
          }
        } else {
          Toast.fire({
            icon: "error",
            title: "Data not delete",
          });
        }
      });
    },
    threeFieldDelete(id) {
      axios.get("/purchaseProductMoreFieldDelete/" + id).then((res) => {
        if (res.data.delete == 1) {
          this.fieldNameThreeShow = false;
          if (this.form.fieldNameThree != null) {
            this.form.fieldNameThree = [];
            this.form.workThree = [];
          }
        } else {
          Toast.fire({
            icon: "error",
            title: "Data not delete",
          });
        }
      });
    },
    fourFieldDelete(id) {
      axios.get("/purchaseProductMoreFieldDelete/" + id).then((res) => {
        if (res.data.delete == 1) {
          this.fieldNameFourShow = false;
          if (this.form.fieldNameFour != null) {
            this.form.fieldNameFour = [];
            this.form.workFour = [];
          }
        } else {
          Toast.fire({
            icon: "error",
            title: "Data not delete",
          });
        }
      });
    },
    purchaseProductDetailsAdd() {
      this.form.post("/purchaseProductDetails").then((res) => {
        Toast.fire({
          icon: "success",
          title: "Product Details Entry Successfully",
        });
        //  this.form.taxAmountTypeShow = false;
        //  this.form.fieldNameOneShow = false;
        //  this.form.fieldNameTwoShow = false;
        //  this.form.fieldNameThreeShow = false;
        //  this.form.fieldNameFourShow = false;

        //  this.form.purchaseProductIdCatch = '';
        //  this.form.modelNo = '';
        //  this.form.batchNo = '';
        //  this.form.qrCode = '';
        //  this.form.mfgLicenseNO = '';
        //  this.form.warranty = '';
        //  this.form.selectMothOrYearWarranty = '';
        //  this.form.guarantee = '';
        //  this.form.selectMothOrYearGuarantee = '';
        //  this.form.mfgDate = '';
        //  this.form.expiryDate = '';
        //  this.form.tax = '';
        //  this.form.taxAmount = '';
        //  this.form.taxAmountType = '';;
        //  this.form.quantityType = '';
        //  this.form.quantityNoti = '';
        //  this.form.proDescription = '';
        //  this.form.proAdvantage = '';
        //  // Add More Field
        //  this.form.fieldNameOne = '';
        //  this.form.fieldNameTwo = '';
        //  this.form.fieldNameThree = '';
        //  this.form.fieldNameFour = '';
        //  this.form.workOne = '';
        //  this.form.workTwo = '';
        //  this.form.workThree = '';
        //  this.form.workFour = '';
      });
    },

    purchaseProductIdCatch() {
      //  this.form.purchaseProductIdCatch  = purchaseProductId;
      axios
        .get(
          "/invoiceProductMoreDetailsInfo/" +
            this.form.productId +
            "/" +
            this.form.productSupplierId
        )
        .then((res) => {
          this.form.modelNo = res.data.invoiceProductMoreDetailss.modelNo;
          this.form.batchNo = res.data.invoiceProductMoreDetailss.batchNo;
          this.form.qrCode = res.data.invoiceProductMoreDetailss.qrCode;
          this.form.mfgLicenseNO =
            res.data.invoiceProductMoreDetailss.mfgLicenseNO;
          this.form.warranty = res.data.invoiceProductMoreDetailss.warranty;
          this.form.selectMothOrYearWarranty =
            res.data.invoiceProductMoreDetailss.selectMothOrYearWarranty;
          this.form.guarantee = res.data.invoiceProductMoreDetailss.guarantee;
          this.form.selectMothOrYearGuarantee =
            res.data.invoiceProductMoreDetailss.selectMothOrYearGuarantee;
          this.form.mfgDate = res.data.invoiceProductMoreDetailss.mfgDate;
          this.form.expiryDate = res.data.invoiceProductMoreDetailss.expiryDate;
          this.form.tax = res.data.invoiceProductMoreDetailss.tax;
          this.form.taxAmount = res.data.invoiceProductMoreDetailss.taxAmount;
          this.form.taxAmountType =
            res.data.invoiceProductMoreDetailss.taxAmountType;
          this.form.quantityType =
            res.data.invoiceProductMoreDetailss.quantityType;
          this.form.quantityNoti =
            res.data.invoiceProductMoreDetailss.quantityNoti;
          this.form.proDescription =
            res.data.invoiceProductMoreDetailss.proDescription;
          this.form.proAdvantage =
            res.data.invoiceProductMoreDetailss.proAdvantage;

          // Add More Field
          this.form.fieldNameOne = "";
          this.form.fieldNameTwo = "";
          this.form.fieldNameThree = "";
          this.form.fieldNameFour = "";
          this.form.workOne = "";
          this.form.workTwo = "";
          this.form.workThree = "";
          this.form.workFour = "";

          if (res.data.invoiceProductMoreField1.serialId == 1) {
            this.fieldNameOneShow =
              res.data.invoiceProductMoreField1.purchaseProductMoreFieldId;
            this.form.fieldNameOne =
              res.data.invoiceProductMoreField1.optionName;
            this.form.workOne = res.data.invoiceProductMoreField1.optionWork;
          }

          if (res.data.invoiceProductMoreField2.serialId == 2) {
            this.fieldNameTwoShow =
              res.data.invoiceProductMoreField2.purchaseProductMoreFieldId;
            this.form.fieldNameTwo =
              res.data.invoiceProductMoreField2.optionName;
            this.form.workTwo = res.data.invoiceProductMoreField2.optionWork;
          }

          if (res.data.invoiceProductMoreField3.serialId == 3) {
            this.fieldNameThreeShow =
              res.data.invoiceProductMoreField3.purchaseProductMoreFieldId;
            this.form.fieldNameThree =
              res.data.invoiceProductMoreField3.optionName;
            this.form.workThree = res.data.invoiceProductMoreField3.optionWork;
          }

          if (res.data.invoiceProductMoreField4.serialId == 4) {
            this.fieldNameFourShow =
              res.data.invoiceProductMoreField4.purchaseProductMoreFieldId;
            this.form.fieldNameFour =
              res.data.invoiceProductMoreField4.optionName;
            this.form.workFour = res.data.invoiceProductMoreField4.optionWork;
          }
        });
    },
    purchaseProductIdCatchInfo(id, productId, productSupplierId) {
      //  this.form.purchaseProductIdCatch  = purchaseProductId;
      axios
        .get(
          "/invoiceProductMoreDetailsInfo/" +
            productId +
            "/" +
            productSupplierId
        )
        .then((res) => {
          this.form.modelNo = res.data.invoiceProductMoreDetailss.modelNo;
          this.form.batchNo = res.data.invoiceProductMoreDetailss.batchNo;
          this.form.qrCode = res.data.invoiceProductMoreDetailss.qrCode;
          this.form.mfgLicenseNO =
            res.data.invoiceProductMoreDetailss.mfgLicenseNO;
          this.form.warranty = res.data.invoiceProductMoreDetailss.warranty;
          this.form.selectMothOrYearWarranty =
            res.data.invoiceProductMoreDetailss.selectMothOrYearWarranty;
          this.form.guarantee = res.data.invoiceProductMoreDetailss.guarantee;
          this.form.selectMothOrYearGuarantee =
            res.data.invoiceProductMoreDetailss.selectMothOrYearGuarantee;
          this.form.mfgDate = res.data.invoiceProductMoreDetailss.mfgDate;
          this.form.expiryDate = res.data.invoiceProductMoreDetailss.expiryDate;
          this.form.tax = res.data.invoiceProductMoreDetailss.tax;
          this.form.taxAmount = res.data.invoiceProductMoreDetailss.taxAmount;
          this.form.taxAmountType =
            res.data.invoiceProductMoreDetailss.taxAmountType;
          this.form.quantityType =
            res.data.invoiceProductMoreDetailss.quantityType;
          this.form.quantityNoti =
            res.data.invoiceProductMoreDetailss.quantityNoti;
          this.form.proDescription =
            res.data.invoiceProductMoreDetailss.proDescription;
          this.form.proAdvantage =
            res.data.invoiceProductMoreDetailss.proAdvantage;

          // Add More Field
          this.form.fieldNameOne = "";
          this.form.fieldNameTwo = "";
          this.form.fieldNameThree = "";
          this.form.fieldNameFour = "";
          this.form.workOne = "";
          this.form.workTwo = "";
          this.form.workThree = "";
          this.form.workFour = "";

          if (res.data.invoiceProductMoreField1.serialId == 1) {
            this.fieldNameOneShow =
              res.data.invoiceProductMoreField1.purchaseProductMoreFieldId;
            this.form.fieldNameOne =
              res.data.invoiceProductMoreField1.optionName;
            this.form.workOne = res.data.invoiceProductMoreField1.optionWork;
          }

          if (res.data.invoiceProductMoreField2.serialId == 2) {
            this.fieldNameTwoShow =
              res.data.invoiceProductMoreField2.purchaseProductMoreFieldId;
            this.form.fieldNameTwo =
              res.data.invoiceProductMoreField2.optionName;
            this.form.workTwo = res.data.invoiceProductMoreField2.optionWork;
          }

          if (res.data.invoiceProductMoreField3.serialId == 3) {
            this.fieldNameThreeShow =
              res.data.invoiceProductMoreField3.purchaseProductMoreFieldId;
            this.form.fieldNameThree =
              res.data.invoiceProductMoreField3.optionName;
            this.form.workThree = res.data.invoiceProductMoreField3.optionWork;
          }

          if (res.data.invoiceProductMoreField4.serialId == 4) {
            this.fieldNameFourShow =
              res.data.invoiceProductMoreField4.purchaseProductMoreFieldId;
            this.form.fieldNameFour =
              res.data.invoiceProductMoreField4.optionName;
            this.form.workFour = res.data.invoiceProductMoreField4.optionWork;
          }
        });
    },

    purchaseInvoiceNo() {
      axios.get("/purchaseInvoiceShow").then((res) => {
        this.form.purchaseInvoiceNo = res.data.purchaseInvoiceIncrement;
        this.cusPurchaseInvoice = res.data.purchaseInvoiceIncrement;
        this.form.purchaseDate = res.data.currentDate;
      });
    },
    productSupplierList() {
      axios.get("/shopWishProductSupplier").then((res) => {
        this.productSupplierLists = res.data.productSupplierList;
      });
    },
    productSupplierId() {
      axios
        .get("/shopWishProductSupplierId/" + this.form.productSupplierId)
        .then((res) => {
          this.form.moblieNo = res.data.productSupplierPhone;
          this.form.address = res.data.productSupplierAddress;

          this.form.previousPayable = res.data.previousdue;
          this.cusPreviousPayable = res.data.previousdue;
             if (this.cusPreviousPayable > 0) {
          let totalcurrant =parseFloat(this.cusPreviousPayable) + parseFloat(this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        }
        });
      this.totalPurchaseValue();
    },
    purchaseTypeShow() {
      axios.get("/purchaseTypeShow").then((res) => {
        this.purchaseTypes = res.data.purchaseType;
      });
    },
    unitNameShow() {
      axios.get("/unitNameShow").then((res) => {
        this.unitNameShows = res.data.unitNameShow;
        this.brandListgets = res.data.brandLists;
      });
    },
    productNameShow() {
      axios.get("/productNameShow").then((res) => {
        this.productNameLists = res.data.productNameList;
      });
    },
    unitPrice() {
      let quantity = this.form.quantity;
      let unitPrice = this.form.unitPrice;
      let totalPrice = quantity * unitPrice;
      this.form.totalPrice = totalPrice;
      this.form.percetagePrice = totalPrice;
    },
    percetage() {
      if (this.form.percetage != "") {
        let discountDiv =
          (parseFloat(this.form.percetage) *
            parseFloat(this.form.percetagePrice)) /
          parseFloat(100);
        let discount =
          parseFloat(this.form.percetagePrice) - parseFloat(discountDiv);
        this.form.totalPrice = discount;
      } else {
        this.unitPrice();
      }
    },
     addProduct() {
           this.loading = true;
      if (this.form.productSupplierId != "") {
        this.form.post("/reProductEntry").then((res) => {
              this.loading = false;
              this.product=true;
          if (res.data.alreadyEntry) {
             Toast.fire({
              icon: "error",
              title: "Already Product Entry!",
            });
            // Swal.fire({
            //   icon: "error",
            //   title: "Oops...",
            //   text: "Already Product Entry!",
            //   showCancelButton: true,
            //   confirmButtonColor: "#3085d6",
            //   cancelButtonColor: "#d33",
            //   confirmButtonText: "Product Quantity Update",
            // }).then((res) => {
            //   this.form.post("/productQuantityUpdate").then((res) => {
                // Swal.fire(
                //   'Successfully!',
                //   'Product Quantity has been Updated',
                // )
            //     this.productList();
            //     this.form.productId = "";
            //     this.form.brandId = "";
            //     this.form.purchaseTypeId = "";
            //     this.form.countryId = "";
            //     this.form.quantity = "";
            //     this.form.unitId = "";
            //     this.form.unitPrice = "";
            //     this.form.totalPrice = "";
            //     this.form.percetage = "";
            //     this.form.percetagePrice = "";
            //   });
            // });
          } else if (res.data.countryNeed) {
            Toast.fire({
              icon: "error",
              title: "Please select Country",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Product Entry Successfully",
            });
            this.form.productBrandId = '';
            this.form.supplierId = '';
            this.form.productId = "";
            this.form.brandId = "";
            
     
          
            this.form.quantity = "";
            this.form.unitId = "";
            this.form.unitPrice = "";
            this.form.totalPrice = "";
            this.form.percetage = "";
            this.form.percetagePrice = "";
            this.productList();
          }
        }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
      } else {
         this.loading = false;
        Toast.fire({
          icon: "error",
          title: "Select Product Supplier Name",
        });
      }
    },

    // addProduct() {
    //   if (this.form.productSupplierId != "") {
    //     this.form.post("/productEntry").then((res) => {
    //       if (res.data.alreadyEntry) {
    //         Swal.fire({
    //           icon: "error",
    //           title: "Oops...",
    //           text: "Already Product Entry!",
    //           showCancelButton: true,
    //           confirmButtonColor: "#3085d6",
    //           cancelButtonColor: "#d33",
    //           confirmButtonText: "Product Quantity Update",
    //         }).then((res) => {
    //           this.form.post("/productQuantityUpdate").then((res) => {
    //             // Swal.fire(
    //             //   'Successfully!',
    //             //   'Product Quantity has been Updated',
    //             // )
    //             this.productList();

    //             this.form.brandId = "";
    //             this.form.purchaseTypeId = "";
    //             this.form.countryId = "";
    //             this.form.quantity = "";
    //             this.form.unitId = "";
    //             this.form.unitPrice = "";
    //             this.form.totalPrice = "";
    //             this.form.percetage = "";
    //             this.form.percetagePrice = "";
    //             this.purchaseProductDetailsAdd();
    //             this.form.productId = "";
    //           });
    //         });
    //       } else if (res.data.countryNeed) {
    //         Toast.fire({
    //           icon: "error",
    //           title: "Please select Country",
    //         });
    //       } else {
    //         Toast.fire({
    //           icon: "success",
    //           title: "Product Entry Successfully",
    //         });

    //         this.form.brandId = "";
    //         this.form.purchaseTypeId = "";
    //         this.form.countryId = "";
    //         this.form.quantity = "";
    //         this.form.unitId = "";
    //         this.form.unitPrice = "";
    //         this.form.totalPrice = "";
    //         this.form.percetage = "";
    //         this.form.percetagePrice = "";
    //         this.productList();
    //         this.purchaseProductDetailsAdd();
    //         this.form.productId = "";
    //       }
    //     });
    //   } else {
    //     Toast.fire({
    //       icon: "error",
    //       title: "Select Product Supplier Name",
    //     });
    //   }
    // },

    productList() {
      axios.get("/productList").then((res) => {
        this.purchaseProductLists = res.data.purchaseProductList;
        
        this.productBrandLists = res.data.productBrandList;
        this.purchaseTypeLists = res.data.purchaseTypeList;
        this.totalPurchaseValue();
      });
    },
    totalPurchaseValue() {
      axios
        .get("/totalPurchaseValue/" + this.cusPurchaseInvoice)
        .then((res) => {
          let sum = 0;
          let quantity = 0;
          res.data.purchaseProductList.forEach((productPrice) => {
            sum += parseFloat(productPrice.totalPrice);
            quantity += parseFloat(productPrice.quantity);
          });
          this.form.totalProductQuantity = quantity;
          this.form.totalPurchaseValue = sum;
          this.form.totalAmount = sum;
          this.form.supplierPayable = sum;
          this.form.totalProductCost = sum;
          this.form.totalDiscount = sum;
          this.form.currentPayable = sum;
          if (this.cusPreviousPayable > 0) {
              let totalcurrant =
              parseFloat(this.cusPreviousPayable) +
              parseFloat(this.form.currentPayable);
            this.form.currentPayable = totalcurrant;
          }
           this.currentDue();
        });
    },
    carriageInward() {
      if (this.form.carriageInward == "") {
        this.totalPurchaseValue();
      } else {
        let totalAmount =
          parseFloat(this.form.carriageInward) +
          parseFloat(this.form.totalPurchaseValue);
        this.form.totalAmount = totalAmount;
        this.form.supplierPayable = totalAmount;
        this.form.totalProductCost = totalAmount;
        this.form.totalDiscount = totalAmount;
        this.form.currentPayable = totalAmount;
        if (this.cusPreviousPayable > 0) {
          let totalcurrant =
            parseFloat(this.cusPreviousPayable) +
            parseFloat(this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        }
      }
    },
    discount() {
      if (this.form.discount == "") {
        this.carriageInward();
      } else {
        let discount =
          parseFloat(this.form.totalAmount) - parseFloat(this.form.discount);
        this.form.supplierPayable = discount;
        this.form.totalProductCost = discount;
        this.form.totalDiscount = discount;
        this.form.currentPayable = discount;
        if (this.cusPreviousPayable > 0) {
          let totalcurrant =
            parseFloat(this.cusPreviousPayable) +
            parseFloat(this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        }
      }
    },
    otherCosts() {
      if (this.form.otherCost == "") {
        if (this.form.otherCost == "" && this.form.damageAndWarranty == "") {
          this.discount();
        }
      } else {
        let otherCost =
          parseFloat(this.form.totalDiscount) + parseFloat(this.form.otherCost);
        this.form.totalProductCost = otherCost;
        this.form.currentPayable = otherCost;
        if (this.cusPreviousPayable > 0) {
          let totalcurrant =
            parseFloat(this.cusPreviousPayable) +
            parseFloat(this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        }
      }
    },
    damageAndWarrantys() {
      if (this.form.damageAndWarranty == "") {
        if (this.form.otherCost == "" && this.form.damageAndWarranty == "") {
          this.discount();
        }
      } else {
        let damageAndWarranty =
          parseFloat(this.form.totalDiscount) +
          parseFloat(this.form.damageAndWarranty);

        let otherCost =
          parseFloat(damageAndWarranty) + parseFloat(this.form.otherCost);
        this.form.totalProductCost = otherCost;
        this.form.currentPayable = otherCost;

        if (this.cusPreviousPayable > 0) {
          let totalcurrant =
            parseFloat(this.cusPreviousPayable) +
            parseFloat(this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        }
      }
    },
    addPurchaseInvoice() {
        if (this.form.productSupplierId == "") {
        Toast.fire({
          icon: "error",
          title: "Supplier Id Required",
        });
      } else {
         this.loadingPay = true;
      this.form.post("/purchaseInvoice").then((res) => {
         this.loadingPay = false;
        Toast.fire({
          icon: "success",
          title: "Purchase Invoice Add Successfully",
        });
            $("#pay").modal("hide"); 
        (this.form.productSupplierId = []),
          (this.form.moblieNo = []),
          (this.form.address = []),
          (this.form.purchaseTypeId = []),
          (this.form.totalPurchaseValue = []);
        this.form.totalAmount = [];
        this.form.supplierPayable = [];
        this.form.totalProductCost = [];
        this.form.currentPayable = [];
        this.form.reset();
        this.purchaseInvoiceNo();
        this.purchaseInvoiceList();
      }).catch((res) => {
          this.loadingPay = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
      }
    },
    purchaseInvoiceList() {
      axios.get("/rePurchaseInvoice").then((res) => {
        this.purchaseInvoiceLists = res.data.purchaseInvoiceList;
        this.adminPurchaseTypeLists = res.data.adminPurchaseTypeList;
      });
    },
    countryList() {
      axios.get("/countryList/").then((res) => {
        this.countryLists = res.data.countryList;
      });
    },
    distroy(purchaseProductId) {
      axios.delete("/purchaseInvoice/" + purchaseProductId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Product Delete Successfully",
        });
        this.productList();
      });
    },
    taxYes() {
      this.taxAmountTypeShow = true;
    },
    taxNo() {
      this.taxAmountTypeShow = false;
      this.form.taxAmountType = [];
      this.form.taxAmount = [];
    },

    getData() {
      axios.get("/bankTypeEntryList").then((res) => {
        this.showBankTypeDatas = res.data.show;
      }),
        axios.get("/paymentTypeList").then((res) => {
          this.paymentTypeLists = res.data.data;
        }),
        axios.get("/addExpense").then((res) => {
          this.datas = res.data.data;
        });
    },
    receiverBankTypeIdCatch() {
      axios
        .get("/bankNameList/" + this.form.receiverbankTypeEntryId)
        .then((res) => {
          this.showBankNames = res.data.show;
          this.fromshow = true;
        });

      if (this.form.receiverbankTypeEntryId == 1) {
        this.form.senderbankTypeEntryId = 1;
        this.bankAccount = true;
        this.mobileAccount = false;
        this.bankCardAccount = false;
      }
      else if (this.form.receiverbankTypeEntryId == 2) {
        this.form.senderbankTypeEntryId = 2;
        this.bankAccount = false;
        this.bankCardAccount = false;
        this.mobileAccount = true;
      }
      else if (this.form.receiverbankTypeEntryId == 3) {
        this.form.senderbankTypeEntryId = 3;
        this.bankAccount = false;
        this.bankCardAccount = true;
        this.mobileAccount = false;
      }
    },
    bankTypeIdCatch() {
      axios
        .get("/bankNameList/" + this.form.senderbankTypeEntryId)
        .then((res) => {
          this.showBankNames = res.data.show;
        });
      if (this.form.senderbankTypeEntryId == 1) {
        this.bankAccount = true;
        this.mobileAccount = false;
        this.bankCardAccount = false;
      }
      else if (this.form.senderbankTypeEntryId == 2) {
        this.bankAccount = false;
        this.bankCardAccount = false;
        this.mobileAccount = true;
      }
      else if (this.form.senderbankTypeEntryId == 3) {
        this.bankAccount = false;
        this.bankCardAccount = true;
        this.mobileAccount = false;
      }
    },
    bankAccountIdCatch() {
      axios
        .get("/bankAccountListWithCard/" + this.form.senderbankEntryId+'/'+this.form.senderbankTypeEntryId)
        .then((res) => {
          this.showBankAccounts = res.data.data;
        });
    },

    getBankMoreInfo() {
      axios
        .get("/bankAccountMoreInfo/" + this.form.senderbankAccountId)
        .then((res) => {
          this.form.senderbranchName = res.data.data.bankBranch;
          this.form.senderAccNo = res.data.data.bankAccountNumber;
          this.bankInformationAccountInfoStatus = 1;
          let url = "checkBalance/" + res.data.data.accountCode;
          axios.get(url).then((response) => {
            this.avilable_bal = response.data.available_balance;
          });
        });
    },
    totalAmountCalculate(e) {
      //======================== check balance

      axios.get("/getCashRegister/1").then((res) => {
        let url = "checkBalance/" + res.data.accCode;
        axios.get(url).then((response) => {
          // this.available_balance_cash_status = true;
          this.avilable_balance = response.data.available_balance;
          // this.calculate_available_balance(response.data.available_balance,1); // cash
        });
      });

      //======================== check balance
      if (
        parseFloat(this.form.currentPaidAmount) >
        parseFloat(this.avilable_balance)
      ) {
        this.alert = true;
        this.aler1t = false;
        this.form.currentPaidAmount = 0;
        this.form.currentDue = this.form.currentPayable;
        this.paybutton = true;
      } else {
        this.paybutton = false;
        this.alert = false;
        this.alert1 = false;
        if (this.form.bankAmount == "") {
          this.totalcal = 0 + parseFloat(this.form.currentPaidAmount);
        } else {
          this.totalcal =
            parseFloat(this.form.currentPaidAmount) +
            parseFloat(this.form.bankAmount);
        }
        if (this.form.currentPaidAmount == "") {
          this.totalcal = parseFloat(this.form.bankAmount) + 0;
        }

        this.form.currentDue =
          parseFloat(this.form.currentPayable) - parseFloat(this.totalcal);
        if (this.form.currentPaidAmount < 0) {
          this.form.currentPaidAmount = 0;
          this.negativepay = true;
          this.paybutton = true;
        } else {
          this.paybutton = false;
          let stringValue = e.target.value.toString();
          let regex = /^\d*(\.\d{1,2})?$/;
          if (!stringValue.match(regex) && this.form.currentPaidAmount !== "") {
            this.form.currentPaidAmount = 0;
            this.negativepay = true;
            this.paybutton = true;
          } else {
            this.negativepay = false;
            this.paybutton = false;
            if (this.form.bankAmount != "") {
              if (
                parseFloat(this.form.bankAmount) +
                  parseFloat(this.form.currentPaidAmount) >
                this.form.currentPayable
              ) {
                this.negativepay = true;
                this.paybutton = true;
                this.form.currentPaidAmount = 0;
                this.form.currentDue =
                  parseFloat(this.form.currentPayable) -
                  parseFloat(this.form.bankAmount);
              } else {
                this.negativepay = false;
                this.paybutton = false;
              }
            } else {
              if (
                parseFloat(this.form.currentPaidAmount) >
                this.form.currentPayable
              ) {
                this.negativepay = true;
                this.paybutton = true;
                this.form.currentPaidAmount = 0;
                this.form.currentDue =
                  parseFloat(this.form.currentPayable) -
                  parseFloat(this.form.currentPaidAmount);
              } else {
                this.negativepay = false;
                this.paybutton = false;
              }
            }
          }
        }
      }
    },
    bankAmountCalculate(e) {
      if (this.form.bankAmount > this.avilable_bal) {
        this.alert1 = true;
        this.alert = false;
        this.form.bankAmount = 0;
        this.paybutton = true;
         this.form.currentDue =parseFloat(this.form.currentPayable) -parseFloat(this.form.currentPaidAmount)+parseFloat(this.form.bankAmount);
      } else {
        this.paybutton = false;
        this.alert1 = false;
        this.alert = false;
        if (this.form.currentPaidAmount == "") {
          this.totalcal = 0 + parseFloat(this.form.bankAmount);
        } else {
          this.totalcal =
            parseFloat(this.form.currentPaidAmount) +
            parseFloat(this.form.bankAmount);
        }
        if (this.form.bankAmount == "") {
          this.totalcal = parseFloat(this.form.currentPaidAmount) + 0;
        }

        this.form.currentDue =
          parseFloat(this.form.currentPayable) - parseFloat(this.totalcal);

        if (this.form.bankAmount < 0) {
          this.form.bankAmount = 0;
          this.negativepaybank = true;
        } else {
          let stringValue = e.target.value.toString();
          let regex = /^\d*(\.\d{1,2})?$/;
          if (!stringValue.match(regex) && this.form.bankAmount !== "") {
            this.form.bankAmount = "";
            this.negativepaybank = true;
          } else {
            this.negativepaybank = false;
            if (this.form.currentPaidAmount != "") {
              if (
                parseFloat(this.form.bankAmount) +
                  parseFloat(this.form.currentPaidAmount) >
                this.form.currentPayable
              ) {
                this.negativepaybank = true;
                this.form.bankAmount = 0;
                this.form.currentDue =
                  parseFloat(this.form.currentPayable) -
                  parseFloat(this.form.currentPaidAmount);
              } else {
                this.negativepaybank = false;
              }
            } else {
              if (parseFloat(this.form.bankAmount) > this.form.currentPayable) {
                this.negativepaybank = true;
                this.form.bankAmount = 0;
                this.form.currentDue =
                  parseFloat(this.form.currentPayable) -
                  parseFloat(this.form.bankAmount);
              } else {
                this.negativepaybank = false;
              }
            }
          }
        }
      }
    },
  },
};
</script>
<style media="screen">
.product-discount .input-group-text {
  padding: 0px 20px;
}
.product-discount .form-check-input {
  margin-left: -5px;
}
.product-discount input {
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 8px 20px;
}
</style>
