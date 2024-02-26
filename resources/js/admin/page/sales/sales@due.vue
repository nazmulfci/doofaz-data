<template>
  <span>
    <!-- <div class="row" style="margin-top: -2%">
      <div class="col-12 col-md-3 col-xs-12"></div>
      <div class="col-12 col-md-4 col-xs-12">
        <div class="form-group">
          <label for="exampleInputPassword1" style="margin-left: 27%"
            >Select Customer Type</label
          >
          <select id="table" v-model="customerType" class="form-control">
            <option>Selecet One</option>
            <option
              v-for="customerTypeList in customerTypeLists"
              :value="customerTypeList.shopCustomerTypeEntryId"
              :key="customerTypeList.id"
            >
              {{ customerTypeList.shopCustomerName }}
            </option>
          </select>
        </div>
      </div>
    </div> -->
    <div
      class="card main-card element-block-example mt-0"
      style="width: 91%; margin: 0 auto"
    >
      <div class="card-header-tab card-header alert-info">
        <h4>
          <i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Sales Due Customer
        </h4>
        <span style="margin: 0px auto; font-weight: bold; font-size: 30px">
          <router-link :to="`/product@sales`">
            <i class="fa fa-balance-scale" aria-hidden="true"></i>
            Sales
          </router-link>
        </span>
      </div>
      <div class="card-body table-responsive bg-white">
        <table
          style="width: 1200px"
          class="table table-hover table-striped table-bordered"
          id="sampleTable"
        >
          <thead>
            <tr>
              <th>SN</th>
              <!-- <th>Sales Date</th>
              <th>C.Type</th> -->
              <th>Customer Name</th>
              <!-- <th>Customer Phone</th> -->
              <!-- <th>Invoice Amount</th>
              <th>Paid Cash</th> -->
              <th>Total Purchase</th>
              <th>Total Paid</th>
              <th>Total Due</th>
              <th>Statement</th>
            </tr>
          </thead>
          <tbody></tbody>
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
                      <h5 class="modal-title" id="exampleModalLongTitle"> Pay Now 1</h5>

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
                            <span class="mr-1"> Pay Now 2</span>
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
                            <span class="mr-1"> Pay Now 3</span>
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
  </span>
</template>

<script>



document.addEventListener("wheel", function(event) {
  if (document.activeElement.type === "number" &&
    document.activeElement.classList.contains("noscroll")) {
    document.activeElement.blur();
  }
});


import datatable from "datatables.net-bs4";
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
        previousDue: '',
        currentTotalAmount: "",
        currentPaidAmount: '',
        currentDue: "",
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
   }) ,

      customerType: "",
      customerTypeLists: [],
      lists: [],
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
      bankInformationAccountInfoStatus: [],
      mobileAccount: false,
      bankAccount: false,
       morepay:false,
      close:false,
    };
  },

  mounted() {
   
this.view();
  this.getData(); 
  },
  methods: {
    view() {
    

      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }

      $(document).ready(function () {
        $("#sampleTable ").DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax: "/salesDueCustomerList",

          columns: [
            {
              data: "salesCustomerEntryId",
            },
           
           
            {
              data: "customer",
              // name: "customerName.customerName",
            },
            // {
            //   data: "customerPhone",
            //   // name: "customerPhone.customerPhone",
            // },

            {
              data: "debitAmount",
            },
            {
              data: "creditAmount",
            },
            {
              data: "balanceAmount",
            },
             {
              data: "salesCustomerEntryId",
              render: function (data, row) {
                var ok =
                  '<button type="button" onclick="customerStatement(' +
                  data +
                  ')"     class="btn btn-hover-shine btn-outline-info"><i class="fa fa-info" aria-hidden="true"></i>&nbsp;Statement </button>';
                var  ok1=    '<button type="button" onclick="invoice(' +
                  data +
                  ')"     class="btn btn-hover-shine btn-outline-info"> <i class="fas fa-file-invoice"></i>&nbsp;View More </button>';
                var  ok2=    '<button type="button" onclick="collection('+
                 data +
                ')"     class="btn btn-hover-shine btn-outline-info"> <i class="fas fa-money-check"></i>&nbsp;Collection</button>';
                return ok+ok1+ok2;
              },
            },
           
          ],
        });
      });
    },

      customerStatement(id) {
      this.$router.push("/customerStatement" + id);
      
    },
      invoice(id) {
      this.$router.push("/sales@due@customer" + id);
     
    },
    
    collection(id) {

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


      axios.get('customerDuel/'+id).then((res) => {
        this.form.currentTotalAmount = res.data.info.balanceAmount;
        this.form.salesCustomerEntryId = id;
      });

      $("#pay").modal("show");
       
    },
     salesInvoiceEntry() {
      
        axios
          .post("/salesDueCollection", {
           
        
          
          
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
              title: "Something Worng",
            });
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

        if(this.form.currentDue==0){
          //this.paynow1 = true;
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
   
  },
  created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    window.deleteExpense = this.deleteExpense;
  
    window.customerTypeget = this.customerTypeget;
      window.customerStatement = this.customerStatement;
      window.invoice = this.invoice;
      window.collection = this.collection;
  },
};
</script>
