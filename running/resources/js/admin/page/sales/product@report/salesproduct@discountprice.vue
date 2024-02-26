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
          Offer Product
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
              <th>Product_Name</th>
              <th>Brand</th>
              <th>Color</th>
              <th>Size</th>
              <th>MRP_Discount_Amount</th>
              <th>MRP_Discount_Start_Date</th>
              <th>MRP_Discount_Expired_Date</th>
              <th>Sales_Discount_Price</th>
              <th>Sales_Discount_Start_Date</th>
              <th>Sales_Discount_Expired_Date</th>
              <th>Wholesale_Discount_Price</th>
              <th>Wholesale_Discount_Start_Date</th>
              <th>Wholesale_Discount_Expired_Date</th>
              <th>Special_Discount_Price</th>
              <th>Special_Discount_Start_Date</th>
              <th>Special_Discount_Expired_Date</th>
              <th>E-Commerce_Discount_Price</th>
              <th>E-Commerce_Discount_Start_Date</th>
              <th>E-Commerce_Discount_Expired_Date</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </span>
</template>

<script>
import datatable from "datatables.net-bs4";
export default {
  mounted() {},
  data() {
    return {
      salesProductDiscountPriceReports: {},
    };
  },
  created() {
    function removeHTML(str) {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = str;
      return tmp.textContent || tmp.innerText || "";
    }
    $(document).ready(function () {
      $.fn.dataTable.ext.errMode = 'none';
      $("#sampleTable").DataTable({
        processing: true,
        serverSide: true,
        ajax: "/salesProductDiscountPriceReport",

        columns: [
          {
            data: "salesProductDiscountPriceId",
          },

          {
            data: "productName",
          },
          {
            data: "productBrandName",
          },
          {
            data: "color.colorName",
          },
          {
            data: "size.sizeName",
          },
          {
            data: "mergeColumnMrp",
            render: function (data) {
              var htmlString = removeHTML(data);
              return htmlString.replace(/X/g, "");
            },
          },

          {
            data: "mrpStartDate",
          },
          {
            data: "mrpExpiredDate",
          },

          {
            data: "mergeColumnSales",
            render: function (data) {
              var htmlString = removeHTML(data);
              return htmlString.replace(/X/g, "");
            },
          },
          {
            data: "salesStartDate",
          },
          {
            data: "salesExpiredDate",
          },
          {
            data: "mergeColumnWholeSale",
            render: function (data) {
              var htmlString = removeHTML(data);
              return htmlString.replace(/X/g, "");
            },
          },
          {
            data: "wholesaleStartDate",
          },
          {
            data: "wholesaleExpiredDate",
          },
          {
            data: "mergeColumnSpecial",
            render: function (data) {
              var htmlString = removeHTML(data);
              return htmlString.replace(/X/g, "");
            },
          },
          {
            data: "specialStartDate",
          },
          {
            data: "specialExpiredDate",
          },
          {
            data: "mergeColumnEcom",
            render: function (data) {
              var htmlString = removeHTML(data);
              return htmlString.replace(/X/g, "");
            },
          },
          {
            data: "eCommerceStartDate",
          },
          {
            data: "eCommerceExpiredDate",
          },
        ],
      });
    });
  },

  methods: {
    tabla() {
      this.$nextTick(() => {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          ajax: "/salesProductDiscountPriceReport",
        });
      });
    },
  },
};
</script>