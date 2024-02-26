<template id="">
  <span>
    <div class="card main-card element-block-example">
      
                  <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Purchase Return Approved </h4>
        </div>
      </div>
      
      
      <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
           
          <thead>
            <tr>
              <th>SN</th>
              <th>Supplier.Name</th>
              <th>Return.Date</th>
              <th>Invoice.No</th> 
              <th>Return Amount</th>
             
              <th>Discount</th>
              <th>Supplier.Payable</th>
            
              <th>Total.Return</th>
              <th>Previous.Due</th>
              <th>Current.Payable</th>
              <th> Collection </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                purchaseInvoiceReport, index
              ) in purchaseInvoiceReports.data"
            >
              <td>{{ index + 1 }}</td>
              <td>
               <span v-if=" purchaseInvoiceReport.product_supplier_name"> {{
                  purchaseInvoiceReport.product_supplier_name
                    .productSupplierName
                }}</span>
              </td>
              <td>{{ purchaseInvoiceReport.returnDate }}</td>
              <td>
                <button
                  type="button"
                  class="mr-2 btn-hover-shine btn btn-shadow btn-primary"
                  data-toggle="modal"
                  @click.prevent="viewInvoiceInfo(purchaseInvoiceReport.id)"
                  :data-target="
                    '#purchaseId'
                  ">
                  {{ purchaseInvoiceReport.returnInvoiceNo }}
                </button>
              </td>
             
              <td>{{ purchaseInvoiceReport.totalPurchaseValue }}</td>
             
              <td>
                <span v-if="purchaseInvoiceReport.discount">
                  {{ purchaseInvoiceReport.discount }}
                </span>
                <span v-else>---</span>
              </td>
              <td>{{ purchaseInvoiceReport.supplierPayable }}</td>
            
              <td>{{ purchaseInvoiceReport.totalProductCost }}</td>
              <td>
                <span v-if="purchaseInvoiceReport.previousPayableDue">{{
                  purchaseInvoiceReport.previousPayableDue
                }}</span>
                <span v-else>---</span>
              </td>
              <td>{{ purchaseInvoiceReport.currentPayable }}</td>
              <td>

                <button type="button" style="display:none;"
               v-bind:id="'btnd-'+purchaseInvoiceReport.id"
               class="btn btn-danger"> Collection </button>
<!--  -->
                <button type="button" 
               v-bind:id="'btn-'+purchaseInvoiceReport.id"
               class="btn btn-primary" data-toggle="modal"
                        :data-target="'#pay'"
               @click="setupInvoiceAmount(purchaseInvoiceReport.productSupplierId)"
                > Collection </button>
                </td>
