<template id="">
  <span>

  



    <div class="card">
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Sales Order </h4>
      </div>

      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
            <thead>
            <tr>
                <th colspan="12" class="text-center"> 
                  <center>
                    <form method="" @submit.prevent="changeData()">
                      <table class="">
                        <tr>
                            <td> 
                                <multiselect
                          @input="productSupplierId"
                          label="productSupplierName"
                          placeholder="Select Supplier"
                          :options="productSupplierLists"
                          :show-labels="false"
                          v-model="form.productSupplierListId"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('productSupplierId'),
                          }"
                          style="
                            padding: 0px !important;
                            padding-bottom: 3px !important;
                          "
                        >
                        </multiselect>
                        <has-error :form="form" field="productSupplierId"></has-error>
                            </td>
                           <td> 
                                <multiselect
                  @input="selectBrandId"
                  label="productBrandName"
                  placeholder="Brand"
                  :options="newBrandLists"
                  :show-labels="false"
                  v-model="form.brandListId"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('brandId') }"
                  style="
                    padding: 0px !important;
                    padding-bottom: 3px !important;
                  "
                >
                </multiselect>
                            </td>
                            
                        </tr>
                      </table>
                  </form>
                  </center> 
                   </th>
              </tr>
              </thead>
              </table>
 

            <table class="table table-bordered table-striped table-hover">
            <thead> 
              <tr>
                <th rowspan="2">SL</th>
                <th rowspan="2">Product Name</th>
                <th rowspan="2">T.P Rate</th>
                <th rowspan="2"> Carton or Cais </th>
                <th colspan="3" class="text-center"> Receive </th>
                <th colspan="3" class="text-center"> Return </th>
                <th rowspan="2"> Sales Price </th> 
                <th rowspan="2"> Total Sale </th> 
              </tr>
              <tr>
                <th>Carton</th>
                <th>PCs</th>
                <th>Total</th>

                <th>Good</th>
                <th>Damaged</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="productNameList,index in productNameLists">
              <td>{{++index}}</td>
              <td>{{productNameList.productName}}  </td>
              <td> {{parseFloat(productNameList.tpRate).toFixed(3)}}
              <input v-bind:id="'tpRate-'+productNameList.productSerialId" type="hidden" :value="productNameList.tpRate">
              <input v-bind:id="'purchaseRate-'+productNameList.productSerialId" type="hidden" :value="productNameList.purchaseRate">
              <input v-bind:id="'productId-'+productNameList.productSerialId" type="hidden" :value="productNameList.productNameId">
              <input v-bind:id="'brandId-'+productNameList.productSerialId" type="hidden" :value="productNameList.brandId">
              <input v-bind:id="'colorId-'+productNameList.productSerialId" type="hidden" :value="productNameList.colorId">
              <input v-bind:id="'sizeId-'+productNameList.productSerialId" type="hidden" :value="productNameList.sizeId">
              <input v-bind:id="'priceTypeId-'+productNameList.productSerialId" type="hidden" :value="productNameList.priceTypeId">
              <input v-bind:id="'availableStock-'+productNameList.productSerialId" type="hidden" :value="productNameList.availableStock">
              <input v-bind:id="'availableCarton-'+productNameList.productSerialId" type="hidden" :value="productNameList.availableCarton">
              <input v-bind:id="'disabled-'+productNameList.productSerialId" type="hidden" :value="productNameList.disabled">
              </td>
              <td> 
                <span v-if="productNameList.disabled">1</span>
                <span v-else>{{productNameList.carton}}</span>
               {{productNameList.unit}} 
              <input v-bind:id="'pcsQuantity-'+productNameList.productSerialId" type="hidden" :value="productNameList.carton">
              <input v-bind:id="'unitId-'+productNameList.productSerialId" type="hidden" :value="productNameList.unitId">
              <input v-bind:id="'unit-'+productNameList.productSerialId" type="hidden" :value="productNameList.unit">
              </td>
              <td>
            
                <input v-bind:id="'carton-'+productNameList.productSerialId" :placeholder="productNameList.availableCarton" :disabled="productNameList.disabled ? '' : disabled" @keyup="totalCalculate(productNameList.productSerialId)"
                onkeyup="value=value.replace(/[^0-9^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.').replace(/^0+/, '')"
                type="text" class="form-control carton" style="width:100px;"> </td>
              <td> <input v-bind:id="'pcs-'+productNameList.productSerialId"  :placeholder="productNameList.availableStock" @keyup="totalCalculate1(productNameList.productSerialId)"
              onkeyup="value=value.replace(/[^0-9^\.]+/g,'').replace('.','$#$').replace(/\./g,'').replace('$#$','.').replace(/^0+/, '')"
              type="text" class="form-control pcs" style="width:100px;"> </td>
              <td>
                <span v-bind:id="'totalText-'+productNameList.productSerialId"></span>
                <input v-bind:id="'total-'+productNameList.productSerialId" type="hidden" class="form-control" style="width:100px;">
              </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>
                <span v-bind:id="'totalPriceText-'+productNameList.productSerialId"></span>
                <input v-bind:id="'totalPrice-'+productNameList.productSerialId" type="hidden" class="form-control" style="width:100px;">
              </td>
              <td>  </td>
              </tr>
              
              <tr>
                <td colspan="10" class="text-right">  Total</td>
                <td>  {{parseFloat(form.totalAmount).toFixed(3)}}</td>
                <td>  </td>
              </tr>
            </tbody>

            
              
       
            
          </table>

