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
         Today Sales Due
        </h4>
        <span style="margin: 0px auto; font-weight: bold; font-size: 30px">
         
        </span>
      </div>
      <div class="card-body table-responsive bg-white">
        <table
          style="width: 110%"
          class="table table-hover table-striped table-bordered"
          id="sampleTable"
        >
          <thead>
            <tr>
              <th>SN</th>
              <th>Sales Date</th>
              <th>C.Type</th>
              <th>C.Name</th>
              <th>Invoice</th>
              <th>Invoice Amount</th>
              <th>Paid Cash</th>
              <th>Paid Bank</th>
              <th>Due Amount</th>
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
                          <th>Unit.Price</th>
                          <th>Discount</th>
                          <th>Total.Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(getInfo, index) in lists">
                          <td>{{ index + 1 }}</td>
                          <td>{{ getInfo.created_at }}</td>
                          <td v-if="getInfo.product_name">
                            {{ getInfo.product_name.productName }}
                          </td>
                          <td v-if="getInfo.brand_name">
                            {{ getInfo.brand_name.productBrandName }}
                          </td>
                          <td v-if="getInfo">{{ getInfo.quantity }}</td>

                          <td v-if="getInfo">{{ getInfo.unitPrice }}</td>
                          <td v-if="getInfo">{{ getInfo.totalDiscount }}</td>
                          <td v-if="getInfo">{{ getInfo.totalPrice }}</td>
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
      customerType: "",
      customerTypeLists: [],
      lists: [],
    };
  },

  mounted() {
    this.view("/salesTodayDueList");

    this.customerTypeList();
  },
  methods: {
    view(url1) {
      var url = url1;

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
          ajax: url,

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

    customerTypeget() {
      this.view(`salesDueListWithType`);
    },
    editModal(id) {
      axios.get(`salesInvoiceList/${id}`).then((res) => {
        this.lists = res.data.lists;
      });
      $("#salesId").modal("show");
    },
    customerTypeList() {
      axios.get("/salesProductEntry/create").then((res) => {
        this.customerTypeLists = res.data.customerTypeLists;
      });
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
    window.customerTypeget = this.customerTypeget;
  },
};
</script>
