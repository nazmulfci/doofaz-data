<template>
  <span>
    <div style="margin-top:-6px;">
      <center> <span class="btn btn-primary justify-content-center mb-2"
     onclick="$('.sales_extra_item').slideToggle()">
      <i class="icon text-light ion-android-apps"></i> </span></center></div>
    <div class="row mb-3 justify-content-center sales_extra_item" style="display:none;">
      <div
        class="col-xs-6 mb-3"
        data-toggle="modal"
        data-target="#customerModal">
        <div
          class="
            card
            mb-3
            widget-chart widget-chart-hover
            rounded-circle
            wh-100-100
          ">
          <div class="widget-chart-content">
            <div class="icon-wrapper rounded">
              <div
                class="icon-wrapper-bg opacity-10 bg-warning rounded-circle"
              ></div>
              <i class="fa fa-users fa fa-gift text-white"></i>
            </div>

            <div
              class="
                widget-subheading
                fsize-1
                pt-2
                opacity-10
                text-dark
                font-weight-bold
                position-absolute
                text-center
                mt-3
              ">
              Customer
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-6 mb-3">
        <div
          class="
            card
            mb-3
            widget-chart widget-chart-hover
            rounded-circle
            wh-100-100
          "
        >
          <div class="widget-chart-content">
            <router-link :to="`salesproduct@offer`">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg opacity-10 bg-danger"></div>
                <i class="fa fa-gift text-white text-white"></i>
              </div>

              <div
                class="
                  widget-subheading
                  fsize-1
                  pt-2
                  opacity-10
                  text-dark
                  font-weight-bold
                  position-absolute
                  text-center
                  mt-3
                "
              >
                Offer
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-xs-6 mb-3">
        <div
          class="
            card
            mb-3
            widget-chart widget-chart-hover
            rounded-circle
            wh-100-100
          "
        >
          <div class="widget-chart-content">
            <router-link :to="`/salesDue`">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg opacity-10 bg-success"></div>
                <i class="fa fa-money text-white"></i>
              </div>

              <div
                class="
                  widget-subheading
                  fsize-1
                  pt-2
                  opacity-10
                  text-dark
                  font-weight-bold
                  position-absolute
                  text-center
                  mt-3
                "
              >
                Dues
              </div>
            </router-link>
          </div>
        </div>
      </div>


      <!-- <div class="col-xs-6 mb-3">
        <div
          class="
            card
            mb-3
            widget-chart widget-chart-hover
            rounded-circle
            wh-100-100
          "
        >
          <div class="widget-chart-content">
            <router-link :to="`/productsale@return`">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg opacity-10 bg-info"></div>
                <i class="fa fa-undo text-white"></i>
              </div>

              <div
                class="
                  widget-subheading
                  fsize-1
                  pt-2
                  opacity-10
                  text-dark
                  font-weight-bold
                  position-absolute
                  text-center
                  mt-3
                "
              >
                Return sdf
              </div>
            </router-link>
          </div>
        </div>
      </div> -->

      
      <div class="col-xs-6 mb-3">
        <div
          class="
            card
            mb-3
            widget-chart widget-chart-hover
            rounded-circle
            wh-100-100
          "
        >
          <div class="widget-chart-content">
            <router-link :to="`/product@sales`">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-info"></div>
                <i class="fa fa-shopping-cart text-info"></i>
              </div>
              <div
                class="
                  widget-subheading
                  fsize-1
                  pt-2
                  opacity-10
                  text-dark
                  font-weight-bold
                  position-absolute
                  text-center
                  mt-3
                "
              >
                Sales
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-xs-6 mb-3">
        <div
          class="
            card
            mb-3
            widget-chart widget-chart-hover
            rounded-circle
            wh-100-100
          "
        >
          <div class="widget-chart-content">
            <router-link :to="`salesInvoice`">
              <div class="icon-wrapper rounded">
                <div class="icon-wrapper-bg bg-warning rounded-circle"></div>
                <i class="fa fa-file-text text-warning"></i>
              </div>
            </router-link>
            <div
              class="
                widget-subheading
                fsize-1
                pt-2
                opacity-10
                text-dark
                font-weight-bold
                position-absolute
                text-center
                mt-3
              "
            >
              Invoice
            </div>
          </div>
        </div>
      </div>
      <!--<div class="col-xs-6 mb-3">
        <div
          class="
            card
            mb-3
            widget-chart widget-chart-hover
            rounded-circle
            wh-100-100
          "
        >
           <div class="widget-chart-content">
               <router-link :to="`/alert`">
            <div class="icon-wrapper rounded-circle">
              <div class="icon-wrapper-bg bg-danger"></div>
              <i class="fa fa-bell icon-anim-pulse text-danger"></i>
                <span class="badge badge-danger" style="position: absolute;top: 0px;left:30px;padding:3px;border-radius:12px;">
                            {{totalNoti}}
                          </span>
            </div>
               </router-link>
            <div
              class="
                widget-subheading
                fsize-1
                pt-2
                opacity-10
                text-dark
                font-weight-bold
                position-absolute
                text-center
                mt-3
              "
            >
              Alert
            </div>
          </div> 
        </div>
      </div>-->

      <div class="col-xs-6 mb-3">
        <div
          class="
            card
            mb-3
            widget-chart widget-chart-hover
            rounded-circle
            wh-100-100
          "
        >
          <div class="widget-chart-content">
            <router-link :to="`/salesPending`">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-info"></div>
                <i class="text-info"> {{ pendingCount }}</i>
              </div>
            </router-link>
            <div
              class="
                widget-subheading
                fsize-1
                pt-2
                opacity-10
                text-dark
                font-weight-bold
                position-absolute
                text-center
                mt-3
              "
            >
              Pending
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="product-bill px-2 py-4">
          <form>
            <div class="form-row">
              <div class="form-group mb-0 col-md-2 col-sm-4 col-4">
                <label> Invoice </label>
                <input
                  disabled
                  v-model="form.salesInvoiceNo"
                  name="salesInvoiceNo"
                  class="form-control"
                  placeholder="Invoice No"
                />
              </div>
              <div class="form-group col-md-2 col-sm-8 col-8">
                <label>
                  Date
                  <i
                    class="fa fa-star text-danger text-10 cursor-pointer"
                    title="Mendatory Field"
                    data-placement="top"
                    data-toggle="tooltip"
                    data-original-title="Mendatory Field"
                  ></i
                ></label>

                <input
                  type="date"
                  v-model="form.salesDate"
                  class="form-control"
                  disabled
                  :class="{ 'is-invalid': form.errors.has('salesDate') }"
                />
                <has-error :form="form" field="salesDate"></has-error>
              </div>

              <div class="form-group mb-0 col-md-3 col-sm-4 col-12">
                <label>Customer Type</label>

                <select
                  class="form-control"
                  v-model="form.customerTypeId"
                  aria-label="Default select example"
                  @change="customerTypeIdCatch()"
                >
                  <option
                    v-for="customerTypeList in customerTypeLists"
                    :value="customerTypeList.shopCustomerTypeEntryId"
                  >
                    {{ customerTypeList.shopCustomerName }}
                  </option>
                </select>
              </div>

              <div class="form-group mb-0 col-md-3 col-sm-4 col-12">
                <label>Customer Name</label>
                <multiselect
                  v-model="form.salesCustomerEntryId"
                  name="salesCustomerEntryId"
                  :options="salesCustomerLists"
                  @input="customerIdCatch"
                  :custom-label="salesCustomerName"
                  placeholder="Select one">
                  <span slot="noResult"> Oops! Customer Name Not Found </span>
                </multiselect>
              </div>
              <div class="form-group mb-0 col-md-2 col-sm-4 col-12">
                <label> Price Type </label>

                <select
                  class="form-control"
                  v-model="form.priceTypeId"
                  aria-label="Default select example"
                  @change="customerTypeIdCatch()"
                >
                  <option :value="salesPType.priceType">
                    <span v-if="salesPType.pricetype">{{
                      salesPType.pricetype.salesPriceType
                    }}</span>
                  </option>
                </select>
              </div>
            </div>
          </form>
        </div>

        <div class="product-page pl-2 alert-success">
          <form @submit.prevent="salesProductEntry()">
            <div class="form-row">
              <div class="form-group mb-0 col-lg-2 col-md-3 col-sm-4 col-12">
                <label>Product 
                  <span class="float-right ml-3" @click="showHideBarcodeBox()" style="font-size:30px;margin-bottom:-20px;margin-top: -9px;"> <i class="fa fa-barcode"></i> </span>
                </label>
                <multiselect
                  v-model="form.purchaseProductId"
                  name="purchaseProductId"
                  :show-labels="false"
                  :options="productPriceLists"
                  @input="purchaseProductIdCatch"
                  :custom-label="prdouctName"
                  placeholder="Select one"
                >
                  <span slot="noResult">Oops! Product Name Not Found</span>
                </multiselect>
                <form action="" @submit.prevent="searchProductBarcode()">
                   <input type="text" v-if="productBarcodeStatus" v-model="form.productBarcode" class="form-control mt-2 barcodeInputBox" placeholder="Barcode">
                    <button style="display:none;" type="submit" class="btn btn-primary"> Search </button>
                </form>
              </div>
              <div class="form-group mb-0 col-lg-2 col-md-3 col-sm-4 col-12">
                <label>Brand</label>
                <multiselect
                  :show-labels="false"
                  v-model="form.brandId"
                  :options="brandLists"
                  @input="salesProductIdCatch"
                  :custom-label="brandName"
                  placeholder="Select one"
                >
                  <span slot="noResult">Oops! Product Name Not Found</span>
                </multiselect>
              </div>

             

              <div class="form-group mb-0 col-lg-1 col-md-2 col-sm-4 col-6">
                <label>Color</label>
                <multiselect

                  :show-labels="false"
                  v-model="form.colorId"
                  :options="colorLists"
                  @input="salesProductIdCatchColor"
                  
                  :custom-label="colorName"
                  placeholder="Select"
                >
                  <span slot="noResult">Oops! Color Not Found</span>
                </multiselect>
              </div>

              <div class="form-group mb-0 col-lg-1 col-md-2 col-sm-4 col-6">
                <label>Size</label>
                <multiselect
                  :show-labels="false"
                  v-model="form.sizeId"
                  name="sizeId"
                  @input="salesProductIdCatchSize"
                  :options="sizeLists"
                  :custom-label="sizeName"
                  placeholder="Select"
                >
                  <span slot="noResult">Oops! Size Not Found</span>
                </multiselect>
              </div>

               <div class="form-group mb-0 col-lg-1 col-md-2 col-sm-4 col-6">
                <label>Unit</label>
                <multiselect
                  :show-labels="false"
                  v-model="form.unitId"
                  name="unitId"
                  :options="uniteLists"
                  :custom-label="uniteName"
                  @input="getPriceStock"
                  placeholder="Select"
                >
                  <span slot="noResult">Oops! Unit Name Not Found</span>
                </multiselect>
              </div>


              <div class="form-group mb-0 col-lg-1 col-md-2 col-sm-4 col-6">
                <span v-if="invalid"  class="badge badge-danger" style="position:absolute;top:13px;left:-23px;"> Invalid Quantity </span>
                <span v-if="avil" class="badge badge-danger" style="position:absolute;top:13px;left:-12px;"
                  >Stock Limited!!</span>
                  <!-- <br/>avil qnt:{{ totalQt }} -->
                <label>Quantity</label>
                <div style="padding:1px;width:90px;overflow:hidden;">
               
                <input style="width:130px"
                  type="number"
                  step="0.01"
                  min="0.01"
                  v-model="form.quantity"
                  
                  name="quantity"
                  :class="{ 'is-invalid': form.errors.has('quantity') }"
                  @keyup.prevent="quantity()"
                  class="form-control availableQuantity"
                  placeholder="Stock=0"
                />
                </div>
                <has-error :form="form" field="quantity"></has-error>
              </div>
              <div class="form-group mb-0 col-lg-1 col-md-3 col-sm-4 col-6">
                <label> Unit.Price </label>
                <input
                  disabled
                  type="text"
                  v-model="form.hiddenPrice"
                  :class="{ 'is-invalid': form.errors.has('unitPrice') }"
                  name="unitPrice"
                  class="form-control"
                  placeholder="Unit Price"
                />
                <has-error :form="form" field="unitPrice"></has-error>
              </div>
              <div
                style="display: none"
                class="form-group mb-0 col-lg-1 col-md-3 col-sm-4 col-6"
              >
                <label>Unit Price</label>
                <input
                  disabled
                  type="text"
                  v-model="form.unitPrice"
                  :class="{ 'is-invalid': form.errors.has('unitPrice') }"
                  name="unitPrice"
                  class="form-control"
                  placeholder="Unit Price"
                />
                <has-error :form="form" field="unitPrice"></has-error>
              </div>
              <div
                style="display: none"
                class="form-group mb-0 col-lg-1 col-md-3 col-sm-4 col-6"
              >
                <label>Off</label>
                <input
                  disabled
                  type="text"
                  v-model="form.discountPriceHidden"
                  class="form-control"
                  placeholder="Off (tk)"
                />
                <has-error :form="form" field="unitPrice"></has-error>
              </div>
              <div class="form-group mb-0 col-lg-1 col-md-3 col-sm-4 col-6">
                <label>Off</label>
                <input
                   
                  type="text"
                  v-model="form.totalDis"
                  class="form-control"
                  @keyup="calculateSaleDiscount()"
                  placeholder="Off (tk)"
                />
                <has-error :form="form" field="unitPrice"></has-error>
              </div>
              <div class="form-group mb-0 col-lg-2 col-md-4 col-sm-4 col-6">
                <label>Total:{{form.totalPrice}} </label>
                <br>
                <input
                  disabled
                  type="hidden"
                  v-model="form.totalPrice"
                  name="totalPrice"
                  class="form-control"
                  placeholder="Total Price"
                />
                 <button
                    :disabled="loading"
                    type="submit"
                    class="btn btn-info mt-1 mb-2 mr-2"
                  >
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
              <input
                type="hidden"
                v-model="form.discountPriceHidden"
                name="discountPriceHidden"
                class="form-control"
                placeholder="Total Price"
              />
              <div class="form-group mb-0 col-lg-1 col-md-2 col-sm-4 col-12">
                <div class="mt-4">
                 
                </div>
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
                <th>Brand Name</th>
                <th>Details</th>
                <th>Unit Name</th>
                <th>Color/Size</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Off</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(salesProductList, index) in salesProductLists.data"
                v-if="salesProductList.salesInvoiceNo == salesInvoiceNoIncre"
              >
                <td>{{ index + 1 }}</td>
                <td v-if="salesProductList.product_name">
                  {{ salesProductList.product_name.productName }} ({{
                    salesProductList.product_name.productCode
                  }})
                </td>
                <td>{{ salesProductList.brand_name.productBrandName }}</td>
                <td>
                  <a
                    data-toggle="modal"
                    @click.prevent="
                      productDetailsInfo(salesProductList.productId)
                    "
                    :data-target="'#purchaseId' + salesProductList.productId"
                    class="btn btn-light"
                    >Details</a
                  >
                </td>

                <td>{{ salesProductList.unit_name.uniteEntryName }}</td>
                <td>
                  <span v-if="salesProductList.color_name">
                  {{ salesProductList.color_name.colorName }} </span>
                  <span v-if="salesProductList.size_name">
                    /{{ salesProductList.size_name.sizeName }}</span>
                  </td>
                <td>{{ salesProductList.quantity }}</td>
                <td>
                  <span v-if="salesProductList.discountPrice">
                    {{ salesProductList.unitPrice }}/{{
                      salesProductList.discountPrice
                    }}
                  </span>
                  <span v-else>{{ salesProductList.unitPrice }}</span>
                </td>
                <td>
                  <span v-if="salesProductList.totalDiscount">
                    {{salesProductList.totalDiscount}}
                  </span>
                  <span v-else-if="salesProductList.discountPrice"
                    >{{
                      salesProductList.quantity *
                      (salesProductList.unitPrice -
                        salesProductList.discountPrice)
                    }}
                  </span>
                  <span v-else>0</span>
                </td>
                <td>{{ salesProductList.totalPrice }}</td>
                <!-- Modal -->
                <div
                  class="modal fade"
                  :id="'purchaseId' + salesProductList.productId"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLongTitle"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header bg-primary text-light">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                          Product Detalis
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
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"
                              ><h6>Model Name :</h6></span
                            >
                            <span class="col-6 p-0"
                              ><h6>{{ modelNo }}</h6></span
                            >
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"
                              ><h6>Batch Name :</h6></span
                            >
                            <span class="col-6 p-0"
                              ><h6>{{ batchNo }}</h6></span
                            >
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"><h6>QR Code :</h6></span>
                            <span class="col-6 p-0"
                              ><h6>{{ qrCode }}</h6></span
                            >
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"
                              ><h6>Mfg License NO :</h6></span
                            >
                            <span class="col-6 p-0"
                              ><h6>{{ mfgLicenseNO }}</h6></span
                            >
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"><h6>Warranty :</h6></span>
                            <span class="col-6 p-0">
                              <h6>
                                <span v-if="selectMothOrYearWarranty == 1">
                                  {{ warranty * 1 }} Day
                                </span>
                                <span v-if="selectMothOrYearWarranty == 2">
                                  {{ warranty * 30 }} Day
                                </span>
                                <span v-if="selectMothOrYearWarranty == 3">
                                  {{ warranty * 12 * 30 }} Day
                                </span>
                              </h6>
                            </span>
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"><h6>Guarantee :</h6></span>
                            <span class="col-6 p-0">
                              <h6>
                                <span v-if="selectMothOrYearGuarantee == 1">
                                  {{ guarantee * 1 }} Day
                                </span>
                                <span v-if="selectMothOrYearGuarantee == 2">
                                  {{ guarantee * 30 }} Day
                                </span>
                                <span v-if="selectMothOrYearGuarantee == 3">
                                  {{ guarantee * 12 * 30 }} Day
                                </span>
                              </h6>
                            </span>
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"><h6>Mfg Date :</h6></span>
                            <span class="col-6 p-0"
                              ><h6>{{ mfgDate }}</h6></span
                            >
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"
                              ><h6>Expiry Date :</h6></span
                            >
                            <span class="col-6 p-0"
                              ><h6>{{ expiryDate }}</h6></span
                            >
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"><h6>Tax :</h6></span>
                            <span class="col-6 p-0"
                              ><h6>{{ tax }}</h6></span
                            >
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"
                              ><h6>Tax Amount :</h6></span
                            >
                            <span class="col-6 p-0"
                              ><h6>
                                {{ taxAmount }}
                                {{ taxAmountType == 1 ? "Taka" : "" }}
                                {{ taxAmountType == 2 ? "Percetage" : "" }}
                              </h6></span
                            >
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"
                              ><h6>Quantity Type :</h6></span
                            >
                            <span class="col-6 p-0"
                              ><h6>
                                {{ quantityType == 1 ? "Low" : "" }}
                                {{ quantityType == 2 ? "Medium" : "" }}
                                {{ quantityType == 3 ? "High" : "" }}
                              </h6></span
                            >
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"
                              ><h6>Quantity Notification :</h6></span
                            >
                            <span class="col-6 p-0"
                              ><h6>{{ quantityNoti }}</h6></span
                            >
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"
                              ><h6>Product Description :</h6></span
                            >
                            <span class="col-6 p-0"
                              ><h6>{{ proDescription }}</h6></span
                            >
                          </div>
                        </div>
                        <div class="col-12 pl-0 pt-2 border">
                          <div class="row m-0">
                            <span class="col-6 pr-0"
                              ><h6>Product Advantage :</h6></span
                            >
                            <span class="col-6 p-0"
                              ><h6>{{ proAdvantage }}</h6></span
                            >
                          </div>
                        </div>
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
                <td>
                  <div class="btn-group text-light product-delete">
                    <a
                      herf="#"
                      @click.prevent="
                        salesProductDelete(salesProductList.salesProductEntryId)
                      "
                      ><i class="fa fa-times" aria-hidden="true"></i
                    ></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="product-detail pb-4 alert-success mt-4">
          <div class="row m-0">
            <div class="col-lg-6 col-12 p-0 pl-2">
              <form class="form-row m-0" action="#" method="post">
                <div class="col-md-6">

                  <!-- <div class="form-group m-0 row mt-2">
                    <div class="col-md-5 col-sm-5 col-12 pl-0">
                      <p>Quantity</p>
                    </div>
                    <div class="col-md-7 col-sm-8 col-12 pl-0">
                      <input
                        type="text"
                        disabled
                        v-model="form.totalQuantity"
                        class="form-control"
                        placeholder="Quantity"
                      />
                    </div>
                  </div> -->

                  <div class="form-group m-0 row mt-2">
                    <div class="col-md-5 col-sm-5 col-12 pl-0">
                      <p>Gross Amount</p>
                    </div>
                    <div class="col-md-7 col-sm-8 col-12 pl-0">
                      <input
                        type="text"
                        disabled
                        v-model="form.totalBalance"
                        class="form-control"
                        placeholder="Gross Amount"
                      />
                     
                    </div>
                  </div>
                  <div class="form-group m-0 row mt-2">
                    <div class="col-md-5 col-sm-5 col-12 pl-0">
                      <p>Less(tk)</p>
                    </div>
                    <div class="col-md-7 col-sm-8 col-12 pl-0">
                      <input
                        type="text"
                        v-model="form.discountPrice"
                        class="form-control"
                        placeholder="Discount"
                        @keyup="calculateAllDiscount()"
                      />
                    </div>
                  </div>
                  <div class="form-group m-0 row mt-2">
                    <div class="col-md-5 col-sm-5 col-12 pl-0">
                      <p>VAT</p>
                    </div>
                    <div class="col-md-7 col-sm-8 col-12 pl-0">
                      <input
                        type="text"
                        disabled
                        v-model="form.totalVat"
                        class="form-control"
                        placeholder="Total VAT"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group m-0 row mt-2">
                    <input
                      type="hidden"
                      v-model="form.vatCalculate"
                      class="form-control"
                      placeholder="Total Payable"
                    />
                    <div class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0">
                      <p>Sub Total</p>
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
                      <input
                        type="text"
                        disabled
                        v-model="form.totalPayable"
                        class="form-control"
                        placeholder="Sub Total"
                      />
                    </div>
                  </div>
                  <div class="form-group m-0 row mt-2">
                    <div class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0">
                      <p>{{preDueText}}</p>
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
                      <input v-if="perDueDisplayStatus"
                        type="text"
                        disable
                        v-model="form.previousDueDisplay"
                        class="form-control"
                        placeholder="Previous Due"
                      />
                      <input v-if="perAdvanceDisplayStatus"
                        type="text"
                        disabled
                        v-model="form.previousAdvanceDisplay"
                        class="form-control"
                        placeholder="Advance"
                      />
                    </div>
                  </div>
                  
                  <div class="form-group m-0 row mt-2">
                    <div class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0">
                      <p>Due.Limit</p>
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
                      <input
                        type="text"
                        disabled
                        class="form-control"
                        placeholder="0"
                        v-model="form.limitDueAmountShow"
                      />
                      
                    </div>
                  </div>
                  
                </div>
              </form>
            </div>

            <div class="col-lg-6 col-md-6 col-12 px-3 float-right"  style="border-left:3px solid #c8cac8;">
              
              <!-- =============================== payment  -->
              <div class="modal-body pt-0"  v-if="guestInfo == true">
                      <div class="row">
                        <div class="col-12 col-md-6 col-xs-12">
                          <div class="form-group m-0 row mt-2">
                            <div class="col-12 pl-0 border-bottom text-center mb-2">
                              <label> Cash Payment </label>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-4 col-12 pl-0">
                              <p>Grand Total  </p>
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-8 col-12 pl-0">
                              <input
                                type="text"
                                disabled
                                v-model="form.currentTotalAmount"
                                class="form-control"
                                placeholder="Grand Total"
                              />
                            </div>
                          </div>
                          <div class="form-group m-0 row mt-2">
                            <div class="col-lg-5 col-md-5 col-sm-4 col-12 pl-0">
                              <p>Cash </p>
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-8 col-12 pl-0">
                              <input
                                type="text"
                                v-model="form.currentPaidAmount"
                                @keyup="totalCalculate(1)"
                                onkeyup="value=value.replace(/[^0-9^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.').replace(/^0+/, '').replace('-', '')"
                                autocomplete="off"
                                class="form-control noscroll"
                                placeholder="Cash Amount"
                              />
                              <span style="color: red" v-if="negative == true"
                                > Negative Amount Not Allowed </span
                              >
                            </div>
                          </div>
                          <div class="form-group m-0 row mt-2">
                            <div class="col-lg-5 col-md-5 col-sm-4 col-12 pl-0">
                              <p>Due </p>
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-8 col-12 pl-0">
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
                        <div class="col-12 col-md-6 col-xs-12 p-0">
                          <button
                            v-if="morepay == false"
                            class="btn btn-info"
                            @click.prevent="open()"
                          >
                            <i class="fa fa-plus" aria-hidden="true"></i> More
                            pay
                          </button>
                          <button
                            v-if="close == true"
                            class="btn btn-danger"
                            @click.prevent="closeForm()"
                          >
                            <i class="fa fa-minus" aria-hidden="true"></i> Close
                          </button>
                          <div v-if="morepay">
                            <div class="row border-bottom text-center">
                              <label> Bank Payment </label>
                              <select
                                v-model="form.senderbankTypeEntryId"
                                name="bankTypeEntryId"
                                class="form-control mt-2"
                                :class="{
                                  'is-invalid':
                                    form.errors.has('bankTypeEntryId'),
                                }"
                                @change.prevent="senderBankTypeIdCatch()"
                              >
                                <option value=""> --------- </option>
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
                              <div class="border border-success p-2 mt-3" v-if="bankAccount" style="position:relative;">
                                <label class="text-center alert-success" style="position:absolute;top:-17px;"> &nbsp;&nbsp;   Sender Information &nbsp; &nbsp;  </label>
                                <div class="form-group mt-2">
                                  <span> Bank Name </span>
                                  <input
                                    type="text"
                                    v-model="form.senderBankName"
                                    class="form-control"
                                  />
                                </div>
                                <div class="form-group">
                                  <span> A/C Name </span>
                                  <input
                                    type="text"
                                    v-model="form.senderAcName"
                                    class="form-control"
                                  />
                                </div>
                                <div class="form-group">
                                  <span> A/C No </span>
                                  <input
                                    type="text"
                                    v-model="form.senderAcNo"
                                    class="form-control"
                                  />
                                </div>
                                
                                <!-- <div class="form-group">
                                  <label> Branch </label>
                                  <input
                                    type="text"
                                    v-model="form.senderBranchName"
                                    class="form-control"
                                  />
                                </div> -->
                              </div>
                              
                                <div class="border border-success p-2 mt-3" v-if="bankCardAccount" style="position:relative;">
                                <label class="text-center alert-success" style="position:absolute;top:-17px;"> &nbsp;&nbsp;   Sender Information &nbsp; &nbsp;  </label>
                                
                                <div class="form-group mt-2">
                                  <span> Bank Name </span>
                                  <input
                                    type="text"
                                    v-model="form.senderBankName"
                                    class="form-control"
                                  />
                                </div>
                                <div class="form-group">
                                  <span>  Card No </span>
                                  <input
                                    type="text"
                                    v-model="form.senderAcNo"
                                    class="form-control"
                                  />
                                </div>
                                <div class="form-group">
                                  <span> Cardholder Name </span>
                                  <input
                                    type="text"
                                    v-model="form.senderAcName"
                                    class="form-control"
                                  />
                                </div>
                                
                              </div>
                           
                                <div class="border border-success p-2 mt-3" v-if="mobileAccount" style="position:relative;">
                                <label class="text-center alert-success" style="position:absolute;top:-17px;">Sender Information</label>
                                
                                <div class="form-group mt-2">
                                  <span> Mobile A/C No
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
                                  ></span>
                                  <input
                                    type="text"
                                    v-model="form.senderMobileAcNo"
                                    class="form-control"
                                  />
                                </div>
                                <div class="form-group">
                                  <span> Trx No </span>
                                  <input
                                    type="text"
                                    v-model="form.senderTrxNo"
                                    class="form-control"
                                  />
                                </div>
                              </div>

                              
                              <div class="border border-success p-2 mt-3"  style="position:relative;">
                                <label class="text-center alert-success" style="position:absolute;top:-17px;">Receiver Information</label>
                                
                                <div class="form-group mt-2">
                                  <span>Bank Type Name</span>
                                <select
                                  disabled
                                  v-model="form.receiverbankTypeEntryId"
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
                                <span> Bank Name</span>
                                <select
                                  v-model="form.receiverbankEntryId"
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
                                <span>  Account No</span>
                                <select
                                  v-model="form.receiverbankAccountId"
                                  name="bankAccountId"
                                  class="form-control"
                                  :class="{
                                    'is-invalid':
                                      form.errors.has('bankAccountId'),
                                  }"
                                  @change="getBankMoreInfo()"
                                >
                                  <option value="">Select Bank Account</option>
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
                                  <span>  Branch Name </span>
                                  <input
                                    type="text"
                                    v-model="form.receiverbranchName"
                                    class="form-control"
                                    readonly
                                  />
                                </div>

                                <div class="form-group">
                                  <span>  Account No </span>
                                  <input
                                    type="text"
                                    v-model="form.receiverAccNo"
                                    class="form-control"
                                    readonly
                                  />
                                </div>
                              </div>
                              </div>
                              <div class="form-group m-0 row mt-2">
                                <div
                                  class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0"
                                >
                                  <label>Amount </label>
                                </div>
                                <div
                                  class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0"
                                >
                                  <input
                                    type="text"
                                    v-model="form.mobileAmount"
                                    @keyup="totalCalculate(2)"
                                    onkeyup="value=Math.abs(value.replace(/[^0-9^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.').replace(/^0+/, ''))"
                                    autocomplete="off"
                                    class="form-control noscroll"
                                    placeholder="Bank Amount"
                                  />
                                  <span
                                    style="color: red"
                                    v-if="negative == true"
                                    > Negative Amount Not Allowed </span
                                  >
                                </div>
                              </div>
                              <div class="form-group m-0 row mt-2">
                                <div
                                  class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0"
                                >
                                  <label> Due </label>
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
                            
                            <div class="row p-0 mt-2">
                              <span class="badge badge-danger pl-2 pr-2" v-if="dueLimitMessage == true"
                            > Due Limit Exit.
                          </span>
                              <span class="badge badge-danger pl-2 pr-2" v-if="generalCustomerDueMessage == true"
                            > General customer due not allow.
                            </span>
                            </div>


                            <div class="row p-0">
                            
                            <div class="col-6 p-0">
                                <span v-if="paynow1 == false">
                          <button
                            type="button"
                            disabled
                            @click.prevent="salesInvoiceEntry()"
                            class="
                              mt-3
                              btn-pill btn-shadow 
                              fsize-1
                              btn btn-primary float-left
                            "
                          >
                            <span class="mr-2 opacity-7">
                              <i class="fa fa-paper-plane"></i>
                            </span>
                            <span class="mr-1"> Submit </span>
                          </button>
                           
                        </span>
                        <span v-if="paynow1 == true">
                          <button
                            type="button"
                            @click.prevent="salesInvoiceEntry()"
                            class="
                              mt-3
                              btn-pill btn-shadow 
                              fsize-1
                              btn btn-primary float-left
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
                        </span>
                              </div>

                              <div class="col-6 p-0">
                              <span v-if="paynow == true">
                <span
                  v-if="guestInfo"
                  @click.prevent="salesInvoiceEntrySt()"
                  class="btn btn-warning float-right mt-3">
                  Pending
                </span>
                </span>
                               </div>

                              </div>





                          </div>
                        </div>
                      </div>
                      <center>
                        
                      </center>
                    </div>
              <!-- =============================== /pament  -->



              <div class="col-lg-6 col-md-6 col-12" v-if="guestInfo == false">
                <div class="due-bal">
                  <label for=""> Customer Name </label>
                  <input
                    type="text"
                    v-model="form.guestCustomerName"
                    class="form-control"
                    placeholder="Guest Customer Name"
                  />
                </div>

                <div class="due-bal">
                  <label for=""> Mobile No </label>
                  <input
                    type="text"
                    v-model="form.guestCustomerPhone"
                    class="form-control"
                    placeholder="Guest Customer Phone"
                  />
                </div>
                <br />
                <!-- <center> -->
                  <button
                    @click.prevent="salesInvoiceEntryPending()"
                    class="btn btn-success float-right">
                    Add
                  </button>
                  <button
                    @click.prevent="salesInvoicePendingCancel()"
                    class="btn btn-danger float-left">
                    Cancel
                  </button>
                <!-- </center> -->
              </div>
              <!-- <div class="total-bal">
                    <h5>Total : <span id="total"> </span></h5>
                  </div> -->
              <span v-if="paynow == false">
                <span style="color: red">Due Limit Is Over</span>

                <button
                  type="button"
                  disabled
                  @click.prevent="salesInvoiceEntry()"
                  class="mt-3 ml-2 btn btn-warning"
                >
                  <span class="mr-2 opacity-7">
                    <i class="fa fa-paper-plane"></i>
                  </span>
                  <span class="mr-1"> Pay Now 1</span>
                </button>
              </span>
              
                
