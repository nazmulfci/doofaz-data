<template>
  <span>
    <div
      class="card main-card element-block-example mt-0"
      style="width: 91%; margin: 0 auto"
    >
      <div class="card-header-tab card-header alert-info">
        <h4>
          <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>
          Sales Return 
        </h4>
        
      </div>
      <div class="card-body table-responsive bg-white">

        <table
          style="width: 100%"
          class="table table-hover table-striped table-bordered"
          id="sampleTable"
        >
          <thead>
            <tr>
              <th>Sales Date</th>
              <th>Invoice No</th>
              <th>Customer Name</th> 
              <th>Sales Amount</th>
              <th>Discount Price</th>
              <th>Total Amount</th>
              <th>Action</th>
              <th>Cencel</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>








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
                  Sales Return Invoice
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
                         
                         
                        <div class="address" v-if="customer.salesCustomerEntryId" > {{ customer.customerName }} </div>
                        <div class="address" v-if="customer.salesCustomerEntryId" > {{ customer.customerPhone }} </div>
                        
                         
                      
                    </div>
                  
                    <div class="col invoice-details">
                        <div class="date"> Sales Invoice: {{ due.returnInvoiceNo }}</div>
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
                                  <th class="text-left">Product </th>
                                  <th class="text-left"> Brand</th>                                
                                  <th class="text-left">UNIT</th>
                                  <th class="text-left">Color/Size</th>
                                  <th class="text-right">Quantity</th>
                                  <th class="text-left">Return Qnt</th>
                                  <th class="text-right">UNIT PRICE</th>
                                  <th class="text-right">TOTAL PRICE</th>
                                  <th class="text-right">OFF</th>
                                  <th class="text-right">TOTAL</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(list, index) in lists" :key="list.salesProductEntryId">
                            <td>{{++index}}</td>
                            <td class="text-left"><span> {{list.product_name.productName}} </span></td>

                            <td> <span >{{ list.brand_name.productBrandName }}</span> </td>
                

                             <td class=""> {{list.unit_name.uniteEntryName}} </td>
                             <td class=""> 
                               <span v-if="list.colorId">
                               {{list.color_name.colorName}}
                               <span v-if="list.sizeId">/
                               {{list.size_name.sizeName}}</span>
                               </span>
                                </td>
                             <td class=""> {{list.quantity}} </td>
                             <td v-if="list.returnable" v-bind:id="'td-'+list.salesProductEntryId">

                               <small class="text-danger">Previous Return : {{list.returnable}} </small>
                                          <table>
                                            <tr>
                                              <td> <input type="number" style="width:200px;"
                                              v-bind:id="'newQuantity-'+list.salesProductEntryId"
                                          min="1"
                                          :max="list.quantity"
                                           step="0.01" class="form-control newQuantity" >
                                           <input type="hidden" v-bind:id="'returnable-'+list.salesProductEntryId" :value="list.returnable">
                                        </td>
                                       
                                              <td>
                                                <button style="display:none;"
                                               v-bind:id="'btnd-'+list.salesProductEntryId" class="btn btn-danger float-right"> 
                                               <span
                                                class="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                              ></span>
                                               </button>
                                                <button
                                               v-bind:id="'btn-'+list.salesProductEntryId"
                                                @click="productReturn(list.salesProductEntryId)" class="btn btn-primary float-right"> Return </button></td>
                                            </tr>
                                          </table>
                                         </td>
                             <td v-else> {{list.quantity}} </td>
                             <td class=""> {{list.unitPrice}} </td>

                                 <td class="">
                                          <span v-bind:id="'totalPrice-'+list.salesProductEntryId">{{ list.totalPrice }} </span>
                                        </td>
                                        <td class=""> 
                                          <span v-bind:id="'discountAmount-'+list.salesProductEntryId">{{ list.discount }}</span> 
                                        </td>
                                        <td class="">
                                          <span v-bind:id="'totalWithDiscount-'+list.salesProductEntryId">{{ list.totalWithDiscount }} </span>
                                        </td>

                             
                         
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
                                        <b id="grandTotal">{{total}}</b>
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
                                            <td class="bg-light" id="invoiceDiscount">
                                              {{ due.discount }}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="text-right">
                                              Previous Due
                                            </td>
                                            <td class="bg-light" id="supplierPayable">
                                              {{ due.previousPayableDue  }}
                                            </td>
                                          </tr>

                                          <tr>
                                            <td class="text-right">
                                              Total Invoice Amount
                                            </td>
                                            <td id="totalProductCost">
                                              {{ due.totalPurchaseValue  }}
                                            </td>
                                          </tr>
                                          <tr></tr>
                                          <tr>
                                            <td class="text-right">
                                              Current Receivable
                                            </td>
                                            <td class="bg-light" id="currentPayable">
                                              {{ due.currentPayable }}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                    <form action="" v-if="formstatus"  @submit.prevent="returnSubmit()">
                                      <button type="button"  class="btn btn-danger float-right sbtnd" style="display:none;"> <span
                                                class="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                              ></span>
                                               </button>
                                      <button type="submit" class="btn btn-primary float-right sbtn"> Submit </button>
                                    </form>
                              
                              
                              
                               
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
                                  <option value=""> Select One </option>
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
  </span>
