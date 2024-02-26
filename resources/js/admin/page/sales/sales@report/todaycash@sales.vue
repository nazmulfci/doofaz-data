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
        Today Cash Sales
        </h4>
        <span style="margin: 0px auto; font-weight: bold; font-size: 30px">
          
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
      salesInvoiceLists: {},
      lists: "",
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
          ajax: "/salesCashInvoiceList",

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
          ],
        });
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