<!-- 
                <button
                  type="button"
                  data-toggle="modal"
                  :data-target="'#pay' + this.form.salesInvoiceNo"
                  class="mt-3 ml-2 btn btn-primary payNow2"
                  @click="checkGeneralCustomer()"
                >
                   
                  <span class="mr-1">  Next  <i class="fa fa-angle-double-right"></i>  </span>
                </button> -->
              <!-- </span> -->
              <!-- Modal Payment-->
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card main-card element-block-example mt-5" style="display:none;">
      <div class="card-header-tab card-header alert-info">
        <h4>
          <i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          View Information
        </h4>
      </div>
      <div class="card-body table-responsive bg-white">
        <table
          style="width: 100%"
          class="table table-hover table-striped table-bordered"
        >
          <thead>
            <tr>
              <th>SN</th>
              <th>Sales Date</th>
              <th>Invoice No</th>
              <th>Customer Name</th>
              <th>Customer Type</th>
              <th>Invoice Amount</th>
              <th>Off  </th>
              <th>Receivable</th>
              <th>Cash</th>
              <th>Bank</th>
              <th>Due</th>
              <!-- <th>Action</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(salesInvoiceList, index) in salesInvoiceLists.data">
              <td>{{ index + 1 }}</td>
              <td>{{ salesInvoiceList.salesDate }}</td>
              <td>
                <button
                  type="button"
                  class="mr-2 btn-hover-shine btn btn-shadow btn-primary"
                  data-toggle="modal"
                  @click.prevent="viewInvoice(salesInvoiceList.salesInvoiceNo)"
                  data-target="#salesId"
                >
                  {{ salesInvoiceList.salesInvoiceNo }}
                </button>
              </td>
              <td>
                <span v-if="salesInvoiceList.customer_name">{{
                  salesInvoiceList.customer_name.customerName
                }}</span>
                <span v-else>Guest </span>
              </td>
              <td>{{ salesInvoiceList.customer_type.shopCustomerName }}</td>
              <td>{{ salesInvoiceList.totalQuantity }}</td>
              <td>{{ salesInvoiceList.discountPrice }}</td>
              <td>{{ salesInvoiceList.currentTotalAmount }}</td>
              <td>
                <span v-if="salesInvoiceList.pay">{{
                  salesInvoiceList.pay.cashAmount
                }}</span>
              </td>
              <td>
                <span v-if="salesInvoiceList.pay">{{
                  salesInvoiceList.pay.bankAmount
                }}</span>
              </td>
              <td>
                <span v-if="salesInvoiceList.pay">{{
                  salesInvoiceList.pay.currentDue
                }}</span>
              </td>

              <td>
                <!-- <router-link :to="`/productsale@edit${salesInvoiceList.salesInvoiceId}`" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"><i class=" fa fa-edit"></i>Edit</router-link> -->
              </td>
              <!-- Modal -->
              <div
          class="modal fade"
          id="salesId"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header bg-primary text-light">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Product Detalis
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
                <div class="card">
                  <div class="card-header-tab card-header alert-info">
                    <h4>
                      <i
                        class="
                          header-icon
                          lnr-laptop-phone
                          icon-gradient
                          bg-premium-dark
                        "
                      ></i>
                      Sales Invoice
                    </h4>
                  </div>

                  <div class="card-body">
                    <div class="toolbar hidden-print">
                      <div class="text-right">
                        <button
                          id="printInvoice"
                          onclick="jQuery('#invoice').print()"
                          class="btn btn-info"
                        >
                          <i class="fa fa-print"></i> Print
                        </button>
                        <!-- <button class="btn btn-info"><i class="fa fa-file-pdf-o"></i> Export as PDF</button> -->
                      </div>
                    </div>

                    <div id="invoice" style="padding-top: 0px !important">
                      <div class="invoice overflow-auto">
                        <div style="min-width: 600px">
                          <invoice></invoice>

                          <main>
                            <div class="row contacts">
                    <div class="col invoice-to">
                        <div class="text-gray-light">  <u> <b> Customer Information :</b> </u> </div>
                        <span v-for="cus in customer" :key="cus.id">
                        <div class="address" > {{ cus.customer.customerName }} </div>
                        <div class="address" > {{ cus.customer.customerPhone }} </div>
                        </span>
                      
                    </div>
                  
                    <div class="col invoice-details">
                        <div class="date"> Sales Invoice: {{ due.salesInvoiceNo }}</div>
                        <div class="date"> Sales Date: {{ due.salesDate }}</div>
                    </div>
                </div>
                            <table
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                              class="table table-bordered border-0"
                            >
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th class="text-left">Product</th>
                                  <th class="text-left">Brand</th>                                
                                  <th class="text-left">UNIT</th>
                                  <th class="text-right">Quantity</th>
                                  <th class="text-right">UNIT PRICE</th>
                                  <th class="text-right">TOTAL PRICE</th>
                                  <th class="text-right">OFF</th>
                                  <th class="text-right">TOTAL</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(list, index) in lists" :key="list.id">
                            <td>{{++index}}</td>
                            <td class="text-left">

                              <span 
                            
                              v-if="list.product_name"
                              >
                              {{list.product_name.productName}} </span>
                            </td>

                            <td> <span v-if="list.brand_name"
                                    >{{ list.brand_name.productBrandName }}</span>
                                      </td>
                


                  


                             <td class=""> {{list.unit_name.uniteEntryName}} </td>
                             <td class=""> 
                               {{list.color_name.colorEntryName}}/
                               {{list.size_name.sizeEntryName}}
                                </td>
                             <td class=""> {{list.quantity}} </td>
                             <td class=""> {{list.unitPrice}} </td>
                             <td class=""> 
                               {{list.color_name.colorEntryName}}/
                               {{list.size_name.sizeEntryName}}
                                </td>
                             <td class=""> {{Math.abs(list.quantity*list.unitPrice)}} </td>
                             <td class=""> {{list.totalDiscount}} </td>
                             <td class=""> {{list.totalPrice}} </td>
                           
                         
                        </tr>
                              </tbody>
                              <tr>
                                <td colspan="8" class="text-right border-0">
                                  <b> Grand Total </b>
                                </td>
                                <td class="border-0"> <b> : {{ total }}</b> </td>
                              </tr>
                            </table>

                            <div class="row">
                              <div class="col"></div>
                              <div class="col"></div>
                              <div class="col">
                                <table class="table table-bordered">
                                  <tbody>
                                    <tr>
                                      <td class="text-right">Discount</td>
                                      <td class="bg-light"> {{ due.discountPrice }} </td>
                                    </tr>
                                    <!-- <tr>
                                      <td class="text-right">
                                        Supplier Payable
                                      </td>
                                    
                                    </tr> -->

                                    <tr>
                                      <td class="text-right">
                                        Total Product Cost
                                      </td>
                                      <td> {{ due.totalPayable }} </td>
                                    </tr>
                                    <tr>
                                       <td class="text-right">
                                        Previous Due
                                      </td>
                                      <td> {{ due.previousDue }} </td>
                                    </tr>
                                    <tr>
                                      <td class="text-right">
                                        Current Payable
                                      </td>
                                      <td class="bg-light"> {{ due.currentTotalAmount  }} </td>
                                    </tr>
                                    <!-- <tr>
                            <td colspan="2"></td>
                            <td colspan="2"  :style="'color:'+gets.themeColor">  {{ gets.grandTotal }}  </td>
                            <td  :style="'color:'+gets.themeColor">$6,500.00</td>
                        </tr> -->
                                  </tbody>
                                </table>
                              </div>
                            </div>

                            <div class="row mt-5">
                              <div class="col">
                                <center>
                                  <span style="text-decoration: overline">
                                    &nbsp; &nbsp; &nbsp; Supplier Sign &nbsp;
                                    &nbsp; &nbsp;</span
                                  >
                                </center>
                              </div>
                              <div class="col"></div>
                              <div class="col">
                                <center>
                                  <span style="text-decoration: overline">
                                    &nbsp; &nbsp; &nbsp; Authorize Sign &nbsp;
                                    &nbsp; &nbsp;
                                  </span>
                                </center>
                              </div>
                            </div>
                          </main>
                        </div>
                        <!--DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom-->
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>

             
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
            </tr>
          </tbody>
        </table>
      </div>
      <span class="card_footer">
        <pagination
          :data="salesInvoiceLists"
          :limit="limit"
          @pagination-change-page="getPaginateList"
        >
          <span slot="prev-nav">&lt; Previous</span>
          <span slot="next-nav">Next &gt;</span>
        </pagination>
      </span>
    </div>

    <!-- Customer  Modal -->
    <div
      class="modal fade"
      id="customerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary text-light">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Customer Information Entry
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
          <form action="">
            <div class="modal-body">
              <div class="purchase-entry py-4 px-2">
                <div class="col-12 supplier-border shadow-custom">
                  
                  
                  
                  <div class="form-group">
                    <label>
                      Customer Type
                      <i
                        class="fa fa-star text-danger text-10 cursor-pointer"
                        title="Mendatory Field"
                        data-placement="top"
                        data-toggle="tooltip"
                        data-original-title="Mendatory Field"
                      ></i>
                    </label>
                    <select
                      v-model="form.customerTypeId1"
                      name="customerTypeId1"
                      :class="{
                        'is-invalid': form.errors.has('customerTypeId1'),
                      }"
                      class="form-control"
                    >
                      <option value="">Select One</option>
                      <option
                        v-for="customerTypeList in customerTypeLists"
                        :value="customerTypeList.shopCustomerTypeEntryId"
                      >
                        {{ customerTypeList.shopCustomerName }}
                      </option>
                    </select>
                    <has-error :form="form" field="customerTypeId1"></has-error>
                  </div>



                  <div class="form-group">
                    <label> SR Id </label>
                    <select
                      v-model="form.srId"
                      name="srId"
                      :class="{
                        'is-invalid': form.errors.has('srId'),
                      }"
                      class="form-control"
                    >
                      <option value="">Select One</option>
                      <option
                        v-for="srList in srLists"
                        :value="srList.id"
                      >
                        {{ srList.name }}
                      </option>
                    </select>
                    <has-error :form="form" field="srId"></has-error>
                  </div>



                  <div class="form-group">
                    <label>
                      Customer Name
                      <i
                        class="fa fa-star text-danger text-10 cursor-pointer"
                        title="Mendatory Field"
                        data-placement="top"
                        data-toggle="tooltip"
                        data-original-title="Mendatory Field"
                      ></i>
                    </label>
                    <input
                      type="text"
                      v-model="form.customerName"
                      name="customerName"
                      :class="{ 'is-invalid': form.errors.has('customerName') }"
                      placeholder="Customer Name"
                      class="form-control"
                    />
                    <has-error :form="form" field="customerName"></has-error>
                  </div>
                  <div class="form-group">
                    <label
                      >Customer Mobile
                      <i
                        class="fa fa-star text-danger text-10 cursor-pointer"
                        title="Mendatory Field"
                        data-placement="top"
                        data-toggle="tooltip"
                        data-original-title="Mendatory Field"
                      ></i>
                    </label>
                    <input
                      type="text"
                      v-model="form.customerPhone"
                      name="customerPhone"
                      :class="{
                        'is-invalid': form.errors.has('customerPhone'),
                      }"
                      placeholder="Customer Mobile Number"
                      class="form-control"
                    />
                    <has-error :form="form" field="customerPhone"></has-error>
                  </div>
                  <div class="form-group">
                    <label>Customer Email</label>
                    <input
                      type="text"
                      v-model="form.customerEmail"
                      name="customerEmail"
                      :class="{
                        'is-invalid': form.errors.has('customerEmail'),
                      }"
                      placeholder="Customer Email"
                      class="form-control"
                    />
                    <has-error :form="form" field="customerEmail"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Customer Imo Number</label>
                    <input
                      type="text"
                      v-model="form.customerImoNumber"
                      name="customerImoNumber"
                      placeholder="Customer Imo Number"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label>Customer Facebook ID</label>
                    <input
                      type="text"
                      v-model="form.customerFacebookID"
                      name="customerFacebookID"
                      placeholder="Customer Facebook ID"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label>Customer Address</label>
                    <textarea
                      type="text"
                      v-model="form.customerAddress"
                      name="customerAddress"
                      :class="{
                        'is-invalid': form.errors.has('customerAddress'),
                      }"
                      placeholder="Customer Address"
                      class="form-control"
                    ></textarea>
                    <has-error :form="form" field="customerAddress"></has-error>
                  </div>
                </div>
              </div>
              <div class="purchase-entry py-4 px-2">
                <div class="col-12 supplier-border shadow-custom">
                  <h5 class="text-center">Customer Reference Information</h5>
                  <div class="form-group">
                    <label>Reference Name</label>
                    <input
                      type="text"
                      v-model="form.referenceName"
                      name="referenceName"
                      :class="{ 'is-invalid': form.errors.has('brandStatus') }"
                      placeholder="Reference Name"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label>Reference Email</label>
                    <input
                      type="text"
                      v-model="form.referenceEmail"
                      name="referenceEmail"
                      :class="{ 'is-invalid': form.errors.has('brandStatus') }"
                      placeholder="Reference Email"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label>Reference Phone Number</label>
                    <input
                      type="text"
                      v-model="form.referencePhone"
                      name="referencePhone"
                      :class="{ 'is-invalid': form.errors.has('brandStatus') }"
                      placeholder="Reference Phone Number"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-hover-shine btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              class="btn btn-hover-shine btn-success"
              @click.prevent="customerInformationEntry()"
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
              Add Customer Information
            </button>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>



