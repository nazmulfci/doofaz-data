<template id="">
  <span>
    <div class="card">
      <div class="card-header">
        <h3>
          <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i>Add
          Asset
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
            <!-- --------------------- hidden file --------- -->
            <input type="hidden" v-model="form.note" />
            <!-- --------------------- hidden file --------- -->

          
            <div class="form-group">
              <label>Select Product Name/Code
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
              
              <small data-toggle="modal" data-target="#newProduct" title="Add Asset Name" class="badge badge-primary">+</small>
               <!-- ======================================== modal new product === -->

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
                          <form method="post" @submit.prevent="addAssetCode()">
            <div class="col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color" >
              
                <div class="form-row">
                    <div class="col-sm-4 col-12">
                       <label class="p-0">Asset Category
                         <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                       </label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select  v-model="form.assetCategory"  @change.prevent="assetCategorySelect()" name="assetCategory" class="form-control" :class="{ 'is-invalid': form.errors.has('assetCategory') }">
                          <option value="">Select One</option>
                          <option  v-for="assetCategoryList in assetCategoryLists" :value="assetCategoryList.assetCategoryId"> {{ assetCategoryList.assetCategoryName }} </option>
                      </select>
                      <has-error :form="form" field="assetCategory"></has-error>
                    </div>
                </div>
                <div class="form-row pt-2" v-if="subShow">
                   <div class="col-sm-4 col-12">
                      <label class="p-0">Asset Sub Category</label>
                   </div>
                    <div class="col-sm-8 col-12">
                        <select  v-model="form.assetSubCategory" @change.prevent="assetSubCategorySelect()" name="assetSubCategory" class="form-control">
                          <option value="">Select One</option>
                          <option v-for="assetSubCategorySelectList in assetSubCategorySelectLists" :value="assetSubCategorySelectList.assetCategoryId">{{ assetSubCategorySelectList.assetCategoryName }}</option>
                        </select>
                     </div>
                </div>
                <div class="form-row pt-2" v-if="thirdShow">
                    <div class="col-sm-4 col-12">
                        <label class="p-0">Asset Third Category</label>
                     </div>
                    <div class="col-sm-8 col-12">
                      <select  v-model="form.assetThirdCategory" @change.prevent="assetThirdCategorySelect()" name="assetThirdCategory" class="form-control">
                        <option value="">Select One</option>
                        <option v-for="assetThirdCategorySelectList in assetThirdCategorySelectLists" :value="assetThirdCategorySelectList.assetCategoryId">{{ assetThirdCategorySelectList.assetCategoryName }}</option>
                      </select>
                    </div>
                </div>
                <div class="form-row pt-2" v-if="fourShow">
                   <div class="col-sm-4 col-12">
                       <label class="p-0">Asset Four Category</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select  v-model="form.assetFourCategory" @change.prevent="assetFourCategorySelect()" name="assetFourCategory" class="form-control">
                        <option value="">Select One</option>
                        <option v-for="assetFourCategorySelectList in assetFourCategorySelectLists" :value="assetFourCategorySelectList.assetCategoryId">{{ assetFourCategorySelectList.assetCategoryName }}</option>
                      </select>
                    </div>
                </div>
                <div class="form-row pt-2" v-if="fiveShow">
                     <div class="col-sm-4 col-12">
                        <label class="p-0">Asset Five Category</label>
                     </div>
                     <div class="col-sm-8 col-12">
                        <select  v-model="form.assetFiveCategory" @change.prevent="assetFiveCategorySelect()" name="assetFiveCategory" class="form-control">
                          <option value="">Select One</option>
                          <option v-for="assetFiveCategorySelectList in assetFiveCategorySelectLists" :value="assetFiveCategorySelectList.assetCategoryId">{{ assetFiveCategorySelectList.assetCategoryName }}</option>
                        </select>
                     </div>
                </div>
                <div class="form-row pt-2" v-if="sixShow">
                     <div class="col-sm-4 col-12">
                        <label class="p-0">Asset Six Category</label>
                     </div>
                     <div class="col-sm-8 col-12">
                        <select  v-model="form.assetSixCategory" @change.prevent="assetSixCategorySelect()" name="assetSixCategory" class="form-control">
                          <option value="">Select One</option>
                          <option v-for="assetSixCategorySelectList in assetSixCategorySelectLists" :value="assetSixCategorySelectList.assetCategoryId">{{ assetSixCategorySelectList.assetCategoryName }}</option>
                        </select>
                     </div>
                </div>
                <div class="form-row pt-2" v-if="sevenShow">
                     <div class="col-sm-4 col-12">
                        <label class="p-0">Asset Seven Category</label>
                     </div>
                     <div class="col-sm-8 col-12">
                        <select  v-model="form.assetSevenCategory" @change.prevent="assetSevenCategorySelect()" name="assetSevenCategory" class="form-control">
                          <option value="">Select One</option>
                          <option v-for="assetSevenCategorySelectList in assetSevenCategorySelectLists" :value="assetSevenCategorySelectList.assetCategoryId">{{ assetSevenCategorySelectList.assetCategoryName }}</option>
                        </select>
                     </div>
                </div>
                <div class="form-row pt-2" >
                     <div class="col-sm-4 col-12">
                        <label class="p-0">Asset Product Name
                          <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                        </label>
                     </div>
                     <div class="col-sm-8 col-12">
                          <input  type="text" v-model="form.assetPorductName" name="assetPorductName" :class="{ 'is-invalid': form.errors.has('assetPorductName') }" placeholder="Enter Product Name" class="form-control">
                          <has-error :form="form" field="assetPorductName"></has-error>
                     </div>
                 </div>
                <div class="form-row pt-2" >
                     <div class="col-sm-4 col-12">
                        <label class="p-0">Asset Product Code</label>
                     </div>
                     <div class="col-sm-8 col-12">
                          <input  type="text" v-model="form.assetPorductCode" name="assetPorductCode" Placeholder="Enter Product Code" class="form-control">
                        
                     </div>
                 </div>
                 
                 </div>

                  <!-- -----------------------------   card footer  -->
 
