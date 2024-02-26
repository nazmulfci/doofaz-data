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
        <h3 style="color: black">Sales Product Discount Price Entry</h3>
      </div>
      <form @submit.prevent="productDiscountPriceEntry()">
        <div class="product-discount py-4 px-2">
          <div
            class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border"
          >
            <div class="form-group">
              <label>Product Name/Code</label>

              <input type="hidden" v-model="form.salesProductPriceEntryId">

              <select
                v-model="form.purchaseProductId"
                class="form-control"
                @change.prevent="showProductBrand()"
              >
                <option value="">Select One</option>
                <option
                  v-for="purchaseProductList in purchaseProductLists"
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
                    <td> <button type="button" class="btn btn-primary" @click="priceEntry(brandWiseProductList.salesProductPriceEntryId)"> Discount Entry </button> </td>
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
                  <option value="0"> Select Color </option>
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
                  >
                  <option value="0"> Select Size </option>
                  <option
                    v-for="sizeList in sizeLists"
                    :value="sizeList.id">
                    {{ sizeList.sizeName }}
                  </option>
                </select>
              <has-error :form="form" field="size"></has-error>
            </div>

          </div>
        </div>
        <div class="py-4 px-2">
          <div
            class="
              offset-sm-1
              col-12 col-sm-10
              pl-sm-5
              supplier-border
              product-discount
            "
          >
            <input type="hidden" v-model="form.inputCheck" name="inputCheck" />
            <div class="form-row">
              <div class="col-sm-12 col-12 mt-2">
                <center>
                    <span v-if="productText" class="badge badge-primary mr-2"> {{productText}} </span>
                    <span v-if="productBrandText" class="badge badge-primary mr-2"> {{productBrandText}} </span>
                    <span v-if="productColorText" class="badge badge-primary mr-2"> <span v-for="colorList in colorLists" v-if="colorList.id==productColorText">{{colorList.colorName}} </span> </span>
                    <span v-if="productSizeText" class="badge badge-primary mr-2"> <span v-for="sizeList in sizeLists" v-if="sizeList.id==productSizeText">{{sizeList.sizeName}} </span> </span>
                  </center>
              </div>
              <div class="col-sm-8 col-12" style="display:none;">
                <input
                  type="text"
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
                  :class="{ 'is-invalid': form.errors.has('unitPrice') }"
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
                <div class="input-group">
                  <input
                    type="text"
                    disabled
                    v-model="form.mrpPrice"
                    name="mrpPrice"
                    :class="{ 'is-invalid': form.errors.has('mrpPrice') }"
                    class="form-control"
                    placeholder="MRP Price"
                  />
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        v-model="form.mrpCheckInputValue"
                        name="mrpCheckInputValue"
                        :value="1"
                        @click.submit="mrpCheckInputFun()"
                        class="form-check-input"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
                <div class="input-group mt-3" v-if="mrpPriceBoxShow">
                  <span v-if="negative" style="color: red"
                    >Negative Value Not Allowed</span
                  >
                  <input
                    type="text"
                    v-model="form.mrpDiscountAmount"
                    @keyup="mrp"
                    @keyup.prevent="mrpDiscountCal()"
                    name="mrpDiscountAmount"
                    class="form-control"
                    placeholder="MRP Discount Price"
                  />
                  <div class="input-group-prepend">
                    <select
                      v-model="form.mrpDiscountType"
                      @change.prevent="mrpDiscountCal()"
                      name="mrpDiscountType"
                      class="input-group-text"
                    >
                      <option value="">Select One</option>
                      <option value="1">Taka</option>
                      <option value="2">Percetage</option>
                    </select>
                  </div>
                </div>
                <div class="row mt-2" v-if="mrpPriceBoxShow">
                  <div class="col">
                    <label>Start Date</label>
                    <datepicker
                      v-model="form.mrpStartDate"
                      name="mrpStartDate"
                      :format="customFormatter"
                      placeholder="Start Date"
                    ></datepicker>
                  </div>
                  <div class="col">
                    <label>Expired Date</label>
                    <datepicker
                      v-model="form.mrpExpiredDate"
                      name="mrpExpiredDate"
                      :format="customFormatter"
                      placeholder="Expired Date"
                    ></datepicker>
                  </div>
                </div>
                <has-error :form="form" field="mrpDiscountAmount"></has-error>
              </div>
            </div>
            <div class="form-row pt-3">
              <div class="col-sm-3 col-6 mt-2">
                <label class="p-0">Sales Price</label>
              </div>
              <div class="col-sm-8 col-12">
                <div class="input-group">
                  <input
                    type="text"
                    disabled
                    v-model="form.salesPrice"
                    name="salesPrice"
                    :class="{ 'is-invalid': form.errors.has('salesPrice') }"
                    class="form-control"
                    placeholder="Sales Price"
                  />
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        v-model="form.salesCheckInputValue"
                        name="salesCheckInputValue"
                        :value="1"
                        @click.submit="salesCheckInputFun()"
                        class="form-check-input"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
                <div class="input-group mt-3" v-if="salesPriceBoxShow">
                  <span v-if="negative1" style="color: red"
                    >Negative Value Not Allowed</span
                  >
                  <input
                    type="text"
                    @keyup="sales"
                    v-model="form.salesDiscountAmount"
                    @keyup.prevent="salesDiscountCal()"
                    name="salesDiscountAmount"
                    class="form-control"
                    placeholder="Sales Discount Price"
                  />
                  <div class="input-group-prepend">
                    <select
                      v-model="form.salesDiscountType"
                      @change.prevent="salesDiscountCal()"
                      name="salesDiscountCal"
                      class="input-group-text"
                    >
                      <option value="">Select One</option>
                      <option value="1">Taka</option>
                      <option value="2">Percetage</option>
                    </select>
                  </div>
                </div>
                <div class="row mt-2" v-if="salesPriceBoxShow">
                  <div class="col">
                    <label>Start Date</label>
                    <datepicker
                      v-model="form.salesStartDate"
                      name="salesStartDate"
                      :format="customFormatter"
                      placeholder="Start Date"
                    ></datepicker>
                  </div>
                  <div class="col">
                    <label>Expired Date</label>
                    <datepicker
                      v-model="form.salesExpiredDate"
                      name="salesExpiredDate"
                      :format="customFormatter"
                      placeholder="Expired Date"
                    ></datepicker>
                  </div>
                </div>
                <has-error :form="form" field="salesPrice"></has-error>
              </div>
            </div>
            <div class="form-row pt-3">
              <div class="col-sm-3 col-6 mt-2">
                <label class="p-0">Wholesale Price</label>
              </div>
              <div class="col-sm-8 col-12">
                <div class="input-group">
                  <input
                    type="text"
                    disabled
                    v-model="form.wholesalePrice"
                    name="wholesalePrice"
                    :class="{ 'is-invalid': form.errors.has('wholesalePrice') }"
                    class="form-control"
                    placeholder="Whole sale Price"
                  />
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        v-model="form.wholesaleCheckInputValue"
                        name="wholesaleCheckInputValue"
                        :value="1"
                        @click.submit="wholesaleCheckInputFun()"
                        class="form-check-input"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
                <div class="input-group mt-3" v-if="wholesalePriceBoxShow">
                  <span v-if="negative2" style="color: red"
                    >Negative Value Not Allowed</span
                  >
                  <input
                    type="text"
                    @keyup="wholesale"
                    v-model="form.wholesaleDiscountAmount"
                    @keyup.prevent="wholesaleDiscountCal()"
                    name="wholesaleDiscountAmount"
                    class="form-control"
                    placeholder="Sales Discount Price"
                  />
                  <div class="input-group-prepend">
                    <select
                      v-model="form.wholesaleDiscountType"
                      @change.prevent="wholesaleDiscountCal()"
                      name="wholesaleDiscountType"
                      class="input-group-text"
                    >
                      <option value="">Select One</option>
                      <option value="1">Taka</option>
                      <option value="2">Percetage</option>
                    </select>
                  </div>
                </div>
                <div class="row mt-2" v-if="wholesalePriceBoxShow">
                  <div class="col">
                    <label>Start Date</label>
                    <datepicker
                      v-model="form.wholesaleStartDate"
                      name="wholesaleStartDate"
                      :format="customFormatter"
                      placeholder="Start Date"
                    ></datepicker>
                  </div>
                  <div class="col">
                    <label>Expired Date</label>
                    <datepicker
                      v-model="form.wholesaleExpiredDate"
                      name="wholesaleExpiredDate"
                      :format="customFormatter"
                      placeholder="Expired Date"
                    ></datepicker>
                  </div>
                </div>
                <has-error :form="form" field="wholesalePrice"></has-error>
              </div>
            </div>
            <div class="form-row pt-3">
              <div class="col-sm-3 col-6 mt-2">
                <label class="p-0">Special Price</label>
              </div>
              <div class="col-sm-8 col-12">
                <div class="input-group">
                  <input
                    type="text"
                    disabled
                    v-model="form.specialPrice"
                    name="specialPrice"
                    :class="{ 'is-invalid': form.errors.has('specialPrice') }"
                    class="form-control"
                    placeholder="Special Price"
                  />
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        v-model="form.specialCheckInputValue"
                        name="specialCheckInputValue"
                        :value="1"
                        @click.submit="specialCheckInputFun()"
                        class="form-check-input"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
                <div class="input-group mt-3" v-if="specialPriceBoxShow">
                  <span v-if="negative3" style="color: red"
                    >Negative Value Not Allowed</span
                  >
                  <input
                    type="text"
                    @keyup="special"
                    v-model="form.specialDiscountAmount"
                    @keyup.prevent="specialDiscountCal()"
                    name="specialDiscountAmount"
                    class="form-control"
                    placeholder="Special Discount Price"
                  />
                  <div class="input-group-prepend">
                    <select
                      v-model="form.specialDiscountType"
                      @change.prevent="specialDiscountCal()"
                      name="specialDiscountType"
                      class="input-group-text"
                    >
                      <option value="">Select One</option>
                      <option value="1">Taka</option>
                      <option value="2">Percetage</option>
                    </select>
                  </div>
                </div>
                <div class="row mt-2" v-if="specialPriceBoxShow">
                  <div class="col">
                    <label>Start Date</label>
                    <datepicker
                      v-model="form.specialStartDate"
                      name="specialStartDate"
                      :format="customFormatter"
                      placeholder="Start Date"
                    ></datepicker>
                  </div>
                  <div class="col">
                    <label>Expired Date</label>
                    <datepicker
                      v-model="form.specialExpiredDate"
                      name="specialExpiredDate"
                      :format="customFormatter"
                      placeholder="Expired Date"
                    ></datepicker>
                  </div>
                </div>
                <has-error :form="form" field="specialPrice"></has-error>
              </div>
            </div>
            <div class="form-row pt-3">
              <div class="col-sm-3 col-6 mt-2">
                <label class="p-0">E-Commerce Price</label>
              </div>
              <div class="col-sm-8 col-12">
                <div class="input-group">
                  <input
                    type="text"
                    disabled
                    v-model="form.eCommercePrice"
                    name="eCommercePrice"
                    :class="{ 'is-invalid': form.errors.has('eCommercePrice') }"
                    class="form-control"
                    placeholder="E-Commerce Price"
                  />
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        v-model="form.eCommerceCheckInputValue"
                        name="eCommerceCheckInputValue"
                        :value="1"
                        @click.submit="eCommerceCheckInputFun()"
                        class="form-check-input"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
                <div class="input-group mt-3" v-if="eCommercePriceBoxShow">
                  <span v-if="negative4" style="color: red"
                    >Negative Value Not Allowed</span
                  >
                  <input
                    type="text"
                    @keyup="ecommerce"
                    v-model="form.eCommerceDiscountAmount"
                    @keyup.prevent="eCommerceDiscountCal()"
                    name="eCommerceDiscountAmount"
                    class="form-control"
                    placeholder="E-Commerce Discount Price"
                  />
                  <div class="input-group-prepend">
                    <select
                      v-model="form.eCommerceDiscountType"
                      @change.prevent="eCommerceDiscountCal()"
                      name="eCommerceDiscountType"
                      class="input-group-text"
                    >
                      <option value="">Select One</option>
                      <option value="1">Taka</option>
                      <option value="2">Percetage</option>
                    </select>
                  </div>
                </div>
                <div class="row mt-2" v-if="eCommercePriceBoxShow">
                  <div class="col">
                    <label>Start Date</label>
                    <datepicker
                      v-model="form.eCommerceStartDate"
                      name="eCommerceStartDate"
                      :format="customFormatter"
                      placeholder="Start Date"
                    ></datepicker>
                  </div>
                  <div class="col">
                    <label>Expired Date</label>
                    <datepicker
                      v-model="form.eCommerceExpiredDate"
                      name="eCommerceExpiredDate"
                      :format="customFormatter"
                      placeholder="Expired Date"
                    ></datepicker>
                  </div>
                </div>
                <has-error :form="form" field="eCommercePrice"></has-error>
              </div>
            </div>
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
        <h3 style="color: black">Sales Product Discount Price List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered table-striped">
          <thead>
            <tr>
              <th>SN</th>
              <th>Product_Name</th>
              <th>Brand</th>
              <th>Color/Size</th>
              <th>MRP_Price</th>
              <th>MRP_Discount_Start_Date</th>
              <th>MRP_Discount_Expired_Date</th>
              <th>Sales_Price</th>
              <th>Sales_Discount_Start_Date</th>
              <th>Sales_Discount_Expired_Date</th>
              <th>Wholesale_Price</th>
              <th>Wholesale_Discount_Start_Date</th>
              <th>Wholesale_Discount_Expired_Date</th>
              <th>Special_Price</th>
              <th>Special_Discount_Start_Date</th>
              <th>Special_Discount_Expired_Date</th>
              <th>E-Commerce_Price</th>
              <th>E-Commerce_Discount_Start_Date</th>
              <th>E-Commerce_Discount_Expired_Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                salesProductDiscountPriceList, index
              ) in salesProductDiscountPriceLists.data"
            >
              <td>{{ index + 1 }}</td>
              <td>
                {{ salesProductDiscountPriceList.product_name.productName }}
              </td>
              <td>
                 <span v-for="allProductBrandList in allProductBrandLists"
                v-if="salesProductDiscountPriceList.brandId==allProductBrandList.productBrandEntryId">
                    {{allProductBrandList.productBrandName}}
                </span>
                 
              </td>
              <td>
                
                  <span
                  v-for="colorList in colorLists"
                  v-if="colorList.id==salesProductDiscountPriceList.colorId">{{
                    colorList.colorName
                  }}</span>
                  
                  <span
                  v-for="sizeList in sizeLists"
                  v-if="sizeList.id==salesProductDiscountPriceList.sizeId">/ {{
                    sizeList.sizeName
                  }}</span>
                </td>
               
              <td>
                <span v-if="salesProductDiscountPriceList.mrpDiscountType == 1">
                  Pr:{{
                    Math.round(salesProductDiscountPriceList.mrpPrice) +
                    Math.round(salesProductDiscountPriceList.mrpDiscountAmount)
                  }}
                  <br />
                  Dis:{{
                    Math.round(salesProductDiscountPriceList.mrpDiscountAmount)
                  }}
                  TK<br />
                  {{ Math.round(salesProductDiscountPriceList.mrpPrice) }} TK
                </span>
                <span v-if="salesProductDiscountPriceList.mrpDiscountType == 2">
                  Pr:
                  {{
                    Math.round(
                      (Math.round(salesProductDiscountPriceList.mrpPrice) *
                        Math.round(
                          salesProductDiscountPriceList.mrpDiscountAmount
                        )) /
                        100 +
                        Math.round(salesProductDiscountPriceList.mrpPrice)
                    )
                  }}
                  <br />
                  Dis:{{
                    Math.round(salesProductDiscountPriceList.mrpDiscountAmount)
                  }}
                  %<br />
                  {{ (salesProductDiscountPriceList.mrpPrice) }} TK
                </span>
              </td>
              <td>{{ salesProductDiscountPriceList.mrpStartDate }}</td>
              <td>{{ salesProductDiscountPriceList.mrpExpiredDate }}</td>
              <td>
                <span
                  v-if="salesProductDiscountPriceList.salesDiscountType == 1"
                >
                  Pr:{{
                    Math.round(salesProductDiscountPriceList.salesPrice) +
                    Math.round(
                      salesProductDiscountPriceList.salesDiscountAmount
                    )
                  }}
                  <br />
                  Dis:{{
                    salesProductDiscountPriceList.salesDiscountAmount
                  }}
                  TK<br />
                  {{ salesProductDiscountPriceList.salesPrice }} TK
                </span>
                <span
                  v-if="salesProductDiscountPriceList.salesDiscountType == 2"
                >
                  Pr:
                  {{
                    Math.round(
                      (Math.round(salesProductDiscountPriceList.salesPrice) *
                        +Math.round(
                          salesProductDiscountPriceList.salesDiscountAmount
                        )) /
                        100 +
                        Math.round(salesProductDiscountPriceList.salesPrice)
                    )
                  }}
                  <br />
                  Dis:{{
                    salesProductDiscountPriceList.salesDiscountAmount
                  }}
                  %<br />
                  {{ (salesProductDiscountPriceList.salesPrice) }} TK
                </span>
              </td>
              <td>{{ salesProductDiscountPriceList.salesStartDate }}</td>
              <td>{{ salesProductDiscountPriceList.salesExpiredDate }}</td>
              <td>
                <span
                  v-if="
                    salesProductDiscountPriceList.wholesaleDiscountType == 1
                  "
                >
                  Pr:{{
                    Math.round(
                      Math.round(salesProductDiscountPriceList.wholesalePrice) +
                        Math.round(
                          salesProductDiscountPriceList.wholesaleDiscountAmount
                        )
                    )
                  }}
                  <br />
                  Dis:{{
                    salesProductDiscountPriceList.wholesaleDiscountAmount
                  }}
                  TK<br />
                  {{ salesProductDiscountPriceList.wholesalePrice }} TK
                </span>
                <span
                  v-if="
                    salesProductDiscountPriceList.wholesaleDiscountType == 2
                  "
                >
                  Pr:
                  {{
                    Math.round(
                      (Math.round(
                        salesProductDiscountPriceList.wholesalePrice
                      ) *
                        Math.round(
                          salesProductDiscountPriceList.wholesaleDiscountAmount
                        )) /
                        100 +
                        Math.round(salesProductDiscountPriceList.wholesalePrice)
                    )
                  }}
                  <br />
                  Dis:{{
                    salesProductDiscountPriceList.wholesaleDiscountAmount
                  }}
                  %<br />
                  {{
                    (salesProductDiscountPriceList.wholesalePrice)
                  }}
                  TK
                </span>
              </td>
              <td>{{ salesProductDiscountPriceList.wholesaleStartDate }}</td>
              <td>{{ salesProductDiscountPriceList.wholesaleExpiredDate }}</td>
              <td>
                <span
                  v-if="salesProductDiscountPriceList.specialDiscountType == 1"
                >
                  Pr:{{
                    Math.round(
                      Math.round(salesProductDiscountPriceList.specialPrice) +
                        Math.round(
                          salesProductDiscountPriceList.specialDiscountAmount
                        )
                    )
                  }}
                  <br />
                  Dis:{{
                    salesProductDiscountPriceList.specialDiscountAmount
                  }}
                  TK<br />
                  {{ salesProductDiscountPriceList.specialPrice }} TK
                </span>
                <span
                  v-if="salesProductDiscountPriceList.specialDiscountType == 2"
                >
                  Pr:
                  {{
                    Math.round(
                      (Math.round(salesProductDiscountPriceList.specialPrice) *
                        Math.round(
                          salesProductDiscountPriceList.specialDiscountAmount
                        )) /
                        100 +
                        Math.round(salesProductDiscountPriceList.specialPrice)
                    )
                  }}
                  <br />
                  Dis:{{
                    salesProductDiscountPriceList.specialDiscountAmount
                  }}
                  %<br />
                  {{
                    (salesProductDiscountPriceList.specialPrice)
                  }}
                  TK
                </span>
              </td>
              <td>{{ salesProductDiscountPriceList.specialStartDate }}</td>
              <td>{{ salesProductDiscountPriceList.specialExpiredDate }}</td>
              <td>
                <span
                  v-if="
                    salesProductDiscountPriceList.eCommerceDiscountType == 1
                  "
                >
                  Pr:{{
                    Math.round(
                      Math.round(salesProductDiscountPriceList.eCommercePrice) +
                        Math.round(
                          salesProductDiscountPriceList.eCommerceDiscountAmount
                        )
                    )
                  }}
                  <br />
                  Dis:{{
                    salesProductDiscountPriceList.eCommerceDiscountAmount
                  }}
                  TK<br />
                  {{ salesProductDiscountPriceList.eCommercePrice }} TK
                </span>
                <span
                  v-if="
                    salesProductDiscountPriceList.eCommerceDiscountType == 2
                  "
                >
                  Pr:
                  {{
                    Math.round(
                      (Math.round(
                        salesProductDiscountPriceList.eCommercePrice
                      ) *
                        Math.round(
                          salesProductDiscountPriceList.eCommerceDiscountAmount
                        )) /
                        100 +
                        Math.round(salesProductDiscountPriceList.eCommercePrice)
                    )
                  }}
                  <br />
                  Dis:{{
                    salesProductDiscountPriceList.eCommerceDiscountAmount
                  }}
                  %<br />
                  {{
                   (salesProductDiscountPriceList.eCommercePrice)
                  }}
                  TK
                </span>
              </td>
              <td>{{ salesProductDiscountPriceList.eCommerceStartDate }}</td>
              <td>{{ salesProductDiscountPriceList.eCommerceExpiredDate }}</td>
              <td>
                <router-link
                  :to="`/productdiscountprice@entryEdit${salesProductDiscountPriceList.salesProductDiscountPriceId}`"
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
          :data="salesProductDiscountPriceLists"
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
import Datepicker from "vuejs-datepicker";
import moment from "moment";

