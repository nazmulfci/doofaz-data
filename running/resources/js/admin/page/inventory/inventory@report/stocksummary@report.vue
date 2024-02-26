<template>
  <span>
    <div class="card main-card  element-block-example">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Stock Summary Report</h3>
      </div>
      <div class="table-responsive bg-white p-2">
        <table class="table table-hover table-bordered table-striped" width="1300px" id="sampleTable">
          <thead>
             <tr>
               <th>SN</th>
               <th>Product Name</th>               
               <th>Quantity</th>               
               <th>Stock Amount</th>               
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr >
        

              </tr>
            </tbody>
         </table>
        </div>
       
     </div>
    </span>
</template>

<script>
import datatable from "datatables.net-bs4";
export default {
    data () {
        return {
           purchaseProductReports:{},
           modelNo:{},
           batchNo:{},
           qrCode:{},
           mfgLicenseNO:{},
           warranty:{},
           selectMothOrYearWarranty:{},
           guarantee:{},
           selectMothOrYearGuarantee:{},
           mfgDate:{},
           expiryDate:{},
           tax:{},
           taxAmount:{},
           taxAmountType:{},
           quantityType:{},
           quantityNoti:{},
           proDescription:{},
           proAdvantage:{},
           qtys:{},
        }
    },
    props:{
         limit: {
           type: Number,
           default: 2
       }
    },
    mounted(){
      this.purchaseProductReport();
       this.getPaginateList();
       
    },
    methods:{
        purchaseProductReport(){
         

              $(document).ready(function () {
        $("#sampleTable ").DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax: "/stockSummaryProduct",

          columns: [
            {
              data: "productId",
            },
           
            {
              data: "product",
              name: "product. ",
            },
            {
              data: "quantity",
            
            },
            {
              data: "totalPrice",
            
            },
            {
              data: "productId",
               render: function (data, row) {
                var ok =
                  '<button type="button" onclick="stock(' +
                  data +
                  ')"     class="btn btn-hover-shine btn-outline-info"><i class="fa fa-info" aria-hidden="true"></i>&nbsp;Stock Visit </button>';
    
                return ok;
              },
            },
           
           
          ],
        });
      });
        },
        stock(id) {
      this.$router.push("/stock@view" + id);
     
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
  
      window.stock = this.stock;
     
  },
  }

</script>
