<template id="">
  <span>

  



    <div class="card">
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Sales Order view </h4>
      </div>

      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
            <thead>
            <tr>
                <td colspan="12" class="text-center"> 
                  <center>
                    <form method="" @submit.prevent="changeData()">
                      <table class="">
                        <tr>
                          <th> Date </th>
                          <th> Supplier </th>
                          <th> Customer </th>
                          
                          </tr>

                          <tr>
                          <td> {{moment(requisitionInformation.OrderRequestDate).format("YYYY-MM-DD")}} </td>
                          <td> <span v-if="requisitionInformation.supplier">{{requisitionInformation.supplier.productSupplierName}}</span> </td>
                          <td> <span v-if="requisitionInformation.customer">{{requisitionInformation.customer.customerName}}</span> </td>
                         
                        </tr>
                      </table>
                  </form>
                  </center> 
                   </td>
              </tr>
              </thead>
              </table>
 

            <table class="table table-bordered table-striped table-hover">
            <thead> 
              <tr>
                <th rowspan="2">SL</th>
                <th rowspan="2">Product Name</th>
                <th rowspan="2">T.P Rate</th>
                <th rowspan="2"> Carton or Cais </th>
                <th colspan="4" class="text-center"> Receive </th>
                <th colspan="3" class="text-center"> Return </th>
                <th rowspan="2"> Total Sale  </th> 
                <th rowspan="2"> Sales Price </th> 
              </tr>
              <tr>
                <th>Carton</th>
                <th>PCs</th>
                <th>T.Qnt</th>
                <th>T.Price</th>

                <th>Good</th>
                <th>Damaged</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="productNameList,index in productNameLists">
              <td>{{++index}}</td>
              <td>{{productNameList.productName}}  </td>
              <td> {{parseFloat(productNameList.tpRate).toFixed(2)}} </td>
              <td>{{productNameList.perCarton}}  {{productNameList.perCartonUnitName}}  </td>
              <td>{{productNameList.cartonRequest}} </td>
              <td>{{productNameList.pieceRequest}} </td>
              <td>{{productNameList.totalPieceRequest}}  {{productNameList.perCartonUnitName}} </td>
              <td>{{productNameList.totalPriceRequest}} Tk </td>
              <td>
              <input v-bind:id="'rendomNumber-'+productNameList.id" type="hidden" :value="productNameList.rendomNumber">
              <input v-bind:id="'id-'+productNameList.id" type="hidden" :value="productNameList.id">
              <input v-bind:id="'tpRate-'+productNameList.id" type="hidden" :value="productNameList.tpRate">
              <input v-bind:id="'purchaseRate-'+productNameList.id" type="hidden" :value="productNameList.purchaseRate">
              <input v-bind:id="'unit-'+productNameList.id" type="hidden" :value="productNameList.perCartonUnitName">
              <input v-bind:id="'reqQnt-'+productNameList.id" type="hidden" :value="productNameList.totalPieceRequest">
              <input v-bind:id="'reqPrice-'+productNameList.id" type="hidden" :value="productNameList.totalPriceRequest">
              
                <input v-bind:id="'carton-'+productNameList.id"
                onkeyup="value=value.replace(/[^0-9^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.')"
                @keyup="totalCalculate(productNameList.id)" @change="changeData()" type="text" class="form-control carton" style="width:100px;"> </td>
              <td> <input v-bind:id="'pcs-'+productNameList.id"
                onkeyup="value=value.replace(/[^0-9^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.')"
              @keyup="totalCalculate1(productNameList.id)" @change="changeData()" type="text" class="form-control pcs" style="width:100px;"> </td>
              <td>
                <span v-bind:id="'totalText-'+productNameList.id"></span>
                <input v-bind:id="'total-'+productNameList.id" type="hidden" class="form-control" style="width:100px;">
              </td>
              <td>
                <span v-bind:id="'totalSaleText-'+productNameList.id"></span>
                <input v-bind:id="'totalSale-'+productNameList.id" type="hidden" class="form-control" style="width:100px;">
              </td>
              <td>
                <span v-bind:id="'totalSalePriceText-'+productNameList.id"></span>
                <input v-bind:id="'totalSalePrice-'+productNameList.id" type="hidden" class="form-control" style="width:100px;">
                <input v-bind:id="'totalPurchasePrice-'+productNameList.id" type="hidden" class="form-control" style="width:100px;">
              </td>
              </tr>
            </tbody>
            
          </table>



         
            

        <div class="product-detail pb-4 alert-success mt-4" v-if="paymentOption">
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
                      <p> Gross Amount </p>
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
                        onkeyup="value=value.replace(/[^0-9^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.').replace(/^0+/, '')"
                        @keyup.prevent="calculateAllDiscount()"
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
                      <p>Pre.Due</p>
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
                      <input
                        type="text"
                        disabled
                        v-model="form.previousDue"
                        class="form-control"
                        placeholder="Previous Due"
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
                                @keyup="cashBankCalculate(1)"
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
                                    @keyup="cashBankCalculate(2)"
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
                              <!-- <span v-if="paynow == true">
                <span
                  v-if="guestInfo"
                  @click.prevent="salesInvoiceEntrySt()"
                  class="btn btn-warning float-right mt-3">
                  Pending
                </span>
                </span> -->
                               </div>
                            <div class="col-6 p-0">
                                <span v-if="paynow1 == false">
                          <button
                            type="button"
                            disabled
                            class="
                              mt-3
                              btn-pill btn-shadow 
                              fsize-1
                              btn btn-primary float-right
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
                            @click.prevent="orderSubmit()"
                            class="
                              mt-3
                              btn-pill btn-shadow 
                              fsize-1
                              btn btn-primary float-right
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
    </div>
 

  </span>