export default {
  data() {
    return {
      loading: false,
      form: new Form({
        salesProductPriceEntryId: "",
        purchaseProductId: "",
        productNameId: "",
        productId: "",
        colorId: 0,
        sizeId: 0,
        unitPrice: "",
        mrpPrice: "",
        salesPrice: "",
        wholesalePrice: "",
        specialPrice: "",
        eCommercePrice: "",

        inputCheck: "",

        mrpDiscountAmount: "",
        mrpDiscountType: "",
        mrpCheckInputValue: "",
        mrpStartDate: "",
        mrpExpiredDate: "",

        salesDiscountAmount: "",
        salesDiscountType: "",
        salesCheckInputValue: "",
        salesStartDate: "",
        salesExpiredDate: "",

        wholesaleDiscountAmount: "",
        wholesaleDiscountType: "",
        wholesaleCheckInputValue: "",
        wholesaleStartDate: "",
        wholesaleExpiredDate: "",

        specialDiscountAmount: "",
        specialDiscountType: "",
        specialCheckInputValue: "",
        specialStartDate: "",
        specialExpiredDate: "",

        eCommerceDiscountAmount: "",
        eCommerceDiscountType: "",
        eCommerceCheckInputValue: "",
        eCommerceStartDate: "",
        eCommerceExpiredDate: "",
        productBrandId: "",
      }),
      purchaseProductLists: {},
      salesProductDiscountPriceLists: {},
      priceLists: [],
      brandLists: [],
      shopProductBrandLists: [],
      productBrandLists: [],
      allProductBrandLists: [],
      productTable: false,
      mrpPriceBoxShow: false,
      salesPriceBoxShow: false,
      wholesalePriceBoxShow: false,
      specialPriceBoxShow: false,
      eCommercePriceBoxShow: false,
      productBrand: false,
      colorStatus: false,
      sizeStatus: false,
      colorLists: [],
      sizeLists: [],
      productTable:false,
      productText:'',
      productBrandText:'',
      productColorText:'',
      productSizeText:'',
    };
  },
  props: {
    limit: {
      type: Number,
      default: 2,
    },
  },
  components: {
    Datepicker,
  },
  mounted() {
    this.productBrandList();
    this.getPaginateList();
    this.salesProductNameList();
    this.salesProductDiscountPriceList();
    this.ShowDataLists();
    this.colorList();
    this.sizeList();
  },
  methods: {
    priceEntry(e){
          // this.productTable=false;
          axios
        .get("/salesProductPriceOfferId/" +e)
        .then((res) => {

          this.productTable = false;

           this.productText = res.data.salesProductPrice.product_name.productName;
           this.productBrandText = res.data.salesProductPrice.brandname.productBrandName;
           this.productColorText = res.data.salesProductPrice.colorId;
           this.form.colorId = res.data.salesProductPrice.colorId;
           this.productSizeText = res.data.salesProductPrice.sizeId;
           this.form.sizeId = res.data.salesProductPrice.sizeId;
       
          this.priceLists = res.data.salesProductPrice;
          this.form.unitPrice = res.data.productUnitePrice.unitPrice;
          this.form.productNameId = res.data.productUnitePrice.product_name.productName;
          this.form.productId = res.data.productUnitePrice.productId;
          this.form.salesProductPriceEntryId = res.data.salesProductPrice.salesProductPriceEntryId;
          this.form.mrpPrice = res.data.salesProductPrice.mrpPrice;
          this.form.salesPrice = res.data.salesProductPrice.salesPrice;
          this.form.wholesalePrice = res.data.salesProductPrice.wholesalePrice;
          this.form.specialPrice = res.data.salesProductPrice.specialPrice;
          this.form.eCommercePrice = res.data.salesProductPrice.eCommercePrice;
         
           });
           
        },
       selectBrand1(){
          this.productInformation = false;
      axios
        .get("/salesProductListBrandWiseForOffer/" +this.form.purchaseProductId +"/" +this.form.productBrandId)
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
    selectBrand(){
           this.form.productPurchaseTypeId='';
           this.form.colorId='';
           this.form.sizeId='';
         this.productInformation = false;
      axios.get("/colorListByBrandId/"+this.form.purchaseProductId+'/'+this.form.productBrandId).then((res) => {
        this.colorStatus = res.data.colorStatus;
        this.colorLists = res.data.colorList;
        if(res.data.colorStatus==0){
        this.productIdCatch();
      }
      });
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
      this.productIdCatch();
    },
    customFormatter(date) {
      return moment(date).format("DD-MM-YYYY");
    },
    salesProductNameList() {
      axios.get("/salesProductNameShowOffer").then((res) => {
        this.purchaseProductLists = res.data.salesPriceProductLists;
      });
    },
    ShowDataLists() {
      axios.get("/shopproductBrandEntry").then((res) => {
        this.shopProductBrandLists = res.data.shopProductBrandList;
      });
    },
    mrp(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.mrpDiscountAmount !== "") {
        this.negative = true;

        this.form.mrpDiscountAmount = "";
      } else {
        if (this.form.mrpDiscountAmount < 0) {
          this.negative = true;
          this.form.mrpDiscountAmount = "";
        } else {
          this.negative = false;
        }
        this.negative = false;
      }
    },
    sales(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.salesDiscountAmount !== "") {
        this.negative1 = true;

        this.form.salesDiscountAmount = "";
      } else {
        if (this.form.salesDiscountAmount < 0) {
          this.negative1 = true;
          this.form.salesDiscountAmount = "";
        } else {
          this.negative1 = false;
        }
        this.negative1 = false;
      }
    },
    wholesale(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (
        !stringValue.match(regex) &&
        this.form.wholesaleDiscountAmount !== ""
      ) {
        this.negative2 = true;

        this.form.wholesaleDiscountAmount = "";
      } else {
        if (this.form.wholesaleDiscountAmount < 0) {
          this.negative2 = true;
          this.form.wholesaleDiscountAmount = "";
        } else {
          this.negative2 = false;
        }
        this.negative2 = false;
      }
    },
    special(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.specialDiscountAmount !== "") {
        this.negative3 = true;

        this.form.specialDiscountAmount = "";
      } else {
        if (this.form.specialDiscountAmount < 0) {
          this.negative3 = true;
          this.form.specialDiscountAmount = "";
        } else {
          this.negative3 = false;
        }
        this.negative3 = false;
      }
    },
    ecommerce(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (
        !stringValue.match(regex) &&
        this.form.eCommerceDiscountAmount !== ""
      ) {
        this.negative4 = true;

        this.form.eCommerceDiscountAmount = "";
      } else {
        if (this.form.eCommerceDiscountAmount < 0) {
          this.negative4 = true;
          this.form.eCommerceDiscountAmount = "";
        } else {
          this.negative4 = false;
        }
        this.negative4 = false;
      }
    },
    showProductBrand() {
      // alert(this.form.purchaseProductId);
      axios
        .get("/productUniteOfferEntry/" + this.form.purchaseProductId)
        .then((res) => {
          this.brandLists = res.data.brandListget;
          this.productBrandLists = res.data.productBrandList;
          this.productBrand = true;
        });
    },
        productBrandList() {
      axios.get("/productBrandList").then((res) => {
        this.allProductBrandLists = res.data.productBrandList;
      });
    },

    productIdCatch() {
      let url = '';
      if(this.form.sizeId){
        url = "/productPriceEntryInfoSize/" +this.form.purchaseProductId +"/" +this.form.productBrandId+"/" +this.form.colorId+"/" +this.form.sizeId;
      }
      else if(this.form.colorId){
        url = "/productPriceEntryInfoColor/" +this.form.purchaseProductId +"/" +this.form.productBrandId+"/" +this.form.colorId;
      }
      else{
        url = "/productPriceEntryInfo/" +this.form.purchaseProductId +"/" +this.form.productBrandId;
      }
      axios
        .get(url).then((res) => {
          this.priceLists = res.data.salesProductPrice;
          this.form.unitPrice = res.data.productUnitePrice.unitPrice;
          this.form.productNameId = res.data.productUnitePrice.product_name.productName;
          this.form.productId = res.data.productUnitePrice.productId;
          this.form.salesProductPriceEntryId = res.data.salesProductPrice.salesProductPriceEntryId;
          this.form.mrpPrice = res.data.salesProductPrice.mrpPrice;
          this.form.salesPrice = res.data.salesProductPrice.salesPrice;
          this.form.wholesalePrice = res.data.salesProductPrice.wholesalePrice;
          this.form.specialPrice = res.data.salesProductPrice.specialPrice;
          this.form.eCommercePrice = res.data.salesProductPrice.eCommercePrice;
        });
    },
    productDiscountPriceEntry() {
      this.loading = true;
      if (this.form.inputCheck == 1) {
        this.form.post("/salesProductDiscountPriceEntry").then((res) => {
          this.loading = false;
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
            this.form.reset();
            this.mrpPriceBoxShow = false;
            this.salesPriceBoxShow = false;
            this.wholesalePriceBoxShow = false;
            this.specialPriceBoxShow = false;
            this.eCommercePriceBoxShow = false;
            this.salesProductDiscountPriceList();
            this.salesProductNameList();
            this.showProductBrand();
          }
        }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
      } else {
        this.loading = false;
        Toast.fire({
          icon: "error",
          title: "Enter Your Discount Amount",
        });
      }
    },
    salesProductDiscountPriceList() {
      axios.get("/salesProductDiscountPriceEntry").then((res) => {
        this.salesProductDiscountPriceLists =
          res.data.salesProductDiscountPriceLists;
      });
    },
    getPaginateList(page = 1) {
      axios
        .get("/salesProductDiscountPriceEntry?page=" + page)
        .then((response) => {
          this.salesProductDiscountPriceLists =
            response.data.salesProductDiscountPriceLists;
        });
    },
    mrpCheckInputFun() {
      if (this.form.mrpPrice != null) {
        if (this.form.mrpCheckInputValue == "") {
          this.mrpPriceBoxShow = true;
        } else {
          this.mrpPriceBoxShow = false;
          this.form.mrpDiscountAmount = "";
          this.form.mrpDiscountType = "";
          this.form.mrpStartDate = "";
          this.form.mrpExpiredDate = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.mrpPrice = res.data.salesProductPrice.mrpPrice;
            });
        }
      }
    },
    salesCheckInputFun() {
      if (this.form.salesPrice != null) {
        if (this.form.salesCheckInputValue == "") {
          this.salesPriceBoxShow = true;
        } else {
          this.salesPriceBoxShow = false;
          this.form.salesDiscountAmount = "";
          this.form.salesDiscountType = "";
          this.form.salesStartDate = "";
          this.form.salesExpiredDate = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.salesPrice = res.data.salesProductPrice.salesPrice;
            });
        }
      }
    },
    wholesaleCheckInputFun() {
      if (this.form.wholesalePrice != null) {
        if (this.form.wholesaleCheckInputValue == "") {
          this.wholesalePriceBoxShow = true;
        } else {
          this.wholesalePriceBoxShow = false;
          this.form.wholesaleDiscountAmount = "";
          this.form.wholesaleDiscountType = "";
          this.form.wholesaleStartDate = "";
          this.form.wholesaleExpiredDate = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.wholesalePrice =
                res.data.salesProductPrice.wholesalePrice;
            });
        }
      }
    },
    specialCheckInputFun() {
      if (this.form.specialPrice != null) {
        if (this.form.specialCheckInputValue == "") {
          this.specialPriceBoxShow = true;
        } else {
          this.specialPriceBoxShow = false;
          this.form.specialDiscountAmount = "";
          this.form.specialDiscountType = "";
          this.form.specialStartDate = "";
          this.form.specialExpiredDate = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.specialPrice = res.data.salesProductPrice.specialPrice;
            });
        }
      }
    },
    eCommerceCheckInputFun() {
      if (this.form.eCommercePrice != null) {
        if (this.form.eCommerceCheckInputValue == "") {
          this.eCommercePriceBoxShow = true;
        } else {
          this.eCommercePriceBoxShow = false;
          this.form.eCommerceDiscountAmount = "";
          this.form.eCommerceDiscountType = "";
          this.form.eCommerceStartDate = "";
          this.form.eCommerceExpiredDate = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.eCommercePrice =
                res.data.salesProductPrice.eCommercePrice;
            });
        }
      }
    },
    mrpDiscountCal() {
      if (this.form.mrpDiscountType == 1) {
        if (this.form.mrpDiscountAmount != "") {
          this.form.inputCheck = 1;
          let mrpPriceDiscount =
            parseFloat(this.priceLists.mrpPrice) -
            parseFloat(this.form.mrpDiscountAmount);
          this.form.mrpPrice = mrpPriceDiscount;
        } else {
          this.form.mrpDiscountAmount = "";
          this.form.mrpDiscountType = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.mrpPrice = res.data.salesProductPrice.mrpPrice;
            });
        }
      } else if (this.form.mrpDiscountType == 2) {
        if (this.form.mrpDiscountAmount != "") {
          this.form.inputCheck = 1;
          let mrpPriceCalculation =
            (parseFloat(this.priceLists.mrpPrice) *
              parseFloat(this.form.mrpDiscountAmount)) /
            100;
          this.form.mrpPrice =
            parseFloat(this.priceLists.mrpPrice) -
            parseFloat(mrpPriceCalculation);
        } else {
          this.form.mrpDiscountAmount = "";
          this.form.mrpDiscountType = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.mrpPrice = res.data.salesProductPrice.mrpPrice;
            });
        }
      }
    },
    salesDiscountCal() {
      if (this.form.salesDiscountType == 1) {
        if (this.form.salesDiscountAmount != "") {
          this.form.inputCheck = 1;
          let salesPriceDiscount =
            parseFloat(this.priceLists.salesPrice) -
            parseFloat(this.form.salesDiscountAmount);
          this.form.salesPrice = salesPriceDiscount;
        } else {
          this.form.salesDiscountAmount = "";
          this.form.salesDiscountType = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.salesPrice = res.data.salesProductPrice.salesPrice;
            });
        }
      } else if (this.form.salesDiscountType == 2) {
        if (this.form.salesDiscountAmount != "") {
          this.form.inputCheck = 1;
          let salesPriceCalculation =
            (parseFloat(this.priceLists.salesPrice) *
              parseFloat(this.form.salesDiscountAmount)) /
            100;
          this.form.salesPrice =
            parseFloat(this.priceLists.salesPrice) -
            parseFloat(salesPriceCalculation);
        } else {
          this.form.salesDiscountAmount = "";
          this.form.salesDiscountType = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.salesPrice = res.data.salesProductPrice.salesPrice;
            });
        }
      }
    },

    wholesaleDiscountCal() {
      if (this.form.wholesaleDiscountType == 1) {
        if (this.form.wholesaleDiscountAmount != "") {
          this.form.inputCheck = 1;
          let wholesalePriceDiscount =
            parseFloat(this.priceLists.wholesalePrice) -
            parseFloat(this.form.wholesaleDiscountAmount);
          this.form.wholesalePrice = wholesalePriceDiscount;
        } else {
          this.form.wholesaleDiscountAmount = "";
          this.form.wholesaleDiscountType = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.wholesalePrice =
                res.data.salesProductPrice.wholesalePrice;
            });
        }
      } else if (this.form.wholesaleDiscountType == 2) {
        if (this.form.wholesaleDiscountAmount != "") {
          this.form.inputCheck = 1;
          let wholesalePriceCalculation =
            (parseFloat(this.priceLists.wholesalePrice) *
              parseFloat(this.form.wholesaleDiscountAmount)) /
            100;
          this.form.wholesalePrice =
            parseFloat(this.priceLists.wholesalePrice) -
            parseFloat(wholesalePriceCalculation);
        } else {
          this.form.wholesaleDiscountAmount = "";
          this.form.wholesaleDiscountType = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.wholesalePrice =
                res.data.salesProductPrice.wholesalePrice;
            });
        }
      }
    },
    specialDiscountCal() {
      if (this.form.specialDiscountType == 1) {
        if (this.form.specialDiscountAmount != "") {
          this.form.inputCheck = 1;
          let specialPriceDiscount =
            parseFloat(this.priceLists.specialPrice) -
            parseFloat(this.form.specialDiscountAmount);
          this.form.specialPrice = specialPriceDiscount;
        } else {
          this.form.specialDiscountAmount = "";
          this.form.specialDiscountType = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.specialPrice = res.data.salesProductPrice.specialPrice;
            });
        }
      } else if (this.form.specialDiscountType == 2) {
        if (this.form.specialDiscountAmount != "") {
          this.form.inputCheck = 1;
          let specialPriceCalculation =
            (parseFloat(this.priceLists.specialPrice) *
              parseFloat(this.form.specialDiscountAmount)) /
            100;
          this.form.specialPrice =
            parseFloat(this.priceLists.specialPrice) -
            parseFloat(specialPriceCalculation);
        } else {
          this.form.specialDiscountAmount = "";
          this.form.specialDiscountType = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.specialPrice = res.data.salesProductPrice.specialPrice;
            });
        }
      }
    },
    eCommerceDiscountCal() {
      if (this.form.eCommerceDiscountType == 1) {
        if (this.form.eCommerceDiscountAmount != "") {
          this.form.inputCheck = 1;
          let eCommercePriceDiscount =
            parseFloat(this.priceLists.eCommercePrice) -
            parseFloat(this.form.eCommerceDiscountAmount);
          this.form.eCommercePrice = eCommercePriceDiscount;
        } else {
          this.form.eCommerceDiscountAmount = "";
          this.form.eCommerceDiscountType = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.eCommercePrice =
                res.data.salesProductPrice.eCommercePrice;
            });
        }
      } else if (this.form.eCommerceDiscountType == 2) {
        if (this.form.eCommerceDiscountAmount != "") {
          this.form.inputCheck = 1;
          let eCommercePriceCalculation =
            (parseFloat(this.priceLists.eCommercePrice) *
              parseFloat(this.form.eCommerceDiscountAmount)) /
            100;
          this.form.eCommercePrice =
            parseFloat(this.priceLists.eCommercePrice) -
            parseFloat(eCommercePriceCalculation);
        } else {
          this.form.eCommerceDiscountAmount = "";
          this.form.eCommerceDiscountType = "";
          axios
            .get("/productPriceEntryInfoById/" + this.form.salesProductPriceEntryId)
            .then((res) => {
              this.form.eCommercePrice =
                res.data.salesProductPrice.eCommercePrice;
            });
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
