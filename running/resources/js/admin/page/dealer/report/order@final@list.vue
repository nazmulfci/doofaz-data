<template id="">
  <span>

    
    
    <div class="card mt-5">
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          View Information </h4>
      </div>

      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
            <thead>
              <tr>
                <th>SL</th>
                <th>Date</th>
                <th>Company</th>
                <th> Customer </th>
                <th> Sales Amount </th>
                <th> Pev. Due </th>
                <th> Total </th>
                <th> Collection </th>
                <th> Due </th>
                <th> View </th> 
              </tr>
            </thead>
            <tbody>
              <tr
              v-for="info,index in requisitionInformations" 
              :key="info.id">
                <td>{{ ++index }}</td>
                <td> {{moment(info.OrderRequestDate).format("DD MMMM YYYY")}} </td>
               
                <td><span v-if="info.supplier">{{ info.supplier.productSupplierName }}</span></td>
                <td><span v-if="info.customer">{{ info.customer.customerName }}</span></td>
                <td> <span v-if="info.totalSalesAmount">{{ info.totalSalesAmount }}</span><span v-else>0</span></td>
                <td> <span v-if="info.previousDue">{{ info.previousDue }}</span><span v-else>0</span></td>
                <td> <span v-if="info.currentTotalAmount">{{ info.currentTotalAmount }}</span><span v-else>0</span></td>
                <td>
                  <span v-if="info.currentPaidAmount">Cash : {{ info.currentPaidAmount }}</span><span v-else>Cash : 0</span>
                  </br>
                  <span v-if="info.mobileAmount">Bank ({{info.receiverAccNo}}) : {{ info.mobileAmount }}</span><span v-else>Bank : 0</span>
                  <hr>
                  Total : {{ info.currentPaidAmount+info.mobileAmount }}
                  </td>
                <td><span v-if="info.currentDue">{{ info.currentDue }}</span><span v-else>0</span></td>
                <td>
                  <router-link
                    :to="`/viewSalesFinalOrder${info.salesRequestId}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
                  ><i class="fa fa-eye"></i> View </router-link>
                </td>
                
                 
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
      requisitionInformations: [],

      srLists: [],
      dsrLists: [],

      moment: moment,
      loading:false,

 
      form: new Form({
                        rendomNumber: new Date().getTime(),
                        productSupplierId:'',
                        brandId:'',
                        productId:'',
                        customerTypeId:'',
                        customerId:'',
                        customerListId:'',
                        srListId:'',
                        srId:'',
                        dsrListId:'',
                        dsrId:'',
                        // --------------- table variable
                          t_productId:'',
                          t_brandId:'',
                          t_tpRate:'',
                          t_unitId:'',
                          t_unit:'',
                          t_perPcsQuantity:'',
                          t_carton:'',
                          t_pcs:'',
                          t_totalPcs:'',
                          t_totalPrice:'',
                        // --------------- /table variable
                        totalAmount: 0,
                        OrderRequestDate: moment().format("YYYY-MM-DD"),
      }),
       
    };
  },
    components: {
    Multiselect,
  },
  mounted(){
    this.view();
    this.productSupplierList();
    this.getSrDsrList();
    this.customerType();
  },
  methods: {

    totalCalculate(id){
      $(".carton").prop('disabled', true);
      $(".pcs").prop('disabled', true);

      var productId = parseFloat($('#productId-'+id).val());
      var brandId = parseFloat($('#brandId-'+id).val());
      var unitId = parseFloat($('#unitId-'+id).val());
      var tpRate = parseFloat($('#tpRate-'+id).val());
      var fixedPcs = parseFloat($('#pcsQuantity-'+id).val());
      var carton = parseFloat($('#carton-'+id).val());
      var pcs = parseFloat($('#pcs-'+id).val());
      var unit = $('#unit-'+id).val();
      var pcs1 = 0;
      var totalPcs = 0;
      var totalPrice = 0;
      if(pcs>0){
        pcs1 = pcs;
      }

          this.form.t_productId = productId;
          this.form.t_brandId = brandId;
          this.form.t_tpRate = tpRate;
          this.form.t_unitId = unitId;
          this.form.t_unit = unit;
          this.form.t_perPcsQuantity = fixedPcs;
          this.form.t_carton = carton;
          this.form.t_pcs = pcs1; 
          
          
      if(carton>0){
        var total = (fixedPcs*carton)+pcs1;
         totalPrice = parseFloat(total*tpRate).toFixed(2);
         totalPcs = total;
        $('#total-'+id).val(total);
        $('#totalText-'+id).html(total+' '+unit);
        $('#totalPriceText-'+id).html(totalPrice);
        $('#totalPrice-'+id).val(totalPrice);
      }
      else{
        $('#total-'+id).val('');
        $('#totalText-'+id).html('');

        $('#totalPriceText-'+id).html('');
        $('#totalPrice-'+id).val('');
      }



      this.form.t_totalPcs =  totalPcs;
      this.form.t_totalPrice = totalPrice; 

      this.changeData();
 
      
      
    },
    totalCalculate1(id){

      $(".carton").prop('disabled', true);
      $(".pcs").prop('disabled', true);


      var productId = parseFloat($('#productId-'+id).val());
      var brandId = parseFloat($('#brandId-'+id).val());
      var unitId = parseFloat($('#unitId-'+id).val());
      var tpRate = parseFloat($('#tpRate-'+id).val());
      var fixedPcs = parseFloat($('#pcsQuantity-'+id).val());
      var carton = parseFloat($('#carton-'+id).val());
      var pcs = parseFloat($('#pcs-'+id).val());
      var unit = $('#unit-'+id).val();

          this.form.t_productId = productId;
          this.form.t_brandId = brandId;
          this.form.t_tpRate = tpRate;
          this.form.t_unitId = unitId;
          this.form.t_unit = unit;
          this.form.t_perPcsQuantity = fixedPcs;
          this.form.t_carton = carton;
          this.form.t_pcs = pcs;
          
      
      if(fixedPcs>pcs){

      if(pcs>0){
        var total = fixedPcs*carton;
        var total1 = total+pcs;
        var totalPcs = total1;
        var totalPrice = parseFloat(total1*tpRate).toFixed(2);
        $('#total-'+id).val(total1);
        $('#totalText-'+id).html(total1+' '+unit);

        $('#totalPriceText-'+id).html(totalPrice);
        $('#totalPrice-'+id).val(totalPrice);
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
      }
      else{
        var total = fixedPcs*carton;
        var totalPcs = total;
        var totalPrice = parseFloat(total*tpRate).toFixed(2);
        $('#pcs-'+id).val('');
        $('#total-'+id).val(total);
        $('#totalText-'+id).html(total+' '+unit);

        $('#totalPriceText-'+id).html(totalPrice);
        $('#totalPrice-'+id).val(totalPrice);

        Toast.fire({
                icon: "error",
                title: "Sorry...",
              });
      }


      
      this.form.t_totalPcs =  totalPcs;
      this.form.t_totalPrice = totalPrice; 

      this.changeData();
      
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
    view() {
      axios
        .get("/saleOrderFinalList")
        .then((res) => {
          this.requisitionInformations = res.data.data;
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

    
    productSupplierId(value) {
      this.form.productSupplierId = value.productSupplierId;
      axios
        .get("/supplierWiseBrandList/" + value.productSupplierId)
        .then((res) => {
          this.newBrandLists  = res.data.brandList
          this.productNameLists  = res.data.productList
        });
        },
            selectBrandId(value) {
      this.form.brandId = value.productBrandEntryId;
      
      axios
        .get("/brandWiseProductList/" + this.form.productSupplierId +'/'+value.productBrandEntryId)
        .then((res) => {
          this.productNameLists  = res.data.productList
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
      
      let url = 'saleOrderRequest';
      this.form.post(url).then((response) => {

      $(".carton").prop('disabled', false);
      $(".pcs").prop('disabled', false);

      this.form.totalAmount = response.data.total;
          
        }).catch((error) => {
            
            $(".carton").prop('disabled', false);
            $(".pcs").prop('disabled', false);

          });
    },

    orderSubmit() {
      this.loading = true;
      let url = 'saleOrderSubmit';
      this.form.post(url).then((res) => {

                Toast.fire({
                    icon: "success",
                    title: "Order Submit Successful.",
                });
                this.form.productSupplierListId = '';
                this.form.brandListId = '';
                this.productNameLists = [];
                this.view();
                this.form.reset();
                this.form.rendomNumber = new Date().getTime(),
                this.form.OrderRequestDate = moment().format("YYYY-MM-DD"),

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