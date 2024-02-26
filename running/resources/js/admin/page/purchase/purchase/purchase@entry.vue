<template id="">
  <span>
    <div class="card">
      <form action="" @submit.prevent="addPurchaseInvoice()">
        <div
          class="card-header"
          style="
            background: rgba(221, 221, 221, 0.2);
            border: 1px solid rgba(0, 0, 0, 0.05);
          "
        >
          <h3 style="color: black">Product Purchase</h3>
        </div>

        <div class="purchase-entery purchase-border p-3">
          <div class="row m-0">
            <div class="col-auto pl-lg-auto purcha-border p-3">
              <div class="bg-white">
                <table class="table-hover mb-0">
                  <tr>
                    <td class="title-name"> Purchase Date </td>
                    <td>
                      <input
                          type="date"
                          v-model="form.purchaseDate"
                          name="purchaseDate"
                          class="form-control"
                          placeholder="Data"
                        />
                    </td>
                  </tr>
                  <tr>
                    <td class="title-name"> Purchase Invoice No </td>
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

                        <input
                          type="hidden"
                          v-model="form.openingPurchaseRepurchase"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="title-name">
                      Supplier Name
                      <small
                        class="badge badge-primary"
                        data-toggle="modal"
                        data-target="#supplier"
                        title="Add New Supplier"
                        >+</small
                      >

                      <!-- ======================================== modal === -->

                      <!-- Modal -->
                      <div
                        class="modal fade"
                        id="supplier"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Add Supplier
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
                              <form
                                @submit.prevent="addProductSupplierCreate()"
                              >
                                <div
                                  class="
                                    supplier-entry
                                    py-4
                                    px-2
                                    comm-form-back-img
                                  "
                                >
                                  <div
                                    class="
                                      col-12
                                      supplier-border
                                      comm-form-box-back-color
                                    "
                                  >
                                    <div class="form-group">
                                      <label>
                                        Product Supplier Name
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
                                        ></i>
                                      </label>
                                      <input
                                        v-model="form.productSupplierName"
                                        type="text"
                                        name="productSupplierName"
                                        :class="{
                                          'is-invalid': form.errors.has(
                                            'productSupplierName'
                                          ),
                                        }"
                                        placeholder="Product Supplier Name"
                                        class="form-control"
                                      />
                                      <has-error
                                        :form="form"
                                        field="productSupplierName"
                                      ></has-error>
                                    </div>

                                    <div class="form-group">
                                      <label>
                                        Product Supplier Code
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
                                        ></i>
                                      </label>
                                      <input
                                        disabled
                                        v-model="form.productSupplierCode"
                                        type="text"
                                        name="productSupplierCode"
                                        :class="{
                                          'is-invalid': form.errors.has(
                                            'productSupplierCode'
                                          ),
                                        }"
                                        placeholder="Product Supplier Code"
                                        class="form-control"
                                      />
                                      <has-error
                                        :form="form"
                                        field="productSupplierCode"
                                      ></has-error>
                                    </div>

                                    <div class="form-group">
                                      <label>
                                        Product Supplier Phone Number
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
                                        ></i>
                                      </label>
                                      <input
                                        v-model="form.productSupplierPhone"
                                        type="text"
                                        name="productSupplierPhone"
                                        :class="{
                                          'is-invalid': form.errors.has(
                                            'productSupplierPhone'
                                          ),
                                        }"
                                        placeholder="Product Supplier Phone"
                                        class="form-control"
                                      />
                                      <has-error
                                        :form="form"
                                        field="productSupplierPhone"
                                      ></has-error>
                                    </div>

                                    <div class="form-group">
                                      <label> Product Supplier Hot Line</label>
                                      <input
                                        v-model="form.productSupplierHotLine"
                                        type="text"
                                        name="productSupplierHotLine"
                                        :class="{
                                          'is-invalid': form.errors.has(
                                            'productSupplierHotLine'
                                          ),
                                        }"
                                        placeholder="Product Supplier Hot Line"
                                        class="form-control"
                                      />
                                      <has-error
                                        :form="form"
                                        field="productSupplierHotLine"
                                      ></has-error>
                                    </div>

                                    <div class="form-group">
                                      <label> Product Supplier Mail</label>
                                      <input
                                        v-model="form.productSupplierMail"
                                        type="text"
                                        name="productSupplierMail"
                                        placeholder="Product Supplier Mail..."
                                        class="form-control"
                                      />
                                    </div>

                                    <div class="form-group">
                                      <label> Product Supplier Facebook</label>
                                      <input
                                        v-model="form.productSupplierFb"
                                        type="text"
                                        name="productSupplierFb"
                                        :class="{
                                          'is-invalid':
                                            form.errors.has(
                                              'productSupplierFb'
                                            ),
                                        }"
                                        placeholder="Product Supplier Facebook..."
                                        class="form-control"
                                      />
                                      <has-error
                                        :form="form"
                                        field="productSupplierFb"
                                      ></has-error>
                                    </div>

                                    <div class="form-group">
                                      <label> Product Supplier Web</label>
                                      <input
                                        v-model="form.productSupplierWeb"
                                        type="text"
                                        name="productSupplierWeb"
                                        :class="{
                                          'is-invalid':
                                            form.errors.has(
                                              'productSupplierWeb'
                                            ),
                                        }"
                                        placeholder="Product Supplier Web..."
                                        class="form-control"
                                      />
                                      <has-error
                                        :form="form"
                                        field="productSupplierWeb"
                                      ></has-error>
                                    </div>

                                    <div class="form-group">
                                      <label> Product Supplier Imo</label>
                                      <input
                                        v-model="form.productSupplierImo"
                                        type="text"
                                        name="productSupplierImo"
                                        :class="{
                                          'is-invalid':
                                            form.errors.has(
                                              'productSupplierImo'
                                            ),
                                        }"
                                        placeholder="Product Supplier Imo..."
                                        class="form-control"
                                      />
                                      <has-error
                                        :form="form"
                                        field="productSupplierImo"
                                      ></has-error>
                                    </div>

                                    <div class="form-group">
                                      <label
                                        >Address
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
                                        ></i>
                                      </label>
                                      <textarea
                                        v-model="form.productSupplierAddress"
                                        type="text"
                                        name="productSupplierAddress"
                                        :class="{
                                          'is-invalid': form.errors.has(
                                            'productSupplierAddress'
                                          ),
                                        }"
                                        placeholder="Product Supplier Address"
                                        class="form-control"
                                      ></textarea>
                                      <has-error
                                        :form="form"
                                        field="productSupplierAddress"
                                      ></has-error>
                                    </div>

                                    <div
                                      class="form-group"
                                      v-if="openningDivStatus"
                                    >
                                      <label>
                                        Opening
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
                                        ></i>
                                      </label>
                                      <select
                                        v-model="form.openingStatus"
                                        name="brandStatus"
                                        :class="{
                                          'is-invalid':
                                            form.errors.has('brandStatus'),
                                        }"
                                        class="form-control"
                                      >
                                        <option value="">-------</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                      </select>
                                      <has-error
                                        :form="form"
                                        field="brandStatus"
                                      ></has-error>
                                    </div>
                                  </div>
                                </div>

                                <!-- -----------------------------   card footer  -->

                                <div
                                  class="
                                    d-block
                                    pt-3
                                    pb-4
                                    card-footer
                                    overflow-hidden
                                  "
                                >
                                  <div
                                    class="col-lg-12 px-lg-5 col-sm-12 col-12"
                                  >
                                    <button
                                      type="submit"
                                      class="
                                        btn-pill btn-shadow btn-wide
                                        fsize-1
                                        btn btn-primary btn-lg
                                        float-right
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
                        </div>
                      </div>

                      <!-- ======================================== /modal === -->
                    </td>
                    <td>
                      <div>
                        <div class="form-control p-0" style="height:43px;">
                        <multiselect
                          @input="productSupplierId"
                          label="productSupplierName"
                          placeholder="Select Supplier"
                          :options="productSupplierLists"
                          :show-labels="false"
                          v-model="form.productSupplierListId"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('productSupplierId'),
                          }"
                          style="
                            padding: 0px !important;
                            padding-bottom: 3px !important;
                          "
                        >
                        </multiselect>
                        </div>

                        <has-error
                          :form="form"
                          field="productSupplierId"
                        ></has-error>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="title-name">Mobile No</td>
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
          style="background: #e7f1e8">
          <form action="" @submit.prevent="addProduct()">
            <div class="form-row">
              <div class="form-group col-sm-2 col-6">
                <label>
                  Product Name
                  <small
                    class="badge badge-primary"
                    data-toggle="modal"
                    data-target="#newProduct"
                    title="Add New Product"
                  >
                    +
                  </small>

                  <span class="float-right ml-3" onclick="$('.barcodeInputBox').show();" style="font-size:30px;margin-bottom:-20px;margin-top: -9px;"> <i class="fa fa-barcode"></i> </span>

                </label>

                <!-- ======================================== modal === -->

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="newProduct"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Add New Product
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
                        <form
                          action=""
                          method="post"
                          @submit.prevent="addProductName()"
                        >
                          <div class="product-entry">
                            <div class="supplier-entry comm-form-back-img">
                              <div
                                class="
                                  col-12
                                  supplier-border
                                  comm-form-box-back-color
                                  pt-4
                                  pb-4
                                "
                              >
                                <div class="form-row">
                                  <div class="col-sm-4 col-12">
                                    <label class="p-0">Category</label>
                                  </div>
                                  <div class="col-sm-8 col-12">
                                    <select
                                      v-model="form.category"
                                      @change.prevent="categorySelect()"
                                      name="category"
                                      class="form-control"
                                      :class="{
                                        'is-invalid':
                                          form.errors.has('category'),
                                      }"
                                    >
                                      <option value="">---Category---</option>
                                      <option
                                        v-for="cateorySelectList in cateorySelectLists"
                                        :value="cateorySelectList.categoryId"
                                      >
                                        {{ cateorySelectList.categoryName }}
                                      </option>
                                    </select>
                                    <has-error
                                      :form="form"
                                      field="category"
                                    ></has-error>
                                  </div>
                                </div>
                                <div class="form-row pt-2" v-if="subShow">
                                  <div class="col-sm-4 col-12">
                                    <label class="p-0">Sub Category</label>
                                  </div>
                                  <div class="col-sm-8 col-12">
                                    <select
                                      v-model="form.subCategory"
                                      @change.prevent="subCategorySelect()"
                                      name="subCategory"
                                      class="form-control"
                                    >
                                      <option value="">------</option>
                                      <option
                                        v-for="subCategorySelectList in subCategorySelectLists"
                                        :value="
                                          subCategorySelectList.categoryId
                                        "
                                      >
                                        {{ subCategorySelectList.categoryName }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-row pt-2" v-if="thirdShow">
                                  <div class="col-sm-4 col-12">
                                    <label class="p-0">Third Category</label>
                                  </div>
                                  <div class="col-sm-8 col-12">
                                    <select
                                      v-model="form.thirdCategory"
                                      @change.prevent="thirdCategorySelect()"
                                      name="thirdCategory"
                                      class="form-control"
                                    >
                                      <option value="">------</option>
                                      <option
                                        v-for="thirdCategorySelectList in thirdCategorySelectLists"
                                        :value="
                                          thirdCategorySelectList.categoryId
                                        "
                                      >
                                        {{
                                          thirdCategorySelectList.categoryName
                                        }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-row pt-2" v-if="fourShow">
                                  <div class="col-sm-4 col-12">
                                    <label class="p-0">Four Category</label>
                                  </div>
                                  <div class="col-sm-8 col-12">
                                    <select
                                      v-model="form.fourCategory"
                                      @change.prevent="fourCategorySelect()"
                                      name="fourCategory"
                                      class="form-control"
                                    >
                                      <option value="">------</option>
                                      <option
                                        v-for="fourCategorySelectList in fourCategorySelectLists"
                                        :value="
                                          fourCategorySelectList.categoryId
                                        "
                                      >
                                        {{
                                          fourCategorySelectList.categoryName
                                        }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-row pt-2" v-if="fiveShow">
                                  <div class="col-sm-4 col-12">
                                    <label class="p-0">Five Category</label>
                                  </div>
                                  <div class="col-sm-8 col-12">
                                    <select
                                      v-model="form.fiveCategory"
                                      @change.prevent="fiveCategorySelect()"
                                      name="fiveCategory"
                                      class="form-control"
                                    >
                                      <option value="">------</option>
                                      <option
                                        v-for="fiveCategorySelectList in fiveCategorySelectLists"
                                        :value="
                                          fiveCategorySelectList.categoryId
                                        "
                                      >
                                        {{
                                          fiveCategorySelectList.categoryName
                                        }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-row pt-2" v-if="sixShow">
                                  <div class="col-sm-4 col-12">
                                    <label class="p-0">Six Category</label>
                                  </div>
                                  <div class="col-sm-8 col-12">
                                    <select
                                      v-model="form.sixCategory"
                                      @change.prevent="sixCategorySelect()"
                                      name="sixCategory"
                                      class="form-control"
                                    >
                                      <option value="">------</option>
                                      <option
                                        v-for="sixCategorySelectList in sixCategorySelectLists"
                                        :value="
                                          sixCategorySelectList.categoryId
                                        "
                                      >
                                        {{ sixCategorySelectList.categoryName }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-row pt-2" v-if="sevenShow">
                                  <div class="col-sm-4 col-12">
                                    <label class="p-0">Seven Category</label>
                                  </div>
                                  <div class="col-sm-8 col-12">
                                    <select
                                      v-model="form.sevenCategory"
                                      name="sevenCategory"
                                      class="form-control"
                                    >
                                      <option value="">------</option>
                                      <option
                                        v-for="sevenCategorySelectList in sevenCategorySelectLists"
                                        :value="
                                          sevenCategorySelectList.categoryId
                                        "
                                      >
                                        {{
                                          sevenCategorySelectList.categoryName
                                        }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-row pt-2">
                                  <div class="col-sm-4 col-12">
                                    <label class="p-0">Product Name</label>
                                  </div>
                                  <div class="col-sm-8 col-12">
                                    <input
                                      type="text"
                                      v-model="form.productName"
                                      name="productName"
                                      :class="{
                                        'is-invalid':
                                          form.errors.has('productName'),
                                      }"
                                      class="form-control"
                                      placeholder="Product Name"
                                    />
                                    <has-error
                                      :form="form"
                                      field="productName"
                                    ></has-error>
                                  </div>
                                </div>
                                <!--<div class="form-row pt-2">
                  <div class="col-sm-4 col-12">
                    <label class="p-0 ">Product Code</label>
                  </div>
                    <div class="col-sm-8 col-12">
                        <input type="text" disabled v-model="form.productCode" name="productCode" :class="{ 'is-invalid': form.errors.has('productCode') }" class="form-control" placeholder="Product Code">
                        <has-error :form="form" field="productCode"></has-error>
                    </div>
                </div>
                 <div class="form-row pt-2">
                  <div class="col-sm-4 col-12">
                    <label class="p-0 ">Product QR Number</label>
                  </div>
                    <div class="col-sm-8 col-12">
                        <input type="text" v-model="form.productQRNumber" name="productQRNumber" :class="{ 'is-invalid': form.errors.has('productQRNumber') }" class="form-control" placeholder="Product QR Number">
                          <has-error :form="form" field="productQRNumber"></has-error>
                    </div>
                </div> -->
                              </div>
                            </div>
                          </div>

                          <!-- -----------------------------   card footer  -->

                          <div
                            class="
                              d-block
                              pt-3
                              pb-4
                              card-footer
                              overflow-hidden
                            "
                          >
                            <div class="col-12">
                              <button
                                type="submit"
                                class="
                                  btn-pill btn-shadow btn-wide
                                  fsize-1
                                  btn btn-primary btn-lg
                                  float-right
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
                                <span class="mr-1"> Add Product </span>
                              </button>
                            </div>
                          </div>

                          <!-- -----------------------------   // card footer  -->
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- ======================================== /modal === -->

                <div class="form-control p-0" style="height:43px;">
                
                <multiselect
                  @input="selectProductId"
                  label="productName"
                  placeholder="Product"
                  :options="productNameLists"
                  :show-labels="false"
                  v-model="form.productListId"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('productId') }"
                  style="
                    padding: 0px !important;
                    padding-bottom: 3px !important;">
                </multiselect>
                <has-error :form="form" field="productId"></has-error>
                <input type="text" v-model="form.productBarcode" class="form-control mt-2 barcodeInputBox" style="display:none;" placeholder="Barcode">
                </div>
                

                <!-- <select
                  class="form-control"
                  v-model="form.productId"
                  name="productId"
                >
          
                  <option
                    v-for="productNameList in productNameLists"
                    :value="productNameList.productNameId"
                  >
                    {{ productNameList.productName }} 
                  </option>
                </select> -->
              </div>
              <div class="form-group col-sm-2 col-6">
                <label
                  >Brand Name
                  <small
                    class="badge badge-primary"
                    data-toggle="modal"
                    @click="productBrandPosition()"
                    data-target="#newBrand"
                    title="Add New Product"
                  >
                    +
                  </small>
                </label>

                <!-- ======================================== modal === -->

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="newBrand"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Add New Brand
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
                        <form @submit.prevent="productBrandCreate()">
                          <div
                            class="supplier-entry py-4 px-2 comm-form-back-img"
                          >
                            <div
                              class="
                                col-12
                                supplier-border
                                comm-form-box-back-color
                              "
                            >
                              <div
                                class="form-group"
                                v-if="authInfo.role == 1 || authInfo.role == 2"
                              >
                                <label>Select Shop Type </label>
                                <select
                                  v-model="form.shopTypeId"
                                  name="shopTypeId"
                                  :class="{
                                    'is-invalid':
                                      form.errors.has('productBrandStatus'),
                                  }"
                                  class="form-control"
                                  @change.prevent="adminShopTypeIdSelect()"
                                >
                                  <option value="">Select One</option>
                                  <option
                                    v-for="shopTypeName in shopTypeNames"
                                    :value="shopTypeName.shopTypeEntryId"
                                  >
                                    {{ shopTypeName.shopTypeName }}
                                  </option>
                                </select>
                                <has-error
                                  :form="form"
                                  field="productBrandStatus"
                                ></has-error>
                              </div>

                              <div class="form-group">
                                <label
                                  >Product Brand Name
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
                                  ></i>
                                </label>
                                <input
                                  type="text"
                                  v-model="form.productBrandName"
                                  name="productBrandName"
                                  placeholder="Brand Name"
                                  class="form-control"
                                  :class="{
                                    'is-invalid':
                                      form.errors.has('productBrandName'),
                                  }"
                                />
                                <has-error
                                  :form="form"
                                  field="productBrandName"
                                ></has-error>
                              </div>

                              <div class="form-group" style="display:none;">
                                <label
                                  >Product Brand Position
                                  <i class="fa fa-star
                                      text-danger text-10
                                      cursor-pointer"
                                    title="Mendatory Field"
                                    data-placement="top"
                                    data-toggle="tooltip"
                                    data-original-title="Mendatory Field"
                                  ></i>
                                </label>
                                <input
                                  type="text"
                                  disabled
                                  v-model="form.productBrandPosition"
                                  name="productBrandPosition"
                                  placeholder="Product Brand Position"
                                  :class="{
                                    'is-invalid': form.errors.has(
                                      'productBrandPosition'
                                    ),
                                  }"
                                  class="form-control"
                                />
                                <has-error
                                  :form="form"
                                  field="productBrandPosition"
                                ></has-error>
                              </div>

                              <div class="form-group" style="display:none;">
                                <label
                                  >Product Brand Status
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
                                  ></i>
                                </label>
                                <select
                                  v-model="form.productBrandStatus"
                                  name="productBrandStatus"
                                  :class="{
                                    'is-invalid':
                                      form.errors.has('productBrandStatus'),
                                  }"
                                  class="form-control"
                                >
                                  <option value="">Select One</option>
                                  <option value="1">Publish</option>
                                  <option value="0">Unpublish</option>
                                </select>
                                <has-error
                                  :form="form"
                                  field="productBrandStatus"
                                ></has-error>
                              </div>
                            </div>
                          </div>

                          <!-- -----------------------------   card footer  -->

                          <div
                            class="
                              d-block
                              pt-3
                              pb-4
                              card-footer
                              overflow-hidden
                            "
                          >
                            <div class="col-12">
                              <button
                                type="submit"
                                class="
                                  btn-pill btn-shadow btn-wide
                                  fsize-1
                                  btn btn-primary btn-lg
                                  float-right
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
                                <span class="mr-1"> Add New Entry </span>
                              </button>
                            </div>
                          </div>

                          <!-- -----------------------------   // card footer  -->
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- ======================================== /modal === -->

                <div class="form-control p-0" style="height:43px;">
                <multiselect
                  @input="selectBrandId"
                  label="productBrandName"
                  placeholder="Brand"
                  :options="newBrandLists"
                  :show-labels="false"
                  v-model="form.brandListId"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('brandId') }"
                  style="
                    padding: 0px !important;
                    padding-bottom: 3px !important;
                  "
                >
                </multiselect>
                </div>

                <!--                 
                <select class="form-control"
                  v-model="form.brandId"
                  name="brandId">
              
                  <option
                    v-for="brandList in brandLists"
                    :value="brandList.productBrandEntryId"
                  >
                    {{ brandList.productBrandName }}
                  </option>
                </select> -->
              </div>

              <div v-if="0" class="form-group col-sm-1 col-6">
                <label>P.Type</label>
                <select
                @change="repurchaseProductInfo()"
                  class="form-control"
                  v-model="form.purchaseType"
                  name="purchaseType"
                >
                  <option
                    v-for="purchaseType in purchaseTypes"
                    :value="purchaseType.id"
                  >
                    {{ purchaseType.purchaseType }}
                  </option>
                </select>
              </div>

              <!-- <div class="form-group col-sm-1 col-6">
                <label>Country</label>
                <select
                  class="form-control"
                  v-model="form.countryId"
                  name="countryId">
                  <option
                    v-for="countryList in countryLists"
                    :value="countryList.id">
                    {{ countryList.name }}
                  </option>
                </select>
              </div> -->

              <div class="form-group col-sm-1 col-6">
                <label
                  >Color

                  <small
                    class="badge badge-primary"
                    data-toggle="modal"
                    data-target="#color"
                    title="Add Color"
                    >+</small
                  >

                  <!-- ======================================== modal === -->

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="color"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add Color
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
                          <form @submit.prevent="colorEntryCreate()">
                            <div class="form-group">
                              <label> Color Name</label>
                              <input
                                v-model="form.colorEntryName"
                                type="text"
                                name="colorEntryName"
                                :class="{
                                  'is-invalid':
                                    form.errors.has('colorEntryName'),
                                }"
                                placeholder="Color Name"
                                class="form-control"
                              />
                              <has-error
                                :form="form"
                                field="colorEntryName"
                              ></has-error>
                            </div>
                            <div class="form-group">
                              <label> Color Code</label>
                              <input
                                v-model="form.colorEntryCode"
                                type="text"
                                name="colorEntryCode"
                                :class="{
                                  'is-invalid':
                                    form.errors.has('colorEntryCode'),
                                }"
                                placeholder="Color Code"
                                class="form-control"
                              />
                              <has-error
                                :form="form"
                                field="colorEntryCode"
                              ></has-error>
                            </div>

                            <div class="text-right pt-3">
                              <button
                                type="submit"
                                class="
                                  mr-2
                                  btn-pill btn-hover-shine btn btn-primary
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
                                  <i class="fa fa-paper-plane"></i> </span
                                >Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ======================================== /modal === -->
                </label>
                <select
                  class="form-control"
                  v-model="form.colorId"
                  name="countryId"
                  @change="repurchaseProductInfo()"
                >
                  <option value="0">-------</option>
                  <option v-for="colorList in colorLists" :value="colorList.id">
                    {{ colorList.colorName }}
                  </option>
                </select>
              </div>

              <div class="form-group col-sm-1 col-6">
                <label
                  >Size
                  <small
                    class="badge badge-primary"
                    data-toggle="modal"
                    data-target="#size"
                    title="Add Size"
                    >+</small
                  >

                  <!-- ======================================== modal === -->

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="size"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add Size
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
                          <form @submit.prevent="sizeEntryCreate()">
                            <div class="form-group">
                              <label> Size Name </label>
                              <input
                                v-model="form.sizeEntryName"
                                type="text"
                                name="sizeEntryName"
                                :class="{
                                  'is-invalid':
                                    form.errors.has('sizeEntryName'),
                                }"
                                placeholder="Size Name"
                                class="form-control"
                              />
                              <has-error
                                :form="form"
                                field="sizeEntryName"
                              ></has-error>
                            </div>

                            <div class="text-right pt-3">
                              <button
                                type="submit"
                                class="
                                  mr-2
                                  btn-pill btn-hover-shine btn btn-primary
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
                                  <i class="fa fa-paper-plane"></i> </span
                                >Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ======================================== /modal === -->
                </label>
                <select
                  class="form-control"
                  v-model="form.sizeId"
                  name="countryId"
                  @change="repurchaseProductInfo()"
                >
                  <option value="0">--------</option>
                  <option v-for="sizeList in sizeLists" :value="sizeList.id">
                    {{ sizeList.sizeName }}
                  </option>
                </select>
              </div>

              <div class="form-group col-sm-1 col-6">
                <label
                  >Unit
                  <small
                    class="badge badge-primary"
                    data-toggle="modal"
                    data-target="#unit"
                    title="Add Unit"
                    >+</small
                  >

                  <!-- ======================================== modal === -->

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="unit"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add Unit
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
                          <form @submit.prevent="uniteEntryCreate()">
                            <div class="form-group">
                              <label> Unit Name</label>
                              <input
                                v-model="form.uniteEntryName"
                                type="text"
                                name="uniteEntryName"
                                :class="{
                                  'is-invalid':
                                    form.errors.has('uniteEntryName'),
                                }"
                                placeholder="Unite Name"
                                class="form-control"
                              />
                              <has-error
                                :form="form"
                                field="uniteEntryName"
                              ></has-error>
                            </div>

                            <div class="text-right pt-3">
                              <button
                                type="submit"
                                class="
                                  mr-2
                                  btn-pill btn-hover-shine btn btn-primary
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
                                  <i class="fa fa-paper-plane"></i> </span
                                >Submit
                              </button>
                            </div>
                          </form>
                        </div>
                        <!-- <div class="modal-footer">
                                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          <button type="button" class="btn btn-primary">Save changes</button>
                                        </div> -->
                      </div>
                    </div>
                  </div>

                  <!-- ======================================== /modal === -->
                </label>
                <select
                  v-model="form.unitId"
                  name="unitId"
                  @change="repurchaseProductInfoUnit()"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('unitId') }"
                  
                >
                  <option value="">-----</option>
                  <option
                    v-for="unitNameShow in unitNameShows"
                    :value="unitNameShow.uniteEntryId"
                  >
                    {{ unitNameShow.uniteEntryName }}
                  </option>
                </select>
                <has-error :form="form" field="unitId"></has-error>


              <!-- ===================================== Advance unit price setup -->


                <!-- <span v-if="advanceButtonStatusUnit" class="badge badge-primary" data-toggle="modal" data-target="#exampleModal1">
                  Advance 1
                </span> -->

                <!-- Modal -->
                <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLabel"> Unit Setup 
                           </h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"> &times; </span>
                        </button>
                      </div>
                      <div class="modal-body">
                      <div class="table-responsive">
                        <table class="table table-bordered">
                          <tr>
                            <th> Unit </th>
                            <th> Quantity </th>
                            <th> Unit Price </th>
                            <th> T.P Rate </th>
                            <th> Discount (%) </th>
                          </tr>
                          <tr>
                            <td> <select> 
                                  <option value=""> ---- </option>
                                 </select>
                               </td>
                               <td>
                                <input type='text' class="form-control"></input>
                               </td>
                               <td>
                                <input type='text' class="form-control"></input>
                               </td>
                               <td>
                                <input type='text' class="form-control"></input>
                               </td>
                               <td>
                                <input type='text' class="form-control"></input>
                               </td>
                          </tr>
                          <tr>
                            <td> <select> 
                                  <option value=""> ---- </option>
                                 </select>
                               </td>
                               <td>
                                <input type='text' class="form-control"></input>
                               </td>
                               <td>
                                <input type='text' class="form-control"></input>
                               </td>
                               <td>
                                <input type='text' class="form-control"></input>
                               </td>
                               <td>
                                <input type='text' class="form-control"></input>
                               </td>
                          </tr>
                          <tr>
                            <td> <button @click="showUnitModal()" type="button" class="btn btn-primary">Setup</button> </td>
                          </tr>
                        </table>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>







                        <!-- ===================================== advacnce -->
                <span v-if="advanceButtonStatus" class="badge badge-primary" data-toggle="modal" data-target="#exampleModal">
                  Advance 0
                </span>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLabel"> Unit Setup 
                           </h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"> &times; </span>
                        </button>
                      </div>
                      <div class="modal-body" style="overflow:scroll;">
                      <div class="" style="width:710px;">
                       
                       <div class="table-responsive">
                       <table class="table table-bordered">
                         <tr v-for="advanceUnitSetupList in advanceUnitSetupLists">
                           <td> {{advanceUnitSetupList.quantity}} </td>
                           <td>  <span
                                    v-for="unitNameShow in unitNameShows"
                                    :value="unitNameShow.uniteEntryId"
                                    v-if="unitNameShow.uniteEntryId==advanceUnitSetupList.unitId"
                                  >
                                    {{ unitNameShow.uniteEntryName }}
                                  </span> </td>
                           <td v-if="advanceUnitSetupList.totalQuantity"> {{advanceUnitSetupList.totalQuantity}} </td>
                           <td v-if="advanceUnitSetupList.totalUnitId"> <span
                                    v-for="unitNameShow in unitNameShows"
                                    :value="unitNameShow.uniteEntryId"
                                    v-if="unitNameShow.uniteEntryId==advanceUnitSetupList.totalUnitId"
                                  >
                                    {{ unitNameShow.uniteEntryName }}
                                  </span> </td>

                                  <td> 
                                  <span v-if="lastDbInsertId==advanceUnitSetupList.id"> 
                                    <button type="button" class="btn btn-danger deleteUnitSetupDelete" @click="deleteUnitSetup(advanceUnitSetupList.id)"> Delete </button>
                                    <button type="button"  class="btn btn-danger deleteUnitSetupLoading" style="display:none;"> <span class="spinner-border spinner-border-sm"></span> </button>
                                    </span>
                                    </td>
                           
                         </tr>
                         
                         <tr>
                           <td>

                             <has-error :form="form" field="productId"></has-error>

                             <span for=""> Quantity <span v-if="secondTime"> (Per <span
                                    v-for="unitNameShow in unitNameShows"
                                    :value="unitNameShow.uniteEntryId"
                                    v-if="unitNameShow.uniteEntryId==lastUnitId"
                                  >
                                    {{ unitNameShow.uniteEntryName }}
                                  </span>) </span> </span>
                             <br>
                                <input type="number" v-model="form.formLastId" style="display:none;">
                                <input type="number"
                                v-model="form.adv_quantity"
                                @keyup="updateTotalQuantity()"
                                  class="form-control"
                                  :class="{ 'is-invalid': form.errors.has('adv_quantity') }"
                                  >
                                <has-error :form="form" field="adv_quantity"></has-error>
                           </td>
                           <td>
                             <span for=""> Unit </span>
                             <br>
                                <select
                                  v-model="form.adv_unitId"
                                  @change="changeAdvUnit()"
                                  name="adv_unitId"
                                  class="form-control"
                                  :class="{ 'is-invalid': form.errors.has('adv_unitId') }"
                                  
                                >
                                  <option value="">---</option>
                                  <option
                                    v-for="unitNameShow in unitNameShows"
                                    :value="unitNameShow.uniteEntryId"
                                  >
                                    {{ unitNameShow.uniteEntryName }}
                                  </option>
                                </select>
                                <has-error :form="form" field="adv_unitId"></has-error>
                           </td>
                           <td v-if="secondTime">
                            <!-- <table style="width:100%">
                              <tr>
                                <td>  
                                  <span for=""> Qnt  </span>
                             <br>
                                <input type="number"
                                v-model="form.adv_unitQuantity"
                                @keyup="calculateTotalQuantity()"
                                  class="form-control"
                                  :class="{ 'is-invalid': form.errors.has('unitId1') }"
                                  >
                                <has-error :form="form" field="unitId1"></has-error>
                                </td>
                               
                                <td> -->
                                  <span for=""> Total  </span>
                             <br>
                                <input type="number" disabled
                                v-model="form.adv_totalQuantity"
                                  class="form-control"
                                  :class="{ 'is-invalid': form.errors.has('unitId1') }"
                                  >
                                <has-error :form="form" field="unitId1"></has-error>
                                <!-- </td>
                              </tr>
                            </table> -->
                            
                           </td>
                           <td v-if="secondTime">
                             <span for=""> Unit </span>
                             <br>
                                <select 
                                disabled
                                  v-model="form.adv_totalUnitId"
                                  name="unitId1"
                                  class="form-control"
                                  :class="{ 'is-invalid': form.errors.has('unitId1') }"
                                  
                                >
                                  <option value="">---</option>
                                  <option
                                    v-for="unitNameShow in unitNameShows"
                                    :value="unitNameShow.uniteEntryId"
                                  >
                                    {{ unitNameShow.uniteEntryName }}
                                  </option>
                                </select>
                                <has-error :form="form" field="unitId1"></has-error>
                           </td>
                           <td>
                             <button type="button" @click="addAdvanceUnit()" class="btn btn-primary addAdvanceUnitAdd"> Add </button>
                             <button type="button"  class="btn btn-danger addAdvanceUnitLoading" style="display:none;"> <span class="spinner-border spinner-border-sm"></span> </button>
                           </td>
                         </tr>

                       </table>
                       </div>




                       <div class="p-2 bg-info">
                            <h6 class="text-center text-uppercase text-light"> Purchase Price  </h6>
                            <!-- Gradient divider -->
                       </div>



                       <div class="table-responsive alert-info">
                       <table class="table table-bordered">
                         
                         <tr class="website1">
                           <td>
                             <span for=""> Quantity </span>
                             <br>
                                <input type="number"
                                disabled
                                v-model="form.adv_pur_quantity"
                                  class="form-control"
                                  :class="{ 'is-invalid': form.errors.has('adv_pur_quantity') }"
                                  value="10"
                                  >
                                <has-error :form="form" field="adv_pur_quantity"></has-error>
                           </td>
                           <td>
                             <span for=""> Unit </span>
                             <br>
                                <select
                                disabled
                                  v-model="form.adv_pur_unitId"
                                  name="adv_pur_unitId"
                                  class="form-control"
                                  :class="{ 'is-invalid': form.errors.has('adv_pur_unitId') }"
                                  
                                >
                                  <option value="">---</option>
                                  <option
                                    v-for="unitNameShoo in salesPurchaseAdvanceUnitLists"
                                    :value="unitNameShoo.uniteEntryName"
                                  >
                                    {{ unitNameShoo.unitId }}
                                  </option>
                                </select>
                                <has-error :form="form" field="adv_pur_unitId"></has-error>
                           </td>
                           <td>
                             <span for="" class="float-left"> Total Purchase Price  </span>
                             <span for="" class="badge badge-primary percent_text float-right" onclick="$('.percent_text').hide();$('.amount_text').show();$('.amount_input_box').hide();$('.percent_input_box').show();" style="cursor:pointer;"> %  </span>
                             <span for="" class="badge badge-primary amount_text float-right" onclick="$('.percent_text').show();$('.amount_text').hide();$('.amount_input_box').show();$('.percent_input_box').hide();" style="cursor:pointer;display:none;"> $  </span>
                             <br>

                             <span class="percent_input_box" style="display:none;">

                                <div class="input-group">
                                  <input type="text" class="form-control adv_pur_amount"  @keyup="calculatePurchasePercent()" @change="calculatePurchasePrice()" placeholder="Amount" style="width:10px">
                                  <input type="text" class="form-control adv_pur_percent" @keyup="calculatePurchasePercent()" @change="calculatePurchasePrice()" placeholder="Less (%)" style="width:10px">
                                </div>

                              </span>




                             <span class="amount_input_box">
                                <input type="number"
                                step="0.000000000000001"
                                autocomplete="off"
                                @change="calculatePurchasePrice()"
                                  v-model="form.adv_pur_totalPrice"
                                  class="form-control"
                                  placeholder=" Total Purchase Price "
                                  :class="{ 'is-invalid': form.errors.has('adv_pur_totalPrice') }"
                                  >
                                <has-error :form="form" field="adv_pur_totalPrice"></has-error>
                                </span>
                           </td>
                         </tr>
 
                       </table>
                       
                       <table class="table table-bordered">
                         

                         <tbody>

                            <tr>
                              
                              <th> Quantity  </th>
                              <th> Unit  </th>
                              <th> Unit Price  </th>
                              <th> Total Price  </th>
                            </tr>
                            <tr class="purchasePriceTableLoading" style="display:none;">
                              <td colspan="4" class="text-center">
                                <span style="width:50px;height:50px;" class="spinner-border spinner-border-sm"></span>
                              </td>
                            </tr>

                            <tr v-for="advanceUnitSetupList in adv_purchase_priceLists">
                          
                           <td> {{advanceUnitSetupList.totalQuantity}} </td>
                           <td> <span
                                    v-for="unitNameShow in unitNameShows"
                                    :value="unitNameShow.uniteEntryId"
                                    v-if="unitNameShow.uniteEntryId==advanceUnitSetupList.totalUnitId"
                                  >
                                    {{ unitNameShow.uniteEntryName }}
                                  </span> </td>


                                  <td> {{(advanceUnitSetupList.purchaseUnitPrice).toFixed(2)}} </td>
                                  <td> {{(advanceUnitSetupList.purchaseTotalPrice).toFixed(2)}} </td>
                           
                         </tr>
                         </tbody>

                       </table>
                       </div>

                       <div class="mt-4 p-2 bg-success">
                            <h6 class="text-center text-uppercase text-light"> {{salePriceConfigures.salesPriceType}}</h6>
                            <!-- Gradient divider -->
                       </div>



                       <div class="table-responsive alert-success">
                       <table class="table table-bordered">
                         
                         <tr class="website1">
                           
                           <td>
                             <span for=""> Unit </span>
                             <br>
                                <select
                                  v-model="form.adv_sale_unitId"
                                  @change="getLastPcsQuantity()"
                                  name="adv_sale_unitId"
                                  class="form-control"
                                  :class="{ 'is-invalid': form.errors.has('adv_sale_unitId') }"
                                  
                                >
                                  <option value="">---</option>
                                  <option
                                    v-for="unitNameShoi in salesPurchaseAdvanceUnitLists"
                                    :value="unitNameShoi.uniteEntryId"
                                  >
                                    {{ unitNameShoi.uniteEntryName }}
                                  </option>
                                </select>
                                <has-error :form="form" field="adv_sale_unitId"></has-error>
                           </td>
                           <td>
                             <span for=""> {{salePriceConfigures.salesPriceType}}
                             
                             (Per <span
                                    v-for="unitNameShoi in salesPurchaseAdvanceUnitLists"
                                    :value="unitNameShoi.uniteEntryId"
                                    v-if="form.adv_sale_unitId==unitNameShoi.uniteEntryId"
                                  >
                                    {{ unitNameShoi.uniteEntryName }}
                                  </span>)
                             </span>
                             <br>
                                <input type="number"
                                step="0.000000000000001"
                                autocomplete="off"
                                @keyup="calculateSalesUnitPrice()"
                                @change="calculateSalesPrice()"
                                  v-model="form.adv_sale_unitPrice"
                                  class="form-control"
                                  :class="{ 'is-invalid': form.errors.has('adv_sale_unitPrice') }"
                                  >
                                <has-error :form="form" field="adv_sale_unitPrice"></has-error>
                           </td>
                           <td>
                             <span for=""> Quantity </span>
                             <br>
                                <input type="number"
                                disabled
                                v-model="form.adv_sale_quantity"
                                  class="form-control"
                                  :class="{ 'is-invalid': form.errors.has('adv_sale_quantity') }"
                                  value="10"
                                  >
                                <has-error :form="form" field="adv_sale_quantity"></has-error>
                           </td>
                           <td>
                             <span for=""> Total {{salePriceConfigures.salesPriceType}}  </span>
                             <br>
                                <input type="number"
                                step="0.000000000000001"
                                autocomplete="off"
                                @keyup="calculateSalesTotalPrice()"
                                @change="calculateSalesPrice()"
                                  v-model="form.adv_sale_totalPrice"
                                  class="form-control"
                                  :class="{ 'is-invalid': form.errors.has('adv_sale_totalPrice') }"
                                  >
                                <has-error :form="form" field="adv_sale_totalPrice"></has-error>
                           </td>
                            
                         </tr>
 
                       </table>
                       
                       

                       <table class="table table-bordered">
                         

                         <tbody>

                            <tr>
                              
                              <th> Quantity  </th>
                              <th> Unit  </th>
                              <th> {{salePriceConfigures.salesPriceType}}  </th>
                              <th> Total Price  </th>
                            </tr>

                            <tr class="salesPriceTableLoading" style="display:none;">
                              <td colspan="4" class="text-center">
                                <span style="width:50px;height:50px;" class="spinner-border spinner-border-sm"></span>
                              </td>
                            </tr>

                            <tr v-for="advSalesList in adv_sales_priceLists">
                          
                           <td> {{advSalesList.totalQuantity}} </td>
                           <td> <span
                                    v-for="unitNameShow in unitNameShows"
                                    :value="unitNameShow.uniteEntryId"
                                    v-if="unitNameShow.uniteEntryId==advSalesList.totalUnitId"
                                  >
                                    {{ unitNameShow.uniteEntryName }}
                                  </span> </td>
 
                                  <td> <input @change="changeSalesUnitPrice(advSalesList.id)" step="0.01" v-bind:id="'price-'+advSalesList.id" :min="(advSalesList.salesUnitPrice).toFixed(2)" type="number" class="form-control" :value="(advSalesList.salesUnitPrice).toFixed(2)">
                                     </td>
                                  <td  v-bind:id="'totalPrice-'+advSalesList.id"> {{(advSalesList.salesTotalPrice).toFixed(2)}}</td>
                           
                         </tr>
                         </tbody>

                       </table>
                       </div>

 




                      </div>
                      </div>
                      <div class="modal-footer">
                        <div class="col-6">
                        <button type="button" @click="clearAdvUnitSetup()" class="btn btn-danger" data-dismiss="modal">Clear</button>
                        </div>
                        <div class="col-6">
                          <button type="button" class="btn btn-primary float-right" data-dismiss="modal">Next</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
 <!-- ===================================== /Advance unit price setup -->


              </div>
              <div class="form-group col-sm-1 col-6">
                <span v-if="negative" style="color: red"
                  >Negative Value Not Allowed</span
                >
                <label>Quantity</label>
                <!-- @keyup="quantity" -->
                <div style="width:90px;overflow:hidden;padding:2px">
                <input
                style="width:130px;"
                  type="number"
                  v-model="form.quantity"
                  
                  step="0.001"
                  autocomplete="off"
                  @keyup.prevent="unitPrice()"
                  @change="unitPrice()"
                  name="quantity"
                  placeholder="Quantity"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('quantity') }"
                />
                </div>
                <has-error :form="form" field="quantity"></has-error>
              </div>
              <div class="form-group col-sm-1 col-6">
                <span v-if="negative1" style="color: red"
                  >Negative Value Not Allowed</span
                >
                <label>Unit Price</label>
                <!-- @keyup="unit" -->
                <div style="width:90px;overflow:hidden;padding:2px">
                <input
                style="width:130px;"
                  type="number"
                  step="0.000000000000001"
                  v-model="form.unitPrice"

                  @keyup.prevent="unitPrice()"
                  @change="unitPrice()"
                  name="unitPrice"
                  autocomplete="off"
                  placeholder="Unit Price"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('unitPrice') }"
                />
                </div>
                <has-error :form="form" field="unitPrice"></has-error>
              </div>
              <div class="form-group col-sm-1 col-6">
                <span v-if="negative1" style="color: red"
                  >Negative Value Not Allowed</span
                >
                <label>{{salePriceConfigures.salesPriceType}}</label>
                 <!-- @keyup="unit" -->
                <div style="width:90px;overflow:hidden;padding:2px">
                <input
                style="width:130px;"
                  type="number"
                  step="0.000000000000001"
                  v-model="form.salePrice"
                 
                  @keyup.prevent="salePrice()"
                  @change="salePrice()"
                  name="salePrice"
                  autocomplete="off"
                  :placeholder="[[salePriceConfigures.salesPriceType]]"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('salePrice') }"
                />
                </div>
                <has-error :form="form" field="salePrice"></has-error>
              </div>
              <div class="form-group col-sm-1 col-6">
                <span v-if="negative2s" style="color: red"
                  >Negative Value Not Allowed</span
                >
                <label
                  >Discount({{ form.discountTypeIcon }})
                  <!-- <small class="badge badge-primary"
                 data-toggle="modal" data-target="#discount" title="Add Discount Type">+</small> -->

                  <!-- ======================================== modal === -->

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="discount"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add Discount Type
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
                          <form @submit.prevent="discountTypeEntry()">
                            <div class="form-group">
                              <label> Discount Type </label>
                              <select
                                v-model="form.discountTypeId"
                                type="text"
                                name="discountTypeId"
                                :class="{
                                  'is-invalid':
                                    form.errors.has('discountTypeId'),
                                }"
                                placeholder="Select Discount Type"
                                class="form-control"
                              >
                                <option value="">Discount Type</option>
                                <option
                                  v-for="discountTypelist in discountTypelists"
                                  :key="discountTypelist.id"
                                  :value="discountTypelist.id"
                                >
                                  {{ discountTypelist.discountTypeName }}
                                </option>
                              </select>
                              <has-error
                                :form="form"
                                field="discountTypeId"
                              ></has-error>
                            </div>

                            <div class="text-right pt-3">
                              <button
                                type="submit"
                                class="
                                  mr-2
                                  btn-pill btn-hover-shine btn btn-primary
                                "
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                        <!-- <div class="modal-footer">
                                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          <button type="button" class="btn btn-primary">Save changes</button>
                                        </div> -->
                      </div>
                    </div>
                  </div>

                  <!-- ======================================== /modal === -->
                </label>
                <input
                  type="text"
                  v-model="form.percetage"
                  @keyup="disnt"
                  @keyup.prevent="percetage()"
                  name="percetage"
                  placeholder="Discount"
                  class="form-control"
                />

                
                <input
                  type="number"
                  step="0.000000000000001"
                  v-model="form.percetagePrice"
                  name="percetagePrice"
                  class="form-control"
                  style="display:none;"
                />
              </div>
            </div>
            
            <div class="form-row">
            <div class="col-12 float-right">
                  
                  <button
                    :disabled="loading"
                    type="submit"
                    class="btn btn-info float-right mr-2 mb-2"
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
                  <input
                    type="number"
                    step="0.000000000000001"
                    v-model="form.totalPrice"
                    name="totalPrice"
                    placeholder="Total Price"
                    class="form-control"
                    style="display:none;"
                  />


                  <label class="m-0 pl-3 pr-3 float-right">
                    Total:{{ form.totalPrice }} </label>

                </div>
            </div>
          </form>
        </div>
        <div class="table-responsive bg-white">
          <table class="table table-hover table-bordered mb-0">
            <thead>
              <tr class="alert-info">
                <th>SN</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Unit</th>
                <th>Color/Size</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
                <th>{{salePriceConfigures.salesPriceType}}</th>
                <th>Discount({{ form.discountTypeIcon }})</th>
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
                  <span v-if="purchaseProductList.unit_name">{{
                    purchaseProductList.unit_name.uniteEntryName
                  }}</span>
                </td>
                <td>
                  <span
                    v-for="colorList in colorLists"
                    v-if="colorList.id == purchaseProductList.colorId"
                    >{{ colorList.colorName }}</span
                  >

                  <span
                    v-for="sizeList in sizeLists"
                    v-if="sizeList.id == purchaseProductList.sizeId"
                  >
                    / {{ sizeList.sizeName }}</span
                  >
                </td>
                <td>{{ purchaseProductList.quantity }}</td>
                <td>{{ purchaseProductList.unitPrice }}</td>
                <td>{{ purchaseProductList.totalPrice }}</td>
                <td>{{ purchaseProductList.salePrice }}</td>
                <td>{{ purchaseProductList.discount }}</td>
                <td>{{ purchaseProductList.totalWithDiscount }}</td>
                <td>
                  <button v-bind:id="'dltBtn-'+purchaseProductList.purchaseProductId" type="button" @click="distroy(purchaseProductList.purchaseProductId)" class="btn btn-hover-shine btn-danger dltBtn">
                    <i class="fa fa-trash"></i> Delete
                  </button>
                  <button v-bind:id="'dltBtnLoading-'+purchaseProductList.purchaseProductId" type="button" class="btn btn-hover-shine btn-danger dltBtnLoading"  style="display:none;">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Delete
                  </button>


                  <button
                    type="button"
                    class="btn btn-hover-shine btn-success"
                    data-toggle="modal"
                    @click="
                      purchaseProductIdCatch(
                        purchaseProductList.purchaseProductId
                      )
                    "
                    :data-target="
                      '#productId' + purchaseProductList.purchaseProductId
                    "
                  >
                    Add Details
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
                          Add Product More Details
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
                                        <option value="">------</option>
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
                                        <option value="">-----</option>
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
                                          <option value="">----</option>
                                          <option value="1">Taka</option>
                                          <option value="2">Percentage</option>
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
                              <!-- Add More Field -->
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
                                <!-- <vue-editor
                                  v-model="form.proDescription"
                                  type="text"
                                  name="proDescription"
                                  placeholder="Product Description"
                                ></vue-editor> -->
                              </div>
                              <div class="form-group">
                                <label><b> Product Advantage </b></label>
                                <!-- <vue-editor
                                  v-model="form.proAdvantage"
                                  type="text"
                                  name="proAdvantage"
                                  placeholder="Product Advantage"
                                ></vue-editor> -->
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
                          <button
                            class="btn btn-hover-shine btn-success"
                            @click.prevent="purchaseProductDetailsAdd()"
                            data-dismiss="modal"
                          >
                            Add Details
                          </button>
                        </div>
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
                  <tr style="display: none">
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
                  <tr style="display: none">
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
                    <td class="title-name">Discount (tk)</td>
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
                  <tr style="display: none">
                    <td colspan="2"><hr /></td>
                  </tr>
                  <tr style="display: none">
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
                  <tr style="display: none">
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
                    <td class="title-name"> Previous Payable </td>
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
                        class="mt-3 ml-2 btn btn-primary"
                        @click="currentDue()"
                      >
                        <span class="mr-2 opacity-7">
                          <i class="fa fa-paper-plane"></i>
                        </span>
                        <span class="mr-1">  Next  <i class="fa fa-angle-double-right"></i> </span>
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
                                  @keyup.prevent="totalAmountCalculate()"
                                  onkeyup="value=value.replace(/[^0-9^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.').replace(/^0+/, '')"
                                  autocomplete="off"
                                  class="form-control"
                                  placeholder="Cash Amount"
                                />
                                <span
                                  style="color: red"
                                  v-if="negativepay == true"
                                  >Negative Amount Not Allowed</span
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
                              <i class="fa fa-minus" aria-hidden="true"></i>
                              Close
                            </button>
                            <div v-if="morepay">
                              <div class="form-group">
                                <label> Receiver Bank Type Name </label>
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
                                  <option value="">--------</option>
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
                                    <option value="">-------</option>
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
                                    <option value="">--- Bank Name ---</option>
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
                                      ----- Bank Account ----
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
                                      placeholder="Bank Amount"
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
                              <span class="mr-1"> Submit </span>
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
                        <span class="float-right">
                          <button
                            type="button"
                            class="btn btn-hover-shine btn-danger"
                            data-dismiss="modal">
                            Close
                          </button>
                        </span>
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

    
  </span>
