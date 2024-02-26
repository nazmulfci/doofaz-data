<template>
  <span>
    <div
      class="card main-card element-block-example mt-0"
      style="width: 91%; margin: 0 auto"
    >
      <div class="card-header-tab card-header alert-info">
        <h4>
          <i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Sales Invoice
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
          style="width: 100%"
          class="table table-hover table-striped table-bordered"
          id="sampleTable"
        >
          <thead>
            <tr>
              <th>SN</th>
              <th>Sales Date</th>
              <th>Invoice No</th>
              <th>Customer Name</th>
              <th>Customer Type</th>
              <th>Total Quantity</th>
              <th>Discount Price</th>
              <th>Total Amount</th>
              <th>Paid Cash</th>
              <th>Paid Bank</th>
              <th>Due Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
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
                        <div class="text-gray-light">  <u> <b> Customer Informatioin :</b> </u> </div>
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
                                  <th class="text-left">Product Name</th>
                                  <th class="text-left">Product Brand</th>                                
                                  <th class="text-left">UNIT</th>
                                  <th class="text-right">Quantity</th>
                                  <th class="text-right">UNIT PRICE</th>
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
                             <td class=""> {{list.quantity}} </td>
                             <td class=""> {{list.unitPrice}} </td>
                             <td class=""> {{list.totalPrice}} </td>
                           
                         
                        </tr>
                              </tbody>
                              <tr>
                                <td colspan="6" class="text-right border-0">
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
                                      <td class="bg-light"> {{ discount }} </td>
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
                                      <td> {{ total }} </td>
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
       
      </div>
    </div>
  </span>
</template>

<script>
import datatable from "datatables.net-bs4";
export default {
  data() {
    return {
      salesInvoiceLists: {},
      lists: "",
   
      total: "",
      due: "",
      discount: "",
      customer: [],
    };
  },
  mounted() {
    this.view();
  },
  methods: {
    view() {
      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }
      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          ajax: "/salesInvoiceList",

          columns: [
            {
              data: "salesInvoiceId",
            },
            {
              data: "salesDate",
            },
            {
              data: "salesInvoiceNo",
              render: function (data, row) {
                var ok =
                  '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="editModal(' +
                  data +
                  ')">' +
                  data +
                  "</button>";
                return ok;
              },
            },
            {
              data: "customerName",
              name: "customerName.customerName",
            },
            {
              data: "customerType",
              name: "customerType.shopCustomerName",
            },
            {
              data: "totalQuantity",
            },
            {
              data: "discountPrice",
            },
            {
              data: "currentTotalAmount",
            },
            {
              data: "currentPaidAmount",
            },
            {
                data: "mobileAmount",
              },
            {
              data: "currentDue",
            },
             {
              data: "salesInvoiceId",
              render: function (data, row) {
                var ok =
                  '<div class="btn-group"><button type="button" onclick="salesReturn(' +
                  data +
                  ')" class="btn btn-hover-shine btn-outline-primary" ><i class="fa fa-undo"></i>Return</button></div>';
                return ok;
              },
            },
          ],
        });
      });
    },
    salesReturn(id) {
      this.$router.push("/productsale@edit" + id);
    },
    editModal(id) {
      axios.get(`salesInvoiceList/${id}`).then((res) => {
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
     window.salesReturn = this.salesReturn;
    window.editModal = this.editModal;
  },
};
</script>