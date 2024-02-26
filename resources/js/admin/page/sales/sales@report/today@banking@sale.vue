<template>
  <span>
    <div class="row" style="margin-top: -2%">
      <div class="col-12 col-md-4"></div>
      <div class="col-12 col-md-3">
        <div class="form-group">
          <label style="margin-left: 27%">Bank Type </label>
          <select
            v-model="receiverbankTypeEntryId"
            name="bankTypeEntryId"
            class="form-control"
            id="table1"
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
        </div>

        <div class="form-group">
          <label style="margin-left: 27%"> Bank Name</label>
          <select
            v-model="receiverbankEntryId"
            name="bankEntryId"
            id="table"
            class="form-control"
          >
            <option value="">Select Bank Name</option>
            <option
              v-for="showBankName in showBankNames"
              :value="showBankName.bankEntryId"
              :key="showBankName.id"
            >
              {{ showBankName.bankName }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div
      class="card main-card element-block-example mt-0"
      style="width: 91%; margin: 0 auto"
    >
      <div class="card-header-tab card-header alert-info">
        <h4>
          <i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Today Banking Sales
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
              <!-- <th>Action</th> -->
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
                <div class="card main-card element-block-example">
                  <div
                    class="card-header"
                    style="
                      background-color: rgb(1, 176, 241);
                      border: 1px solid rgba(0, 0, 0, 0.05);
                    "
                  >
                    <h3 style="color: black">Sales Product List</h3>
                  </div>
                  <div class="table-responsive bg-white">
                    <table
                      class="table table-hover table-bordered table-striped"
                    >
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Sales.Date</th>
                          <th>Product.Name</th>
                          <th>Brand</th>
                          <th>Quantity</th>
                          <th>Unit</th>
                          <th>Unit.Price</th>
                          <th>Discount</th>
                          <th>Total.Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(list, index) in lists">
                          <td>{{ index + 1 }}</td>
                          <td>{{ list.created_at }}</td>
                          <td>{{ list.product_name.productName }}</td>
                          <td>{{ list.brand_name.productBrandName }}</td>
                          <td>{{ list.quantity }}</td>
                          <td>{{ list.unitId }}</td>
                          <td>{{ list.unitPrice }}</td>
                          <td></td>
                          <td>{{ list.totalPrice }}</td>
                        </tr>
                      </tbody>
                    </table>
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
      receiverbankTypeEntryId: "",
      receiverbankEntryId: "",
      showBankTypeDatas: {},
      showBankNames: {},
      lists: {},
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

      $("#table1 ").on("change", function () {
        var value1 = $(this).val();
        localStorage.setItem('value1', JSON.stringify(value1));
    
   });
        $("#table ").on("change", function () {
          // Get the value from the select box
          var value = $(this).val();
          var v= localStorage.getItem('value1');
          // Do what you need to do with value

          // Reset the select back to the first option
          $(this).val("default");
          $(document).ready(function () {
            $("#sampleTable ").DataTable({
              processing: true,
              serverSide: true,

              bDestroy: true,
              ajax: "/todayBankingSale/" +JSON.parse(v) + "/" + value,
              columns: [
                {
                  data: "salesInvoiceNo",
                },

                {
                  data: "salesDate",
                  name: "invoice.salesDate",
                },

                {
                  data: "salesInvoiceNo",
                  name: "invoice.salesInvoiceNo",
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
                  name: "invoice.customerName.customerName",
                },
                {
                  data: "customerType",
                  name: "invoice.customerType.shopCustomerName",
                },
                {
                  data: "totalQuantity",
                  name: "invoice.totalQuantity",
                },
                {
                  data: "discountPrice",
                  name: "invoice.discountPrice",
                },
                {
                  data: "currentTotalAmount",
                  name: "invoice.currentTotalAmount",
                },
                {
                  data: "currentPaidAmount",
                  name: "invoice.currentPaidAmount",
                },
                {
                  data: "mobileAmount",
                  name: "invoice.mobileAmount",
                },
                {
                  data: "currentDue",
                  name: "invoice.currentDue",
                },
              ],
         
          });
        });
      });
    },
    bankTypeIdCatch() {
      axios.get("/bankNameList/" + this.receiverbankTypeEntryId).then((res) => {
        this.showBankNames = res.data.show;
      });
    },
    getData() {
      axios.get("/bankTypeEntryList").then((res) => {
        this.showBankTypeDatas = res.data.show;
      });
    },
    editModal(id) {
      axios.get(`salesInvoiceList/${id}`).then((res) => {
        this.lists = res.data.lists;
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
  },
};
</script>