document.addEventListener("wheel", function(event) {
  if (document.activeElement.type === "number" &&
    document.activeElement.classList.contains("noscroll")) {
    document.activeElement.blur();
  }
});




import Multiselect from "vue-multiselect";
import moment from "moment";

export default {
  data() {
    return {
      loading: false,
      form: new Form({
        customerName: "",
        srId: "",
        customerEmail: "",
        customerPhone: "",
        customerTypeId: 1,
        priceTypeId: 1,
        customerTypeId1: "",
        customerImoNumber: "",
        customerFacebookID: "",
        customerAddress: "",
        referenceName: "",
        referenceEmail: "",
        referencePhone: "",
        mobileAmount: "",
        guestCustomerName: "",
        guestCustomerPhone: "",
        paymentType: "",
        //
        salesDate: moment().format("YYYY-MM-DD"),
        priceType: "",
        salesInvoiceNo: "",
        salesCustomerEntryId: "",

        purchaseProductId: "",
        productBarcode: "",
        unitId: "",
        colorId: '',
        sizeId: '',
        brandId: "",
        quantity: "",
        unitPrice: "",
        purchaseUnitPrice: "",
        purchaseTotalPrice: "",
        discountPriceHidden: 0,
        hiddenPrice: 0,
        limitDueAmountShow: '~',
        limitDueAmount: 0.00,
        totalPrice: "",

        //  footer Form
        totalPurchase: "",
        totalQuantity: "",
        totalBalance: "",
        discountPrice: "",
        totalVat: 0,
        totalVat1: 2,
        vatCalculate: "",
        totalPayable: "",
        previousDue: "",
        previousDueDisplay: "",
        previousAdvance: "",
        previousAdvanceDisplay: "",
        currentTotalAmount: "",
        currentPaidAmount: 0,
        currentDue: 0,
        totalDis: "",
        //bank info sender
        senderbankTypeEntryId: "",
        senderBankName: "",
        senderAcNo: "",
        senderAcName: "",
        senderBranchName: "",
        senderMobileAcNo: "",
        senderTrxNo: "",
        //receiver bank info
        receiverbankTypeEntryId: "",
        receiverbankEntryId: "",
        receiverbankAccountId: "",
        receiverbranchName: "",
        receiverAccNo: "",
       
      }),

      priceType: [
        { id: 1, priceName: "MRP Price" },
        { id: 2, priceName: "Sales Price" },
        { id: 3, priceName: "Wholesale Price" },
        { id: 4, priceName: "Special Price" },
        { id: 5, priceName: "E-Commerce Price" },
      ],

      brandLists: [],
      uniteLists: [],
      colorLists: [],
      sizeLists: [],
      productPriceLists: [],
      customerTypeLists: [],
      srLists: [],
      salesCustomerLists: [],

      purchaseProductId: {},
      brandId: {},
      colorId: {},
      sizeId: {},
      salesProductLists: {},
      salesInvoiceNoIncre: {},
      salesInvoiceLists: {},
      salesPType: {},

      //  totalNoti: "",
      
      // details
      shopProductBrandLists: [],
      purchaseProductReports: {},
      modelNo: {},
      batchNo: {},
      qrCode: {},
      mfgLicenseNO: {},
      warranty: {},
      selectMothOrYearWarranty: {},
      guarantee: {},
      selectMothOrYearGuarantee: {},
      mfgDate: {},
      expiryDate: {},
      tax: {},
      taxAmount: {},
      taxAmountType: {},
      quantityType: {},
      quantityNoti: {},
      proDescription: {},
      proAdvantage: {},
      lmt: "",
      totalQt: "",
      paynow: true,
      paynow1: true,
      dueLimitMessage: false,
      generalCustomerDueMessage: false,
      negative: false,
      invalid: false,
      avil: false,
      fromshow: false,
      guestInfo: true,
      //bank Inf0

      pendingCount: "",
      paymentTypeLists: {},
      showBankNames: [],
      showBankAccounts: [],
      showBankTypeDatas: [],
      bankInformationAccountInfoStatus: [],
      mobileAccount: false,
      bankCardAccount: false,
      bankAccount: false,
      morepay: true,
      close: false,
      productBarcodeStatus: false,
      predue: "",
        loading:false,
      loadingPay:false,
          lists: "",
       lists: "",
      total: "",
      due: "",
      discount: "",
      customer: [],

      preDueText: "Pre.Due",
      perDueDisplayStatus:true,
      perAdvanceDisplayStatus:false,

    };
  },
  components: {
    Multiselect,
  },
  props: {
    limit: {
      type: Number,
      default: 2,
    },
  },
  mounted() {


    this.totalBalance();
    this.getPaginateList();
    this.salesInvoiceList();
    this.salesProductList();
    this.customerTypeList();


    // this.showDataList()
    this.viewVat();
    this.salesCustomerDueLimit();
    this.getData();
    this.srList();
    // this.getNoti();
  },

  methods: {

searchProductBarcode(){
  // alert(this.form.productBarcode);
},
    showHideBarcodeBox(){

      if(this.productBarcodeStatus==true){
        this.productBarcodeStatus=false;
      }else{
        this.productBarcodeStatus=true;
      }
    },

    calculateSaleDiscount(){

        if(this.form.totalDis>0){
              this.form.totalPrice = (this.form.unitPrice*this.form.quantity)-this.form.totalDis;
              this.form.discountPriceHidden = this.form.totalDis;
        }
 
    },
    calculateAllDiscount(){
        this.form.cashAmount='';
        this.form.bankAmount='';

        if(this.form.discountPrice>this.form.totalBalance){
          this.form.totalPayable = this.form.totalBalance;
        }
        else{
        if(this.form.discountPrice>0){
          this.form.totalPayable = parseFloat(parseFloat(this.form.totalBalance)-parseFloat(this.form.discountPrice)).toFixed(2);
          this.form.currentTotalAmount = parseFloat(parseFloat(this.form.totalPayable)+parseFloat(this.form.previousDue)).toFixed(2);
          this.form.currentDue = parseFloat(parseFloat(this.form.totalPayable)+parseFloat(this.form.previousDue)).toFixed(2);
        }
        else{
          this.form.totalPayable = parseFloat(this.form.totalBalance).toFixed(2);
          this.form.currentTotalAmount = parseFloat(parseFloat(this.form.totalPayable)+parseFloat(this.form.previousDue)).toFixed(2);
          this.form.currentDue = parseFloat(parseFloat(this.form.totalPayable)+parseFloat(this.form.previousDue)).toFixed(2);
        }
        }
    },
    open() {
      this.morepay = true;
      this.close = true;
    },
      viewInvoice(id) {
      axios.get(`salesInvoiceList/${id}`).then((res) => {
      this.lists = res.data.lists;
        this.total = res.data.total;
        this.discount = res.data.discount;
        this.due = res.data.due;
        this.customer = res.data.customer;
      });
      $("#salesId").modal("show");
    },

    closeForm() {
      this.morepay = false;
      this.close = false;
    },
    salesCustomerName({ customerName }) {
      return `${customerName}`;
    },

    prdouctName({ product_name }) {
      return `${product_name.productName} (${product_name.productCode})`;
    },
    brandName({ productBrandName }) {
      return `${productBrandName}`;
    },
    uniteName({ uniteEntryName }) {
      return `${uniteEntryName}`;
    },
    colorName({ colorName }) {
      return `${colorName}`;
    },
    sizeName({ sizeName }) {
      return `${sizeName}`;
    },
    customFormatter(date) {
      return moment(date).format("DD-MM-YYYY");
    },
    
    unitNameShowSales(productId,brandId) {
      axios.get("/unitNameShowSales/"+productId+'/'+brandId+'/'+this.form.priceTypeId).then((res) => {
        this.uniteLists = res.data.unitNameShow;
      });
    },
    
    unitNameShow() {
      axios.get("/unitNameShow").then((res) => {
        this.uniteLists = res.data.unitNameShow;
      });
    },
    customerTypeList() {
      axios.get("/salesProductEntry/create").then((res) => {
        this.uniteLists = res.data.uniteLists;
        
        this.customerTypeLists = res.data.customerTypeLists;
        this.form.customerTypeId = res.data.customerTypeId;

        this.customerTypeIdCatch();

        this.productPriceLists = res.data.productPriceLists;
      });


    },
    srList() {
      axios.get("/addSREntry").then((res) => {
        this.srLists = res.data.data;
      });
    },
    
    customerTypeIdCatch() {
      axios
        .get("/customerTypeIdCatch/" + this.form.customerTypeId)
        .then((res) => {
          this.salesCustomerLists = res.data.salesCustomerLists;

          //  this.salesCustomerDueLimit()
          this.form.purchaseProductId = "";
          this.form.unitId = "";
          this.form.brandId = "";
          this.form.hiddenPrice = "";
          this.form.quantity = "";
          this.form.totalDis = "";
          this.form.totalPrice = "";
        });
      axios.get("/priceTypeSetup/" + this.form.customerTypeId).then((res) => {
        this.salesPType = res.data.salesPriceTypes;
        this.form.priceTypeId = res.data.salesPriceTypes.priceType;
      });

      this.checkGeneralCustomer();
    },

    // getNoti(){
    //        axios.get('/alertNoti/create').then(res=>{
    //          this.totalNoti=res.data.totalCount
    //        })
    // },
    quantity(e) {
      
      if (this.form.quantity<=0) {
        this.invalid = true;
        this.avil = false;
        this.form.quantity = '';
        
      } else {

        if (this.form.quantity > parseFloat(this.totalQt)) {
          this.avil = true;
          this.form.quantity = this.totalQt;
          // this.totalPrice();
        } else {
          this.avil = false;
        }
        if(this.form.quantity<1){
        this.form.quantity=1
        // this.totalPrice();
        }
          this.invalid = false;
          this.totalPrice();
      }
    },
    customerIdCatch() {
      axios
        .get(
          "/customerIdCatch/" +
            this.form.salesCustomerEntryId.salesCustomerEntryId
        )
        .then((res) => {
          // this.form.previousDue = res.data.customerPreviousDue;
          // this.form.previousDueDisplay = Math.abs(res.data.customerPreviousDue);
          this.salesCustomerDueLimit();
          $("#blanceDue").text(res.data.customerPreviousDue);
        });
    },
    //  showDataList() {
    //           axios.get('/salesPriceType').then(res => {
    //                  this.salesPriceTypes = res.data.salesPriceTypes

    //             })
    //       },
    viewVat() {
      axios.get("/vatEntry").then((res) => {
        this.info = res.data.data;
        if (res.data.data) {
          this.form.totalVat = res.data.data.vat;
        } else {
        }
      });
    },
    purchaseProductIdCatch(value) {
      if (this.form.priceTypeId != "") {
        this.purchaseProductId = value.productId;

        $('.availableQuantity').attr("placeholder", 'Stock=0');

        axios.get("/brandIdCatch/" + this.purchaseProductId).then((res) => {
          this.brandLists = res.data.brandLists;

          this.productDetails();
          this.form.unitId = "";
          this.form.brandId = "";
          this.form.hiddenPrice = "";
          this.form.quantity = "";
          this.form.totalDis = "";
          this.form.totalPrice = "";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Select Price Type!",
        });
        this.form.purchaseProductId = "";
      }
    },
    
    salesProductIdCatch(value) {
      // alert(value.productBrandEntryId);

 
      if (this.form.priceTypeId != "") {
        this.brandId = value.productBrandEntryId;

        if(this.form.colorId>0){
          this.colorId = this.form.colorId;
        }else{
          this.colorId=0;
        }

        if(this.form.sizeId>0){
          this.sizeId = this.form.sizeId;
        }else{
          this.sizeId=0;
        }


      axios.get("/colorListById/"+this.purchaseProductId +"/"+this.brandId).then((res) => {
        this.colorLists = res.data.colorList;
      });
      axios.get("/sizeListById/"+this.purchaseProductId +"/"+this.brandId).then((res) => {
        this.sizeLists = res.data.sizeList;
      });






          // --------------------- sales unit list 

          this.unitNameShowSales(this.purchaseProductId,this.brandId);

          // --------------------- //sales unit list
          
          


      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Select Price Type!",
        });
        this.form.purchaseProductId = "";
      }
    },