<div class="d-block p-0 pt-3 pb-4 card-footer overflow-hidden">
<div class="col-12">


                                <button type="reset" class="btn-pill btn-shadow btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Clear </span>
                                </button>

                                <button
                      type="submit"
                      class="btn-pill btn-shadow btn btn-primary btn-lg   float-right
                  btn-hover-shine"
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
                      </div>
              </label>

              <div class="form-control p-0" style="height:47px;">
              <multiselect
                          @input="assetSelect"
                          label="assetPorductName"
                          placeholder="Select Asset"
                          :options="assetCodeEntryLists"
                          :show-labels="false"
                          v-model="form.assetProductListId"
                          class="form-control"
                          :class="{
                          'is-invalid': form.errors.has('assetProductId'),
                          }"
                          style="
                            padding: 0px !important;
                            padding-bottom: 3px !important;
                          ">
                        </multiselect>
                        </div>

              
              <has-error :form="form" field="assetProductId"></has-error>
            </div>
            <div class="form-group">
              <label>Select Supplier Name
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
              <small data-toggle="modal" data-target="#supplier" title="Add Asset Supplier" class="badge badge-primary">+</small>
               <!-- ======================================== modal asset supplier === -->

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
                              
                              <form @submit.prevent="addAssetSupplierCreate()">
          <div
            class="
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

          <!-- ----------------------------- card footer -->

          <div class="d-block p-0 pt-3 pb-4 card-footer overflow-hidden">
            <div class="col-12">
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
                      </div>

                      <!-- ======================================== /modal === -->
             </label>
              <select
                v-model="form.assetSupplierId"
                name="assetSupplierId"
                :class="{ 'is-invalid': form.errors.has('assetSupplierId') }"
                class="form-control"
                @change.prevent="assetSupplierIdCatch()"
              >
                <option value="">Select One</option>
                <option
                  :value="assetSupplierList.assetSupplierId"
                  v-for="assetSupplierList in assetSupplierLists"
                  :key="assetSupplierList.id"
                >
                  {{ assetSupplierList.assetSupplierName }}
                </option>
              </select>
              <has-error :form="form" field="assetSupplierId"></has-error>
            </div>
            <div class="form-group">
              <label>Select Brand Name
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
              <small data-toggle="modal" data-target="#newBrand" title="Add Asset Name" class="badge badge-primary">+</small>
               <!-- ======================================== modal new brand === -->

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
                      </div>
                      </div>


                      </label>
              <select
                v-model="form.assetBrandId"
                name="assetBrandId"
                :class="{ 'is-invalid': form.errors.has('assetBrandId') }"
                class="form-control"
              >
                <option value="">Select One</option>
                <option
                  :value="assetBrandList.assetBrandEntryId"
                  :key="assetBrandList.id"
                  v-for="assetBrandList in assetBrandLists"
                >
                  {{ assetBrandList.assetBrandName }}
                </option>
              </select>
              <has-error :form="form" field="assetBrandId"></has-error>
            </div>
            <div class="form-group">
              <label>Purchase Date
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
              </label>
              <input
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
                v-model="form.modelNo"
                type="text"
                name="modelNo"
                :class="{ 'is-invalid': form.errors.has('modelNo') }"
                placeholder="Model No"
                class="form-control"
              />
              <has-error :form="form" field="modelNo"></has-error>
            </div>
            
            

            <div class="form-group">
              <label>Depreciation</label>
              <div class="form-row">
                <div class="col-md-4">
                  <input
                    v-model="form.depreciationYear"
                    @keyup.prevent="checkData()"
                    type="number"
                    name="depreciationYear"
                    :class="{
                      'is-invalid': form.errors.has('depreciationYear'),
                    }"
                    placeholder="Enter Years"
                    class="form-control"
                  />
                  <has-error :form="form" field="depreciationYear"></has-error>
                </div>
                <div class="col-md-4">
                  <input
                    v-model="form.depreciationMonth"
                    @keyup.prevent="checkData()"
                    type="number"
                    name="depreciationMonth"
                    :class="{
                      'is-invalid': form.errors.has('depreciationMonth'),
                    }"
                    placeholder="Enter Month"
                    class="form-control"
                  />
                  <has-error :form="form" field="depreciationMonth"></has-error>
                </div>
                <div class="col-md-4">
                  <input
                    v-model="form.depreciationDay"
                    @keyup.prevent="checkData()"
                    type="number"
                    name="depreciationDay"
                    :class="{
                      'is-invalid': form.errors.has('depreciationDay'),
                    }"
                    placeholder="Enter Day"
                    class="form-control"
                  />
                  <has-error :form="form" field="depreciationDay"></has-error>
                </div>
                <input
                  v-model="form.checkDepreciation"
                  type="hidden"
                  name="checkDepreciation"
                  class="form-control"
                />
                <div class="col-md-12 mt-2" v-if="totalDepreciationShow">
                  <input
                    disabled
                    v-model="form.totalDepreciation"
                    type="text"
                    name="totalDepreciation"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Warranty</label>
              <div class="form-row">
                <div class="col-md-6">
                  <input
                    v-model="form.warranty"
                    type="number"
                    name="warranty"
                    :class="{ 'is-invalid': form.errors.has('warranty') }"
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
              <has-error :form="form" field="warranty"></has-error>
            </div>
            <div class="form-group">
              <label>Guarantee</label>
              <div class="form-row">
                <div class="col-md-6">
                  <input
                    v-model="form.guarantee"
                    type="number"
                    name="guarantee"
                    :class="{ 'is-invalid': form.errors.has('guarantee') }"
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
              <has-error :form="form" field="guarantee"></has-error>
            </div>
            <div class="form-group">
              <label>Color</label>
              <input
                v-model="form.color"
                type="text"
                name="color"
                :class="{ 'is-invalid': form.errors.has('color') }"
                placeholder="Color"
                class="form-control"
              />
              <has-error :form="form" field="color"></has-error>
            </div>
            <div class="form-group">
              <label>Size</label>
              <vue-editor
                v-model="form.size"
                type="text"
                name="Size"
                :class="{ 'is-invalid': form.errors.has('Size') }"
                placeholder="Size"
              ></vue-editor>
              <has-error :form="form" field="Size"></has-error>
            </div>
            <div class="form-group">
              <label>Description</label>
              <vue-editor
                v-model="form.description"
                type="text"
                name="description"
                :class="{ 'is-invalid': form.errors.has('description') }"
                placeholder="Description"
              ></vue-editor>
              <has-error :form="form" field="description"></has-error>
            </div>


            <div class="form-group">
              <label>Product Quantity
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
              </label>
              <input
                v-model="form.productQuantity"
                type="text"
                name="productQuantity"
                :class="{ 'is-invalid': form.errors.has('productQuantity') }"
                placeholder="Product Quantity"
                class="form-control"
                 autocomplete="off"
              />
              <has-error :form="form" field="productQuantity"></has-error>
            </div>
            <div class="form-group">
              <label>Product Unit Price
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
              </label>

              <input
                v-model="form.productCost"
                 autocomplete="off"
                type="text"
                name="productCost"
                onkeyup="value=value.replace(/[^0-9^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.').replace(/^0+/, '')"
                @keyup.prevent="totalProductCostCal()"
                :class="{ 'is-invalid': form.errors.has('productCost') }"
                placeholder="Product Cost"
                class="form-control productUnitPrice"
              />
              <has-error :form="form" field="productCost"></has-error>
              <span style="color:red" v-if="invalid">Negative Amount Not Allowed</span>
            </div>
            <div class="form-group" v-if="previousPayableBill">
              <label> Previous Payable Due 
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
              </label>
              <input
                disabled
                v-model="form.previousPayableDue"
                type="text"
                name="previousPayableDue"
                :class="{ 'is-invalid': form.errors.has('previousPayableDue') }"
                placeholder="Previous Payable"
                class="form-control"
              />
              <has-error :form="form" field="previousPayableDue"></has-error>
            </div>
            <div class="form-group" v-if="totalProductCostShow">
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
              <label>Current Payable
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
              </label>
              <input
                disabled
                v-model="form.currentPayable"
                type="text"
                name="currentPayable"
                :class="{ 'is-invalid': form.errors.has('currentPayable') }"
                placeholder="Current Payable"
                class="form-control"
              />
              <has-error :form="form" field="currentPayable"></has-error>
            </div>



            <!-- ========================= payment option  -->

            <div class="form-group">
              <label> Payment Type
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                
                <span v-if="available_balance_cash_status" class="badge badge-primary">
                      {{form.available_balance}}
                </span>
                    
              </label>
              <select
                v-model="form.paymentType"
                @change="paymentReceiveType()"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('paymentType') }"
              >
                <option value="">Select Payment Type</option>
                <option
                  v-for="paymentTypeList in paymentTypeLists"
                  :value="paymentTypeList.id"
                  :key="paymentTypeList.id"
                >
                  <span v-if="paymentTypeList.id < 4">
                    {{ paymentTypeList.paymentType }}</span
                  >
                </option>
              </select>
              <has-error :form="form" field="paymentType"></has-error>

              <small class="badge badge-danger" v-if="insufficent_cash_balance_text_status">
                      Insufficient Balance
              </small>

            </div>

            <div v-if="cashInformationStatus">
              <div class="form-group">
                <label> Cash Amount </label>
                <input
                  type="text"
                  v-model="form.cashAmount"
                  @keyup="calculateAmount(1)"
                  onkeyup="value=value.replace(/[^0-9^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.').replace(/^0+/, '')"
                  autocomplete="off"
                  name="cashAmount"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('cashAmount') }"
                />
                <has-error :form="form" field="cashAmount"></has-error>
                 <span v-if="error" style="color:red">Negative Amount Now Allowed </span>
              </div>

              <div class="form-group">
                <label> Person Name </label>
                <input
                  type="text"
                  v-model="form.personName"
                  name="personName"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('personName') }"
                />
                <has-error :form="form" field="personName"></has-error>
              </div>

              <div class="form-group">
                <label> Person Mobile No </label>
                <input
                  type="text"
                  v-model="form.personMobileNo"
                  name="personMobileNo"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('personMobileNo') }"
                />
                <has-error :form="form" field="personMobileNo"></has-error>
              </div>
            </div>

            <div v-if="bankInformationStatus">
              <div class="form-group">
                <label> Bank Amount </label>
                <input
                  type="text"
                  v-model="form.bankAmount"
                  @keyup="calculateAmount(2)"
                  onkeyup="value=value.replace(/[^0-9^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.').replace(/^0+/, '')"
                  autocomplete="off"
                  name="bankAmount"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('bankAmount') }"
                />
                <has-error :form="form" field="bankAmount"></has-error>
                <span v-if="error" style="color:red">Negative Amount Not Allowed </span>
              </div>

              <div class="form-group">
                <label>Bank Type Name</label>
                <select
                  v-model="form.bankTypeEntryId"
                  name="bankTypeEntryId"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('bankTypeEntryId') }"
                  @change.prevent="bankTypeIdCatch()"
                >
                  <option value="">Select One</option>
                  <option
                    v-for="showBankTypeData in showBankTypeDatas"
                    :value="showBankTypeData.bankTypeEntryId"
                    :key="showBankTypeData.id"
                  >
                    {{ showBankTypeData.bankTypeEntryName }}
                  </option>
                </select>
                <has-error :form="form" field="bankTypeEntryId"></has-error>
              </div>

              <div class="form-group">
                <label>Bank Name</label>
                <select
                  v-model="form.bankEntryId"
                  name="bankEntryId"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('bankEntryId') }"
                  @change.prevent="bankAccountIdCatch()"
                >
                  <option value="">Select Bank Name</option>
                  <option
                    v-for="showBankName in showBankNames"
                    :key="showBankName.id"
                    :value="showBankName.bankEntryId"
                  >
                    {{ showBankName.bankName }}
                  </option>
                </select>
                <has-error :form="form" field="bankEntryId"></has-error>
              </div>

              <div class="form-group">
                <label> Account No

                   <span v-if="available_balance_status" class="badge badge-primary">
                     {{available_balance_text}}
                   </span>


                </label>
                <select
                  v-model="form.bankAccountId"
                  name="bankAccountId"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('bankAccountId') }"
                  @change="getBankMoreInfo()"
                >
                  <option value="">Select Bank Account</option>
                  <option
                    v-for="showBankAccount in showBankAccounts"
                    :value="showBankAccount.bankId"
                    :key="showBankAccount.id"
                  >
                    <span v-if="showBankAccount.bankAccountName">
                      {{ showBankAccount.bankAccountName }}
                    </span>

                    <span v-else>
                      {{ showBankAccount.bankAccountNumber }}
                    </span>
                  </option>
                </select>
                <has-error :form="form" field="bankAccountId"></has-error>

                 <input type="hidden" v-model="form.available_balance">
                 <small class="badge badge-danger" v-if="insufficent_bank_balance_text_status">
                    Insufficient Balance
                  </small>

              </div>

              <div v-if="bankInformationAccountInfoStatus">
                <div class="form-group">
                  <label> Branch Name </label>
                  <input
                    type="text"
                    v-model="form.branchName"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="form-group">
                  <label> Account No </label>
                  <input
                    type="text"
                    v-model="form.accNo"
                    class="form-control"
                    readonly
                  />
                </div>
              </div>
            </div>

            <!-- ========================= payment option  -->
            <div class="form-group">
              <label> Due Amount </label>
              <input
                type="number"
                readonly
                v-model="form.dueAmount"
                name="dueAmount"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('dueAmount') }"
              />
              <has-error :form="form" field="dueAmount"></has-error>
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
              v-if="submit_button"
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

              <button
              v-if="insufficent_button"
                type="button"
                class="
                  btn-pill btn-shadow btn btn-danger btn-lg
                  float-right
                  btn-hover-shine
                "
              >
                
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
          >Asset List
        </h3>
      </div>
      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <!-- <th>
                Asset<span class="textTransparent">_</span>Category<span
                  class="textTransparent"
                  >_</span
                >Name
              </th> -->
              <th>
                Asset<span class="textTransparent">_</span>Product<span
                  class="textTransparent"
                  >_</span
                >Name
              </th>
              <th>
                Asset<span class="textTransparent">_</span>Supplier<span
                  class="textTransparent"
                  >_</span
                >Name
              </th>
              <th>
                Asset<span class="textTransparent">_</span>Brand<span
                  class="textTransparent"
                  >_</span
                >Name
              </th>
              <th>
                Purchase<span class="textTransparent">_</span>Date<span
                  class="textTransparent"
                  >_</span
                >Name
              </th>
              <th>Mfg<span class="textTransparent">_</span>Date</th>
              <th>Expiry<span class="textTransparent">_</span>Date</th>
              <th>Invoice<span class="textTransparent">_</span>No</th>
              <th>Model<span class="textTransparent">_</span>No</th>
              <th>Depreciation</th>
              <th>Product<span class="textTransparent">_</span>Price</th>
              <th>Warranty</th>
              <th>Guarantee</th>
              <th>Color</th>
              <th>Size</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(shopAssetEntryList, index) in shopAssetEntryLists.data"
              :key="shopAssetEntryList.id"
            >
              <td>{{ index + 1 }}</td>
              <!-- <td>
                <span v-if="shopAssetEntryList.asset_category_name">{{
                  shopAssetEntryList.asset_category_name.assetCategoryName
                }}</span>
              </td> -->
              <td>
                <span v-if="shopAssetEntryList.asset_code_name"
                  >{{ shopAssetEntryList.asset_code_name.assetPorductName }}/{{
                    shopAssetEntryList.asset_code_name.assetPorductCode
                  }}</span
                >
              </td>
              <td>
                <span v-if="shopAssetEntryList.supplier_name">{{
                  shopAssetEntryList.supplier_name.assetSupplierName
                }}</span>
              </td>
              <td>
                <span v-if="shopAssetEntryList.asset_brand_name">
                  {{ shopAssetEntryList.asset_brand_name.assetBrandName }}</span
                >
              </td>

              <td>{{ shopAssetEntryList.purchasedate }}</td>
              <td>{{ shopAssetEntryList.mfgDate }}</td>
              <td>{{ shopAssetEntryList.expiryDate }}</td>
              <td>{{ shopAssetEntryList.invoiceNo }}</td>
              <td>{{ shopAssetEntryList.modelNo }}</td>
              <td>{{ shopAssetEntryList.depreciation }}</td>
              <td>{{ shopAssetEntryList.totalProductCost }}</td>

              <td>
                <span v-if="shopAssetEntryList.warranty != null">
                  <span v-if="shopAssetEntryList.selectMothOrYearWarranty == 1">
                    {{ shopAssetEntryList.warranty * 1 }} Day
                  </span>
                  <span v-if="shopAssetEntryList.selectMothOrYearWarranty == 2">
                    {{ shopAssetEntryList.warranty * 30 }} Day
                  </span>
                  <span v-if="shopAssetEntryList.selectMothOrYearWarranty == 3">
                    {{ shopAssetEntryList.warranty * 12 * 30 }} Day
                  </span>
                </span>
              </td>
              <td>
                <span v-if="shopAssetEntryList.guarantee != null">
                  <span
                    v-if="shopAssetEntryList.selectMothOrYearGuarantee == 1"
                  >
                    {{ shopAssetEntryList.guarantee * 1 }} Day
                  </span>
                  <span
                    v-if="shopAssetEntryList.selectMothOrYearGuarantee == 2"
                  >
                    {{ shopAssetEntryList.guarantee * 30 }} Day
                  </span>
                  <span
                    v-if="shopAssetEntryList.selectMothOrYearGuarantee == 3"
                  >
                    {{ shopAssetEntryList.guarantee * 12 * 30 }} Day
                  </span>
                </span>
              </td>
              <td>{{ shopAssetEntryList.color }}</td>
              <td>{{ shopAssetEntryList.size  }}</td>
              <td>
                {{ shopAssetEntryList.description  }}
              </td>
              <td>
                <router-link
                  :to="`/assetentry@Edit${shopAssetEntryList.shopAssetEntryId}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine
                  "
                  ><i class="fa fa-edit"></i
                ></router-link>
              </td>
            </tr>
            <!-- <tr>
              <td colspan="9"></td>
              <td colspan="2">Total Product Cost</td>
              <td colspan="1">{{ subtotal }} <span>Taka</span></td>
            </tr> -->
          </tbody>
        </table>
      </div>
      <span class="card_footer">
        <pagination
          :data="shopAssetEntryLists"
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

