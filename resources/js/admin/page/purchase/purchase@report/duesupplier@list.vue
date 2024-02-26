<template>
  <span>
    <div class="card">
      
                  <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Due Supplier List </h4>
        </div>
      </div>
      
      
       <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0" id="sampleTable" style="width:1350px">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th>SN</th>
               <th>Supplier Name</th>
               <th>Phone</th>
               <th>Total Amount</th>
               <th>Return Amount</th>
               <th>Total Paid</th>              
               <th>Total Due</th>              
               <th>Statement</th>
             </tr>
            </thead>
            <tbody>
              <tr>
                
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
          ajax: "/dueSupplierList",

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
            
           
          ],
        });
      });
    },
    statement(id) {
        this.$router.push('/productSupplierStatement'+id)
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
  },
};
</script>