</template>
<script>
import Multiselect from "vue-multiselect";
import moment from 'moment';
export default {
  data() {
    return {
            moment: moment,
      form: new Form({
        // supplier information
        productSupplierName: "",
        productSupplierCode: "",
        productSupplierPhone: "",
        productSupplierHotLine: "",
        productSupplierMail: "",
        productSupplierWeb: "",
        productSupplierFb: "",
        productSupplierImo: "",
        productSupplierAddress: "",
        openingStatus: 0,
        // /supplier information

        // product name  information
        category: "",
        subCategory: "",
        thirdCategory: "",
        fourCategory: "",
        fiveCategory: "",
        sixCategory: "",
        sevenCategory: "",
        productName: "",
        productCode: "",
        productQRNumber: "",
        // /product name information

        // product brand information
        productBrandName: "",
        productBrandStatus: 1,
        shopTypeId: "",
        productBrandPosition: "",
        // /product brand information

        openingPurchaseRepurchase: 1,

        paymentType: 1,

        purchaseDate: moment().format("YYYY-MM-DD"),
        purchaseInvoiceNo: "",
        productSupplierListId: "",
        productSupplierId: "",
        moblieNo: "",
        address: "",
        rePurchaseStatus: 0,

        // Product Field
        purchaseType: 1,
        countryId: 19,
        colorId: 0,
        sizeId: 0,
        productId: "",
        productListId: "",
        productBarcode: "",
        brandListId: "",
        brandId: "",
        uniteEntryName: "",
        colorEntryName: "",
        colorEntryCode: "",
        sizeEntryName: "",
        unitId: "",
        quantity: "",
        unitPrice: "",
        salePrice: "",
        discountType: 1,
        discountTypeIcon: "",
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
        currentPaidAmount: "",
        currentDue: "",
        bankAmount: 0,


        // advance unit setup
        
        adv_entry_status:0,
        formLastId:0,
        adv_quantity:'',
        adv_unitId:'',
        adv_unitQuantity:'',
        adv_totalQuantity:'',
        adv_totalQuantity1:'',
        adv_totalUnitId:'',
        
        adv_pur_quantity:'',
        adv_pur_unitId:'',
        adv_pur_totalPrice:'',
        adv_pur_totalUnitPrice:'',
        
        adv_sale_quantity:'',
        adv_sale_unitId:'',
        adv_sale_unitPrice:'',
        adv_sale_totalPrice:'',
        adv_sale_totalUnitPrice:'',
      }),


      // -------------- advance unit setup
      advanceButtonStatus:false,
      advanceButtonStatusUnit:false,
      secondTime:false,
      firstUnitId:0,
      firstQuantity:'',
      lastUnitId:0,
      lastQuantity:'',
      lastId:1,
      // -------------- /advance unit setup

      //  product name variable
      adminProductBrandLists: [],
      shopProductBrandLists: [],
      shopTypeNames: [],
      authInfo: [],
      salePriceConfigures: '',

      //  product name variable

      //  product name variable
      subShow: false,
      loading: false,
      thirdShow: false,
      fourShow: false,
      fiveShow: false,
      sixShow: false,
      sevenShow: false,
      cateorySelectLists: [],
      subCategorySelectLists: [],
      thirdCategorySelectLists: [],
      fourCategorySelectLists: [],
      fiveCategorySelectLists: [],
      sixCategorySelectLists: [],
      sevenCategorySelectLists: [],
      // productNameLists
      productNameLists: [],
      categoryLists: [],
      //  /product name variable

      openningDivStatus: "",

      discountTypelists: [],
      countryLists: [],
      colorLists: [],
      sizeLists: [],
      purchaseTypeLists: [],
      productSupplierLists: [],
      purchaseTypes: [],
      newBrandLists: [],
      product: false,
      unitNameShows: [], 
      purchaseProductLists: [],
      productBrandList: [],
      purchaseInvoiceNumber: [],
      cusPurchaseInvoice: [],
      cusPreviousPayable: [],

      adminPurchaseTypeLists: [],
      invoiceProductMoreDetailss: [],
      invoiceProductMoreField1: [],
      invoiceProductMoreField2: [],
      invoiceProductMoreField3: [],
      invoiceProductMoreField4: [],

      taxAmountTypeShow: false,
      fieldNameOneShow: false,
      fieldNameTwoShow: false,
      fieldNameThreeShow: false,
      fieldNameFourShow: false,
      negative: false,
      negative1: false,
      negative2: false,
      negative2s: false,
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
      paymentTypeLists: [],
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
      avilable_balance: "",
      avilable_bal: "",
      morepay: false,
      close: false,
      loading: false,
      loadingPay: false,
      advanceUnitSetupLists:[],
      lastDbInsertId:0,
      adv_purchase_priceLists:[],
      adv_sales_priceLists:[],
      salesPurchaseAdvanceUnitLists:[],
    };
  },
  components: {
    Multiselect,
  },
  mounted() {
    this.productSupplierList();
    this.salePriceConfigure();
    this.countryList();
    this.colorList();
    this.sizeList();
    this.purchaseInvoiceNo();

    // ======== product brand  information
    this.ShowDataLists();
    this.shopTypeNameShow();
    this.condition();
    this.productBrandPosition();
    // ======== product brand  information

    // ======== product name information

    this.categoryList();
    this.productListShows();

    // ======== /product name information


    this.autoIncrementCode();

    this.purchaseTypeShow();
    this.unitNameShow();
    // this.productNameShow();
    this.productList();
    this.totalPurchaseValue();
    this.getData();
    this.discountTypeShow();
  },

  methods: { 

    calculateTotalQuantity(){
      let totalqnt = parseFloat(this.form.adv_totalQuantity1);
      let unitqnt  = parseFloat(this.form.adv_unitQuantity);
      this.form.adv_totalQuantity = totalqnt+unitqnt;
    },

    showUnitModal(){
      $('#exampleModal1').modal('hide');
      $('#exampleModal').modal('show');
    },

    clearAdvUnitSetup(){
            $('.adv_pur_percent').val('');
            $('.adv_pur_amount').val('');

            this.form.adv_sale_unitPrice ='';
            this.form.adv_sale_totalPrice ='';
            this.form.adv_pur_totalPrice ='';
            this.form.formLastId ='';
            this.form.unitId ='';
            this.form.quantity ='';
            this.form.salePrice = '';
            this.adv_sales_priceLists = [];
            this.adv_purchase_priceLists = [];
            this.advanceUnitSetupLists = [];
            this.lastDbInsertId = 0;

                  this.secondTime=false;
                  this.firstUnitId=0;
                  this.firstQuantity='';
                  this.lastUnitId=0;
                  this.lastQuantity='';
                  this.lastId=1;


          this.form.adv_unitId = '';
          this.form.adv_quantity = '';
          this.form.adv_totalQuantity = '';
          this.form.adv_totalQuantity1 = '';
          this.form.adv_totalUnitId = '';

          this.form.adv_pur_quantity = '';
          this.form.adv_pur_unitId = '';

          this.form.adv_sale_quantity = '';
          this.form.adv_sale_unitId = '';


              $('.adv_pur_amount').val('');
              $('.adv_pur_percent').val('');
          
    },
changeSalesUnitPrice(e){
let unitPrice = $('#price-'+e).val();
axios.get('/advanceUnitSalesPriceUpdate/'+e+'/'+unitPrice).then(res => {

          if(this.form.unitId == res.data.info.unitId){
            this.form.salePrice = res.data.info.salesUnitPrice;
          }
        });
        this.showAdvanceUnitSetupSales();

},
    deleteUnitSetup(e){
      $('.deleteUnitSetupDelete').hide();
      $('.deleteUnitSetupLoading').show();
            axios.get('/advanceUnitSetupDelete/'+e+'/'+this.form.purchaseInvoiceNo).then(res => {
              
              --this.form.formLastId;
              --this.lastId;

              this.showAdvanceUnitSetup();
              this.showAdvanceUnitSetupPurchase();
              this.showAdvanceUnitSetupSales();

              
            }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
              $('.deleteUnitSetupDelete').show();
              $('.deleteUnitSetupLoading').hide();
        });

        this.form.adv_pur_totalPrice = '';
        this.form.adv_sale_unitPrice = '';
        this.form.adv_sale_totalPrice = '';
        $('.adv_pur_percent').val('');
            $('.adv_pur_amount').val('');
    },

calculatePurchasePercent(){
  let getAmount = $('.adv_pur_amount').val();
  let getPercent = $('.adv_pur_percent').val();
  let percentAmount = getAmount*getPercent/100;
  let finalPurchaseAmount = parseFloat(getAmount-percentAmount).toFixed(2);
  this.form.adv_pur_totalPrice = finalPurchaseAmount;
  },
calculatePurchasePrice(){
  $('.purchasePriceTableLoading').show();
        this.form.post('/advanceUnitSetupPurchasePrice').then(res => {
          this.showAdvanceUnitSetupPurchase();
        });
        let unitPrice = (this.form.adv_pur_totalPrice/this.form.quantity).toFixed(2);
        this.form.unitPrice = unitPrice;
        let totalPrice = (this.form.adv_pur_totalPrice/1).toFixed(2);
        this.form.totalPrice = totalPrice;
},
calculateSalesUnitPrice(){

  let salesTotalPrice = parseFloat(this.form.adv_sale_unitPrice*this.form.adv_sale_quantity).toFixed(2);
  this.form.adv_sale_totalPrice = salesTotalPrice;

},
calculateSalesTotalPrice(){

  let adv_sale_unitPrice = parseFloat(this.form.adv_sale_totalPrice/this.form.adv_sale_quantity).toFixed(2);
  this.form.adv_sale_unitPrice = adv_sale_unitPrice;

},
calculateSalesPrice(){
  $('.salesPriceTableLoading').show();
        this.form.post('/advanceUnitSetupSalesPrice').then(res => {
          this.showAdvanceUnitSetupSales();
        });

        let salePrice = (this.form.adv_sale_totalPrice/this.form.quantity).toFixed(2);
        this.form.salePrice = salePrice;
},


getLastPcsQuantity(){
  $('.adv_pur_percent').val('');
            $('.adv_pur_amount').val('');

  this.form.adv_sale_unitPrice='';
  this.form.adv_sale_totalPrice='';
  this.form.post('/getLastSalesQuantity').then(res => {
    this.form.adv_sale_quantity = res.data.quantity;
  });
},
    addAdvanceUnit(){
      $('.addAdvanceUnitAdd').hide();
      $('.addAdvanceUnitLoading').show();
      this.secondTime=true;
      this.lastUnitId = this.form.adv_unitId;
      if(this.lastId==1){
        this.lastQuantity = this.form.adv_quantity;
        this.firstUnitId = this.form.adv_unitId;
        this.firstQuantity = this.form.adv_quantity;
      }
      else{
        this.lastQuantity = this.form.adv_totalQuantity;
      }
this.form.formLastId = this.lastId;
      ++this.lastId;

      // this.form.unitId = this.form.adv_unitId;
      // if(this.lastId==1){
      // this.form.quantity = this.form.adv_quantity;
      // }
      // else{
      // this.form.quantity = this.form.adv_totalQuantity;
      // }

      this.form.unitId = this.firstUnitId;
      this.form.quantity = this.firstQuantity;
     

      this.form.post('/advanceUnitSetup').then(res => {
            
            if(res.data.product>0){
            if(res.data.id){

              this.salesPurchaseAdvanceUnitLists = res.data.unitList;

            Toast.fire({
                icon: "success",
                title: "Insert Successful.",
            });

            this.form.adv_entry_status = 1;
                  $('.addAdvanceUnitAdd').show();
                  $('.addAdvanceUnitLoading').hide();
            }
            else{
              $('.addAdvanceUnitAdd').show();
              $('.addAdvanceUnitLoading').hide();
            }
           

          this.form.adv_unitId = '';
          this.form.adv_quantity = '';
          this.form.adv_totalQuantity = '';
          this.form.adv_totalQuantity1 = '';
          this.form.adv_totalUnitId = '';

          this.form.adv_pur_quantity = this.firstQuantity;
          this.form.adv_pur_unitId = this.firstUnitId;
          this.form.adv_pur_totalPrice = '';

          this.form.adv_sale_quantity = this.firstQuantity;
          this.form.adv_sale_unitId = this.firstUnitId;
          this.form.adv_sale_totalPrice = '';
          this.form.adv_sale_unitPrice = '';

          $('.adv_pur_percent').val('');
            $('.adv_pur_amount').val('');

          this.showAdvanceUnitSetup(this.form.productId);
          }
          else{
                        Toast.fire({
                            icon: "error",
                            title: "Please Select Product.",
                        });
                              $('.addAdvanceUnitAdd').show();
                              $('.addAdvanceUnitLoading').hide();
          } 
              }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
          $('.addAdvanceUnitAdd').show();
                              $('.addAdvanceUnitLoading').hide();
        });
      
    },

