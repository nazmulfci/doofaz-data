<template>
  <span>
      <div class="row">
 
       <div class="col-12"> 
    <div class="card " style="margin:0 auto">
        <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
          <h3 style="color:black">Sales Product Price Report</h3>
        </div>
        <div class="table-responsive bg-white p-2"  >
          <table class="table table-hover table-bordered table-striped" id="sampleTable">
            <thead>
               <tr>
                 <th>SN</th>
                 <th>Product Name</th>
                 <th>Brand Name</th>
                 <th>Color</th>
                 <th>Size</th>
                 <th>MRP Price</th>
                 <th>Sales Price</th>
                 <th>Wholesale Price</th>
                 <th>Special Price</th>
                 <th>E-Commerce Price</th>
                 <th>Created Date</th>
               </tr>
              </thead>
              <tbody>
              
            </tbody>
         </table>
       </div>
       </div>
       </div>
    
     </div>
    </span>
</template>

<script>
import datatable from "datatables.net-bs4";
    export default {
        data(){
            return{
              salesProductPriceReports:{},
            }
        },
        props:{
             limit: {
               type: Number,
               default: 2
           }
        },
        mounted() {
          
            this.salesProductPriceReport()
        },
        methods:{
          salesProductPriceReport() {
       
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
          ajax: "/salesProductPriceReport",

          columns: [
            {
              data: "salesProductPriceEntryId",
            },
          
            {
              data: "productName", name:"productName.productName"
             
            },
          
            {
              data: "brandname", name:"brandname.brandname"
             
            },
            {
              data: "color.colorName",
            },
            {
              data: "size.sizeName",
            },
            {
              data: "mrpPrice",
            },
            
            {
              data: "salesPrice",
              
            },
            {
              data: "wholesalePrice",
            },
            {
              data: "specialPrice",
            },
            {
              data: "eCommercePrice",
            },
            {
              data: "created_at",
            },
        
          ],
        });
      });
          },
       
       }
    }

</script>