<!-- @click="returnInvoiceApprove(purchaseInvoiceReport.id)" -->







              <!-- Modal -->
              <div
                class="modal fade"
                :id="'purchaseId'"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog  modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header bg-primary text-light">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                       Purchase Invoice
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
                      
                        <div class="card-body p-0">
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

                          <div id="invoice" style="padding-left: 0px !important;padding-right: 0px !important;padding-top: 0px !important;">
                            <div class="invoice overflow-auto">
                              <div style="min-width: 600px">
                                <header
                                  :style="
                                    'border-bottom-color:' + gets.themeColor
                                  "
                                  style="margin-bottom: 5px !important"
                                >
                                  <div class="row" v-if="gets.logo">
                                    <div class="col">
                                      <a target="_blank" href="#">
                                        <img
                                          :src="
                                            'images/invoice_logo/' + gets.logo
                                          "
                                          style="
                                            max-height: 105px;
                                            max-width: 100%;
                                          "
                                        />
                                      </a>
                                    </div>
                                    <div class="col company-details">
                                      <!-- <h2 class="name">
                            <a target="_blank" href="#">
                            
                            </a>
                        </h2> -->

                                      <div>{{ gets.address }}</div>
                                      <div>{{ gets.mobileNo }}</div>
                                      <div>{{ gets.email }}</div>
                                      <div>{{ gets.website }}</div>
                                    </div>
                                  </div>

                                  <div class="row" v-else>
                                    <div class="col text-center">
                                      <h3 class="text-uppercase">
                                        <b> {{ gets.companyName }} </b>
                                      </h3>
                                      <div>{{ gets.address }}</div>
                                      <div>{{ gets.mobileNo }}</div>
                                      <div>{{ gets.email }}</div>
                                      <div>{{ gets.website }}</div>
                                    </div>
                                  </div>
                                </header>
                                <main>
                                  <div class="row contacts">
                                    <div class="col invoice-to">
                                      <div class="text-gray-light">
                                        <u> <b> Supplier Information :</b> </u>
                                      </div>
                                      <div class="address">
                                        {{ supplierInfo.productSupplierName }}
                                      </div>
                                      <div class="address">
                                        {{
                                          supplierInfo.productSupplierAddress
                                        }}
                                      </div>
                                      <div class="email">
                                        <a
                                          :href="
                                            'mailto:' +
                                            supplierInfo.productSupplierMail
                                          "
                                          :style="'color:' + gets.themeColor"
                                        >
                                          {{
                                            supplierInfo.productSupplierMail
                                          }}</a
                                        >
                                      </div>
                                    </div>
                                    <div class="col invoice-details">
                                      <h5
                                        class="text-center invoice-id"
                                        :style="'color:' + gets.themeColor"
                                      >
                                        <u> Purchase Return Invoice </u>
                                      </h5>
                                    </div>
                                    <div class="col invoice-details">
                                      <div class="date">
                                        Return Invoice No :
                                        {{ invoiceInfo.returnInvoiceNo }}
                                      </div>
                                      <div class="date">
                                        Return Date:
                                        {{ invoiceInfo.returnDate }}
                                      </div>
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
                                        <th class="text-left">Name</th>
                                        <th class="text-left"> Brand</th>
                                        <th class="text-left"> Type</th>
                                        <th class="text-left">UNIT</th>
                                        <th class="text-left">Color/Size</th>
                                        <th class="text-right">Quantity</th>
                                        <th class="text-right">UNIT PRICE</th>
                                        <th class="text-right">TOTAL PRICE</th>
                                        <th class="text-right">OFF</th>
                                        <th class="text-right">TOTAL</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr
                                        v-for="(
                                          invoiceProductList, index
                                        ) in invoiceProductLists"
                                      >
                                        <td>{{ ++index }}</td>
                                        <td class="text-left">
                                          <span
                                            v-for="purchaseProductLists in purchaseProductList"
                                            v-if="
                                              purchaseProductLists.productNameId ==
                                              invoiceProductList.productId
                                            "
                                          >
                                            {{
                                              purchaseProductLists.productName
                                            }}
                                          </span>
                                        </td>

                                        <td>
                                          <span v-for="allProductBrandList in allProductBrandLists"
                                          v-if="allProductBrandList.productBrandEntryId==invoiceProductList.brandId">
                                              {{allProductBrandList.productBrandName}}
                                          </span>
                                            
                                        </td>
                                        <td>
                                          <span
                                            v-for="purchaseType in purchaseTypes"
                                            :key="purchaseType.id"
                                            v-if="
                                              purchaseType.id ==
                                              invoiceProductList.purchaseType
                                            "
                                          >
                                            {{ purchaseType.purchaseType }}
                                          </span>

                                          <span
                                            v-for="countryList in countryLists"
                                            :key="countryList.id"
                                            v-if="
                                              countryList.id ==
                                              invoiceProductList.countryId
                                            "
                                          >
                                            <br />
                                            ({{ countryList.name }})
                                          </span>
                                        </td>

                                        <td>
                                          <span
                                            v-for="unitList in unitLists"
                                            :key="unitList.uniteEntryId"
                                            v-if="
                                              unitList.uniteEntryId ==
                                              invoiceProductList.unitId
                                            "
                                          >
                                            {{ unitList.uniteEntryName }}
                                          </span>
                                        </td>
                                        <td>
                                            <span
                                            v-for="colorList in colorLists"
                                            v-if="colorList.id==invoiceProductList.colorId">{{
                                              colorList.colorName
                                            }}</span>
                                            
                                            <span
                                            v-for="sizeList in sizeLists"
                                            v-if="sizeList.id==invoiceProductList.sizeId">/ {{
                                              sizeList.sizeName
                                            }}</span>
                                          </td>

                                        <td class="">
                                          {{ invoiceProductList.quantity }}
                                        </td>
                                        <td class="">
                                          {{ invoiceProductList.unitPrice }}
                                        </td>

                                        <td class="">
                                          {{ invoiceProductList.totalPrice }}
                                        </td>
                                        <td class=""> {{ invoiceProductList.discount }}% </td>
                                        <td class=""> {{ invoiceProductList.totalWithDiscount }} </td>
                                      </tr>
                                    </tbody>
                                    <tr>
                                      <td
                                        colspan="10"
                                        class="text-right border-0"
                                      >
                                        <b> Grand Total : </b>
                                      </td>
                                      <td class="border-0">
                                        <b>
                                         
                                          {{
                                            invoiceInfo.totalPurchaseValue
                                          }}</b
                                        >
                                      </td>
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
                                            <td class="bg-light">
                                              {{ invoiceInfo.discount }}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="text-right">
                                              Supplier Payable
                                            </td>
                                            <td class="bg-light">
                                              {{ invoiceInfo.supplierPayable }}
                                            </td>
                                          </tr>

                                          <tr>
                                            <td class="text-right">
                                              Total Product Cost
                                            </td>
                                            <td>
                                              {{ invoiceInfo.totalProductCost }}
                                            </td>
                                          </tr>
                                          <tr></tr>
                                          <tr>
                                            <td class="text-right">
                                              Current Payable
                                            </td>
                                            <td class="bg-light">
                                              {{ invoiceInfo.currentPayable }}
                                            </td>
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
                                          &nbsp; &nbsp; &nbsp; Supplier Sign
                                          &nbsp; &nbsp; &nbsp;</span
                                        >
                                      </center>
                                    </div>
                                    <div class="col"></div>
                                    <div class="col">
                                      <center>
                                        <span style="text-decoration: overline">
                                          &nbsp; &nbsp; &nbsp; Authorize Sign
                                          &nbsp; &nbsp; &nbsp;
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




        <!--============================Payment Modal -->
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
                      <h5 class="modal-title" id="exampleModalLongTitle"> Pay Now </h5>

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
                                type="number"
                                step="0.01"
                                min="0.01"
                                v-model="form.currentPaidAmount"
                                @keyup="totalCalculate"
                                @change="totalCalculate"
                                class="form-control noscroll"
                                placeholder="Cash Amount"
                              />
                              
                              <span style="color: red" v-if="negative == true"
                                >Negative Ammount Not Allowed</span
                              >
                            </div>
                          </div>
                          <div class="form-group m-0 row mt-2">
                            <div class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0">
                              <label> Due: </label>
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
                            
                            <button v-if="morepay==false" class="btn btn-info" @click.prevent="open()" ><i class="fa fa-plus" aria-hidden="true"></i> More pay </button>
                            <button v-if="close==true" class="btn btn-danger" @click.prevent="closeForm()" ><i class="fa fa-minus" aria-hidden="true"></i>
                            Close </button>
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
                                    type="number"
                                    oninput="validity.valid||(value='0');"
                                    v-model="form.mobileAmount"
                                    @keyup="mobileAmountCalculate"
                                    class="form-control noscroll"
                                    placeholder="Bank Amount"
                                  />
                                  <span
                                    style="color: red"
                                    v-if="negative == true"
                                    >Negative Amount Not Allowed</span
                                  >
                                </div>
                              </div>
                              <div class="form-group m-0 row mt-2">
                                <div
                                  class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0"
                                >
                                  <label>Due </label>
                                </div>
                                <div
                                  class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0"
                                >
                                
                                  <input
                                    type="text"
                                    disabled
                                    v-model="form.currentDue"
                                    class="form-control"
                                    placeholder="Due"
                                  />
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

                      <!-- <input type="text" v-model="form.id"> -->
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