import { VueEditor } from "vue2-editor";
import Multiselect from "vue-multiselect";

export default {
  data() {
    return {
      form: new Form({
        assetCategoryLevel: "",
        assetCategory: "",
        assetSubCategory: "",
        assetThirdCategory: "",
        assetFourCategory: "",
        assetFiveCategory: "",
        assetSixCategory: "",
        assetSevenCategory: "",

        assetProductId: "",
        assetSupplierId: "",
        assetBrandId: "",
        purchasedate: "",
        mfgDate: "",
        expiryDate: "",
        invoiceNo: "",
        modelNo: "",
        productQuantity: "",
        productCost: "",
        previousPayableDue: "",
        totalProductCost: "",
        currentPayable: "",
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
        note: "Asset Supplier Payment",

        // payment option

        cashAmount: "",
        bankAmount: "",
        dueAmount: "",
        branchName: "",
        accNo: "",
        paymentType: "",
        bankTypeEntryId: "",
        bankEntryId: "",
        bankAccountId: "",

        // payment option

      // for validation
          available_balance: '',
      // /for validation

      // for validation
        assetSupplierName: "",
        assetSupplierCode: "",
        assetSupplierPhone: "",
        assetSupplierHotLine: "",
        assetSupplierMail: "",
        assetSupplierWeb: "",
        assetSupplierFb: "",
        assetSupplierImo: "",
        assetSupplierAddress: "",
      // /for validation

      assetBrandName: "",
        assetBrandStatus: "1",
      }),

                    // for validation
                    available_balance_cash_status : false,
                    available_balance_cash_text : '',
                    
                    available_balance_text:'',
                    available_balance_status:false,
                    submit_button_status : true,
                    available_button_status : false,
                    available_text:'',
                    insufficent_cash_balance_text_status:false,
                    insufficent_bank_balance_text_status:false,
                    insufficent_balance_text_status:false,
                    insufficent_button:false,
                    submit_button:true,
                    // /for validation


      showBankNames: [],
      showBankAccounts: [],
      showBankTypeDatas: [],
      paymentTypeLists: [],
      cashInformationStatus: 0,
      bankInformationStatus: 0,
      bankInformationAccountInfoStatus: 0,

      assetBrandLists: {},
      assetSupplierLists: {},
      assetCodeEntryLists: {},
      shopAssetEntryLists: {},

      subShow: false,
      thirdShow: false,
      fourShow: false,
      fiveShow: false,
      sixShow: false,
      sevenShow: false,
      invalid: false,

      previousPayableBill: false,
      totalProductCostShow: false,
      totalDepreciationShow: false,

      assetCategoryLists: {},
      assetSubCategorySelectLists: {},
      assetThirdCategorySelectLists: {},
      assetFourCategorySelectLists: {},
      assetFiveCategorySelectLists: {},
      assetSixCategorySelectLists: {},
      assetSevenCategorySelectLists: {},

      shopAssetPrices: {},
      loading: false,
      error:false,
    };
  },
  components: {
    VueEditor,
    Multiselect,
  },
  props: {
    limit: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    // subtotal() {
    //   let sum = 0;
    //   _.forEach(this.shopAssetPrices, (shopAssetPrice) => {
    //     sum += parseFloat(shopAssetPrice.totalProductCost);
    //   });
    //   return sum;
    // },
  },
  mounted() {
    this.assetEntryList();
    this.getPaginateList();
    this.brandAndCodeList();
    this.assetCategoryListSelect();
    this.bankTypeList();
    this.paymentTypeList();
    this.allAssetList();
    this.autoIncrementCode();
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
            this.form.assetBrandName='';
          }
          this.brandAndCodeList();
          $("#newBrand").modal("hide");
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
      axios.get("/addAssetSupplier/create").then((res) => {
        this.form.assetSupplierCode = res.data.autoIncrementCode;
      });
    },
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
          this.brandAndCodeList();
          $("#supplier").modal("hide");
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
    },
      addAssetCode() {
      this.loading = true;
      this.form
        .post("/assetCodeEntry")
        .then((res) => {
          this.loading = false;
          if (res.data.changeName==1) {
            Toast.fire({
              icon: "error",
              title: "Change Product Name ",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Asset Code Entry Successfully",
            });
            this.subShow = false;
            this.thirdShow = false;
            this.fourShow = false;
            this.fiveShow = false;
            this.sixShow = false;
            this.sevenShow = false;
            this.form.reset();
            this.allAssetList();
            $("#newProduct").modal("hide");
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

    assetSelect(value){
      //alert(value.assetCodeEntryId);
      axios.get("/viewAllProductById/"+value.assetCodeEntryId).then((res) => {
        this.form.assetProductId = value.assetCodeEntryId;
        this.form.assetCategoryId = res.data.assetCategoryId;
        this.form.assetCategoryLevel = res.data.assetCategoryLevel;
      });
        
    },

    allAssetList(){
      axios.get("/viewAllProduct").then((res) => {
        this.assetCodeEntryLists = res.data.assetCodeEntryLists;
      });
    },
      calculate_available_balance(e,type){

              this.insufficent_cash_balance_text_status = false;
              this.insufficent_bank_balance_text_status = false;
              this.insufficent_button = false;
              this.submit_button = true;
              
              // ------------- cash condition
              if(type==1){
              if(this.form.cashAmount>e){
                this.insufficent_cash_balance_text_status = true;
                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              // ------------- cash condition
              
              // ------------- Bank condition
              if(type==2){
              if(this.form.bankAmount>e){
                this.insufficent_bank_balance_text_status = true;
                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              // ------------- /Bank condition
            },



    checkData() {
      this.form.checkDepreciation = 1;
      this.totalDepreciationShow = true;
      if (
        this.form.depreciationYear != "" &&
        this.form.depreciationMonth != "" &&
        this.form.depreciationDay != ""
      ) {
        let depreciationYear = this.form.depreciationYear * 12 * 30;
        let depreciationMonth = this.form.depreciationMonth * 30;
        let depreciationDay = this.form.depreciationDay * 1;

        let totalDay =
          parseFloat(depreciationYear) +
          parseFloat(depreciationMonth) +
          parseFloat(depreciationDay);
        if (this.form.productCost == "") {
          alert("Please Enter Your Total Product Cost");
          this.form.depreciationYear = [];
          this.form.depreciationMonth = [];
          this.form.depreciationDay = [];
          this.form.totalDepreciation = [];
          this.totalDepreciationShow = false;
        } else {
          let totalDevision =
            parseFloat(this.form.productCost) / parseFloat(totalDay);
          this.form.totalDepreciation = totalDevision.toFixed(3);
        }
      } else if (
        this.form.depreciationYear != "" &&
        this.form.depreciationMonth != ""
      ) {
        let depreciationYear = this.form.depreciationYear * 12 * 30;
        let depreciationMonth = this.form.depreciationMonth * 30;

        let totalDay =
          parseFloat(depreciationYear) + parseFloat(depreciationMonth);
        if (this.form.productCost == "") {
          alert("Please Enter Your Total Product Cost");
          this.form.depreciationYear = [];
          this.form.depreciationMonth = [];
          this.form.totalDepreciation = [];
          this.totalDepreciationShow = false;
        } else {
          let totalDevision =
            parseFloat(this.form.productCost) / parseFloat(totalDay);
          this.form.totalDepreciation = totalDevision.toFixed(3);
        }
      } else if (
        this.form.depreciationYear != "" &&
        this.form.depreciationDay != ""
      ) {
        let depreciationYear = this.form.depreciationYear * 12 * 30;
        let depreciationDay = this.form.depreciationDay * 1;

        let totalDay =
          parseFloat(depreciationYear) + parseFloat(depreciationDay);
        if (this.form.productCost == "") {
          alert("Please Enter Your Total Product Cost");
          this.form.depreciationYear = [];
          this.form.depreciationDay = [];
          this.form.totalDepreciation = [];
          this.totalDepreciationShow = false;
        } else {
          let totalDevision =
            parseFloat(this.form.productCost) / parseFloat(totalDay);
          this.form.totalDepreciation = totalDevision.toFixed(3);
        }
      } else if (
        this.form.depreciationMonth != "" &&
        this.form.depreciationDay != ""
      ) {
        let depreciationMonth = this.form.depreciationMonth * 30;
        let depreciationDay = this.form.depreciationDay * 1;

        let totalDay =
          parseFloat(depreciationMonth) + parseFloat(depreciationDay);
        if (this.form.productCost == "") {
          alert("Please Enter Your Total Product Cost");
          this.form.depreciationYear = [];
          this.form.depreciationDay = [];
          this.form.totalDepreciation = [];
          this.totalDepreciationShow = false;
        } else {
          let totalDevision =
            parseFloat(this.form.productCost) / parseFloat(totalDay);
          this.form.totalDepreciation = totalDevision.toFixed(3);
        }
      } else if (this.form.depreciationYear) {
        if (this.form.productCost == "") {
          alert("Please Enter Your Total Product Cost");
          this.form.depreciationYear = [];
          this.form.totalDepreciation = [];
          this.totalDepreciationShow = false;
        } else {
          let depreciationYear = this.form.depreciationYear * 12 * 30;
          let totalDevision =
            parseFloat(this.form.productCost) / parseFloat(depreciationYear);
          this.form.totalDepreciation = totalDevision.toFixed(3);
        }
      } else if (this.form.depreciationMonth) {
        if (this.form.productCost == "") {
          alert("Please Enter Your Total Product Cost");
          this.form.depreciationMonth = [];
          this.form.totalDepreciation = [];
          this.totalDepreciationShow = false;
        } else {
          let depreciationMonth = this.form.depreciationMonth * 30;
          let totalDevision =
            parseFloat(this.form.productCost) / parseFloat(depreciationMonth);
          this.form.totalDepreciation = totalDevision.toFixed(3);
        }
      } else if (this.form.depreciationDay) {
        if (this.form.productCost == "") {
          alert("Please Enter Your Total Product Cost");
          this.form.depreciationDay = [];
          this.form.totalDepreciation = [];
          this.totalDepreciationShow = false;
        } else {
          let depreciationDay = this.form.depreciationDay * 1;
          let totalDevision =
            parseFloat(this.form.productCost) / parseFloat(depreciationDay);
          this.form.totalDepreciation = totalDevision.toFixed(3);
        }
      }
    },
     
    totalProductCostCal() {
      // supplier last balance

      // axios.get('/shopAssetSupplierLastBalance/'+this.form.assetSupplierId).then(res =>{
      //         this.form.currentPayable = res.data.lastBalance
      // })

      // supplier  last balance

      this.totalProductCostShow = true;
      if (this.form.productQuantity == "") {
        alert("Please Enter Product Quantity");
        this.form.productCost = [];
        this.totalProductCostShow = false;
      } else {
        let totalProductCost =
          parseFloat(this.form.productQuantity) *
          parseFloat(this.form.productCost);
        this.form.totalProductCost = totalProductCost;
        this.form.currentPayable =
          totalProductCost + this.form.previousPayableDue;
      }

      if(this.form.productCost>0){
        this.invalid = false;
      }
      else{
        this.invalid = true;
        this.form.productCost = '';
        this.form.totalProductCost='';
        this.form.currentPayable = this.form.previousPayableDue;
      }
    },
    addAsset() {
   
        this.loading = true;
        this.form
          .post("/shopAssetEntry")
          .then((res) => {
            this.loading = false;
            if (res.data.owed) {
              Toast.fire({
                icon: "error",
                title: res.data.owed,
              });
            } else {
              Toast.fire({
                icon: "success",
                title: "Asset Entry Successfully",
              });
              this.form.reset();
              this.assetEntryList();
              this.previousPayableBill = false;
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
    assetSupplierIdCatch() {
      this.previousPayableBill = false;
      axios
        .get("/shopAssetSupplierLastBalance/" + this.form.assetSupplierId)
        .then((res) => {
          if (res.data.lastBalance) {
            this.previousPayableBill = true;
            this.form.previousPayableDue = res.data.lastBalance;
          }

          if (res.data.paidPayableBill) {
            this.previousPayableBill = false;
          }
        });
    },
    brandAndCodeList() {
      axios.get("/shopAssetEntry/create").then((res) => {
        this.assetBrandLists = res.data.assetBrandLists;
        this.assetSupplierLists = res.data.assetSupplierLists;
      });
    },
    assetEntryList() {
      axios.get("/shopAssetEntry").then((res) => {
        this.shopAssetEntryLists = res.data.shopAssetEntryLists;
        this.shopAssetPrices = res.data.shopAssetPrices;
      });
    },
    getPaginateList(page = 1) {
      axios.get("/shopAssetEntry?page=" + page).then((response) => {
        this.shopAssetEntryLists = response.data.shopAssetEntryLists;
      });
    },
    assetCategoryListSelect() {
      axios.get("/assetCateorySelectList").then((res) => {
        this.assetCategoryLists = res.data.shopAssetCategoryList;
      });
    },
    assetCategorySelect() {
      axios.get("/assetCategoryId/" + this.form.assetCategory).then((res) => {
        this.assetSubCategorySelectLists = res.data.assetSubCategoryList;

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
  axios.get("/viewProduct/"+this.form.assetSubCategory).then((res) => {
     
        this.assetCodeEntryLists = res.data.assetCodeEntryLists;
      });
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
  axios.get("/viewProduct/"+this.form.assetThirdCategory).then((res) => {
     
        this.assetCodeEntryLists = res.data.assetCodeEntryLists;
      });
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
  axios.get("/viewProduct/"+this.form.assetFourCategory).then((res) => {
     
        this.assetCodeEntryLists = res.data.assetCodeEntryLists;
      });
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
          this.assetSixCategorySelectLists = res.data.assetFiveCategoryList;
  axios.get("/viewProduct/"+this.form.assetCategory).then((res) => {
     
        this.assetCodeEntryLists = res.data.assetCodeEntryLists;
      });
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
            axios.get("/viewProduct/"+this.form.assetSixCategory).then((res) => {
     
        this.assetCodeEntryLists = res.data.assetCodeEntryLists;
      });
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
        .then((res) => {});
    },

    // payment option function
    calculateAmount(id) {
      if (id == 1) {
      
        this.form.dueAmount = this.form.currentPayable - this.form.cashAmount;
        if( this.form.dueAmount <0){
          this.form.cashAmount=this.form.currentPayable ;
          this.form.dueAmount = 0;
          this.error=true;
        }

        if(this.form.cashAmount>0){

        }else{
          this.form.cashAmount = '';
          this.form.dueAmount = this.form.currentPayable;
        }

      } else {
        this.form.dueAmount = this.form.currentPayable - this.form.bankAmount;
         if( this.form.dueAmount <0){
          this.form.bankAmount=this.form.currentPayable ;
          this.form.dueAmount = 0;
          this.error=true;

        }

        if(this.form.bankAmount>0){
          
        }else{
          this.form.bankAmount = '';
          this.form.dueAmount = this.form.currentPayable;
        }
      }
      this.calculate_available_balance_from_amount(id);
    },

    paymentTypeList() {
      axios.get("/paymentTypeList").then((res) => {
        this.paymentTypeLists = res.data.data;
      });
    },

    bankTypeList() {
      axios.get("/bankTypeEntryList").then((res) => {
        this.showBankTypeDatas = res.data.show;
      });
    },

    bankTypeIdCatch() {
      axios.get("/bankNameList/" + this.form.bankTypeEntryId)
      .then((res) => {
        this.showBankNames = res.data.show;
      });
    },
    bankAccountIdCatch() {
      axios.get("/bankAccountListWithCard/" + this.form.bankEntryId+'/'+this.form.bankTypeEntryId).then((res) => {
        this.showBankAccounts = res.data.data;
      });
    },
    getBankMoreInfo() {
      axios
        .get("/bankAccountMoreInfo/" + this.form.bankAccountId)
        .then((res) => {
          this.bankInformationAccountInfoStatus = 1;
          this.form.branchName = res.data.data.bankBranch;
          this.form.accNo = res.data.data.bankAccountNumber;

                    //======================== check balance 
                     
                          let url = "checkBalance/"+res.data.data.accountCode;
                          axios.get(url)
                            .then((response) => {
                              this.available_balance_status = true;
                              this.available_balance_text = response.data.available_balance;
                              this.form.available_balance = response.data.available_balance;
                              this.calculate_available_balance(response.data.available_balance,2); // bank
                            });



                            // ---------------
                              if(this.form.bankAmount>this.form.available_balance)
                              {
                                // this.insufficent_balance_text_status=true
                                this.insufficent_bank_balance_text_status=false
                                this.submit_button_status = true;
                                this.available_button_status = false;
                              }
                              else
                              {
                                this.insufficent_bank_balance_text_status=false
                              }
                            // ---------------

                     
                    //======================== /check balance 


        });
    },
    
    paymentReceiveType() {

              this.insufficent_cash_balance_text_status=false;
              this.insufficent_bank_balance_text_status=false;
              this.available_balance_cash_status = false;


      if (this.form.paymentType == 2){



        this.bankInformationStatus = 1;
        this.cashInformationStatus = 0;
        this.form.cashAmount = 0;
        this.form.bankAmount ='';
        this.form.dueAmount = this.form.currentPayable;

        this.form.cashAmount = '';
        this.form.bankAmount = '';
        this.insufficent_button=false;
        this.submit_button = true;

      }
      else if (this.form.paymentType == 1) {

       

         //======================== check balance 
                   
                   axios.get('/getCashRegister/1').then(res => {
                     
                          let url = "checkBalance/"+res.data.accCode;
                          axios.get(url)
                            .then((response) => {
                              this.available_balance_cash_status = true;
                              this.form.available_balance = response.data.available_balance;
                            
                              this.calculate_available_balance(response.data.available_balance,1); // cash
                            });

                            });
                   
                  //======================== check balance 

        this.cashInformationStatus = 1;
        this.bankInformationStatus = 0;
        this.form.bankAmount = '';
        this.form.cashAmount = '';
        this.form.dueAmount = this.form.currentPayable;

        this.form.bankAmount = '';
      } else {

        this.insufficent_button=false;
        this.submit_button = true;

        this.cashInformationStatus = 0;
        this.bankInformationStatus = 0;
        this.form.cashAmount = 0;
        this.form.bankAmount = 0;
        this.form.dueAmount = this.form.currentPayable;
      }
    },
    // payment option function

    calculate_available_balance_from_amount(type){

              this.insufficent_cash_balance_text_status = false;
              this.insufficent_bank_balance_text_status = false;
              this.insufficent_button = false;
              this.submit_button = true;
              this.error = false;
              
              // ------------- cash condition
              if(type==1){
              if(this.form.cashAmount>this.form.available_balance){
                
                this.insufficent_cash_balance_text_status = true;
                this.insufficent_bank_balance_text_status = false;

                this.insufficent_button = true;
                this.submit_button = false;
                this.error = true;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
                this.error = false;
              }
              }
              
              // ------------- cash condition
              
              // ------------- bank condition
              if(type==2){
              if(this.form.bankAmount>this.form.available_balance){
                
                
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = true;
                

                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              
              // ------------- /bank condition
            },

  },



            


};
</script>