<table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
            <thead>
            <tr>
                <th colspan="12" class="text-center"> 
                  <center>
                    <form method="" @submit.prevent="orderSubmit()">
                      <table class="">
                        <tr>
                          
                            <td> 
 
                                <multiselect v-if="customerStatus"
                                @input="customerIdCatch"
                          placeholder="Select Customer"
                          :options="salesCustomerLists"
                          :show-labels="false"
                          v-model="form.customerListId"
                          :custom-label="salesCustomerName"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('customerListId'),
                          }"
                          style="
                            padding: 0px !important;
                            padding-bottom: 3px !important;
                          "
                        >
                        </multiselect>
                        <has-error :form="form" field="customerListId"></has-error>
                            </td>
                          
                            <td> 
                                <multiselect v-if="srStatus"
                                @input="selectSr"
                          placeholder="Select SR"
                          :options="srLists"
                          :show-labels="false"
                          v-model="form.srListId"
                          :custom-label="customLabelSr"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('srListId'),
                          }"
                          style="
                            padding: 0px !important;
                            padding-bottom: 3px !important;
                          "
                        >
                        </multiselect>
                            </td>
                           <td> 
                                <multiselect v-if="dsrStatus"
                                @input="selectDsr"
                  label="fullName"
                  placeholder="Select DSR"
                  :options="dsrLists"
                  :show-labels="false"
                  v-model="form.dsrListId"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('dsrListId') }"
                  :custom-label="customLabel"
                  style="
                    padding: 0px !important;
                    padding-bottom: 3px !important;
                  "
                >
                </multiselect>
                            </td>
                            
                            <td> 
                                <input type="date" v-model="form.OrderRequestDate" :class="{
                            'is-invalid': form.errors.has('OrderRequestDate'),
                          }" class="form-control" placeholder="Select Date" style="width:150px;">
                           <has-error :form="form" field="OrderRequestDate"></has-error>
                           </td>
                             
                            <td> 
                              <button
                            type="button"
                            @click.prevent="orderSubmit()"
                            class="
                              mt-3
                              btn-pill btn-shadow 
                              fsize-1
                              btn btn-primary float-right
                            "
                          :disabled="loading"
                            >
                              <span
                                v-if="loading"
                                class="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>

                              <span v-else class="mr-2 opacity-7">
                                <i class="fa fa-paper-plane"></i>
                              </span>
                                          <span class="mr-1"> Submit </span>
                                        </button> </td>
                            
                        </tr>
                      </table>
                  </form>
                  </center> 
                   </th>
              </tr>
              </thead>
              </table>
 
        </div>
      </div>
    </div>



    
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
                <th> Amount </th>
                <th> View </th> 
                <th> Edit </th> 
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
                 <td>{{ info.totalPriceRequest }}</td>
                <td>
                  <router-link
                    :to="`/viewSalesOrder${info.id}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
                  ><i class="fa fa-eye"></i> View </router-link>
                </td>
                <td>
                  <router-link
                    :to="`/receiveSalesOrder${info.id}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
                  ><i class="fa fa-eye"></i> Edit </router-link>
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
      srStatus: 0,
      dsrStatus: 0,
      

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
                          t_colorId:'',
                          t_sizeId:'',
                          t_tpRate:'',
                          t_purchaseRate:'',
                          t_unitId:'',
                          t_unit:'',
                          t_perPcsQuantity:'',
                          t_carton:'',
                          t_pcs:'',
                          t_priceTypeId:'',
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
      

      var productId = parseFloat($('#productId-'+id).val());
      var brandId = parseFloat($('#brandId-'+id).val());
      var colorId = parseFloat($('#colorId-'+id).val());
      var sizeId = parseFloat($('#sizeId-'+id).val());
      var unitId = parseFloat($('#unitId-'+id).val());
      var priceTypeId = parseFloat($('#priceTypeId-'+id).val());
      var tpRate = $('#tpRate-'+id).val();
      var purchaseRate = $('#purchaseRate-'+id).val();
      var fixedPcs = parseFloat($('#pcsQuantity-'+id).val());
      var carton1 = parseFloat($('#carton-'+id).val());
      var pcs = parseFloat($('#pcs-'+id).val());
      var availableStock = parseFloat($('#availableStock-'+id).val());
      var unit = $('#unit-'+id).val();
      var pcs1 = 0;
      var totalPcs = 0;
      var totalPrice = 0;
      if(pcs>0){
        pcs1 = pcs;
      }

      if(carton1>0){
        var carton = carton1;
      }else{
        var carton = 0;
      }

          this.form.t_productId = productId;
          this.form.t_brandId = brandId;
          this.form.t_colorId = colorId;
          this.form.t_sizeId = sizeId;
          this.form.t_tpRate = tpRate;
          this.form.t_purchaseRate = purchaseRate;
          this.form.t_priceTypeId = priceTypeId;
          this.form.t_unitId = unitId;
          this.form.t_unit = unit;
          this.form.t_perPcsQuantity = fixedPcs;
          this.form.t_carton = carton;
          this.form.t_pcs = pcs1; 
          
          var total = (fixedPcs*carton)+pcs1;
          // alert(availableStock);

      if(total>availableStock){
          Toast.fire({
                icon: "error",
                title: "Invalid Stock. available stock "+availableStock+' '+unit,
              });
            $('#carton-'+id).val('');
            $('#total-'+id).val('');
            $('#totalText-'+id).html('');
            $('#totalPriceText-'+id).html('');
            $('#totalPrice-'+id).val('');
      }else{
        
         totalPrice = parseFloat(total*tpRate).toFixed(2);
         totalPcs = total;
        $('#total-'+id).val(total);
        $('#totalText-'+id).html(total+' '+unit);
        $('#totalPriceText-'+id).html(totalPrice);
        $('#totalPrice-'+id).val(totalPrice);
      }
      



      this.form.t_totalPcs =  totalPcs;
      this.form.t_totalPrice = totalPrice; 

      this.changeData();
 
      
      
    },
    totalCalculate1(id){

      var productId = parseFloat($('#productId-'+id).val());
      var brandId = parseFloat($('#brandId-'+id).val());
      var colorId = parseFloat($('#colorId-'+id).val());
      var sizeId = parseFloat($('#sizeId-'+id).val());
      var unitId = parseFloat($('#unitId-'+id).val());
      var priceTypeId = parseFloat($('#priceTypeId-'+id).val());
      var tpRate = parseFloat($('#tpRate-'+id).val());
      var purchaseRate = parseFloat($('#purchaseRate-'+id).val());
      var fixedPcs = parseFloat($('#pcsQuantity-'+id).val());
      var carton1 = parseFloat($('#carton-'+id).val());
      var pcs = parseFloat($('#pcs-'+id).val());
      var availableStock = parseFloat($('#availableStock-'+id).val());
      var unit = $('#unit-'+id).val();

      if(carton1>0){
        var carton = carton1;
      }else{
        var carton = 0;
      }

          this.form.t_productId = productId;
          this.form.t_brandId = brandId;
          this.form.t_colorId = colorId;
          this.form.t_sizeId = sizeId;
          this.form.t_tpRate = tpRate;
          this.form.t_purchaseRate = purchaseRate;
          this.form.t_unitId = unitId;
          this.form.t_priceTypeId = priceTypeId;
          this.form.t_unit = unit;
          this.form.t_perPcsQuantity = fixedPcs;
          this.form.t_carton = carton;
          this.form.t_pcs = pcs;


          if(carton>0){
         var total = fixedPcs*carton;
        }else{
          var total = 0;
        }
        var total1 = total+pcs;
          
      


      if(total1>availableStock){
        var totalPcs = 0;
        var totalPrice = 0;
          Toast.fire({
                icon: "error",
                title: "Invalid Stock. available stock "+availableStock+' '+unit,
              });

              //this.changeData();
            
            $('#carton-'+id).val('');
            $('#pcs-'+id).val('');
            $('#total-'+id).val('');
            $('#totalText-'+id).html('');
            $('#totalPriceText-'+id).html('');
            $('#totalPrice-'+id).val('');
      }
      else{
      if(fixedPcs>pcs){

      
        var totalPcs = total1;
        var totalPrice = parseFloat(total1*tpRate).toFixed(2);
        $('#total-'+id).val(total1);
        $('#totalText-'+id).html(total1+' '+unit);

        $('#totalPriceText-'+id).html(totalPrice);
        $('#totalPrice-'+id).val(totalPrice);
      
      }
      else{
        
        var totalPcs = total;
        var totalPrice = parseFloat(total*tpRate).toFixed(2);
        $('#pcs-'+id).val('');
        $('#total-'+id).val(total);
        $('#totalText-'+id).html(total+' '+unit);

        $('#totalPriceText-'+id).html(totalPrice);
        $('#totalPrice-'+id).val(totalPrice);

        // Toast.fire({
        //         icon: "error",
        //         title: "Sorry...",
        //       });
      }
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
        .get("/saleOrderRequestList")
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

      // $(".carton").prop('disabled', true);
      // $(".pcs").prop('disabled', true);

      this.loading=true;
      
      let url = 'saleOrderRequest';
      this.form.post(url).then((response) => {

      // $(".carton").prop('disabled', false);
      // $(".pcs").prop('disabled', false);

      this.loading=false;

      this.form.totalAmount = response.data.total;
          
        }).catch((error) => {
            
            // $(".carton").prop('disabled', false);
            // $(".pcs").prop('disabled', false);

            this.loading=false;

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