getPriceStock(value){
  // alert(value.uniteEntryId);
        $('.availableQuantity').attr("placeholder", 'Stock=0');
        axios
          .get("/purchaseProductIdCatchForSaleUnit/"+this.purchaseProductId +"/"+this.form.priceTypeId+"/"+this.brandId+"/"+this.colorId+"/"+this.sizeId+"/"+value.uniteEntryId
          )
          .then((res) => {
            let price = parseFloat(res.data.price).toFixed(2);
            this.form.unitPrice = price;
            this.form.purchaseUnitPrice = res.data.purchaseUnitPrice;
            
            if (res.data.discountPrice != "") {
              this.form.hiddenPrice =
                price + "/" + res.data.discountPrice;
              this.form.discountPriceHidden = res.data.discountPrice;
              this.form.quantity = "";
              this.form.totalPrice = "";
              this.form.totalDis = 0;
            }
            else {
              this.form.hiddenPrice = price;

              this.form.discountPriceHidden = 0;
              this.form.quantity = "";
              this.form.totalPrice = "";
              this.form.totalDis = 0;
            }



            axios
              .get("/purchaseProductInfForSaleUnit/" +this.purchaseProductId +"/"+this.brandId+"/"+this.colorId+"/"+this.sizeId+"/"+value.uniteEntryId+"/"+this.form.priceTypeId)
              .then((res) => {
                        let ok=res.data
                        this.totalQt = ok;
                        $('.availableQuantity').attr("placeholder", 'Stock='+ok);
                      
                          if ( this.totalQt==0) {
                            this.avil = true;
                        
                          } else {
                            this.avil = false;
                          }
            });


          });
},
    salesProductIdCatchColor(value) {
      // alert(value.id);
      if (this.form.priceTypeId != "") {
        this.colorId = value.id;

        
        if(this.form.sizeId>0){
          this.sizeId = this.form.sizeId;
        }else{
          this.sizeId=0;
        }

  
        axios
          .get("/purchaseProductIdCatchForSaleColor/"+this.purchaseProductId +"/"+this.form.priceTypeId+"/"+this.brandId+"/"+this.colorId+"/"+this.sizeId
          )
          .then((res) => {
            this.form.unitPrice = res.data.price;

            if (res.data.discountPrice != "") {
              this.form.hiddenPrice =
                res.data.price + "/" + res.data.discountPrice;
              this.form.discountPriceHidden = res.data.discountPrice;
              this.form.quantity = "";
              this.form.totalPrice = "";
              this.form.totalDis = 0;
            } else {
              this.form.hiddenPrice = res.data.price;

              this.form.discountPriceHidden = 0;
              this.form.quantity = "";
              this.form.totalPrice = "";
              this.form.totalDis = 0;
            }
            axios
              .get(
                "/purchaseProductInfForSaleColor/" +
                  this.purchaseProductId +
                  "/" +
                  this.brandId+"/"+this.colorId+"/"+this.sizeId
              )
              .then((res) => {
                let ok=res.data
                this.totalQt = ok;
                $('.availableQuantity').attr("placeholder", ok);
              
                  if ( this.totalQt==0) {
          this.avil = true;
       
        } else {
          this.avil = false;
        }
              });
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Select Price Type!",
        });
        this.form.purchaseProductId = "";
      }
    },

    salesProductIdCatchSize(value) {
      if (this.form.priceTypeId != "") {
        this.sizeId = value.id;

        
        

        axios
          .get("/purchaseProductIdCatchForSaleSize/"+this.purchaseProductId +"/"+this.form.priceTypeId+"/"+this.brandId+"/"+this.colorId+"/"+this.sizeId
          )
          .then((res) => {
            this.form.unitPrice = res.data.price;

            if (res.data.discountPrice != "") {
              this.form.hiddenPrice =
                res.data.price + "/" + res.data.discountPrice;
              this.form.discountPriceHidden = res.data.discountPrice;
              this.form.quantity = "";
              this.form.totalPrice = "";
              this.form.totalDis = 0;
            } else {
              this.form.hiddenPrice = res.data.price;

              this.form.discountPriceHidden = 0;
              this.form.quantity = "";
              this.form.totalPrice = "";
              this.form.totalDis = 0;
            }
            axios
              .get(
                "/purchaseProductInfForSaleSize/" +
                  this.purchaseProductId +
                  "/" +
                  this.brandId+"/"+this.colorId+"/"+this.sizeId
              )
              .then((res) => {
                let ok=res.data
                this.totalQt = ok;
              
                  if ( this.totalQt==0) {
          this.avil = true;
       
        } else {
          
        }
              });
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Select Price Type!",
        });
        this.form.purchaseProductId = "";
      }
    },
    customerInformationEntry() {
      this.loading = true;
this.form.post("/customerInformationEntry").then((res) => {
  this.loading = false;
        if (res.data.AccountCodeError) {
          Toast.fire({
            icon: "error",
            title: "Account Code Not Found.",
          });
        } else {
          Toast.fire({
            icon: "success",
            title: "Customer Information Entry successfully.",
          });
          $("#customerModal").modal("hide");
          this.salesInvoiceList();
          this.customerTypeIdCatch();
          this.form.reset();
        }
      }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },

    totalPrice() {
      let quantity = this.form.quantity;
      let unitPrice = this.form.unitPrice;

          let purchaseUnitPrice = this.form.purchaseUnitPrice;
          let purchaseTotalPrice = quantity * purchaseUnitPrice;
          this.form.purchaseTotalPrice = purchaseTotalPrice;


      if (this.form.discountPriceHidden == 0) {
        let totalPrice = quantity * unitPrice;
        this.form.totalPrice = totalPrice;

      

        this.form.totalDis = 0;
      } else {
        let totalPrice = quantity * this.form.discountPriceHidden;
        let dis = unitPrice - this.form.discountPriceHidden;
        this.form.totalDis = quantity * dis;
        this.form.totalPrice = totalPrice;
      }
    },

    totalCalculate(e) {
      
     let cashInput = parseFloat(this.form.currentPaidAmount);
     let bankInput = parseFloat(this.form.mobileAmount);

     if(cashInput=='' || isNaN(cashInput) || cashInput==0)
     {
      cashInput = 0;
     }
     else
     {
      cashInput = cashInput;
     }
     
     if(bankInput=='' || isNaN(bankInput) || bankInput==0)
     {
      bankInput = 0;
     }
     else
     {
      bankInput = bankInput;
     }


     let totalInput = parseFloat(cashInput+bankInput).toFixed(2);
     let inputDue = parseFloat(this.form.currentTotalAmount-totalInput).toFixed(2);

    // alert(totalInput);

     if(inputDue<0.00){
      if(e==1){
        this.form.currentPaidAmount = '';
        // alert(bankInput);
      this.form.currentDue=parseFloat(this.form.currentTotalAmount-bankInput).toFixed(2);
      }
      else if(e==2){
        this.form.mobileAmount = '';
      this.form.currentDue=parseFloat(this.form.currentTotalAmount-cashInput).toFixed(2);
      }
     }
     else{
      this.form.currentDue=inputDue;
     }

     if(this.form.customerTypeId==1){
        this.generalCustomerDue(this.form.currentDue);
     }else{
     this.calculateDueLimit(this.form.currentDue);
     }
    },
    generalCustomerDue(e){
      let due = parseFloat(e);
      if(due==0){
        this.paynow1 = true;
          this.generalCustomerDueMessage = false;
          // alert('jabe');
      }else{
          this.paynow1 = false;
          this.generalCustomerDueMessage = true;
          // alert('jabe na');
      }
    },
    calculateDueLimit(inputDue){

        //alert(this.form.limitDueAmount+'>'+inputDue);
        let due = parseFloat(inputDue);
        let limit = parseFloat(this.form.limitDueAmount);
        
        if(due===limit){
          this.paynow1 = true;
          this.dueLimitMessage = false;
          // alert('jabe');
        }
        else if(due<limit){
          this.paynow1 = true;
          this.dueLimitMessage = false;
          // alert('jabe');
        }
        else if(due>limit){
          this.paynow1 = false;
          this.dueLimitMessage = true;
          // alert('jabe na');
        }

    },

    // totalCalculate(e) {
    // if (this.form.mobileAmount == "") {
    //     this.totalcal = 0 + parseFloat(this.form.currentPaidAmount).toFixed(2);
    //   } 
    //   else {
    //     this.totalcal = parseFloat(this.form.currentPaidAmount + this.form.mobileAmount).toFixed(2);
        
    //     if(this.totalcal>this.form.currentTotalAmount){
    //       this.totalcal = this.form.currentTotalAmount;
    //       this.form.currentPaidAmount = parseFloat(this.form.currentTotalAmount - this.form.mobileAmount).toFixed(2);
    //     }
        
    //   }
      
    //   if (this.form.currentPaidAmount == "") {
    //     this.totalcal = parseFloat(this.form.mobileAmount) + 0;
    //   }
      
      
    //   if (this.form.currentPaidAmount < 0) {
    //     this.form.currentPaidAmount = parseFloat(this.form.currentTotalAmount-this.form.mobileAmount).toFixed(2);
    //     // alert('ss');
    //     this.negative = true;
    //   } else {
        
    //     if (this.form.currentPaidAmount<=0) {
    //       this.form.currentPaidAmount = parseFloat(this.form.currentTotalAmount-this.form.mobileAmount).toFixed(2);
    //       this.negative = true;
    //       // alert('mm');

    //     }
    //     if (this.form.currentPaidAmount>this.form.currentTotalAmount) {
    //       this.form.currentPaidAmount = this.form.currentTotalAmount;
    //       this.form.currentDue = 0;
    //       // this.negative = true;
    //       // alert('mm');

    //     }
    //      else {
    //       this.negative = false;
    //       if (this.form.currentPaidAmount > this.form.currentTotalAmount) {
    //         this.negative = true;
    //         this.form.currentPaidAmount = this.form.currentTotalAmount;
    //         this.form.currentDue =
    //           this.form.currentTotalAmount - this.form.currentPaidAmount;
    //         if (this.form.currentDue > this.lmt.limitDueAmmount) {
    //           this.paynow = false;
    //         } else {
    //           this.paynow = true;
    //         }
    //       } else {
    //         this.negative = false;
    //       }

    //       if (this.form.currentDue > this.lmt.limitDueAmmount) {
    //         this.paynow = false;
    //       } else {
    //         this.paynow = true;
    //       }
    //       if ((this.form.customerTypeId == 1) & (this.form.currentDue > 0)) {
    //         this.paynow1 = false;
    //       } else {
    //         this.paynow1 = true;
    //       }
    //     }

    //     this.form.currentDue = this.form.currentTotalAmount - this.totalcal;

    //     if(this.form.currentDue==0){
    //       this.paynow1 = true;
    //     }
    //   }
    // },
    mobileAmountCalculate(e) {
      if (this.form.currentPaidAmount == "") {
        this.totalcal = 0 + parseFloat(this.form.mobileAmount);
      } else {
        this.totalcal =
          parseFloat(this.form.currentPaidAmount) + parseFloat(this.form.mobileAmount);
      }
      if (this.form.mobileAmount == "") {
        this.totalcal = parseFloat(this.form.currentPaidAmount) + 0;
      }
      else if(this.form.mobileAmount <0){
      this.totalcal = parseFloat(this.form.currentPaidAmount) + 0;
      }

      this.form.currentDue = this.form.currentTotalAmount - this.totalcal;
      let currentDue1 = this.form.currentTotalAmount-this.form.currentPaidAmount;

      if (this.form.mobileAmount > currentDue1) {
        this.form.mobileAmount = currentDue1;
        this.form.currentDue = 0;
        this.negative = true;
      }
      else if (this.form.mobileAmount < 0) {
        this.form.mobileAmount = 0;
        this.form.currentDue = currentDue1;
        this.negative = true;
       // alert('feni');

      }
       else {
        let stringValue = e.target.value.toString();
        let regex = /^\d*(\.\d{1,2})?$/;
        if (!stringValue.match(regex) && this.form.mobileAmount !== "") {
          this.form.mobileAmount = 0;
          this.negative = true;
        } else {
          this.negative = false;
          if (this.form.mobileAmount > this.form.currentTotalAmount) {
            this.negative = true;
            this.form.mobileAmount = this.form.currentTotalAmount;
            this.form.currentDue =
              this.form.currentTotalAmount - this.form.currentPaidAmount;
            if (this.form.currentDue > this.lmt.limitDueAmmount) {
              this.paynow = false;
            } else {
              this.paynow = true;
            }
          } else {
            this.negative = false;
          }

          if (this.form.currentDue > this.lmt.limitDueAmmount) {
            this.paynow = false;
          } else {
            this.paynow = true;
          }
          if ((this.form.customerTypeId == 1) & (this.form.currentDue > 0)) {
            this.paynow1 = false;
          } else {
            this.paynow1 = true;
          }
        }
      }
    },
    salesProductEntry() {
      if (this.form.unitId == "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please select Unit!",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "close",
        });
      } else {
        if (this.form.salesCustomerEntryId == null) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please select Customer Name",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "close",
          });
        } else {

          this.loading = true;
          this.form.post("/salesProductEntry").then((res) => {
              this.loading = false;
            if (res.data.alReadyEntry) {

              Toast.fire({
                icon: "error",
                title: "This Product Already  Entry!",
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
              //   this.form.post("/salesProductQuantityUpdate").then((res) => {
              //     Swal.fire(
              //       "Successfully!",
              //       "Product Quantity has been Updated"
              //     );
              //     this.form.purchaseProductId = "";
              //     this.form.unitId = "";
              //     this.form.colorId = "";
              //     this.form.sizeId = "";
              //     this.form.brandId = "";
              //     this.form.quantity = "";
              //     this.form.unitPrice = "";
              //     this.form.purchaseUnitPrice = "";
              //     this.form.purchaseTotalPrice = "";
              //     this.form.hiddenPrice = "";
              //     this.form.totalPrice = "";
              //     this.form.totalDis = "";
              //     this.salesProductList();
              //     this.totalBalance();
              //   });
              // });
            } 
            else if(res.data.colorSelect){
              Toast.fire({
                icon: "error",
                title: "Please Select Color.",
              });
            }
            else if(res.data.sizeSelect){
              Toast.fire({
                icon: "error",
                title: "Please Select Size.",
              });
            }
            else {
              Toast.fire({
                icon: "success",
                title: "Sales Product Entry Successfully",
              });
              this.form.purchaseProductId = "";
              this.form.unitId = "";
              this.form.colorId = "";
              this.form.sizeId = "";
              this.form.brandId = "";
              this.form.quantity = "";
              this.form.unitPrice = "";
              this.form.purchaseUnitPrice = "";
              this.form.purchaseTotalPrice = "";
              this.form.hiddenPrice = "";
              this.form.totalDis = "";
              this.form.totalPrice = "";
              this.salesProductList();
              this.totalBalance();
            }
          }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
        }
      }
    },
    salesProductList() {
      axios.get("/salesProductEntry").then((res) => {
        this.salesProductLists = res.data.salesProductLists;
        this.totalBalance();
      });
    },
    salesInvoiceEntrySt() {
      $('.payNow2').hide();
      this.guestInfo = false;
    },
    salesInvoicePendingCancel() {
      $('.payNow2').show();
      this.guestInfo = true;
    },
    checkGeneralCustomer(){
        if(this.form.customerTypeId==1){
          this.paynow1 = false;
          
          if(this.form.currentDue>0){
            this.generalCustomerDueMessage = true;
          }else{
            this.generalCustomerDueMessage = false;
          }
        }else{
          this.paynow1 = true;
          this.generalCustomerDueMessage = false;
        }
    },
    salesInvoiceEntry() {
      this.loading = true;
      // alert(this.form.customerTypeId);
      if(1){
      if (this.form.totalQuantity != 0) {
        
        axios.post("/salesInvoiceEntry", {
            salesDate: this.form.salesDate,
            salesInvoiceNo: this.form.salesInvoiceNo,
            salesCustomerTypeId: this.form.customerTypeId,
            salesCustomerId: this.form.salesCustomerEntryId,
            totalQuantity: this.form.totalQuantity,
            totalBalance: this.form.totalBalance,
            totalPurchase: this.form.totalPurchase,
            discountPrice: this.form.discountPrice,
            totalVat: this.form.totalVat,
            currentDue: this.form.currentDue,
            totalPayable: this.form.totalPayable,
            previousDue: this.form.previousDue,
            mobileAmount: this.form.mobileAmount,
            currentTotalAmount: this.form.currentTotalAmount,
            currentPaidAmount: this.form.currentPaidAmount,
            senderbankTypeEntryId: this.form.senderbankTypeEntryId,
            senderBankName: this.form.senderBankName,
            senderAcNo: this.form.senderAcNo,
            senderAcName: this.form.senderAcName,
            senderBranchName: this.form.senderBranchName,
            senderMobileAcNo: this.form.senderMobileAcNo,
            senderTrxNo: this.form.senderTrxNo,
            receiverbankTypeEntryId: this.form.receiverbankTypeEntryId,
            receiverbankEntryId: this.form.receiverbankEntryId,
            receiverbankAccountId: this.form.receiverbankAccountId,
            receiverbranchName: this.form.receiverbranchName,
            receiverAccNo: this.form.receiverAccNo,
            guestCustomerName: this.form.guestCustomerName,
            guestCustomerPhone: this.form.guestCustomerPhone,
          })
          .then((res) => {
           this.loading = false;
            Toast.fire({
              icon: "success",
              title: "Sales Invoice Entry Successfully",
            });
            $("#pay" + this.form.salesInvoiceNo).modal("hide");
            this.form.reset();
            this.guestInfo = true;
            $("#total").html("");
            $("#blanceDue").text("");
            this.salesInvoiceList();

                  axios.get("/priceTypeSetup/" + this.form.customerTypeId).then((res) => {
        this.salesPType = res.data.salesPriceTypes;
        this.form.priceTypeId = res.data.salesPriceTypes.priceType;
      });
      
          })
          .catch((error) => {
            this.loading=false;
            Toast.fire({
              icon: "error",
              title: "Something Wrong",
            });
          });
      } else {
        this.loading=false;
        Toast.fire({
          icon: "error",
          title: "Something Wrong",
        });
      }
      }
    },
    salesInvoiceEntryPending() {
      this.loading = true;
      if (this.form.totalQuantity != 0) {
        
        axios
          .post("/salesInvoicePendingEntry", {
            salesDate: this.form.salesDate,
            salesInvoiceNo: this.form.salesInvoiceNo,
            salesCustomerTypeId: this.form.customerTypeId,
            salesCustomerId: this.form.salesCustomerEntryId,
            totalQuantity: this.form.totalQuantity,
            totalBalance: this.form.totalBalance,
            totalPurchase: this.form.totalPurchase,
            discountPrice: this.form.discountPrice,
            totalVat: this.form.totalVat,
            currentDue: this.form.currentDue,
            totalPayable: this.form.totalPayable,
            previousDue: this.form.previousDue,
            mobileAmount: this.form.mobileAmount,
            currentTotalAmount: this.form.currentTotalAmount,
            currentPaidAmount: this.form.currentPaidAmount,
            senderbankTypeEntryId: this.form.senderbankTypeEntryId,
            senderBankName: this.form.senderBankName,
            senderAcNo: this.form.senderAcNo,
            senderAcName: this.form.senderAcName,
            senderBranchName: this.form.senderBranchName,
            senderMobileAcNo: this.form.senderMobileAcNo,
            senderTrxNo: this.form.senderTrxNo,
            receiverbankTypeEntryId: this.form.receiverbankTypeEntryId,
            receiverbankEntryId: this.form.receiverbankEntryId,
            receiverbankAccountId: this.form.receiverbankAccountId,
            receiverbranchName: this.form.receiverbranchName,
            receiverAccNo: this.form.receiverAccNo,
            guestCustomerName: this.form.guestCustomerName,
            guestCustomerPhone: this.form.guestCustomerPhone,
          })
          .then((res) => {
           this.loading = false;
            Toast.fire({
              icon: "success",
              title: "Sales Invoice Entry Successfully",
            });
            $("#pay" + this.form.salesInvoiceNo).modal("hide");
            this.form.reset();
            this.guestInfo = true;
            $("#total").html("");
            $("#blanceDue").text("");
            this.salesInvoiceList();
          })
          .catch((error) => {
            this.loading=false;
            Toast.fire({
              icon: "error",
              title: "Something Wrong",
            });
          });
      } else {
        this.loading=false;
        Toast.fire({
          icon: "error",
          title: "Something Wrong",
        });
      }
    },
    salesInvoiceList() {
      axios.get("/salesInvoiceEntry").then((res) => {
        this.form.salesInvoiceNo = res.data.salesInvoiceNo; // same value
        this.pendingCount = res.data.salesinvoiceTemCount; // same value
        this.salesInvoiceNoIncre = res.data.salesInvoiceNo; // same value

        this.salesInvoiceLists = res.data.salesInvoiceLists;
        axios
          .get("/salesInvoiceEntry/" + res.data.salesInvoiceNo)
          .then((res) => {
            if(res.data.data){
              this.form.salesCustomerEntryId = res.data.data;
            
              this.form.customerTypeId = res.data.data.customerTypeId;
            }
          });
      });
    },

    salesCustomerDueLimit() {
      if (this.form.salesCustomerEntryId != "") {
        axios
          .get(
            `/dueLimit/` + this.form.salesCustomerEntryId.salesCustomerEntryId
          )
          .then((res) => {
            // alert('feni1');
            if (res.data.get == null) {
              this.form.previousDue = 0;
              this.form.previousDueDisplay = 0;
              this.preDueText = 'Pre.Due';
            } else {
                
              if(res.data.get.balanceAmount>0){
                  this.preDueText = 'Pre.Due';
                  this.form.previousDue = res.data.get.balanceAmount;
                  this.form.previousDueDisplay = res.data.get.balanceAmount;
                  this.form.previousAdvance = 0;
                  this.form.previousAdvanceDisplay = 0;
                  this.perDueDisplayStatus = true;
                  this.perAdvanceDisplayStatus = false;
                }
                else{
                  this.preDueText = 'Advance';
                  this.form.previousDue = 0;
                  this.form.previousDueDisplay = 0;
                  this.perDueDisplayStatus = false;
                  this.perAdvanceDisplayStatus = true;
                  this.form.previousAdvance = Math.abs(res.data.get.balanceAmount);
                  this.form.previousAdvanceDisplay = Math.abs(res.data.get.balanceAmount);
                  
                }


            }
            if (res.data.data == null) {
              this.lmt = 0;
            } else {
              this.lmt = res.data.data;
            }
            
            if(res.data.limitDueAmount == 1234567890){
              this.form.limitDueAmountShow = '~';
            }else{
            this.form.limitDueAmountShow = parseFloat(res.data.limitDueAmount).toFixed(2);
            }
            this.form.limitDueAmount = parseFloat(res.data.limitDueAmount).toFixed(2);
          });
      }
    },
    totalBalance() {
      axios
        .get("/salesTotalBalanceWithInvoice/" + this.salesInvoiceNoIncre)
        .then((res) => {
          let totalPurchasePrice = 0;
          let totalBalance = 0;
          let discountPrice = 0;
          let totalQuantity = 0;
          let totalDc = 0;
          res.data.salesTotalBalances.forEach((salesTotalBalance) => {
            if (salesTotalBalance.discountPriceHidden != null) {
              let totalDiscount =
                salesTotalBalance.quantity *
                salesTotalBalance.discountPriceHidden;
              totalBalance += parseFloat(totalDiscount);
            } else {
              totalBalance += parseFloat(salesTotalBalance.totalPrice);
            }
            totalPurchasePrice += salesTotalBalance.purchaseTotalPrice;


            discountPrice += parseFloat(salesTotalBalance.totalPrice);
            totalDc += parseFloat(salesTotalBalance.totalDiscount);
            totalQuantity += parseFloat(salesTotalBalance.quantity);
          });

          this.form.totalPurchase = totalPurchasePrice;
          this.form.totalQuantity = totalQuantity;
          this.form.totalBalance = totalBalance;
          this.form.discountPrice = 0;

          axios
            .get(`/dueLimit/` + this.form.salesCustomerEntryId.salesCustomerEntryId)
            .then((res) => {
              // alert('feni2');
              if (res.data.get == null) {
                this.form.previousDue = 0;
                this.form.previousDueDisplay = 0;
              } else {
                this.form.previousDue = res.data.get.balanceAmount;
                
                if(res.data.get.balanceAmount>0){
                  this.preDueText = 'Pre.Due';
                  this.form.previousDue = res.data.get.balanceAmount;
                  this.form.previousDueDisplay = res.data.get.balanceAmount;
                  this.form.previousAdvanceDisplay = 0;
                  this.perDueDisplayStatus = true;
                  this.perAdvanceDisplayStatus = false;
                }
                else{
                  this.preDueText = 'Advance';
                  this.form.previousDue = 0;
                  this.form.previousDueDisplay = 0;
                  this.perDueDisplayStatus = false;
                  this.perAdvanceDisplayStatus = true;
                  this.form.previousAdvance = Math.abs(res.data.get.balanceAmount);
                  this.form.previousAdvanceDisplay = Math.abs(res.data.get.balanceAmount);
                }
              }

              if(res.data.limitDueAmount == 1234567890){
              this.form.limitDueAmountShow = '~';
              }else{
              this.form.limitDueAmountShow = parseFloat(res.data.limitDueAmount).toFixed(2);
              }

              this.form.limitDueAmount = parseFloat(res.data.limitDueAmount).toFixed(2);
              
              let totalVat = (parseFloat(totalBalance * this.form.totalVat)) /100;
              this.form.totalPayable = parseFloat(totalBalance + totalVat).toFixed(2);

              // this.form.totalPayable =  totalBalance;
              // this.form.vatCalculate =  totalBalance;
              // this.form.currentTotalAmount =  totalBalance;
              
              $("#total").html(totalBalance);

              // this.form.discountPrice = parseFloat(discountPrice)  - parseFloat(this.form.totalBalance);
              if (this.form.previousDue != 0) {
                this.form.currentTotalAmount = 
                  parseFloat(parseFloat(this.form.previousDue) +
                  parseFloat(this.form.totalPayable)).toFixed(2);
                
              } else {
                this.form.currentTotalAmount = 
                  parseFloat(parseFloat(totalBalance) + parseFloat(this.form.previousDue)).toFixed(2);
              }
              this.form.currentDue = this.form.currentTotalAmount;

               this.checkGeneralCustomer();
                
            });
        });
    },
    totalVat() {
      if (this.form.totalVat != "") {
        let totalVat =
          (parseFloat(this.form.totalBalance *
            this.form.totalVat).toFixed(2)) /
          100;
        this.form.totalPayable =
          parseFloat(this.form.vatCalculate + totalVat).toFixed(2);
        this.form.currentTotalAmount = 
          parseFloat(parseFloat(this.form.vatCalculate) + parseFloat(totalVat)).toFixed(2);
      } else {
        this.form.totalPayable = this.form.totalBalance;
        this.form.currentTotalAmount = parseFloat(this.form.totalBalance).toFixed(2);
      }
    },
    salesProductDelete(salesProdcutId) {
      axios.get("/salesProductDelete/" + salesProdcutId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Sales Product Delete Successfully",
        });
        this.salesProductList();
        this.totalBalance();
      });
    },

    getPaginateList(page = 1) {
      axios.get("/salesInvoiceEntry?page=" + page).then((response) => {
        this.salesInvoiceLists = response.data.salesInvoiceLists;
      });
    },
    salesInvoiceReset() {
      this.form.reset();
      $("#total").html("");
      this.salesInvoiceList();
    },

    productDetails() {
      axios
        .get("/purchaseProductDetails/" + this.purchaseProductId)
        .then((res) => {
          this.modelNo = res.data.purchaseProductDetails.modelNo;
          this.batchNo = res.data.purchaseProductDetails.batchNo;
          this.qrCode = res.data.purchaseProductDetails.qrCode;
          this.mfgLicenseNO = res.data.purchaseProductDetails.mfgLicenseNO;
          this.warranty = res.data.purchaseProductDetails.warranty;
          this.selectMothOrYearWarranty =
            res.data.purchaseProductDetails.selectMothOrYearWarranty;
          this.guarantee = res.data.purchaseProductDetails.guarantee;
          this.selectMothOrYearGuarantee =
            res.data.purchaseProductDetails.selectMothOrYearGuarantee;
          this.mfgDate = res.data.purchaseProductDetails.mfgDate;
          this.expiryDate = res.data.purchaseProductDetails.expiryDate;
          this.tax = res.data.purchaseProductDetails.tax;
          this.taxAmount = res.data.purchaseProductDetails.taxAmount;
          this.taxAmountType = res.data.purchaseProductDetails.taxAmountType;
          this.quantityType = res.data.purchaseProductDetails.quantityType;
          this.quantityNoti = res.data.purchaseProductDetails.quantityNoti;
          this.proDescription = res.data.purchaseProductDetails.proDescription;
          this.proAdvantage = res.data.purchaseProductDetails.proAdvantage;
        });
    },
    productDetailsInfo(id) {
      axios.get("/purchaseProductDetails/" + id).then((res) => {
        this.modelNo = res.data.purchaseProductDetails.modelNo;
        this.batchNo = res.data.purchaseProductDetails.batchNo;
        this.qrCode = res.data.purchaseProductDetails.qrCode;
        this.mfgLicenseNO = res.data.purchaseProductDetails.mfgLicenseNO;
        this.warranty = res.data.purchaseProductDetails.warranty;
        this.selectMothOrYearWarranty =
          res.data.purchaseProductDetails.selectMothOrYearWarranty;
        this.guarantee = res.data.purchaseProductDetails.guarantee;
        this.selectMothOrYearGuarantee =
          res.data.purchaseProductDetails.selectMothOrYearGuarantee;
        this.mfgDate = res.data.purchaseProductDetails.mfgDate;
        this.expiryDate = res.data.purchaseProductDetails.expiryDate;
        this.tax = res.data.purchaseProductDetails.tax;
        this.taxAmount = res.data.purchaseProductDetails.taxAmount;
        this.taxAmountType = res.data.purchaseProductDetails.taxAmountType;
        this.quantityType = res.data.purchaseProductDetails.quantityType;
        this.quantityNoti = res.data.purchaseProductDetails.quantityNoti;
        this.proDescription = res.data.purchaseProductDetails.proDescription;
        this.proAdvantage = res.data.purchaseProductDetails.proAdvantage;
      });
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
    senderBankTypeIdCatch() {

    this.form.senderBankName = '';
    this.form.senderAcName = '';
    this.form.senderAcNo = '';
    this.form.senderBankName = '';
    this.form.senderAcNo = '';
    this.form.senderAcName = '';
    this.form.senderMobileAcNo = '';
    this.form.senderTrxNo = '';

    this.form.receiverbankEntryId = '';
    this.form.receiverbankAccountId = '';
    this.form.receiverbranchName = '';
    this.form.receiverAccNo = '';
    this.form.mobileAmount = '';
    
    this.form.currentDue = this.form.currentTotalAmount - this.form.currentPaidAmount;



      if(this.form.senderbankTypeEntryId==''){
        this.fromshow = false;
      }
      else{
      axios
        .get("/bankNameListByShop/" + this.form.senderbankTypeEntryId)
        .then((res) => {
          this.showBankNames = res.data.show;
          this.fromshow = true;
        });

      if (this.form.senderbankTypeEntryId == 1) {
        this.form.receiverbankTypeEntryId = 1;
        this.bankAccount = true;
        this.mobileAccount = false;
        this.bankCardAccount = false;
      }
      else if (this.form.senderbankTypeEntryId == 2) {
        this.form.receiverbankTypeEntryId = 2;
        this.bankAccount = false;
        this.bankCardAccount = false;
        this.mobileAccount = true;
      }
      else if (this.form.senderbankTypeEntryId == 3) {
        this.form.receiverbankTypeEntryId = 3;
        this.bankAccount = false;
        this.bankCardAccount = true;
        this.mobileAccount = false;
      }
      }
    },
    bankTypeIdCatch() {
      axios
        .get("/bankNameList/" + this.form.receiverbankTypeEntryId)
        .then((res) => {
          this.showBankNames = res.data.show;
        });
      if (this.form.receiverbankTypeEntryId == 1) {
        this.bankAccount = true;
        this.mobileAccount = false;
        this.bankCardAccount = false;
      }
      else if (this.form.receiverbankTypeEntryId == 2) {
        this.bankAccount = false;
        this.bankCardAccount = false;
        this.mobileAccount = true;
      }
      else if (this.form.receiverbankTypeEntryId == 3) {
        this.bankAccount = false;
        this.mobileAccount = false;
        this.bankCardAccount = true;
      }
    },
    bankAccountIdCatch() {
      axios
      .get("/bankAccountListWithCard/" + this.form.receiverbankEntryId+'/'+this.form.receiverbankTypeEntryId)
        .then((res) => {
          this.showBankAccounts = res.data.data;
        });
    },

    getBankMoreInfo() {
      axios
        .get("/bankAccountMoreInfo/" + this.form.receiverbankAccountId)
        .then((res) => {
          this.form.receiverbranchName = res.data.data.bankBranch;
          this.form.receiverAccNo = res.data.data.bankAccountNumber;
          this.bankInformationAccountInfoStatus = 1;
        });
    },
  },
};
</script>


<style media="screen">
.shadow-price {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15) !important;
}
.salesDate input {
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 9px 20px;
  width: 90%;
}
.product-delete i {
  cursor: pointer;
}
</style>
