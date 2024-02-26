<template>
  <span>
    <div class="card main-card  element-block-example"  style="margin:0 auto">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Stock Shortage Report</h3>
      </div>
      <div class="table-responsive bg-white p-2">
        <table class="table table-hover table-bordered table-striped" id="sampleTable" width="1300px">
          <thead>
             <tr>
               <th>SN</th>
               <th>Product.Name</th>
               <th>Brand</th>
          
               <!-- <th>Price</th> -->
          
               <!-- <th>Total.Price</th> -->
               <th>Alert.Quantity</th>
             <th>Current.Quantity</th>
                <!-- <th>Mrp.Price</th>
               <th>Sales.Price</th>
               <th>Wholesale.Price</th>
               <th>Special.Price</th>
               <th>Ecommerce.Price</th>  -->
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="(lowQuantityReport, index) in lowQuantityReports.data" v-if="lowQuantityReport.quantityNoti>=lowQuantityReport.purchase_product_info.quantity&&lowQuantityReport.product_price_details">  
                <td>{{ index+1 }}</td>              
                <td>{{ lowQuantityReport.product_name.productName }} ({{ lowQuantityReport.product_name.productCode }})</td>
                  <td v-for="shopProductBrandList in shopProductBrandLists" v-if="lowQuantityReport.purchase_product_info.brandId==shopProductBrandList.productBrandEntryId">{{shopProductBrandList.productBrandName}}</td>
                <td v-if="lowQuantityReport.purchase_product_info">{{ lowQuantityReport.purchase_product_info.unitPrice }}</td>
                <td v-else></td>
                <td v-if="lowQuantityReport.purchase_product_info">{{ lowQuantityReport.purchase_product_info.totalPrice }}</td>
                <td v-else></td>
                <td>
                  <button type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-danger">{{ lowQuantityReport.quantityNoti }}</button>
                </td>
                <td v-if="lowQuantityReport.purchase_product_info">
                    <div><button :class=" lowQuantityReport.purchase_product_info.quantity <=  lowQuantityReport.quantityNoti? 'mr-2 btn-pill btn-hover-shine btn btn-danger': 'mr-2 btn-pill btn-hover-shine btn btn-primary'">{{ lowQuantityReport.purchase_product_info.quantity }}</button></div>
                </td>
                <td v-else></td>
                   <td>{{ lowQuantityReport.product_price_details.mrpPrice }}</td>
                 <td>{{ lowQuantityReport.product_price_details.salesPrice }}</td>
                 <td>{{ lowQuantityReport.product_price_details.wholesalePrice }}</td>
                 <td>{{ lowQuantityReport.product_price_details.specialPrice }}</td>
                 <td>{{ lowQuantityReport.product_price_details.eCommercePrice }}</td>
                    <td>
                   <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" data-toggle="modal" @click="purchaseProductIdCatch(lowQuantityReport.purchaseProductId)" :data-target="'#purchaseProductId'+lowQuantityReport.purchaseProductId">
                      <i class=" fa fa-eye pr-2"></i> Product Details
                   </button>
                </td>

              
              </tr> -->
            </tbody>
         </table>
           <!-- Modal -->
                <div class="modal fade" id="purchaseProductId" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header bg-primary text-light" >
                        <h5 class="modal-title" id="exampleModalLongTitle">Product Details</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                        <div class="modal-body">
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Model Name :</h6></span>
                                <span class="col-6 p-0"><h6>{{ modelNo }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Batch Name :</h6></span>
                                <span class="col-6 p-0"><h6>{{ batchNo }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>QR Code :</h6></span>
                                <span class="col-6 p-0"><h6>{{ qrCode }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Mfg License NO :</h6></span>
                                <span class="col-6 p-0"><h6>{{ mfgLicenseNO }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Warranty :</h6></span>
                                <span class="col-6 p-0">
                                   <h6>
                                       <span  v-if="selectMothOrYearWarranty == 1">
                                           {{ (warranty * 1) }} Day
                                       </span>
                                       <span  v-if="selectMothOrYearWarranty == 2">
                                           {{ (warranty * 30) }} Day
                                       </span>
                                       <span  v-if="selectMothOrYearWarranty == 3">
                                           {{ (warranty * 12) * 30 }} Day
                                       </span>
                                   </h6>
                                </span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Guarantee :</h6></span>
                                <span class="col-6 p-0">
                                   <h6>
                                       <span  v-if="selectMothOrYearGuarantee == 1">
                                           {{ (guarantee * 1) }} Day
                                       </span>
                                       <span  v-if="selectMothOrYearGuarantee == 2">
                                           {{ (guarantee * 30) }} Day
                                       </span>
                                       <span  v-if="selectMothOrYearGuarantee == 3">
                                           {{ (guarantee * 12) * 30 }} Day
                                       </span>
                                   </h6>
                                </span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Mfg Date :</h6></span>
                                <span class="col-6 p-0"><h6>{{ mfgDate }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Expiry Date :</h6></span>
                                <span class="col-6 p-0"><h6>{{ expiryDate }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Tax :</h6></span>
                                <span class="col-6 p-0"><h6>{{ tax }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Tax Amount :</h6></span>
                                <span class="col-6 p-0"><h6>{{ taxAmount }} {{ (taxAmountType == 1)? 'Taka':''}} {{ (taxAmountType == 2)? 'Percetage':''}}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Quantity Type :</h6></span>
                                <span class="col-6 p-0"><h6>{{ (quantityType == 1)? 'Low':''}} {{ (quantityType == 2)? 'Medium':''}} {{ (quantityType == 3)? 'High':''}}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Quantity Notification :</h6></span>
                                <span class="col-6 p-0"><h6>{{ quantityNoti }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Product Description :</h6></span>
                                <span class="col-8 p-0"><h6>{{ proDescription }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Product Advantage :</h6></span>
                                <span class="col-8 p-0"><h6>{{ proAdvantage }}</h6></span>
                              </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                           <button type="button" class="btn btn-hover-shine btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                  </div>
                </div>
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
           lowQuantityReports:{},
           shopProductBrandLists:[],
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
           inward:'',
        }
    },
  
    mounted(){
     
       this.purchaseProductReport();
   
    },
    methods:{

      
             showUnitList(e){
          this.adv_sales_priceLists = [];
       axios.get('showUnitListModal/'+e).then(res => {
              this.adv_sales_priceLists = res.data.data;
              this.inward = res.data.inward;
          });
          $("#unitListModal").modal("show");
        },

        purchaseProductReport(){
       

         
                function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }
      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          ajax: "/stockShortageProductReport",
            
          columns: [
            {
              data: "purchaseProductDetailsId",
            },
          
            {
              data: "productName",name:"productName.productName"
            },         
           
            {
              data: "brand",name:"productPriceDetails.brandName.productBrandName"
            },         
           
            {
               data: "quantityNoti",render:function(data){
                    return   '<button type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-danger">'
                       +data+
                       '</button>'
               }
            },
            {
              data: "quantity",
               render: function (data,type, row) {
                var ok =
                  '<button type="button" onclick="showUnitList(' +
                  row.id +
                  ')"     class="mr-2 btn-pill btn-hover-shine btn btn-danger">'+data+' </button>';
    
                return ok;
              },
            },
            {
              data: "purchaseProductId",
              render: function (data) {
                var ok =
                  '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="purchaseProductIdCatch(' +
                  data +
                  ')">' +
                
                  "Details</button>";
                return ok;
              },
            },
           
          ],
        });
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
 $("#purchaseProductId").modal("show");
       },
     
     },
     created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    window.showUnitList = this.showUnitList;
    window.deleteExpense = this.deleteExpense;

    window.purchaseProductIdCatch = this.purchaseProductIdCatch;

  },
  }

</script>
