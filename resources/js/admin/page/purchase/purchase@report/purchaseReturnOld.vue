<template>
  <span>
    <div class="card">
      
                  <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Purchase Return  </h4>
        </div>
      </div>

      <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
           
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th>SN</th>
               <th>Supplier </th>              
               <th>Product</th>              
               <th>Invoice</th>              
               <th>purchase.Date</th>
               <th>Return.Date</th>
               <th>Previous.Quantity</th>
               <th>Return.Quantity</th>
               <th>New.Quantity</th>
             </tr>
            </thead>
            <tbody>
          
             <tr v-for="view ,index in purchaseProductReports.data" :key="view.purchaseProductId">
             
               <td>{{index+1}}</td>
               <td v-if="view.product_supplier_name">{{view.product_supplier_name.productSupplierName}}</td>
               <td v-if="view.product_name">{{view.product_name.productName}}</td>
               <td>{{view.purchaseInvoiceNo}}</td>
              
               <td>{{view.purchaseDate}}</td>
              
               <td>{{view.created_at}}</td>
               <td>{{view.preQuantity}}</td>
               <td>{{view.preQuantity-view.newQuantity}}</td>
               <td>{{view.newQuantity}}</td>
               
             </tr>

            </tbody>
         </table>
       </div>
       </div>
        <span class="card_footer">
         <pagination :data="purchaseProductReports" :limit="limit"  @pagination-change-page="getPaginateList">
           <span slot="prev-nav">&lt; Previous</span>
           <span slot="next-nav">Next &gt;</span>
         </pagination>
      </span>
     </div>

    </span>
</template>

<script>
    export default {
        data(){
            return{
                purchaseProductReports:{},
            }
        },
        props:{
          limit: {
            type: Number,
            default: 2
          }
        },
        mounted(){
            this.purchaseReturnList();
            this.getPaginateList();
          
        },
        methods:{
            purchaseReturnList(){
              axios.get('/purchaseReturn').then(res =>{
                  this.purchaseProductReports = res.data.purchaseInvoiceReports

              })
            },
         
            getPaginateList(page = 1){
              axios.get('/purchaseReturn?page=' + page)
              .then(response => {
                  this.purchaseProductReports = response.data.purchaseInvoiceReports;
              });
            },
         }
      }
</script>
