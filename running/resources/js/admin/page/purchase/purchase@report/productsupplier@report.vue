<template id="">
  <span>
     <div class="card main-card  element-block-example">
         
                     <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Product Supplier Report </h4>
        </div>
      </div>
      
           <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white">
           <table class="table table-hover table-bordered mb-0" id="sampleTable" style="width:1350px">
             <thead>
                <tr>
                  <th>SN</th>
                  <th>Supplier.Name</th>                 
                  <th>Phone</th>                 
                  <th>Total_Purchase</th>
                  <th>Return</th>
                  <th>Paid</th>
                  <th>Receive</th>
                  <th>Due</th>
                  <th>Statement</th>
                  <th>Action</th>
                </tr>
               </thead>
              <tbody >
                <tr >
                  
                </tr>
              </tbody>
           </table>
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
          ajax: "/productSupplierReport",

          columns: [
            
           
            {
              data: "supplierId",
            },
            {
              data: "supplier",
              name:"supplier.productSupplierName"
             
            },
            {
              data: "phone",
              name:"supplier.productSupplierPhone"
            },
            {
              data: "totalAmount",
            },
            {
              data: "returnAmount",
            },
            {
              data: "paidAmount",
            },
            {
              data: "receiveAmount",
            },
             {
              data: "currentDue",
            },
             {
              data: "supplierId",
              render: function (data, row) {
                var ok =
                  '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="statement(' +
                  data +
                  ')">Statement</button>';
                return ok;
              },
            },
            {
              data: "supplierId",
              render: function (data, row) {
                var ok =
                  '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="details(' +
                  data +
                  ')"><i class=" fa fa-eye"></i>View Invoice</button>';
                var ok1 =
                  '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="pdetails(' +
                  data +
                  ')"><i class=" fa fa-info"></i>&nbsp;Product Details</button>';
                return ok+ok1;
              },
            },
           
            
           
          ],
        });
      });
    },
    statement(id) {
        this.$router.push('/productSupplierStatement'+id)
    },
    details(id) {
        this.$router.push('/supplierinvoice@details'+id)
    },
    pdetails(id) {
        this.$router.push('/supplier@product@details'+id)
    },
  },
  created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    window.deleteExpense = this.deleteExpense;
    window.statement = this.statement;
    window.details = this.details;
    window.pdetails = this.pdetails;
  },
};
</script>

