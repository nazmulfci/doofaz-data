<template id="">
  <span>
    <div class="row mb-3" style="margin-left: 19%">
      <div
        class="col-xs-5 col-sm-5 col-md-2 col-xl-1 p-2 d-none d-xl-block"
        data-toggle="modal"
        data-target="#customerModal"
      >
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
              "
            >
              Customer
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-2 col-xl-1 p-2 d-none d-xl-block">
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

      <div class="col-sm-12 col-md-2 col-xl-1 p-2 d-none d-xl-block">
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
      <div class="col-sm-12 col-md-2 col-xl-1 p-2 d-none d-xl-block">
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
              Return
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-2 col-xl-1 p-2 d-none d-xl-block">
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

      <div class="col-sm-12 col-md-2 col-xl-1 p-2 d-none d-xl-block">
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
      <div class="col-sm-12 col-md-2 col-xl-1 p-2 d-none d-xl-block">
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
            <div class="icon-wrapper rounded-circle">
              <div class="icon-wrapper-bg bg-danger"></div>
              <i class="fa fa-bell text-danger"></i>
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
              Alert
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-2 col-xl-1 p-2 d-none d-xl-block">
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
                <label>Cusmter Type</label>

                <select
                disabled
                  class="form-control"
                  v-model="form.customerTypeId"
                  aria-label="Default select example"
                  @click.prevent="customerTypeIdCatch()"
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
                <label>Cusmter Name</label>
                <multiselect
               disabled
                  v-model="form.salesCustomerEntryId"
                  name="salesCustomerEntryId"
                  :options="salesCustomerLists"
                  @input="customerIdCatch"
                  :custom-label="salesCustomerName"
                  placeholder="Select one"
                >
                  <span slot="noResult">Oops! Customer Name Not Found</span>
                </multiselect>
              </div>
              <div class="form-group mb-0 col-md-2 col-sm-4 col-12">
                <label> Price Type</label>

                <select
                disabled
                  class="form-control"
                  v-model="form.priceTypeId"
                  aria-label="Default select example"
                  @click.prevent="customerTypeIdCatch()"
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

        <!-- <div class="product-page pl-2 alert-success">
          <form @submit.prevent="salesProductEntry()">
            <div class="form-row">
              <div class="form-group mb-0 col-lg-2 col-md-3 col-sm-4 col-12">
                <label>Product Name</label>
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
              </div>
              <div class="form-group mb-0 col-lg-2 col-md-3 col-sm-4 col-12">
                <label>Brand Name</label>
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
                <label>Unit</label>
                <multiselect
                  :show-labels="false"
                  v-model="form.unitId"
                  name="unitId"
                  :options="uniteLists"
                  :custom-label="uniteName"
                  placeholder="Selet"
                >
                  <span slot="noResult">Oops! Unit Name Not Found</span>
                </multiselect>
              </div>
              <div class="form-group mb-0 col-lg-1 col-md-2 col-sm-4 col-6">
                <span v-if="invalid" style="color: red">Invalid Quantity</span>
                <span v-if="avil" style="color: red"
                  >StockLimited!!<br />avil qnt:{{ totalQt }}</span
                >
                <label>Quantity</label>
                <input
                  type="text"
                  v-model="form.quantity"
                  @keyup="quantity"
                  name="quantity"
                  :class="{ 'is-invalid': form.errors.has('quantity') }"
                  @keyup.prevent="totalPrice()"
                  class="form-control"
                  placeholder="Quantity"
                />
                <has-error :form="form" field="quantity"></has-error>
              </div>
              <div class="form-group mb-0 col-lg-1 col-md-3 col-sm-4 col-6">
                <label>Unit.Price</label>
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
                <label>Discount</label>
                <input
                  disabled
                  type="text"
                  v-model="form.discountPriceHidden"
                  class="form-control"
                  placeholder="Discount Price"
                />
                <has-error :form="form" field="unitPrice"></has-error>
              </div>
              <div class="form-group mb-0 col-lg-1 col-md-3 col-sm-4 col-6">
                <label>Discount</label>
                <input
                  disabled
                  type="text"
                  v-model="form.totalDis"
                  class="form-control"
                  placeholder="Discount Price"
                />
                <has-error :form="form" field="unitPrice"></has-error>
              </div>
              <div class="form-group mb-0 col-lg-2 col-md-4 col-sm-4 col-6">
                <label>Total Price</label>
                <input
                  disabled
                  type="text"
                  v-model="form.totalPrice"
                  name="totalPrice"
                  class="form-control"
                  placeholder="Total Price"
                />
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
                  <button
                    type="submit"
                    class="btn btn-info mt-3 mb-2 mr-2 float-right"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div> -->

        <div class="table-responsive bg-white">
          <table class="table table-hover table-bordered mb-0">
            <thead>
              <tr style="background: rgba(242, 242, 242, 0.47)">
                <th>SN</th>
                <th>Product_Name</th>
                <th>Brand_Name</th>
                <th>Details</th>
                <th>Unit_Name</th>
                <th>Quantity</th>
                <th>Unit_Price</th>
                <th>Discount</th>
                <th>Total_Price</th>
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
                <td><span v-if="salesProductList.salesProductEntryId==product">  <input
                  type="text"
                  v-model="form.quantity"
                
                  class="form-control"
                  placeholder="Quantity"
                /></span><span v-else>{{ salesProductList.quantity }}</span></td>
                <td>
                  <span v-if="salesProductList.discountPrice">
                    {{ salesProductList.unitPrice }}/{{
                      salesProductList.discountPrice
                    }}
                  </span>
                  <span v-else>{{ salesProductList.unitPrice }}</span>
                </td>
                <td>
                  <span v-if="salesProductList.discountPrice"
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
                  <span v-if="salesProductList.salesProductEntryId==product">
                   <div   @click.prevent="
                        salesProductUpdate(salesProductList.salesProductEntryId)
                      " class="btn-group btn btn-success">
                    <a
                     
                    
                      ><i class="fas fa-plus-square"></i>&nbsp;Approve
                    </a>
                  </div>
                  


                  </span>
                  <div v-else   @click.prevent="
                        salesProductShow(salesProductList.salesProductEntryId)
                      " class="btn-group btn btn-primary">
                    <a
                     
                    
                      ><i class="fa fa-undo" aria-hidden="true"></i
                    ></a>
                  </div>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="product-detail pb-4 alert-success mt-4">
          <div class="row m-0">
            <div class="col-lg-9 col-12 p-0 pl-2">
              <form class="form-row m-0" action="#" method="post">
                <div class="col-md-6">
                  <div class="form-group m-0 row mt-2">
                    <div class="col-md-4 col-sm-4 col-12 pl-0">
                      <label>Quantity</label>
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
                  </div>
                  <div class="form-group m-0 row mt-2">
                    <div class="col-md-4 col-sm-4 col-12 pl-0">
                      <label>Balance</label>
                    </div>
                    <div class="col-md-7 col-sm-8 col-12 pl-0">
                      <input
                        type="text"
                        disabled
                        v-model="form.totalBalance"
                        class="form-control"
                        placeholder="Balance"
                      />
                    </div>
                  </div>
                  <div class="form-group m-0 row mt-2">
                    <div class="col-md-4 col-sm-4 col-12 pl-0">
                      <label>Discount</label>
                    </div>
                    <div class="col-md-7 col-sm-8 col-12 pl-0">
                      <input
                        type="text"
                        disabled
                        v-model="form.discountPrice"
                        class="form-control"
                        placeholder="Discount"
                      />
                    </div>
                  </div>
                  <div class="form-group m-0 row mt-2">
                    <div class="col-md-4 col-sm-4 col-12 pl-0">
                      <label>VAT</label>
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
                      <label>Total Payable</label>
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
                      <input
                        type="text"
                        disabled
                        v-model="form.totalPayable"
                        class="form-control"
                        placeholder="Total Payable"
                      />
                    </div>
                  </div>
                  <div class="form-group m-0 row mt-2">
                    <div class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0">
                      <label>Previous Due</label>
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
                      <input style="display:none"
                        type="text"
                        disabled
                        v-model="form.previousDue"
                        class="form-control"
                        placeholder="Previous Due"
                      />
                      <input
                        type="text"
                        disabled
                        v-model="form.preDue"
                        class="form-control"
                        placeholder="Previous Due"
                      />
                    </div>
                  </div>
                  <div class="form-group m-0 row mt-2">
                    <div class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0">
                      <label>Total Amount</label>
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
                      <input
                        type="text"
                        disabled
                        v-model="form.currentTotalAmount"
                        class="form-control"
                        placeholder="Current Total Amount"
                      />
                    </div>
                  </div>
                  <!-- <div class="form-group m-0 row  mt-2">
                            <div class="col-lg-4  col-md-6 col-sm-4 col-12 pl-0">
                                <label>Cash Amount</label>
                            </div>
                            <div class="col-lg-7  col-md-6 col-sm-8 col-12 pl-0">
                              <input type="text" v-model="form.currentPaidAmount" @keyup="totalCalculate" class="form-control" placeholder="Cash Amount">
                               <span style="color:red" v-if="negative==true">Negative Ammount Not Allowed</span>
                              
                           
                              
                            </div>
                        </div> -->
                </div>
              </form>
            </div>

            <div class="col-lg-3 col-md-4 col-12 mt-3 px-3 float-right">
              <div class="due-bal">
                <h5>Due Limit : {{ lmt.limitDueAmmount }}</h5>
              </div>
              <div class="due-bal">
                <h5>
                  Due :
                  <input
                    type="text"
                    disabled
                    v-model="form.currentDue"
                    class="form-control"
                    placeholder="Cash Amount"
                  />
                </h5>
              </div>
              <div v-if="guestInfo == false">
                <div class="due-bal">
                  <input
                    type="text"
                    v-model="form.guestCustomerName"
                    class="form-control"
                    placeholder="Guest Customer Name"
                  />
                </div>

                <div class="due-bal">
                  <input
                    type="text"
                    v-model="form.guestCustomerPhone"
                    class="form-control"
                    placeholder="Guest Customer Phone"
                  />
                </div>
                <br />
                <center>
                  <button
                    @click.prevent="salesInvoiceEntry()"
                    class="btn btn-success"
                  >
                    Add
                  </button>
                </center>
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
                  <span class="mr-1"> Pay Now </span>
                </button>
              </span>
              <span v-if="paynow == true">
                <span
                  v-if="guestInfo"
                  @click.prevent="salesInvoiceEntrySt()"
                  class="badge badge-primary float-left mt-3"
                >
                  Pending
                </span>

                <button
                  type="button"
                  data-toggle="modal"
                  :data-target="'#pay' + this.form.salesInvoiceNo"
                  class="mt-3 ml-2 btn btn-warning"
                >
                  <span class="mr-2 opacity-7">
                    <i class="fa fa-paper-plane"></i>
                  </span>
                  <span class="mr-1"> Pay Now </span>
                </button>
              </span>
              <!-- Modal Payment-->
              <div
                class="modal fade"
                :id="'pay' + this.form.salesInvoiceNo"
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
                            <div class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0">
                              <label>Total : </label>
                            </div>
                            <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
                              <input
                                type="text"
                                disabled
                                v-model="form.currentTotalAmount"
                                class="form-control"
                                placeholder="Cash Amount"
                              />
                            </div>
                          </div>
                          <div class="form-group m-0 row mt-2">
                            <div class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0">
                              <label>Cash </label>
                            </div>
                            <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
                              <input
                                type="text"
                                v-model="form.currentPaidAmount"
                                @keyup="totalCalculate"
                                class="form-control"
                                placeholder="Cash Amount"
                              />
                              <span style="color: red" v-if="negative == true"
                                >Negative Ammount Not Allowed</span
                              >
                            </div>
                          </div>
                          <div class="form-group m-0 row mt-2">
                            <div class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0">
                              <label>Due: </label>
                            </div>
                            <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
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
                            <div class="form-group">
                              <label>Sender Bank Type Name</label>
                              <select
                                v-model="form.senderbankTypeEntryId"
                                name="bankTypeEntryId"
                                class="form-control"
                                :class="{
                                  'is-invalid':
                                    form.errors.has('bankTypeEntryId'),
                                }"
                                @change.prevent="senderBankTypeIdCatch()"
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
                                  <label> Sender Bank Name </label>
                                  <input
                                    type="text"
                                    v-model="form.senderBankName"
                                    class="form-control"
                                  />
                                </div>
                                <div class="form-group">
                                  <label> Sender A/C No </label>
                                  <input
                                    type="text"
                                    v-model="form.senderAcNo"
                                    class="form-control"
                                  />
                                </div>
                                <div class="form-group">
                                  <label> Sender A/C Name </label>
                                  <input
                                    type="text"
                                    v-model="form.senderAcName"
                                    class="form-control"
                                  />
                                </div>
                                <div class="form-group">
                                  <label> Branch </label>
                                  <input
                                    type="text"
                                    v-model="form.senderBranchName"
                                    class="form-control"
                                  />
                                </div>
                              </div>
                              <div v-if="mobileAccount">
                                <div class="form-group">
                                  <label>
                                    Sender Mobile A/C No
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
                                    v-model="form.senderMobileAcNo"
                                    class="form-control"
                                  />
                                </div>
                                <div class="form-group">
                                  <label> Trx No </label>
                                  <input
                                    type="text"
                                    v-model="form.senderTrxNo"
                                    class="form-control"
                                  />
                                </div>
                              </div>
                              <div class="form-group">
                                <label>Receiver Bank Type Name</label>
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
                                <label>Receiver Bank Name</label>
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
                                <label>Receiver Account No</label>
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
                                  <label>Receiver Branch Name </label>
                                  <input
                                    type="text"
                                    v-model="form.receiverbranchName"
                                    class="form-control"
                                    readonly
                                  />
                                </div>

                                <div class="form-group">
                                  <label> Receiver Account No </label>
                                  <input
                                    type="text"
                                    v-model="form.receiverAccNo"
                                    class="form-control"
                                    readonly
                                  />
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
                                    @keyup="mobileAmountCalculate"
                                    class="form-control"
                                    placeholder="Bank Amount"
                                  />
                                  <span
                                    style="color: red"
                                    v-if="negative == true"
                                    >Negative Ammount Not Allowed</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <center>
                        <span v-if="paynow1 == false">
                          <button
                            type="button"
                            disabled
                            @click.prevent="salesInvoiceEntry()"
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
                          <br />
                          <span style="color: red"
                            >General Customer Due Not Allow
                          </span>
                        </span>
                        <span v-if="paynow1 == true">
                          <button
                            type="button"
                            @click.prevent="salesInvoiceEntry()"
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
            >
              Add Customer Information
            </button>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>