</template>



<script>
import datatable from "datatables.net-bs4";
import Multiselect from "vue-multiselect";
import moment from "moment";
export default {
  components: {
    Multiselect,
  },

  data() {
    return {


      form: new Form({
        date:moment().format("YYYY-MM-DD"),
        id:'',
            purchaseReturnDate:'',
            purchaseInvoiceNo:'',
            purchaseSupplier:'',
            grandTotal:'',
            invoiceDiscount:'',
            supplierPayable:'',
            totalProductCost:'',
            currentPayable:'',

            invoiceNoSearch:'',
            salesCustomerEntryId:'',
            customerId:'',
            
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

                totalQuantity: "",
        totalBalance: "",
        discountPrice: "",
        totalVat: 0,
        vatCalculate: "",
        totalPayable: "",
        previousDue: '',
        currentTotalAmount: "",
        currentPaidAmount: '',
        currentDue: "",
        totalDis: "",

           }),


      salesInvoiceLists: {},
      gets: {},
      invoiceNo: "",
      lists: "",
        total: "",
        due: "",
        discount: "",
      customer: [],
      salesCustomerLists: [],
      formstatus:false,


      // ----------------- payment 
         customerType: "",
      customerTypeLists: [],
      lists: [],
        paynow: true,
      paynow1: false,
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
      bankAccount: false,
       morepay:false,
      close:false,

      // ----------------- /payment 
    };
    
  },
  mounted() {
    this.view();
    this.getBankList();
    this.customerTypeIdCatch();
  
  },
  methods: {



    // ============================== payment
    
         salesInvoiceEntry() {

        $('#btnd-'+this.form.id).show();
        $('#btn-'+this.form.id).hide();

          //  salesDueCollection
      
        axios
          .post("/salesReturnInvoiceApprove", {
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
              title: "Sales Invoice Entry Successfully",
            });
               $("#pay").modal("hide");
               this.view();
            this.form.reset();
            this.guestInfo = true;
            $("#total").html("");
            $("#blanceDue").text("");
         
          })
          .catch((error) => {
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
      totalCalculate(e) {
      if(this.form.currentPaidAmount>this.form.currentTotalAmount){
        // alert('boro');
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

        this.form.currentDue = this.form.currentTotalAmount - this.totalcal;

        if(this.form.currentDue==0)
        {
          this.paynow1 = true;
        }
        else{
          this.paynow1 = false;
        }
      }
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

    // ============================== / payment 

      approveInvoice(e){
        //   alert(e);

        $('#btnd-'+e).show();
        $('#btn-'+e).hide();

        axios.get("/salesReturnInvoiceApprove/"+e).then((res) => {
            Toast.fire({
                    icon: "success",
                    title: "Return Invoice Approve Successful.",
                  });
                    
                  this.view();
        });
      },

      selectCustomer(value){
        //alert(value.salesCustomerEntryId);
          this.form.customerId = value.salesCustomerEntryId;

      },
          salesCustomerName({ customerName,customerPhone }) {
      return `${customerName} [${customerPhone}]`;
    },
    customerTypeIdCatch() {
      axios
        .get("/salesCustomerListReport")
        .then((res) => {
          this.salesCustomerLists = res.data.data;
        });
    },
        returnSubmit(){

                    $('.sbtnd').show();
                    $('.sbtn').hide();


        this.form.post("/returnSales")
                .then((res) => {
                  if(res.data.data){
                    
                          this.invoiceNo='';
                          this.invoiceYesStatus=false;
                          this.invoiceNoStatus=false;

                  Toast.fire({
                    icon: "success",
                    title: "Return Invoice Create Successful.",
                  });

                  $('.sbtnd').hide();
                    $('.sbtn').show();

                          $("#salesId").modal("hide");
                  }
                  else{ 
                    Toast.fire({
                    icon: "error",
                    title: "Something Missing.",
                  });
                  $('.sbtnd').hide();
                    $('.sbtn').show();
                  }
                }).catch((res) => {
                  
                    Toast.fire({
                      icon: "error",
                      title: "Something wrong",
                    });

                    $('.sbtnd').hide();
                    $('.sbtn').show();

                  });
    },
          productReturn(id){
            

           $('#btnd-'+id).show();
           $('#btn-'+id).hide();

          let quantity = parseFloat($('#newQuantity-'+id).val());
          let returnable = parseFloat($('#returnable-'+id).val());
       
          if(quantity>returnable){
            Toast.fire({
              icon: "error",
              title: "Sorry. Returnable Quantity "+returnable+".",
            });

           $('#btnd-'+id).hide();
           $('#btn-'+id).show();


          }else{
              axios.get("/salesProductReturnEntry/" + id + '/' + quantity)
                .then((res) => {
                  $('#td-'+id).html(quantity);
                  $('#totalPrice-'+id).html(res.data.totalPrice);
                  $('#discountAmount-'+id).html(res.data.discountAmount);
                  $('#totalWithDiscount-'+id).html(res.data.totalWithDiscount);
                  $('#grandTotal').html(res.data.grandTotal);

                  $('#invoiceDiscount').html(res.data.invoiceDiscount);
                  $('#totalProductCost').html(res.data.totalProductCost);
                  $('#supplierPayable').html(res.data.supplierPayable);
                  $('#currentPayable').html(res.data.currentPayable);

                  this.form.purchaseReturnDate=res.data.purchaseReturnDate;
                  this.form.purchaseInvoiceNo=res.data.purchaseInvoiceNo;
                  this.form.purchaseSupplier=res.data.purchaseSupplier;
                  this.form.grandTotal=res.data.grandTotal;
                  this.form.invoiceDiscount=res.data.invoiceDiscount;
                  this.form.supplierPayable=res.data.supplierPayable;
                  this.form.totalProductCost=res.data.totalProductCost;
                  this.form.currentPayable=res.data.currentPayable;
                  this.formstatus=true;

                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
          $('#btnd-'+id).hide();
           $('#btn-'+id).show();
        });
          }

      },

getBankList(){
        axios.get("/bankTypeEntryList").then((res) => {
        this.showBankTypeDatas = res.data.show;
      })
},

    view() {

   

      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }

     
      $(document).ready(function () {

        $.fn.dataTable.ext.errMode = 'none';
       
       var table =  $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          data : [],
          ajax: "/salesReturnInvoiceList",

          columns: [
             
            {
              data: "returnDate",
            },
            {
              data: "id",
              render: function (data, type, row) {
                var ok =
                  '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"  onclick="editModal(' +
                  data +  ')">' + row.returnInvoiceNo + "</button>";
                return ok;
              },
            },
            {
              data: "customerId",
            },
             
            {
              data: "totalPurchaseValue",
            },
            {
              data: "discount",
            },
            {
              data: "currentPayable",
            },
             {
              data: "id",
              render: function (data, row) {
                var ok =
                  '<button id="btn-'+data+'" type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary btnApprove" onclick="collection('+
                 data +
                ')"  >' + "  Approve </button>";
                return ok;
              },
            },
             {
              data: "id",
              render: function (data, row) {
                var ok =
                  '<button id="btn-'+data+'" type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-danger btnCancel" onclick="deleteReturnInvoice('+
                 data +
                ')"  >' + "  Cancel </button>";
                return ok;
              },
            },
          ],
        });
         table.ajax.url("/salesReturnInvoiceList").load();

            $('.btnApprove').show();
            $('.btnCancel').show();
      });
    },


    
    collection(id) {

      this.form.id = id;

    this.morepay=false;
    this.close=false;

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


this.form.currentPaidAmount = '';
this.form.mobileAmount = '';
this.form.currentDue='';


      // axios.get('salesReturnInvoicePay/'+id).then((res) => {
      //   this.form.currentTotalAmount = res.data.balance;
      //   this.form.salesCustomerEntryId = res.data.customerId;
      // });

 
        $('.btnApprove').hide();
        $('.btnApproveLoading').show();

        this.form.returnInvoiceId = id;
        axios.get("/salesReturnInvoicePay/"+id).then((res) => {
            this.form.currentTotalAmount = Math.abs(res.data.totalAmount);
            this.form.currentDue = Math.abs(res.data.totalAmount);
 

            // if(res.data.totalAmount<0){
            //    this.paynow1=false;
            //     $("#pay").modal("show");
            //     $('#btnd-'+this.form.id).show();
            //     $('#btn-'+this.form.id).hide();
            // }else{
            this.returnInvoiceApproveWithoutPayment();
            // }
        });
},
       
   
returnInvoiceApproveWithoutPayment() {

           
        

          //  salesDueCollection
      
        this.form.post("/salesReturnInvoiceApprove", {
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
             
               this.view();
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


deleteReturnInvoice(e){

        $('.btnCancel').hide();
        $('.btnCancelLoading').show();

        axios.get("/salesReturnInvoiceDelete/"+e).then((res) => {
            Toast.fire({
                    icon: "success",
                    title: "Return Invoice Cancel Successful.",
                  });
                  this.view();
        }); 
 
},
    editModal(id) {
      axios.get(`salesReturnInvoiceProductList/${id}`).then((res) => {
        this.lists = res.data.lists;
        this.total = res.data.total;
        this.discount = res.data.discount;
        this.due = res.data.due;
        this.customer = res.data.customer;
      });
      $("#salesId").modal("show");
    },
  },
  created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    window.deleteExpense = this.deleteExpense;
    window.editModal = this.editModal;
    window.approveInvoice = this.approveInvoice;
    window.collection = this.collection;
    window.deleteReturnInvoice = this.deleteReturnInvoice;
  },
};
</script>