<!-- ================================= / payment modal -->

      </div>
      </div>
      <span class="card_footer">
        <pagination
          :data="purchaseInvoiceReports"
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

        currentPayable:'',
        currentPaidAmount:'',
        currentDue:'',
        receiverbankTypeEntryId:'',
        receiverBankName:'',
        receiverAcNo:'',
        receiverAcName:'',
        receiverBranchName:'',
        receiverBankName:'',
        receiverAcNo:'',
        receiverAcName:'',
        receiverMobileAcNo:'',
        receiverTrxNo:'',
        senderbankTypeEntryId:'',
        senderbankEntryId:'',
        senderbankAccountId:'',
        senderbranchName:'',
        senderAccNo:'',
        bankAmount:'',

        returnInvoiceId:'',

      }),



      purchaseInvoiceReports: {},
      gets: "",
      invoiceInfo: "",
      allProductBrandLists: [],
      invoiceProductLists: [],
      purchaseProductList: [],
      productBrandLists: [], 
      purchaseTypes: [],
      unitLists: [],
      countryLists: [],
      supplierInfo: "",
      colorLists: {},
      sizeLists: {},
      


      // ----------------- payment 
         
        paynow: true,
      paynow1: false,
      negative: false,
      invalid: false,
      avil: false,
      fromshow: false,
      guestInfo: true,
      //bank Inf0

      pendingCount: "",
      totalcal: '',
      paymentTypeLists: {},
      showBankNames: [],
      showBankAccounts: [],
      showBankTypeDatas: [],
      bankInformationAccountInfoStatus: [],
      mobileAccount: false,
      bankAccount: false,
       morepay:false,
      close:false,

      // ----------------- /payment 
    };
  },
  props: {
    limit: {
      type: Number,
      default: 2,
    },
  },
  mounted() {
    this.productSupplierList();
    this.getPaginateList();
      this.colorList();
    this.sizeList();
    this.getInvoiceSetupInformation();
    this.productBrandList();
    this.getBankList();

  },
  methods: {

    getBankList(){
        axios.get("/bankTypeEntryList").then((res) => {
        this.showBankTypeDatas = res.data.show;
      })
},
    // ======================================================
    // =========================== payment system ===========
    // ======================================================
 
    
         salesInvoiceEntry() {

             this.paynow1 = false;

        $('#btnd-'+this.form.id).show();
        $('#btn-'+this.form.id).hide();

          //  salesDueCollection
      
        this.form.post("/purchaseReturnBillReceive", {
            id: this.form.id,
            currentDue: this.form.currentDue,
            previousDue: this.form.previousDue,
            mobileAmount: this.form.mobileAmount,
               salesCustomerId: this.form.salesCustomerEntryId,
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
          
          })
          .then((res) => {
            Toast.fire({
              icon: "success",
              title: "Purchase Invoice Entry Successfully",
            });
               $("#pay").modal("hide");
               this.productSupplierList();
            this.form.reset();
            this.guestInfo = true;
            $("#total").html("");
            $("#blanceDue").text("");
         
          })
          .catch((error) => {
              this.paynow1=true;
            Toast.fire({
              icon: "error",
              title: "Something Wrong",
            });
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

    getBankMoreInfo() {
      axios
        .get("/bankAccountMoreInfo/" + this.form.receiverbankAccountId)
        .then((res) => {
          this.form.receiverbranchName = res.data.data.bankBranch;
          this.form.receiverAccNo = res.data.data.bankAccountNumber;
          this.bankInformationAccountInfoStatus = 1;
        });
    },
      totalCalculate() {

       if(this.form.currentPaidAmount>this.form.currentTotalAmount){
       
        this.form.currentPaidAmount = this.form.currentTotalAmount-this.form.mobileAmount;
        this.negative = true;

      }else{
      
      if (this.form.mobileAmount == "") {
        this.totalcal = 0 + parseFloat(this.form.currentPaidAmount);
      } 
      else {
        
        this.totalcal = parseFloat(this.form.currentPaidAmount) + parseFloat(this.form.mobileAmount);
        
        if(this.totalcal>this.form.currentTotalAmount){
          this.totalcal = this.form.currentTotalAmount;
          this.form.currentPaidAmount = parseFloat(this.form.currentTotalAmount) - parseFloat(this.form.mobileAmount);
        }
        
      }
      
      if (this.form.currentPaidAmount == "") {
        this.totalcal = parseFloat(this.form.mobileAmount) + 0;
      }
      
      
      if (this.form.currentPaidAmount < 0) {
        this.form.currentPaidAmount = parseFloat(this.form.currentTotalAmount)-parseFloat(this.form.mobileAmount);
        // alert('ss');
        this.negative = true;
      } else {
        
        if (this.form.currentPaidAmount<=0) {
          this.form.currentPaidAmount = parseFloat(this.form.currentTotalAmount)-parseFloat(this.form.mobileAmount);
          this.negative = true;
          // alert('mm');

        }
        if (this.form.currentPaidAmount>this.form.currentTotalAmount) {
          this.form.currentPaidAmount = this.form.currentTotalAmount;
          this.form.currentDue = 0;
          // this.negative = true;
          // alert('mm');

        }
         else {
          this.negative = false;
          if (this.form.currentPaidAmount > this.form.currentTotalAmount) {
            this.negative = true;
            this.form.currentPaidAmount = this.form.currentTotalAmount;
            this.form.currentDue =
              this.form.currentTotalAmount - this.form.currentPaidAmount;
            
          } else {
            this.negative = false;
          }

           
          if ((this.form.customerTypeId == 1) & (this.form.currentDue > 0)) {
            //this.paynow1 = false;
          } else {
            //this.paynow1 = true;
          }
        }

         
        this.form.currentDue = this.form.currentTotalAmount - this.form.currentPaidAmount;
        if(this.form.currentPaidAmount==''){
          this.form.currentDue = this.form.currentTotalAmount;
        }

        if(this.form.currentDue==0)
        {
          this.paynow1 = true;
        }
        else{
          this.paynow1 = false;
        }
      }
      }

      if(this.form.currentPaidAmount>0){
          this.paynow1 = true;
      }
      else{
          this.paynow1 = false;
      }

    },
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
            
          } else {
            this.negative = false;
          }

         
          if ((this.form.customerTypeId == 1) & (this.form.currentDue > 0)) {
            //this.paynow1 = false;
          } else {
            //this.paynow1 = true;
          }
        }
      }
    },
    open(){
this.morepay=true;
this.close=true;
},
   