</template>


<script>
import Multiselect from "vue-multiselect";
import moment from 'moment';
export default {

  
  data() {
    return {
      
      productSupplierLists:[],
      newBrandLists: [],
      productNameLists: [],
      resultNotFound: false,
      customerStatus: 1,
      srStatus: 1,
      dsrStatus: 1,

      salesCustomerLists: [],
      requisitionInformation: [],

      srLists: [],
      dsrLists: [],

      moment: moment,
      loading:false,

 
      form: new Form({
                        id:'',
                        productSupplierId:'',
                        brandId:'',
                        productId:'',
                        customerTypeId:'',
                        customerId:'',
                        customerListId:'',
                        srListId:'',
                        srId:'',
                        dsrListId:'',
                        dsrId:'',
                        // --------------- table variable
                          rendomNumber: '',
                          t_id:'',
                          t_productId:'',
                          t_brandId:'',
                          t_tpRate:'',
                          t_purchaseRate:'',
                          t_unitId:'',
                          t_unit:'',
                          t_perPcsQuantity:'',
                          t_carton:'',
                          t_pcs:'',
                          t_returnQuantity:'',
                          t_saleQuantity:'',
                          t_totalPcs:'',
                          t_totalPrice:'',
                          t_totalPurchasePrice:'',
                        // --------------- /table variable
                        OrderRequestDate:  moment().format("YYYY-MM-DD"),



                        // ===================================
                        totalSalesAmount:'',
                        todayDue:'',
                        pevDueCollection:'',
                        totalCollection:'',
                        netCollection:'',

                        limitDueAmountShow: '~',
        limitDueAmount: 0.00,
        totalPrice: "",

        //  footer Form
        totalQuantity: "",
        totalBalance: "",
        discountPrice: "",
        totalVat: 0,
        totalVat1: 2,
        vatCalculate: "",
        totalPayable: "",
        previousDue: "",
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
      paymentOption: false,



       
    };
  },
    components: {
    Multiselect,
  },
  mounted(){
    this.getDataForShow();
    this.getSrDsrList();
    this.customerType();
    this.bankTypeList();
  },
  methods: {


calculateAllDiscount(){


  let discountPrice = this.form.discountPrice;
  let totalBalance = this.form.totalBalance;
  let totalPayable = this.form.totalPayable;
  let currentTotalAmount = this.form.currentTotalAmount;
  let previousDue = this.form.previousDue;

        if(discountPrice>totalBalance){
          discountPrice = '';
          totalPayable = parseFloat(totalBalance).toFixed(2);
          currentTotalAmount = parseFloat(totalBalance).toFixed(2);
          
        }
        else if(discountPrice>0){
          totalPayable = parseFloat(totalBalance-discountPrice).toFixed(2);
          currentTotalAmount = parseFloat(totalPayable+previousDue).toFixed(2);
        
       }
        else{
          totalPayable = parseFloat(totalBalance).toFixed(2);
          currentTotalAmount = parseFloat(totalPayable+previousDue).toFixed(2);
       }
        
    },
    
    salesCustomerDueLimit(customerId) {
      
        axios
          .get(
            `/dueLimit/` + customerId
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
            
            if(res.data.limitDueAmount == 1234567890){
              this.form.limitDueAmountShow = '~';
            }else{
            this.form.limitDueAmountShow = parseFloat(res.data.limitDueAmount).toFixed(2);
            }
            this.form.limitDueAmount = parseFloat(res.data.limitDueAmount).toFixed(2);
          });
       
    },

  //  ----------------------------------- bank information function 
  
    bankTypeList(){
       axios.get("/bankTypeEntryList").then((res) => {
        this.showBankTypeDatas = res.data.show;
      })
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
 
    // ----------------------------------- / bank information function 


            getDataForShow(){
              this.form.id = this.$route.params.id;
                axios.get('/saleOrderListById/'+this.$route.params.id)
                    .then(res=>{
                        this.requisitionInformation = res.data.data;
                        this.form.productSupplierId = res.data.data.supplierId;
                        this.form.customerId = res.data.data.customerId;
                        this.reqProductList(res.data.data.rendomNumber);
                        this.salesCustomerDueLimit(res.data.data.customerId);
                    })
            },
    totalCalculate(id){

      var rendomNumber = $('#rendomNumber-'+id).val();
      var productId = parseFloat($('#productId-'+id).val());
      var brandId = parseFloat($('#brandId-'+id).val());
      var unitId = parseFloat($('#unitId-'+id).val());
      var tpRate = parseFloat($('#tpRate-'+id).val());
      var purchaseRate = parseFloat($('#purchaseRate-'+id).val());
      var reqQnt = parseFloat($('#reqQnt-'+id).val());
      var reqPrice = parseFloat($('#reqPrice-'+id).val());
      var carton = parseFloat($('#carton-'+id).val());
      var pcs = parseFloat($('#pcs-'+id).val());
      var unit = $('#unit-'+id).val();
      var pcs1 = 0;
      var totalPcs = 0;
      var totalPrice = 0;
      
      if(pcs>0){
        pcs1 = pcs;
      }
      if(carton>0){
        carton = carton;
      }
      else{
        carton = 0;
      }

      var total = (carton)+pcs1;
          

      if(total>reqQnt){
        Toast.fire({
                icon: "error",
                title: "Invalid Quantity. Returnable quantity "+reqQnt+' '+unit,
              });
            $('#carton-'+id).val('');

            $('#total-'+id).val('');
            $('#totalText-'+id).html('');

            $('#totalSaleText-'+id).html('');
            $('#totalSale-'+id).val('');

            $('#totalSalePriceText-'+id).html('');
            $('#totalSalePrice-'+id).val('');
      }
      else{
      if(carton>0){
        
        
         totalPcs = total;
         var totalSale = reqQnt-totalPcs;
         var totalSalePrice = parseFloat(tpRate*totalSale).toFixed(2);
         var totalPurchasePrice = parseFloat(purchaseRate*totalSale).toFixed(2);

        $('#total-'+id).val(total);
        $('#totalText-'+id).html(total+' '+unit);
        
        $('#totalSaleText-'+id).html(totalSale);
        $('#totalSale-'+id).val(totalSale);

        $('#totalSalePriceText-'+id).html(totalSalePrice);
        $('#totalSalePrice-'+id).val(totalSalePrice);
        $('#totalPurchasePrice-'+id).val(totalPurchasePrice);
      }
      else{
        $('#total-'+id).val('');
        $('#totalText-'+id).html('');

        $('#totalPriceText-'+id).html('');
        $('#totalPrice-'+id).val('');
      }
      }



      this.form.t_id =  id;
      this.form.rendomNumber =  rendomNumber;
      this.form.t_carton = carton;
      this.form.t_pcs = pcs1; 
      this.form.t_returnQuantity =  totalPcs;
      this.form.t_saleQuantity =  totalSale;
      this.form.t_purchaseRate = purchaseRate; 
      this.form.t_totalPurchasePrice = totalPurchasePrice;
      this.form.t_totalPrice = totalSalePrice;

      this.form.totalSalesAmount = totalSalePrice;
  
    },
    totalCalculate1(id){

      // $(".carton").prop('disabled', true);
      // $(".pcs").prop('disabled', true);

      var rendomNumber = $('#rendomNumber-'+id).val();
      var productId = parseFloat($('#productId-'+id).val());
      var brandId = parseFloat($('#brandId-'+id).val());
      var unitId = parseFloat($('#unitId-'+id).val());
      var tpRate = parseFloat($('#tpRate-'+id).val());
      var purchaseRate = parseFloat($('#purchaseRate-'+id).val());
      var reqQnt = parseFloat($('#reqQnt-'+id).val());
      var reqPrice = parseFloat($('#reqPrice-'+id).val());
      var carton1 = parseFloat($('#carton-'+id).val());
      var carton = 0;
      var pcs1 = parseFloat($('#pcs-'+id).val());
      var pcs = 0;
      var unit = $('#unit-'+id).val();

      if(carton1>0){
        carton = carton1;
      }
      if(pcs1>0){
        pcs = pcs1;
      }

    
          var total = carton;
        var total1 = total+pcs;
        var totalPcs = total1;
      
     
      if(total1>reqQnt){
        Toast.fire({
                icon: "error",
                title: "Invalid Quantity. Returnable quantity "+reqQnt+' '+unit,
              });
            $('#pcs-'+id).val(''); 
            pcs = 0;
      }

       total1 = total+pcs;
       totalPcs = total1;
      
       
        
        var totalSale = reqQnt-totalPcs;
        var totalSalePrice = parseFloat(tpRate*totalSale).toFixed(2);
        var totalPurchasePrice = parseFloat(purchaseRate*totalSale).toFixed(2);

        $('#total-'+id).val(total1);
        $('#totalText-'+id).html(total1+' '+unit);

        $('#totalSaleText-'+id).html(totalSale);
        $('#totalSale-'+id).val(totalSale);

        $('#totalSalePriceText-'+id).html(totalSalePrice);
        $('#totalSalePrice-'+id).val(totalSalePrice);
        $('#totalPurchasePrice-'+id).val(totalPurchasePrice);
      
 
      
      


      this.form.t_id =  id;
      this.form.rendomNumber =  rendomNumber;
      this.form.t_carton = carton;
      this.form.t_pcs = pcs; 
      this.form.t_returnQuantity =  totalPcs;
      this.form.t_saleQuantity =  totalSale;
      this.form.t_totalPrice = totalSalePrice;
      
      this.form.t_purchaseRate = purchaseRate; 
      this.form.t_totalPurchasePrice = totalPurchasePrice;
 
      this.form.totalSalesAmount = totalSalePrice;
      // this.changeData();
      
    },

    customerIdCatch(value){
      this.form.customerId = value.salesCustomerEntryId
    },
    selectSr(value){
      this.form.srId = value.shopEmployeeEntryId
    },
    selectDsr(value){
      this.form.dsrId = value.shopEmployeeEntryId
    },

    customerType() {
      axios
        .get("/shopPriceCustomerType")
        .then((res) => {
          this.form.customerTypeId = res.data.customerType;
          this.customerTypeIdCatch();
        });
    
 
    },

    customerTypeIdCatch() {
      axios
        .get("/customerTypeIdCatch/" + this.form.customerTypeId)
        .then((res) => {
          this.salesCustomerLists = res.data.salesCustomerLists;
        });
    
 
    },
 
    
    salesCustomerName({ customerName,customerPhone }) {
      return `${customerName} — ${customerPhone}`;
    },

    customLabelSr ({ fullName, phoneNumber }) {
          return `${fullName} — ${phoneNumber}`
        },
    
    customLabel ({ fullName, phoneNumber }) {
          return `${fullName} — ${phoneNumber}`
        },
    
    productListShows() {
      axios.get("/productName").then((res) => {
        this.productNameLists = res.data.productNameList;
      });
    },
 
    
    ShowDataLists() {
      axios.get("/productBrandListPurchase").then((res) => {
        this.newBrandLists = res.data.shopProductBrandList;
      });
    },
    
    productSupplierList() {
      axios.get("/shopWishProductSupplier").then((res) => {
        this.productSupplierLists = res.data.productSupplierList;
      });
    },

    

            reqProductList(value) {
       
      axios
        .get("/requisitionProductList/" + value)
        .then((res) => {
          this.productNameLists  = res.data.productList
        });
    },
            getSrDsrList() {
      
      axios
        .get("/getSrDsrList")
        .then((res) => {
          this.srLists  = res.data.srList
          this.dsrLists  = res.data.dsrList
        });
    },


    
    cashBankCalculate(e) {
      
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



            changeData() {


                this.loading=true;
              
      // $(".carton").prop('disabled', true);
      // $(".pcs").prop('disabled', true);
      
      let url = 'orderReceiveRequest';
      this.form.post(url).then((response) => {
        var due = this.form.previousDue;
        var total = response.data.total;
        //alert(total+due);
        this.form.totalSalesAmount = parseFloat(total).toFixed(2);
        this.form.totalBalance = parseFloat(total).toFixed(2);
        this.form.totalPayable = parseFloat(total).toFixed(2);
        this.form.currentTotalAmount = parseFloat(total+due).toFixed(2);
        this.form.currentDue = parseFloat(total+due).toFixed(2);

        


      // $(".carton").prop('disabled', false);
      // $(".pcs").prop('disabled', false);

            this.loading=false;
            this.paymentOption=true;

          
        }).catch((error) => {
            
            // $(".carton").prop('disabled', false);
            // $(".pcs").prop('disabled', false);

            this.loading=false;

          });
    },

    orderSubmit() {
      this.loading = true;
      let url = 'saleOrderReceiveSubmit';
      this.form.post(url).then((res) => {

                Toast.fire({
                    icon: "success",
                    title: "Order Submit Successful.",
                });

                this.$router.push('/sales@order@list')

                this.loading = false;
     
        }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },
   
  },
};
</script>