showAdvanceUnitSetup(){
          this.form.post('/advanceUnitSetupByProduct').then(res => {
              this.advanceUnitSetupLists = res.data.data;
              this.lastDbInsertId = res.data.lastInsertId;
              this.lastQuantity = res.data.lastQuantity;

              $('.deleteUnitSetupDelete').show();
              $('.deleteUnitSetupLoading').hide();
          })
},

showAdvanceUnitSetupPurchase(){
          this.form.post('/advUnitSetupByPurchase').then(res => {
              this.adv_purchase_priceLists = res.data.data;
              this.lastDbInsertId = res.data.lastInsertId;
              this.lastQuantity = res.data.lastQuantity;
              $('.purchasePriceTableLoading').hide();
          })
},

showAdvanceUnitSetupSales(){
          this.form.post('/advUnitSetupBySales').then(res => {
            this.adv_sales_priceLists = res.data.data;
              this.lastDbInsertId = res.data.lastInsertId;
              this.lastQuantity = res.data.lastQuantity;
              $('.salesPriceTableLoading').hide();
          })

},

updateTotalQuantity(){
  if(this.lastId!=1){
  this.form.adv_totalQuantity = this.form.adv_quantity*this.lastQuantity;
  this.form.adv_totalQuantity1 = this.form.adv_quantity*this.lastQuantity;
  }
},