closeForm(){
this.morepay=false;
this.close=false;
},

 
    // ======================================================
    // =========================== // payment system ========
    // ======================================================


setupInvoiceAmount(e){
        this.form.returnInvoiceId = e;
        axios.get("/purchaseReturnSupplierDue/"+e).then((res) => {
            this.form.currentTotalAmount = Math.abs(res.data.supplierDue);
            this.form.currentDue = Math.abs(res.data.supplierDue);
        });
},

      returnInvoiceApprove(e){
        
        $('#btnd-'+e).show();
        $('#btn-'+e).hide();

        this.form.post("/purchaseReturnBillReceive", {
            id: this.form.returnInvoiceId,
            currentDue: this.form.currentDue,
            previousDue: this.form.previousDue,
            mobileAmount: this.form.mobileAmount,
            salesCustomerId: this.form.salesCustomerEntryId,
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
          
          }).then((res) => {
            Toast.fire({
                    icon: "success",
                    title: "Return Invoice Approve Successful.",
                  });
                    
                  this.productSupplierList();
        });
      },
    colorList(){
      axios.get("/colorListAll").then((res) => {
        this.colorLists = res.data.colorList;
      });
    },
    sizeList(){
      axios.get("/sizeListAll").then((res) => {
        this.sizeLists = res.data.sizeList;
      });
    },
    productSupplierList() {
      axios.get("/purchaseApprovedReturnInvoice").then((res) => {
        this.purchaseInvoiceReports = res.data.purchaseInvoiceReports;
      });
    },
        productBrandList() {
      axios.get("/productBrandList").then((res) => {
        this.allProductBrandLists = res.data.productBrandList;
      });
    },

    getPaginateList(page = 1) {
      axios.get("/purchaseApprovedReturnInvoice?page=" + page).then((response) => {
        this.purchaseInvoiceReports = response.data.purchaseInvoiceReports;
      });
    },
    getInvoiceSetupInformation() {
      let uri = `getInvoiceSetupInformation/2`;
      axios.get(uri).then((response) => {
        this.gets = response.data.data;
      });
    },

    viewInvoiceInfo(id) {
      let uri = 'purchaseReturnInvoiceInfo/'+id;
      axios.get(uri).then((response) => {
        this.unitLists = response.data.unitList;
        this.countryLists = response.data.countryList;
        this.purchaseTypes = response.data.purchaseType;
        this.productBrandLists = response.data.productBrandList;
        this.supplier_id = response.data.data.productSupplierId;
        this.invoiceInfo = response.data.data;
        this.invoiceProductLists = response.data.invoiceProductLists;
        if(response.data.supplierInfo){
        this.supplierInfo = response.data.supplierInfo;
        }
        this.purchaseProductList = response.data.purchaseProductList;
      });
    },
  },
};
</script>
