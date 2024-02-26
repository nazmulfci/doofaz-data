<template>
  <span>
      <div class="row">
      <div class="col-12 col-md-2"></div>
       <div class="col-12 col-md-8"> 
    <div class="card main-card  element-block-example"  style="margin:0 auto">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Expired Date Soon Product Report</h3>
      </div>
      <div class="table-responsive bg-white p-2">
        <table class="table table-hover table-bordered table-striped p-2" id="sampleTable">
          <thead>
             <tr>
               <th>SN</th>
               <th>Product Name</th>
               <th>Brand</th>
               <th>Mfg Date</th>
               <th>Exp Date</th>
               <th>Expired Date Soon</th>
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
      data () {
          return {
            
          }
      },
      
      mounted(){
         this.expireDateSoonProductList();
      
      },
      methods:{
       
           expireDateSoonProductList(){
           
                         function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }
      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          ajax: "/expireDateSoonProductList",

          columns: [
            {
              data: "purchaseProductDetailsId",
            },
            {
              data: "productName", name:"productName.productName"
            },
            {
              data: "brand",name:"productPriceDetails.brandName.productBrandName"
            },   
           
            {
              data: "mfgDate"
            },   
            {
              data: "expiryDate"
            },   
            {
               data: "dayRemain",render:function(data){
                    return   '<button class="border py-1 px-2 btn-hover-shine btn-danger">'
                       +data+
                       '&nbsp;Day</button>'
               }
            },
           
          ],
        });
      });  

          },
      
      }
    }
</script>
