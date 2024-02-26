<template id="">
  <span>

  



    <div class="card">
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Customer Report Details</h4>
      </div>

      <div class="supplier-entry py-4 px-2">

        
           
                              <button
                                id="printInvoice"
                                onclick="jQuery('#salesReport').print()"
                                class="btn btn-info float-right mr-2">
                                <i class="fa fa-print"></i> Print
                              </button>
        
        
         <div class="card-body table-responsive bg-white" id="salesReport">
           

        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
                        <tr>
                            <th colspan="4" class="text-center"> {{gets.companyName}} </th>
                        </tr>
                        <tr>
                          <td style="width:325px;"> Customer : <span v-if="requisitionInformation.customer">{{requisitionInformation.customer.customerName}}</span> </td>
                          <td style="width:325px;"> Company : <span v-if="requisitionInformation.supplier">{{requisitionInformation.supplier.productSupplierName}}</span> </td>
                          <td style="width:400px;" class="text-left"> Brand : <span v-if="requisitionInformation.brand"> {{requisitionInformation.brand.productBrandName}}</span> </td>
                          <td style="width:150px;"> {{moment(requisitionInformation.dateTime).format("DD MMMM YYYY")}} </td>
                          </tr>
                        

                      </table>
                   
 

            <table class="table table-bordered table-striped table-hover">
            <thead> 
              <tr>
                <td>SL</td>
                <td>Product Name</td>
                <td>T.P Rate</td>
                <td>Per Carton</td>
                <td>Sale Qnt </td>
                <td>Sale Price </td>
                <td>Purchase Price </td>
                <td>Profit </td>
              </tr>
              
            </thead>

            <tbody>
              <tr v-for="productNameList,index in productNameLists">
              <td>{{++index}}</td>
              <td>{{productNameList.productName}}  </td>
              <td> {{parseFloat(productNameList.tpRate).toFixed(2)}} </td>
              <td>{{productNameList.perCarton}}  {{productNameList.perCartonUnitName}}  </td>
              <td>{{productNameList.totalPieceSale}}  {{productNameList.perCartonUnitName}} </td>
              <td>{{productNameList.totalPriceSale}}  </td>
              <td>{{productNameList.totalPurchase}}  </td>
              <td>{{productNameList.profit}}  </td>
           
             
              </tr>
              <tr>
                <th colspan="5" class="text-right"> Total</th>
                <th>{{sale}}</th>
                <th>{{purchase}}</th>
                <th>{{profit}}</th>
              </tr>

            </tbody>
            
          </table>
 
        </div>
      </div>
    </div>



    
    

  </span>
</template>