changeAdvUnit(){
  if(this.lastId!=1){
  this.form.adv_totalUnitId = this.form.adv_unitId;
  }
},
    salePriceConfigure(){
      axios.get('/salesPriceType').then(res => {
                  this.salePriceConfigures = res.data.priceTypeInfo;   
              })
    },
    selectProductId(value) {
      this.form.brandId = '';
      this.form.productId = value.productNameId;
    },

    selectBrandId(value) {
      this.form.brandId = value.productBrandEntryId;
      this.repurchaseProductInfo();
      this.advanceButtonStatus=true;
      this.advanceButtonStatusUnit=false;
    },
    repurchaseProductInfo(){
      
      this.form.post("/repurchaseProductInfo").then((res) => {
          
         this.form.unitId = res.data.productInfo.unitId;
         if(res.data.productInfo.discount>0){
         this.form.discount = res.data.productInfo.discount;
         }else{
         this.form.discount = 0;
         }
         this.unitNameShows = res.data.unitNameShows;
         this.form.unitPrice = res.data.productInfo.unitPrice;
         this.form.salePrice = res.data.productInfo.salePrice;
         this.form.rePurchaseStatus =  res.data.repurchase;
         this.advanceButtonStatus = false;
         this.advanceButtonStatusUnit = true;
        })
        .catch((res) => {
          // this.loading = false;
          // Toast.fire({
          //   icon: "error",
          //   title: "Something wrong",
          // });

         this.form.quantity = '';
         this.form.unitId = '';
         this.form.discount = 0;
         this.form.unitPrice = '';
         this.form.salePrice = '';
         this.form.rePurchaseStatus = 0;
         this.advanceButtonStatus = true;
         this.advanceButtonStatusUnit = false;
         this.unitNameShow();

        });
    },
    repurchaseProductInfoUnit(){

      this.form.quantity = '';
      
      this.form.post("/repurchaseProductInfoUnit").then((res) => {
          
         
         if(res.data.productInfo.discount>0){
         this.form.discount = res.data.productInfo.discount;
         }else{
         this.form.discount = 0;
         }
        
         this.form.unitPrice = res.data.purchaseUnitPrice;
         this.form.salePrice = res.data.salesUnitPrice;
        
        })
        .catch((res) => {
          // this.loading = false;
          // Toast.fire({
          //   icon: "error",
          //   title: "Something wrong",
          // });

        //  this.form.quantity = '';
        //  this.form.unitId = '';
        //  this.form.discount = 0;
        //  this.form.unitPrice = '';
        //  this.form.salePrice = '';
        //  this.form.rePurchaseStatus = 0;
        //  this.advanceButtonStatus = true;

        });
    },
    // ================================= product brand information

    productBrandCreate() {
      this.loading = true;
      this.form
        .post("/shopproductBrandEntry")
        .then((res) => {
          this.loading = false;
          if (res.data.changeProductBrandName) {
            Toast.fire({
              icon: "error",
              title: "Change your Product Brand Name",
            });
          } else {
            this.form.productBrandName = '';
            Toast.fire({
              icon: "success",
              title: "Product Brand Entry Successfully",
            });
            this.ShowDataLists();
            this.productBrandPosition();
            $("#newBrand").modal("hide");
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

    ShowDataLists() {
      axios.get("/productBrandListPurchase").then((res) => {
        this.newBrandLists = res.data.shopProductBrandList;
      });
    },
    shopTypeNameShow() {
      axios.get("/category/create").then((res) => {
        this.shopTypeNames = res.data.shopTypeNames;
      });
    },
    adminShopTypeIdSelect() {
      axios
        .get("/adminProductBrandPosition/" + this.form.shopTypeId)
        .then((res) => {
          this.form.productBrandPosition = res.data.productBrandIncrement;
        });
    },
    productBrandPosition() {
      axios.get("/shopProductBrandPosition").then((res) => {
        this.form.productBrandPosition = res.data.productBrandIncrement;
      });
    },
    changeStatus(productBrandEntryId) {
      axios.get("/shopproductBrandEntry/" + productBrandEntryId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Product Brand Status Change Successfully",
        });
        
      });
    },
    condition() {
      axios.get("/condition").then((res) => {
        this.authInfo = res.data.authInfo;
      });
    },

    // ================================= /product brand information

    // ================================= product name information

    addProductName() {
      this.loading = true;
      this.form
        .post("/productName")
        .then((res) => {
          this.loading = false;
          if (res.data.changeProductQR) {
            Toast.fire({
              icon: "error",
              title: "Change product QR Number",
            });
          } else if (res.data.changeProductName) {
            Toast.fire({
              icon: "error",
              title: "Change product Name",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Product Name Entry Successfully",
            });
            // this.form.reset();
            this.subShow = false;
            this.thirdShow = false;
            this.fourShow = false;
            this.fiveShow = false;
            this.sixShow = false;
            this.sevenShow = false;
            this.productListShows();
            $("#newProduct").modal("hide");
          }
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },
    productListShows() {
      axios.get("/productName").then((res) => {
        this.productNameLists = res.data.productNameList;
        this.categoryLists = res.data.categoryLists;
        this.form.productCode = res.data.productCodeCountIncre;
      });
    },
    categoryList() {
      axios.get("/productCateorySelectList").then((res) => {
        this.cateorySelectLists = res.data.categoryList;
      });
    },
    categorySelect() {
      axios.get("/productCategoryId/" + this.form.category).then((res) => {
        this.subCategorySelectLists = res.data.subCategoryList;
        if (res.data.subCategoryList == "") {
          this.subShow = false;
        } else {
          this.subShow = true;
        }
      });
    },
    subCategorySelect() {
      axios
        .get("/productSubCategoryId/" + this.form.subCategory)
        .then((res) => {
          this.thirdCategorySelectLists = res.data.thirdCategoryList;
          if (res.data.thirdCategoryList == "") {
            this.thirdShow = false;
          } else {
            this.thirdShow = true;
          }
        });
    },
    thirdCategorySelect() {
      axios
        .get("/productThirdCategoryId/" + this.form.thirdCategory)
        .then((res) => {
          this.fourCategorySelectLists = res.data.fourCategoryList;
          if (res.data.fourCategoryList == "") {
            this.fourShow = false;
          } else {
            this.fourShow = true;
          }
        });
    },
    fourCategorySelect() {
      axios
        .get("/productFourCategoryId/" + this.form.fourCategory)
        .then((res) => {
          this.fiveCategorySelectLists = res.data.fiveCategoryList;
          if (res.data.fiveCategoryList == "") {
            this.fiveShow = false;
          } else {
            this.fiveShow = true;
          }
        });
    },
    fiveCategorySelect() {
      axios
        .get("/productFiveCategoryId/" + this.form.fiveCategory)
        .then((res) => {
          this.sixCategorySelectLists = res.data.sixCategoryList;
          if (res.data.sixCategoryList == "") {
            this.sixShow = false;
          } else {
            this.sixShow = true;
          }
        });
    },
    sixCategorySelect() {
      axios
        .get("/productSixCategoryId/" + this.form.sixCategory)
        .then((res) => {
          this.sevenCategorySelectLists = res.data.sevenCategoryList;
          if (res.data.sevenCategoryList == "") {
            this.sevenShow = false;
          } else {
            this.sevenShow = true;
          }
        });
    },

    // ================================= /product name information

    checkOpenningSupplier() {
      axios.get("/getCheckOpenningSupplier").then((res) => {
        this.openningDivStatus = res.data.status;
      });
    },
    addProductSupplierCreate() {
      this.loading = true;
      this.form
        .post("/addProductSupplier")
        .then((res) => {
          this.loading = false;
          Toast.fire({
            icon: "success",
            title: "Product Supplier Entry Successfully",
          });
          $("#supplier").modal("hide");
          // this.form.reset();
          this.form.productSupplierName = '';
          this.form.productSupplierCode = '';
          this.form.productSupplierPhone = '';
          this.form.productSupplierHotLine = '';
          this.form.productSupplierMail = '';
          this.form.productSupplierFb = '';
          this.form.productSupplierWeb = '';
          this.form.productSupplierImo = '';
          this.form.productSupplierAddress = '';
          this.productSupplierList();
          this.autoIncrementCode();
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },
    autoIncrementCode() {
      axios.get("/addProductSupplier/create").then((res) => {
        this.form.productSupplierCode = res.data.autoIncrementCode;
      });
    },

    uniteEntryCreate() {
      this.loading = true;
      this.form
        .post("/uniteEntry")
        .then((res) => {
          if (res.data.changeUniteEntryName) {
            Toast.fire({
              icon: "error",
              title: "Unit name allready Exist.",
            });
            this.loading = false;
          } else {
            Toast.fire({
              icon: "success",
              title: "Unite Name Entry Successfully",
            });
            this.form.uniteEntryName = "";
            this.unitNameShow();
            $("#unit").modal("hide");
            this.loading = false;
          }
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },
    colorEntryCreate() {
      this.loading = true;
      this.form
        .post("/colorListAll")
        .then((res) => {
          if (res.data.changeColorName) {
            Toast.fire({
              icon: "error",
              title: "Color name already exist.",
            });
            this.loading = false;
          } else {
            Toast.fire({
              icon: "success",
              title: "Color Entry Successfully",
            });

            this.form.colorEntryName = "";
            this.form.colorEntryCode = "";

            this.colorList();
            $("#color").modal("hide");
            this.loading = false;
          }
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },
    sizeEntryCreate() {
      this.loading = true;
      this.form
        .post("/sizeListAll")
        .then((res) => {
          if (res.data.changeSizeName) {
            Toast.fire({
              icon: "error",
              title: "Size name already exist.",
            });
            this.loading = false;
          } else {
            Toast.fire({
              icon: "success",
              title: "Size Entry Successfully",
            });
            this.form.sizeEntryName = "";
            this.sizeList();
            $("#size").modal("hide");
            this.loading = false;
          }
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },
    discountTypeEntry() {
      this.form.post("/discountTypeEntry").then((res) => {
        Toast.fire({
          icon: "success",
          title: "Discount Type Change Successfully",
        });

        this.discountTypeShow();
        $("#discount").modal("hide");
      });
    },
    discountTypeShow() {
      axios.get("/discountTypeByShop").then((res) => {
        this.form.discountType = res.data.discountType;
        this.form.discountTypeIcon = res.data.discountTypeIcon;
      });
    },

    currentDue() {
      this.checkBalanceForCash();
      this.form.currentDue = this.form.currentPayable;
    },

    open() {
      this.morepay = true;
      this.close = true;
    },

    closeForm() {
      this.morepay = false;
      this.close = false;
    },

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
      if (this.form.productSupplierId == "") {
        Toast.fire({
          icon: "error",
          title: "Select Product Supplier Name",
        });
      } else {
        this.form.post("/purchaseProductDetails").then((res) => {
          if (res.data.noEntry) {
            Toast.fire({
              icon: "error",
              title: "Enter Your Information",
            });
          } else {
            if (res.data.alreadyEntry) {
              Toast.fire({
                icon: "success",
                title: "Update Poroduct Description",
              });
            } else {
              Toast.fire({
                icon: "success",
                title: "Product Details Entry Successfully",
              });
              this.form.taxAmountTypeShow = false;
              this.form.fieldNameOneShow = false;
              this.form.fieldNameTwoShow = false;
              this.form.fieldNameThreeShow = false;
              this.form.fieldNameFourShow = false;

              this.form.purchaseProductIdCatch = "";
              this.form.modelNo = "";
              this.form.batchNo = "";
              this.form.qrCode = "";

              this.form.mfgLicenseNO = "";
              this.form.warranty = "";
              this.form.selectMothOrYearWarranty = "";
              this.form.guarantee = "";
              this.form.selectMothOrYearGuarantee = "";
              this.form.mfgDate = "";
              this.form.expiryDate = "";
              this.form.tax = "";
              this.form.taxAmount = "";
              this.form.taxAmountType = "";
              this.form.quantityType = "";
              this.form.quantityNoti = "";
              this.form.proDescription = "";
              this.form.proAdvantage = "";
              // Add More Field
              this.form.fieldNameOne = "";
              this.form.fieldNameTwo = "";
              this.form.fieldNameThree = "";
              this.form.fieldNameFour = "";
              this.form.workOne = "";
              this.form.workTwo = "";
              this.form.workThree = "";
              this.form.workFour = "";
            }
          }
        });
      }
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
          if (this.form.quantity < 1) {
            this.form.quantity = 1;
          }
          this.negative = false;
        }
        if (this.form.quantity < 1) {
          this.form.quantity = 1;
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
    purchaseProductIdCatch(purchaseProductId) {
      this.form.purchaseProductIdCatch = purchaseProductId;

      axios
        .get(
          "/invoiceProductMoreDetails/" +
            this.form.purchaseProductIdCatch +
            "/" +
            this.form.purchaseInvoiceNo
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
      });
    },
    productSupplierList() {
      axios.get("/shopWishProductSupplier").then((res) => {
        this.productSupplierLists = res.data.productSupplierList;
      });
    },
    productSupplierId(value) {
      this.form.productSupplierId = value.productSupplierId;
      axios
        .get("/shopWishProductSupplierId/" + value.productSupplierId)
        .then((res) => {
          this.form.moblieNo = res.data.productSupplierPhone;
          this.form.address = res.data.productSupplierAddress;

          // this.form.previousPayable = res.data.previousdue;
          // this.cusPreviousPayable = res.data.previousdue;

          axios
            .get("getLastBalanceByAccCodePurchase/" + res.data.accountCode)
            .then((res) => {
              this.form.previousPayable = res.data.balance;
              this.cusPreviousPayable = res.data.balance;

              let totalcurrant = parseFloat(this.cusPreviousPayable + this.form.currentPayable);
                this.form.currentPayable = totalcurrant;

              // if (this.cusPreviousPayable > 0) {
              //   let totalcurrant =
              //     parseFloat(this.cusPreviousPayable + this.form.currentPayable);
              //   this.form.currentPayable = totalcurrant;
              // } else {
              //   this.form.currentPayable = 0;
              // }
            });
        });

      this.totalPurchaseValue();
    },
    purchaseTypeShow() {
      axios.get("/purchaseTypeShow").then((res) => {
        this.purchaseTypes = res.data.purchaseType;
      });
    },
    unitNameShow() {
      axios.get("/unitNameShowPurchase").then((res) => {
        this.unitNameShows = res.data.unitNameShow;
      });
    },

    // productNameShow() {
    //   axios.get("/productNameShow").then((res) => {
    //     this.productNameLists = res.data.productNameList;
    //   });
    // },
    unitPrice() {
      let quantity = this.form.quantity;
      let unitPrice = this.form.unitPrice;
      let totalPrice = quantity * unitPrice;
      let dis = totalPrice*this.form.percetage/100;
      this.form.totalPrice = totalPrice-dis;
      this.form.percetagePrice = totalPrice-dis;
    },
    salePrice() {
      // let quantity = this.form.quantity;
      // let unitPrice = this.form.unitPrice;
      // let totalPrice = quantity * unitPrice;
      // this.form.totalPrice = totalPrice;
      // this.form.percetagePrice = totalPrice;
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
        this.form
          .post("/productEntry")
          .then((res) => {
            this.loading = false;
            this.product = true;
            if (res.data.alreadyEntry) {
              Toast.fire({
                icon: "error",
                title: "Already Product Entry!",
              });
              
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
              this.clearAdvUnitSetup();
              this.form.adv_entry_status = 0;
              this.form.productId = "";
              this.form.brandId = "";

              this.form.quantity = "";
              this.form.unitId = "";
              this.form.colorId = 0;
              this.form.sizeId = 0;
              this.form.unitPrice = "";
              this.form.salePrice = "";
              this.form.totalPrice = "";
              this.form.percetage = "";
              this.form.percetagePrice = "";
              this.form.productBarcode = "";

              this.form.productListId = "";
              this.form.brandListId = "";

              $('.adv_pur_amount').val('');
              $('.adv_pur_percent').val('');

              this.productList();
            }
          })
          .catch((res) => {
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
    productList() {
      axios.get("/productListTmp").then((res) => {
        this.purchaseProductLists = res.data.purchaseProductList;
        this.productBrandLists = res.data.productBrandList;
        this.purchaseTypeLists = res.data.purchaseTypeList;
        this.product = res.data.productEntryHave;
        this.totalPurchaseValue();

      $('.dltBtnLoading').hide();
      $('.dltBtn').show();
      });
    },
    totalPurchaseValue() {
      axios
        .get("/totalPurchaseValueTmp/" + this.cusPurchaseInvoice)
        .then((res) => {
          let sum = 0;
          let quantity = 0;
          if(res.data.have==1){
            res.data.purchaseProductList.forEach((productPrice) => {
              sum += parseFloat(productPrice.totalWithDiscount);
              quantity += parseFloat(productPrice.quantity);
            });
          }
          this.form.totalProductQuantity = quantity;
          this.form.totalPurchaseValue = sum;
          this.form.totalAmount = sum;
          this.form.supplierPayable = sum;
          this.form.totalProductCost = sum;
          this.form.totalDiscount = sum;
          this.form.currentPayable = sum;
          // if (this.cusPreviousPayable > 0) {
            let totalcurrant = parseFloat(this.cusPreviousPayable + this.form.totalProductCost);
            this.form.currentPayable = totalcurrant;
          // }
          this.currentDue();
        });
    },
    carriageInward() {
      if (this.form.carriageInward == "") {
        this.totalPurchaseValue();
      } else {
        let totalAmount =
          parseFloat(this.form.carriageInward)+
          parseFloat(this.form.totalPurchaseValue);
        this.form.totalAmount = totalAmount;
        this.form.supplierPayable = totalAmount;
        this.form.totalProductCost = totalAmount;
        this.form.totalDiscount = totalAmount;
        this.form.currentPayable = totalAmount;
        // if (this.cusPreviousPayable > 0) {
          let totalcurrant =
            parseFloat(this.cusPreviousPayable + this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        // }
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
        // if (this.cusPreviousPayable > 0) {
          let totalcurrant = parseFloat(this.cusPreviousPayable + this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        // }
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
        // if (this.cusPreviousPayable > 0) {
          let totalcurrant =
            parseFloat(this.cusPreviousPayable + this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        // }
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

        // if (this.cusPreviousPayable > 0) {
          let totalcurrant =
            parseFloat(this.cusPreviousPayable + this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        // }
      }
    },
    addPurchaseInvoice() {
      if (this.form.totalAmount<1) {
        Toast.fire({
          icon: "error",
          title: "select Product",
        });
      }
    else{  if (this.form.productSupplierId == "") {
        Toast.fire({
          icon: "error",
          title: "Supplier Id Required",
        });
      }
       else {
        this.loadingPay = true;
        this.form
          .post("/purchaseInvoice")
          .then((res) => {
            this.loadingPay = false;
            Toast.fire({
              icon: "success",
              title: "Purchase Invoice Add Successfully",
            });
            $("#pay").modal("hide");
            (this.form.productSupplierId = []),
              (this.form.moblieNo = []),
              (this.form.address = []),
              (this.form.purchaseType = []),
              (this.form.totalPurchaseValue = []);
            this.form.totalAmount = [];
            this.form.supplierPayable = [];
            this.form.totalProductCost = [];
            this.form.currentPayable = [];
            this.form.reset();
            this.form.countryId = 19;
            this.purchaseInvoiceNo();
            this.discountTypeShow();
          })
          .catch((res) => {
            this.loadingPay = false;
            Toast.fire({
              icon: "error",
              title: "Something wrong",
            });
          });
      }
      }
    },

    countryList() {
      axios.get("/countryListAll/").then((res) => {
        this.countryLists = res.data.countryList;
      });
    },
    colorList() {
      axios.get("/colorListAll/").then((res) => {
        this.colorLists = res.data.colorList;
      });
    },
    sizeList() {
      axios.get("/sizeListAll/").then((res) => {
        this.sizeLists = res.data.sizeList;
      });
    },
    distroy(purchaseProductId) {

      // $('#dltBtnLoading-'+purchaseProductId).show();
      // $('#dltBtn-'+purchaseProductId).hide();

      $('.dltBtnLoading').show();
      $('.dltBtn').hide();

      axios.delete("/purchaseInvoice/" + purchaseProductId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Product Delete Successfully",
        });
        this.productList();

      })
      .catch((res) => {
 
      $('.dltBtnLoading').hide();
      $('.dltBtn').show();

            Toast.fire({
              icon: "error",
              title: "Something wrong",
            });
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
        axios.get("/discountList").then((res) => {
          this.discountTypeLists = res.data.list;
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
      } else if (this.form.receiverbankTypeEntryId == 2) {
        this.form.senderbankTypeEntryId = 2;
        this.bankAccount = false;
        this.bankCardAccount = false;
        this.mobileAccount = true;
      } else if (this.form.receiverbankTypeEntryId == 3) {
        this.form.senderbankTypeEntryId = 3;
        this.bankAccount = false;
        this.mobileAccount = false;
        this.bankCardAccount = true;
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
        this.bankCardAccount = false;
        this.mobileAccount = false;
      } else if (this.form.senderbankTypeEntryId == 2) {
        this.bankAccount = false;
        this.bankCardAccount = false;
        this.mobileAccount = true;
      } else if (this.form.senderbankTypeEntryId == 3) {
        this.bankAccount = false;
        this.mobileAccount = false;
        this.bankCardAccount = true;
      }
    },
    bankAccountIdCatch() {
      axios
        .get(
          "/bankAccountListWithCard/" +
            this.form.senderbankEntryId +
            "/" +
            this.form.senderbankTypeEntryId
        )
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
    checkBalanceForCash(){
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
    },
    totalAmountCalculate() {
     

      // alert(this.avilable_balance);
      if (
        parseFloat(this.form.currentPaidAmount) >
        parseFloat(this.avilable_balance)
      ) {
        this.alert = true;
        this.aler1t = false;
        this.form.currentPaidAmount = "";
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
          this.form.currentPaidAmount = "";
          this.negativepay = true;
          this.paybutton = true;
        } else {
          this.paybutton = false;
          let stringValue = this.form.currentPaidAmount.toString();
          let regex = /^\d*(\.\d{1,2})?$/;
          if (!stringValue.match(regex) && this.form.currentPaidAmount !== "") {
            this.form.currentPaidAmount = "";
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
                this.form.currentPaidAmount = "";
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
                this.form.currentPaidAmount = "";
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
        this.form.bankAmount = "";
        this.paybutton = true;
        this.form.currentDue =
          parseFloat(this.form.currentPayable) -
          parseFloat(this.form.currentPaidAmount) +
          parseFloat(this.form.bankAmount);
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
          this.form.bankAmount = "";
          this.negativepaybank = true;
        } else {
          let stringValue = this.form.bankAmount.toString();
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
                this.form.bankAmount = "";
                this.form.currentDue =
                  parseFloat(this.form.currentPayable) -
                  parseFloat(this.form.currentPaidAmount);
              } else {
                this.negativepaybank = false;
              }
            } else {
              if (parseFloat(this.form.bankAmount) > this.form.currentPayable) {
                this.negativepaybank = true;
                this.form.bankAmount = "";
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
.purchase-entry label {
  margin-right: 20px;
  display: block;
}
.shadow-custom {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15) !important;
}
button.btn.btn-hover-shine.btn-primary {
  font-size: 13px;
}
.purchase-entry .custom-control-inline {
  padding-left: 25px;
}
</style>