<script>
import Multiselect from "vue-multiselect";
import moment from "moment";

export default {
  data() {
    return {
      form: new Form({
        customerName: "",
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
        salesDate: new Date().toISOString().slice(0, 10),
        priceType: "",
        salesInvoiceNo: "",
        salesCustomerEntryId: "",

        purchaseProductId: "",
        unitId: "",
        brandId: "",
        quantity: "",
        unitPrice: "",
        discountPriceHidden: 0,
        hiddenPrice: 0,
        totalPrice: "",

        //  footer Form
        totalQuantity: "",
        totalBalance: "",
        discountPrice: "",
        totalVat: 0,
        vatCalculate: "",
        totalPayable: "",
        previousDue: "",
        currentTotalAmount: "",
        currentPaidAmount: "",
        currentDue: "",
        totalDis: "",
        //bank info sender
        senderbankTypeEntryId: "",
        senderBankName: "",
        senderAcNo: "",
        senderAcName: "",
        senderBranchName: "",
        preDue:"",
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
      productPriceLists: [],
      customerTypeLists: [],
      salesCustomerLists: [],

      purchaseProductId: {},
      brandId: {},
      salesProductLists: {},
      salesInvoiceNoIncre: {},
      salesInvoiceLists: {},
      salesPType: {},
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
      product:'',
      bankInformationAccountInfoStatus: [],
      mobileAccount: false,
      bankAccount: false,
      morepay: false,
      close: false,
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
    this.salesInvoiceSingleData();
    this.totalBalance();
    this.getPaginateList();
    this.salesInvoiceList();
    this.salesProductList();
    this.customerTypeList();

    this.customerTypeIdCatch();
    // this.showDataList()
    this.viewVat();
    this.salesCustomerDueLimit();
    this.getData();
  },

  methods: {
    open() {
      this.morepay = true;
      this.close = true;
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
    customFormatter(date) {
      return moment(date).format("DD-MM-YYYY");
    },
    customerTypeList() {
      axios.get("/salesProductEntry/create").then((res) => {
        this.uniteLists = res.data.uniteLists;

        this.customerTypeLists = res.data.customerTypeLists;
        this.form.customerTypeId = 1;

        this.productPriceLists = res.data.productPriceLists;
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
    },
    quantity(e) {
      let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) && this.form.quantity !== "") {
        this.invalid = true;
        this.avil = false;
        this.form.quantity = 1;
      } else {
        if (this.form.quantity > this.totalQt) {
          this.avil = true;
          this.form.quantity = this.totalQt;
        } else {
          this.avil = false;
        }
        this.invalid = false;
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
      if (this.form.priceTypeId != "") {
        this.brandId = value.brandId;

        axios
          .get(
            "/purchaseProductIdCatch/" +
              this.purchaseProductId +
              "/" +
              this.form.priceTypeId +
              "/" +
              this.brandId
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
                "/purchaseProductInfo/" +
                  this.purchaseProductId +
                  "/" +
                  this.brandId
              )
              .then((res) => {
                this.totalQt = res.data.total.totalQuantity;
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
      this.form.post("/customerInformationEntry").then((res) => {
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
          this.form.reset();
        }
      });
    },

    totalPrice() {
      let quantity = this.form.quantity;
      let unitPrice = this.form.unitPrice;
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
      if (this.form.mobileAmount == "") {
        this.totalcal = 0 + parseFloat(this.form.currentPaidAmount);
      } else {
        this.totalcal =
          parseFloat(this.form.currentPaidAmount) +
          parseFloat(this.form.mobileAmount);
      }
      if (this.form.currentPaidAmount == "") {
        this.totalcal = parseFloat(this.form.mobileAmount) + 0;
      }

      this.form.currentDue = this.form.currentTotalAmount - this.totalcal;
      if (this.form.currentPaidAmount < 0) {
        this.form.currentPaidAmount = 0;
        this.negative = true;
      } else {
        let stringValue = e.target.value.toString();
        let regex = /^\d*(\.\d{1,2})?$/;
        if (!stringValue.match(regex) && this.form.currentPaidAmount !== "") {
          this.form.currentPaidAmount = 0;
          this.negative = true;
        } else {
          this.negative = false;
          if (this.form.currentPaidAmount > this.form.currentTotalAmount) {
            this.negative = true;
            this.form.currentPaidAmount = this.form.currentTotalAmount;
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
    mobileAmountCalculate(e) {
      if (this.form.currentPaidAmount == "") {
        this.totalcal = 0 + parseFloat(this.form.mobileAmount);
      } else {
        this.totalcal =
          parseFloat(this.form.currentPaidAmount) +
          parseFloat(this.form.mobileAmount);
      }
      if (this.form.mobileAmount == "") {
        this.totalcal = parseFloat(this.form.currentPaidAmount) + 0;
      }

      this.form.currentDue = this.form.currentTotalAmount - this.totalcal;
      if (this.form.mobileAmount < 0) {
        this.form.mobileAmount = 0;
        this.negative = true;
      } else {
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
    // salesProductEntry() {
    //   if (this.form.unitId == "") {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Please select Unit!",
    //       showCancelButton: true,
    //       confirmButtonColor: "#3085d6",
    //       cancelButtonColor: "#d33",
    //       confirmButtonText: "close",
    //     });
    //   } else {
    //     if (this.form.salesCustomerEntryId == null) {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Please select Customer Name",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "close",
    //       });
    //     } else {
    //       this.form.post("/salesProductEntry").then((res) => {
    //         if (res.data.alReadyEntry) {
    //           Swal.fire({
    //             icon: "error",
    //             title: "Oops...",
    //             text: "Already Product Entry!",
    //             showCancelButton: true,
    //             confirmButtonColor: "#3085d6",
    //             cancelButtonColor: "#d33",
    //             confirmButtonText: "Product Quantity Update",
    //           }).then((res) => {
    //             this.form.post("/salesProductQuantityReturn").then((res) => {
    //               if (res.data.error) {
    //                 Toast.fire({
    //                   icon: "error",
    //                   title: "Please Decrease Product Quantity",
    //                 });
    //               } else {
    //                 Swal.fire(
    //                   "Successfully!",
    //                   "Product Quantity has been Updated"
    //                 );
    //                 this.form.purchaseProductId = "";
    //                 this.form.unitId = "";
    //                 this.form.brandId = "";
    //                 this.form.quantity = "";
    //                 this.form.unitPrice = "";
    //                 this.form.hiddenPrice = "";
    //                 this.form.totalPrice = "";
    //                 this.form.totalDis = "";
    //                 this.salesProductList();
    //                 this.totalBalance();
    //               }
    //             });
    //           });
    //         } else {
    //           Toast.fire({
    //             icon: "success",
    //             title: "Sales Product Entry Successfully",
    //           });
    //           this.form.purchaseProductId = "";
    //           this.form.unitId = "";
    //           this.form.brandId = "";
    //           this.form.quantity = "";
    //           this.form.unitPrice = "";
    //           this.form.hiddenPrice = "";
    //           this.form.totalDis = "";
    //           this.form.totalPrice = "";
    //           this.salesProductList();
    //           this.totalBalance();
    //         }
    //       });
    //     }
    //   }
    // },
    salesProductList() {
      axios.get("/salesProductEntry").then((res) => {
        this.salesProductLists = res.data.salesProductLists;
        this.totalBalance();
      });
    },
    salesInvoiceEntrySt() {
      this.guestInfo = false;
    },
    salesInvoiceEntry() {
      axios
        .post("/salesInvoiceUpdate", {
          salesDate: this.form.salesDate,
          salesInvoiceNo: this.form.salesInvoiceNo,
          salesCustomerTypeId: this.form.customerTypeId,
          salesCustomerId: this.form.salesCustomerEntryId,
          totalQuantity: this.form.totalQuantity,
          totalBalance: this.form.totalBalance,
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
          Toast.fire({
            icon: "success",
            title: "Sales Return Successfully",
          });
          $("#pay" + this.form.salesInvoiceNo).modal("hide");
          this.form.reset();
          this.$router.push("product@sales");
          this.guestInfo = true;
          $("#total").html("");
          $("#blanceDue").text("");
          this.salesInvoiceList();
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: "Something Worng",
          });
        });
    },
    salesInvoiceList() {
      axios.get("/salesInvoiceEntry").then((res) => {
        // this.form.salesInvoiceNo = res.data.salesInvoiceNo; // same value
        // this.pendingCount = res.data.salesinvoiceTemCount; // same value
        // this.salesInvoiceNoIncre = res.data.salesInvoiceNo; // same value

        this.salesInvoiceLists = res.data.salesInvoiceLists;
        axios
          .get("/salesInvoiceEntry/" + this.form.salesInvoiceNo)
          .then((res) => {
            this.form.salesCustomerEntryId = res.data.data;
            this.form.customerTypeId = res.data.data.customerTypeId;
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
            if (res.data.get == null) {
              this.form.previousDue = 0;
            } else {
              this.form.previousDue = res.data.get.balanceAmount;
            }
            if (res.data.data == null) {
              this.lmt = 0;
            } else {
              this.lmt = res.data.data;
            }
          });
      }
    },
    totalBalance() {
      axios
        .get("/salesTotalBalanceWithInvoice/" + this.salesInvoiceNoIncre)
        .then((res) => {
          let totalBalance = 0;
          let discountPrice = 0;
          let totalQuantity = 0;
          let totalDc = 0;
          let preTotal = 0;
          res.data.salesTotalBalances.forEach((salesTotalBalance) => {
            if (salesTotalBalance.discountPriceHidden != null) {
              let totalDiscount =
                salesTotalBalance.quantity *
                salesTotalBalance.discountPriceHidden;
              totalBalance += parseFloat(totalDiscount);
            } else {
              totalBalance += parseFloat(salesTotalBalance.totalPrice);
            }

            discountPrice += parseFloat(salesTotalBalance.totalPrice);
            totalDc += parseFloat(salesTotalBalance.totalDiscount);
            totalQuantity += parseFloat(salesTotalBalance.quantity);
            preTotal += parseFloat(salesTotalBalance.preTotalPrice);
          });

          this.form.totalQuantity = totalQuantity;
          this.form.totalBalance = totalBalance;
          this.form.discountPrice = totalDc;
          axios
            .get(
              `/dueLimit/` + this.form.salesCustomerEntryId.salesCustomerEntryId
            )
            .then((res) => {
              if (res.data.get == null) {
                this.form.previousDue = 0;
              } else {
                this.form.previousDue = parseFloat(res.data.get.balanceAmount)-(parseFloat(preTotal)-parseFloat(totalBalance));
                this.form.preDue = parseFloat(res.data.get.balanceAmount);
              }
              let totalVat =
                (parseFloat(totalBalance) * parseFloat(this.form.totalVat)) /
                100;
              this.form.totalPayable =
                parseFloat(totalBalance) + parseFloat(totalVat);

              // this.form.totalPayable =  totalBalance;
              // this.form.vatCalculate =  totalBalance;
              // this.form.currentTotalAmount =  totalBalance;
              $("#total").html(totalBalance);
          
              // this.form.discountPrice = parseFloat(discountPrice)  - parseFloat(this.form.totalBalance);
              if (this.form.previousDue != 0) {
                this.form.currentTotalAmount = Math.ceil(
                 
                    parseFloat(this.form.previousDue)
                );
              } else {
                this.form.currentTotalAmount = Math.ceil(
                  parseFloat(totalBalance) + parseFloat(this.form.previousDue)
                );
              }
                    this.form.currentDue = this.form.currentTotalAmount ;
            });
        });
    },
    totalVat() {
      if (this.form.totalVat != "") {
        let totalVat =
          (parseFloat(this.form.totalBalance) *
            parseFloat(this.form.totalVat)) /
          100;
        this.form.totalPayable =
          parseFloat(this.form.vatCalculate) + parseFloat(totalVat);
        this.form.currentTotalAmount = Math.ceil(
          parseFloat(this.form.vatCalculate) + parseFloat(totalVat)
        );
      } else {
        this.form.totalPayable = this.form.totalBalance;
        this.form.currentTotalAmount = Math.ceil(this.form.totalBalance);
      }
    },
    salesProductShow(salesProdcutId) {
      
      this.product=salesProdcutId
    
    },
    salesProductUpdate(salesProdcutId) {
      
      this.form.post("/salesProductQuantityReturn/"+salesProdcutId).then((res) => {
                  if (res.data.error) {
                    Toast.fire({
                      icon: "error",
                      title: "Please Decrease Product Quantity",
                    });
                  } else {
                    Swal.fire(
                      "Successfully!",
                      "Product Quantity has been Updated"
                    );
                
                    this.form.quantity = "";
                   this.product="",
                    this.salesProductList();
                    this.totalBalance();
                  }
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
      axios
        .get("/bankNameList/" + this.form.senderbankTypeEntryId)
        .then((res) => {
          this.showBankNames = res.data.show;
          this.fromshow = true;
        });

      if (this.form.senderbankTypeEntryId == 1) {
        this.form.receiverbankTypeEntryId = 1;
        this.bankAccount = true;
        this.mobileAccount = false;
      }
      if (this.form.senderbankTypeEntryId == 2) {
        this.form.receiverbankTypeEntryId = 2;
        this.bankAccount = false;
        this.mobileAccount = true;
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
      }
      if (this.form.receiverbankTypeEntryId == 2) {
        this.bankAccount = false;
        this.mobileAccount = true;
      }
    },
    bankAccountIdCatch() {
      axios
        .get("/bankAccountList/" + this.form.receiverbankEntryId)
        .then((res) => {
          this.showBankAccounts = res.data.data;
        });
    },
    salesInvoiceSingleData() {
      axios
        .get(
          "/salesInvoiceEntry/" + this.$route.params.salesInvoiceId + "/edit"
        )
        .then((res) => {
          this.salesInvoiceNoIncre =
            res.data.singleSalesInvoiceList.salesInvoiceNo;
          this.form.salesInvoiceNo =
            res.data.singleSalesInvoiceList.salesInvoiceNo;

          this.form.salesDate = res.data.singleSalesInvoiceList.salesDate;
          this.form.totalQuantity =
            res.data.singleSalesInvoiceList.totalQuantity;
          this.form.totalBalance = res.data.singleSalesInvoiceList.totalBalance;
          this.form.discountPrice =
            res.data.singleSalesInvoiceList.discountPrice;
          this.form.totalVat = res.data.singleSalesInvoiceList.totalVat;
          this.form.vatCalculate = res.data.singleSalesInvoiceList.vatCalculate;
          this.form.totalPayable = res.data.singleSalesInvoiceList.totalPayable;
          this.form.previousDue = res.data.singleSalesInvoiceList.previousDue;
          this.form.currentTotalAmount =
            res.data.singleSalesInvoiceList.currentTotalAmount;
          this.form.currentPaidAmount ='';
          // this.form.currentPaidAmount =
          //   res.data.singleSalesInvoiceList.currentPaidAmount;

          $("#blanceDue").text(res.data.singleSalesInvoiceList.previousDue);
          $("#total").html(res.data.singleSalesInvoiceList.currentPaidAmount);

          this.salesProductLists = res.data.singleSalesProductList;
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
