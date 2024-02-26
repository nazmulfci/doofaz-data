<template id="">
  <span>
      <div class="card">
        <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Product List By Category  </h3>
         </div>
         <form @submit.prevent="productDiscountPriceEntry()">
            <div class="product-discount py-4 px-2">
               <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
                  <div class="form-group">
                         <label>Select Category</label>


                         <select v-model="brandId" id="table" class="form-control" 
                     >
                            <option value="">Select One</option>
                           <option  v-for="(productPriceSetupCategory, index) in productPriceSetupCategorys" v-if="productPriceSetupCategory.category_name"
                            :value="productPriceSetupCategory.categoryId">
                            {{ productPriceSetupCategory.category_name.categoryName }}</option>
                         </select>
                       
                     </div>

                    
                   
                </div>
            </div>
          
       </form>
     </div>

      <div class="card mt-5" >
         <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
           <h3 style="color:black">Product  List</h3>
         </div>
         <div class="table-responsive bg-white p-2">
           <table class="table table-hover table-bordered table-striped" width="1300px" id="sampleTable">
             <thead>
                <tr>
                   <th>SN</th>
               <th>Product.Name</th>
               <th>Brand</th>              
               <th>Color</th>              
               <th>Size</th>              
               <th>Quantity</th>
               <th>Total Price</th>
               <!-- <th>View</th> -->
               
                </tr>
               </thead>
               <tbody>
                 
             </tbody>
          </table>
               

               
     <!-- ============================== unit setup modal  -->
 
<!-- Modal -->
<div class="modal fade" id="unitListModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Unit List </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <div class="table-responsive">

         

         <table class="table table-bordered">
          

                            <tr class="bg-info">
                              
                              <th> Quantity  </th> 
                              <th> Total Quantity  </th> 
                              <th> Unit Price  </th>
                              <!-- <th> Total Price  </th> -->
                            </tr>
                          <tbody v-html="inward">
                            
                         </tbody>
         </table>
       </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> 
      </div>
    </div>
  </div>
</div>


     <!-- ============================== /unit setup modal  -->


        </div>
      
      </div>
  </span>

</template>



<script>
import datatable from "datatables.net-bs4";
    export default {
        data(){
          return {
            productPriceSetupCategorys: {},
              purchaseBrandLists: {},
              purchaseProductLists: {},
              role: {},
              brandId:'',
              listShow:false,
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
           shopProductBrandLists:[],
           purchaseProductReports:{},
           inward:'',
          }
        },
        props:{
             limit: {
               type: Number,
               default: 2
           }
        },

        mounted(){
           this.showProduct();
           this.categoryList();
          //  this.conditon();
        },
        methods:{
             categoryList(){
                axios.get('/categoryListInventory').then(res =>{
                   this.productPriceSetupCategorys = res.data.productPriceSetupCategory;
                  //  this.getcats = res.data.productCategory;
                  //  this.productPriceSetupProducts = res.data.productPriceSetupProduct;
                })
            },

           showUnitList(e){
          this.adv_sales_priceLists = [];
       axios.get('showUnitListModal/'+e).then(res => {
              this.adv_sales_priceLists = res.data.data;
              this.inward = res.data.inward;
          });
          $("#unitListModal").modal("show");
        },

     

                     showProduct() {
                $("#table ").on("change", function () {
        // Get the value from the select box
        var value = $(this).val();

        // Do what you need to do with value

        // Reset the select back to the first option
        $(this).val("default");


          $(document).ready(function () {
            $.fn.dataTable.ext.errMode = 'none';
        $("#sampleTable ").DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax: "/categoryWithProductList/"+value,

          columns: [
            {
              data: "id",
            },
           
           
            {
              data: "product",
              name: "product.productName",
            },
            {
              data: "brand",
              name: "brand.productBrandName",
            },
            {
              data: "color.colorName",
            },
            {
              data: "size.sizeName",
            },
            {
              data: "quantity",
               render: function (data,type, row) {
                var ok =
                  '<button type="button" onclick="showUnitList(' +
                  row.id +
                  ')"     class="btn btn-hover-shine btn-outline-info">'+data+' </button>';
    
                return ok;
              },
            },
            {
              data: "totalPrice",
            
            },
            // {
            //   data: "brandId",
            //    render: function (data, row) {
            //     var ok =
            //       '<button type="button" onclick="repurchase(' +
            //       data +
            //       ')"     class="btn btn-hover-shine btn-outline-info"><i class="fa fa-info" aria-hidden="true"></i>&nbsp;Re-Purchase </button>';
    
            //     return ok;
            //   },
            // },
           
           
          ],
       
      })
      })
      });
  
                     },
  //  },
  //           showProduct(){
  //              axios.get(`brandWithProductList/${this.brandId}`).then(res =>{
                 
  //                  this.purchaseProductLists = res.data.purchaseProductLists;
  //                  this.listShow=true
  //               })
  //           },
           purchaseProductIdCatch(purchaseProductId){
          this.modelNo = '';
          this.batchNo = '';
          this.qrCode = '';
          this.mfgLicenseNO = '';
          this.warranty = '';
          this.selectMothOrYearWarranty = '';
          this.guarantee = '';
          this.selectMothOrYearGuarantee = '';
          this.mfgDate = '';
          this.expiryDate = '';
          this.tax = '';
          this.taxAmount = '';
          this.taxAmountType = '';
          this.quantityType = '';
          this.quantityNoti = '';
          this.proDescription = '';
          this.proAdvantage = '';
          axios.get('/stockSummaryProductDetails/'+purchaseProductId).then(res => {
                this.modelNo = res.data.purchaseProductDetails.modelNo
                this.batchNo = res.data.purchaseProductDetails.batchNo
                this.qrCode = res.data.purchaseProductDetails.qrCode
                this.mfgLicenseNO = res.data.purchaseProductDetails.mfgLicenseNO
                this.warranty = res.data.purchaseProductDetails.warranty
                this.selectMothOrYearWarranty = res.data.purchaseProductDetails.selectMothOrYearWarranty
                this.guarantee = res.data.purchaseProductDetails.guarantee
                this.selectMothOrYearGuarantee = res.data.purchaseProductDetails.selectMothOrYearGuarantee
                this.mfgDate = res.data.purchaseProductDetails.mfgDate
                this.expiryDate = res.data.purchaseProductDetails.expiryDate
                this.tax = res.data.purchaseProductDetails.tax
                this.taxAmount = res.data.purchaseProductDetails.taxAmount
                this.taxAmountType = res.data.purchaseProductDetails.taxAmountType
                this.quantityType = res.data.purchaseProductDetails.quantityType
                this.quantityNoti = res.data.purchaseProductDetails.quantityNoti
                this.proDescription = res.data.purchaseProductDetails.proDescription
                this.proAdvantage = res.data.purchaseProductDetails.proAdvantage
          });
       },
            conditon(){
                axios.get('/condition').then(res =>{
                   this.role = res.data.authInfo;
                })
            },
        },
            created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    window.showUnitList = this.showUnitList;
    },
    }
</script>