<script>
import Multiselect from "vue-multiselect";
import moment from 'moment';
export default {

  
  data() {
    return {
      
      productSupplierLists:[],
      newBrandLists: [],
      productNameLists: [],
      resultNotFound: false,
      customerStatus: 1,
      srStatus: 1,
      dsrStatus: 1,

      salesCustomerLists: [],
      requisitionInformation: [],

      sale:0,
      purchase:0,
      profit:0,

      srLists: [],
      dsrLists: [],
      gets:[],

      moment: moment,
      loading:false,

 
      form: new Form({
                        
                        
                        OrderApproveDate:  moment().format("YYYY-MM-DD"),
                        salesRequestId:'',
      }),
       
    };
  },
    components: {
    Multiselect,
  },
  mounted(){
    this.getInvoiceSetupInformation();
    this.getDataForShow();
    this.getSrDsrList();
    this.customerType();
  },
  methods: {


    
    getInvoiceSetupInformation() {
    let uri = `getInvoiceSetupInformation/3`;
    axios.get(uri).then((response) => {
      this.gets = response.data.data;
    }); 
  },



            getDataForShow(){

                axios.get('/salesSupplierSearchDetails/'+this.$route.params.id)
                    .then(res=>{
                        this.requisitionInformation = res.data.data;
                        this.reqProductList(res.data.data.supplierId,res.data.data.brandId,res.data.data.dateTime);
                    })
            },
    totalCalculate(id){


      
      var rendomNumber = $('#rendomNumber-'+id).val();
      var productId = parseFloat($('#productId-'+id).val());
      var brandId = parseFloat($('#brandId-'+id).val());
      var unitId = parseFloat($('#unitId-'+id).val());
      var tpRate = parseFloat($('#tpRate-'+id).val());
      var reqQnt = parseFloat($('#reqQnt-'+id).val());
      var reqPrice = parseFloat($('#reqPrice-'+id).val());
      var carton = parseFloat($('#carton-'+id).val());
      var pcs = parseFloat($('#pcs-'+id).val());
      var unit = $('#unit-'+id).val();
      var pcs1 = 0;
      var totalPcs = 0;
      var totalPrice = 0;
      
      if(pcs>0){
        pcs1 = pcs;
      }
      if(carton>0){
        carton = carton;
      }
      else{
        carton = 0;
      }

          // this.form.t_productId = productId;
          // this.form.t_brandId = brandId;
          // this.form.t_tpRate = tpRate;
          // this.form.t_unitId = unitId;
          // this.form.t_unit = unit;
          // this.form.t_perPcsQuantity = fixedPcs;

          
          
      if(carton>0){
        var total = (carton)+pcs1;
        
         totalPcs = total;
         var totalSale = reqQnt-totalPcs;
         var totalSalePrice = parseFloat(tpRate*totalSale).toFixed(2);

        $('#total-'+id).val(total);
        $('#totalText-'+id).html(total+' '+unit);
        
        $('#totalSaleText-'+id).html(totalSale);
        $('#totalSale-'+id).val(totalSale);

        $('#totalSalePriceText-'+id).html(totalSalePrice);
        $('#totalSalePrice-'+id).val(totalSalePrice);
      }
      else{
        $('#total-'+id).val('');
        $('#totalText-'+id).html('');

        $('#totalPriceText-'+id).html('');
        $('#totalPrice-'+id).val('');
      }



      this.form.t_id =  id;
      this.form.rendomNumber =  rendomNumber;
      this.form.t_carton = carton;
      this.form.t_pcs = pcs1; 
      this.form.t_returnQuantity =  totalPcs;
      this.form.t_saleQuantity =  totalSale;
      this.form.t_totalPrice = totalSalePrice; 

      this.form.totalSalesAmount = totalSalePrice;
  
    },
    totalCalculate1(id){

      // $(".carton").prop('disabled', true);
      // $(".pcs").prop('disabled', true);

      var rendomNumber = $('#rendomNumber-'+id).val();
      var productId = parseFloat($('#productId-'+id).val());
      var brandId = parseFloat($('#brandId-'+id).val());
      var unitId = parseFloat($('#unitId-'+id).val());
      var tpRate = parseFloat($('#tpRate-'+id).val());
      var reqQnt = parseFloat($('#reqQnt-'+id).val());
      var reqPrice = parseFloat($('#reqPrice-'+id).val());
      var carton = parseFloat($('#carton-'+id).val());
      var pcs = parseFloat($('#pcs-'+id).val());
      var unit = $('#unit-'+id).val();

          // this.form.t_productId = productId;
          // this.form.t_brandId = brandId;
          // this.form.t_tpRate = tpRate;
          // this.form.t_unitId = unitId;
          // this.form.t_unit = unit;
          // this.form.t_perPcsQuantity = fixedPcs;
          // this.form.t_carton = carton;
          // this.form.t_pcs = pcs;
          
      
     

      if(pcs>0){  
        var total = carton;
        var total1 = total+pcs;
        var totalPcs = total1;
        var totalSale = reqQnt-totalPcs;
        var totalSalePrice = parseFloat(tpRate*totalSale).toFixed(2);

        $('#total-'+id).val(total1);
        $('#totalText-'+id).html(total1+' '+unit);

        $('#totalSaleText-'+id).html(totalSale);
        $('#totalSale-'+id).val(totalSale);

        $('#totalSalePriceText-'+id).html(totalSalePrice);
        $('#totalSalePrice-'+id).val(totalSalePrice);
      }
      else{
        var total = fixedPcs*carton;
        var totalPrice = parseFloat(total*tpRate).toFixed(2);
        var totalPcs = total;
        $('#total-'+id).val(total);
        $('#totalText-'+id).html(total+' '+unit);

        $('#totalPriceText-'+id).html(totalPrice);
        $('#totalPrice-'+id).val(totalPrice);
      }
      
      


      this.form.t_id =  id;
      this.form.rendomNumber =  rendomNumber;
      this.form.t_carton = carton;
      this.form.t_pcs = pcs; 
      this.form.t_returnQuantity =  totalPcs;
      this.form.t_saleQuantity =  totalSale;
      this.form.t_totalPrice = totalSalePrice;
 
      this.form.totalSalesAmount = totalSalePrice;
      // this.changeData();
      
    },

    customerIdCatch(value){
      this.form.customerId = value.salesCustomerEntryId
    },
    selectSr(value){
      this.form.srId = value.shopEmployeeEntryId
    },
    selectDsr(value){
      this.form.dsrId = value.shopEmployeeEntryId
    },

    customerType() {
      axios
        .get("/shopPriceCustomerType")
        .then((res) => {
          this.form.customerTypeId = res.data.customerType;
          this.customerTypeIdCatch();
        });
    
 
    },

    customerTypeIdCatch() {
      axios
        .get("/customerTypeIdCatch/" + this.form.customerTypeId)
        .then((res) => {
          this.salesCustomerLists = res.data.salesCustomerLists;
        });
    
 
    },
 
    
    salesCustomerName({ customerName,customerPhone }) {
      return `${customerName} — ${customerPhone}`;
    },

    customLabelSr ({ fullName, phoneNumber }) {
          return `${fullName} — ${phoneNumber}`
        },
    
    customLabel ({ fullName, phoneNumber }) {
          return `${fullName} — ${phoneNumber}`
        },
    
    productListShows() {
      axios.get("/productName").then((res) => {
        this.productNameLists = res.data.productNameList;
      });
    },
 
    
    ShowDataLists() {
      axios.get("/productBrandListPurchase").then((res) => {
        this.newBrandLists = res.data.shopProductBrandList;
      });
    },
    
    productSupplierList() {
      axios.get("/shopWishProductSupplier").then((res) => {
        this.productSupplierLists = res.data.productSupplierList;
      });
    },

    

            reqProductList(sid,bid,date) {
       
      axios
        .get("/supplierBrandList/" + sid+'/'+ bid+'/'+ date)
        .then((res) => {
          this.productNameLists  = res.data.productList;
          this.sale = res.data.sale;
          this.purchase = res.data.purchase;
          this.profit = res.data.profit;
        });
    },
            getSrDsrList() {
      
      axios
        .get("/getSrDsrList")
        .then((res) => {
          this.srLists  = res.data.srList
          this.dsrLists  = res.data.dsrList
        });
    },

            changeData() {

              
      $(".carton").prop('disabled', true);
      $(".pcs").prop('disabled', true);
      
      let url = 'orderReceiveRequest';
      this.form.post(url).then((response) => {

        this.form.totalSalesAmount = response.data.total;

      $(".carton").prop('disabled', false);
      $(".pcs").prop('disabled', false);
          
        }).catch((error) => {
            
            $(".carton").prop('disabled', false);
            $(".pcs").prop('disabled', false);

          });
    },

    orderSubmit() {
      this.loading = true;
      let url = 'salesProductEntryDealerApprove/'+this.form.salesRequestId;
      axios.get(url).then((res) => {

                Toast.fire({
                    icon: "success",
                    title: "Order Submit Successful.",
                });

                this.$router.push('/order@final@list');

                // this.form.productSupplierListId = '';
                // this.form.brandListId = '';
                // this.productNameLists = [];
                // this.view();
                // this.form.reset();
                // this.form.rendomNumber = '',
                // this.form.OrderRequestDate = moment().format("YYYY-MM-DD"),

                this.loading = false;
     
        }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },
   
  },
};
</script>