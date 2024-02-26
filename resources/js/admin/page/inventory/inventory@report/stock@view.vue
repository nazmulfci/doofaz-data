<template>
  <span>
    <div class="card main-card  element-block-example">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Stock Summary Report</h3>
      </div>
      <div class="table-responsive bg-white p-2">
        <table class="table table-hover table-bordered table-striped" width="1250px" id="sampleTable">
          <thead>
             <tr>
               <th>SN</th>
               <th>Product.Name</th>
               <th>Brand.Name</th>              
               <th>Color</th>              
               <th>Size</th>              
               <th>Quantity</th>
               <th>Unit</th>      
               <th>Total Price</th>
               <th>View</th>
               
             </tr>
            </thead>
            <tbody>
            
            </tbody>
         </table>
            <!-- Modal Re purchase -->
                <div class="modal fade" id="reper" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header bg-primary text-light" >
                        <h5 class="modal-title" id="exampleModalLongTitle">Product Details</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                  <div class="modal-body">
                     <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered  table-striped">
           <thead>
              <tr>
                 <th>SN</th>
                 <th>Purchase Date</th>
                 <th>Product Name</th>
                 <th>Quantity</th>
                 <th>Unit</th>
                 <th>Unit Price</th>
                 <th>Discount</th>
                 <th>Total Price</th>
      
               </tr>
            </thead>
            <tbody>
              <tr v-for="(re, index) in rePurchases.data">
                <td>{{ index+1 }}</td>
                <td>{{ re.created_at }}</td>
                <td v-if="re.product_name">{{ re.product_name.productName }} ({{ re.product_name.productCode }})</td>
              
                 
                <td v-if="re.unit_name">{{ re.unit_name.uniteEntryName }}</td>
                 <td>{{ re.quantity }}</td>
                <td>{{ re.unitPrice }}</td>
                <td>{{ re.percetage }}&nbsp;%</td>
                <td>{{ re.totalPrice }}</td>
            
               
              </tr>
            </tbody>
        </table>
       </div>
            <span class="card_footer">
          <pagination :data="rePurchases" :limit="limit"  @pagination-change-page="getpagilist">
            <span slot="prev-nav">&lt; Previous</span>
            <span slot="next-nav">Next &gt;</span>
          </pagination>
       </span>         
                    
                      </div>
                        <div class="modal-footer">
                           <button type="button" class="btn btn-hover-shine btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                  </div>
                </div>
                <!-- Modal -->
                
        </div>
      
     </div>





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
                            <!-- <tr v-for="advanceUnitSetupList in adv_sales_priceLists">
                          
                           <td> {{advanceUnitSetupList.quantity}}   <span
                                    v-for="unitNameShow in unitNameShows"
                                    :value="unitNameShow.uniteEntryId"
                                    v-if="unitNameShow.uniteEntryId==advanceUnitSetupList.unitId"
                                  >
                                    {{ unitNameShow.uniteEntryName }}
                                  </span> </td>
                          
                           <td> {{advanceUnitSetupList.totalQuantity}}  <span
                                    v-for="unitNameShow in unitNameShows"
                                    :value="unitNameShow.uniteEntryId"
                                    v-if="unitNameShow.uniteEntryId==advanceUnitSetupList.totalUnitId"
                                  >
                                    {{ unitNameShow.uniteEntryName }}
                                  </span> </td>
 
                                  <td> {{(advanceUnitSetupList.purchaseUnitPrice).toFixed(2)}}</td>
                                  <!-- <td> {{(advanceUnitSetupList.purchaseTotalPrice).toFixed(2)}}</td> -->
                           
                         </tr> -->
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
           rePurchases:{},
           product:'',
           brand:'',
           adv_sales_priceLists:[],
           unitNameShows:[],
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
      this.purchaseProductReport('/stockSummaryProductReport/'+this.$route.params.purchaseProductId);     
       this.getpagilist();
       this.unitNameShow();
       
    },
    methods:{

          unitNameShow() {
      axios.get("/unitNameShow").then((res) => {
        this.unitNameShows = res.data.unitNameShow;
      });
    },


        purchaseProductReport(url1){
       var url=url1;
          
              $(document).ready(function () {
                $.fn.dataTable.ext.errMode = 'none';
        $("#sampleTable ").DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax:url,

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
            },
            {
              data: "unit.uniteEntryName",
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
            {
              data: "id",
               render: function (data,type, row) {
                var ok =
                  '<button type="button" onclick="repurchase(' +
                  data +
                  ')"     class="btn btn-hover-shine btn-outline-info"><i class="fa fa-info" aria-hidden="true"></i>&nbsp;Purchase History </button>';
    
                return ok;
              },
            },
           
           
          ],
       
      })
      });
        },
        showUnitList(e){
          this.adv_sales_priceLists = [];
       axios.get('showUnitListModal/'+e).then(res => {
              this.adv_sales_priceLists = res.data.data;
              this.inward = res.data.inward;
          });
          $("#unitListModal").modal("show");
        },
         repurchase(id) {
        axios.get(`/repurchaseHistory/${this.$route.params.purchaseProductId}/${id}`).then(res => {
            if(res.data.purchaseProduct){
             this.rePurchases=res.data.purchaseProduct 
            }
          });
          
      $("#reper").modal("show");
    },
        purchaseProductIdC(product,brand){
          axios.get(`/repurchase/${product}/${brand}`).then(res => {
            if(res.data.purchaseProduct){
             this.rePurchases=res.data.purchaseProduct 
            }
          });
          this.product=product;
          this.brand=brand;
        },
        getpagilist(page=1){
           axios.get('/repurchase/'+this.product+this.brand+'?page=' + page).then(res => {
            if(res.data.purchaseProduct){
             this.rePurchases=res.data.purchaseProduct 
            }
          });
        },
       
     
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
     },
         created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    window.deleteExpense = this.deleteExpense;

    window.repurchase = this.repurchase;
    window.showUnitList = this.showUnitList;

  },
  }

</script>
