<template>
  <span>
    <div class="row">
      <div class="col-12 col-md-2"></div>
       <div class="col-12 col-md-8"> 
    <div class="card " >
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Expired Date Over Product Report</h3>
      </div>
      <div class="table-responsive bg-white p-3" style="margin:0 auto">
        <table class="table table-hover table-bordered table-striped" width="880px" id="sampleTable">
          <thead>
             <tr>
               <th>Id</th>
               <th>Product_Name</th>
               <th>Brand</th>
               <th>Mfg_Date</th>
               <th>Exp_Date</th>
               <th>Expired_Date_Over</th>
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
         this.expireDateOverProductList();
        
      },
      methods:{
          expireDateOverProductList(){
           
                         function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }
      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          ajax: "/expireDateOverProductList",

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
               data: "purchaseProductDetailsId",render:function(data){
                    return   '<button type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-danger">'
                       +
                       'Date Over</button>'
               }
            },
           
          ],
        });
      });  

          },
        
      }
    }
</script>
