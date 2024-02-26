<template id="">
  <span>
     <div class="card main-card  element-block-example">
         <div class="card-header">
          <h3><i
            class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
          ></i> Supplier Report </h3>
          </div>
        
           <div class="table-responsive bg-white p-3">


              <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
            <thead>
            <tr>
                <th colspan="12" class="text-center"> 
                  <center>
                    <form method="">
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

                             <td> 
                                <input type="date" v-model="form.OrderRequestDate" :class="{
                                  'is-invalid': form.errors.has('OrderRequestDate'),
                                }" class="form-control" placeholder="Select Date" style="width:150px;">
                                <has-error :form="form" field="OrderRequestDate"></has-error>
                             </td>
                             <td>
                              <button
                            type="button"
                            @click.prevent="searchData()"
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
                                        </button>
                             </td>
                            
                        </tr>
                      </table>
                  </form>
                  </center> 
                   </th>
              </tr>
              </thead>
              </table>
 





        <table class="table table-hover table-striped table-bordered" id="sampleTable">
          <thead>
                <tr>
                  <th>SN</th>
                  <th class="text-uppercase">Company Name</th>                 
                  <th class="text-uppercase">Brand Name</th>                 
                  <th class="text-uppercase"> Sale Amount</th>
                  <th class="text-uppercase">Purchase Amount</th>
                  
                  <th class="text-uppercase">Profit</th>
                  <th class="text-uppercase">View</th>
                  <th class="text-uppercase">Statement</th>
                </tr>
            
               </thead>
              <tbody> 
                    <tr v-for="supplierInformationList,index in supplierInformationLists">
                        <td> {{++index}}</td>
                        <td> {{supplierInformationList.supplierName}}</td>
                        <td> {{supplierInformationList.brandName}}</td>
                         <td> {{supplierInformationList.sales}}</td>
                         <td> {{supplierInformationList.purchase}}</td>
                       
                        <td> {{supplierInformationList.profit}}</td>
                        <td>
                            <button type="button" @click="viewProduct(supplierInformationList.supplierId,supplierInformationList.brandId,supplierInformationList.searchId)"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
                  ><i class="fa fa-eye"></i> View </button>
                        </td> 
                        <td>
                             <router-link target="_blank"
                    :to="`/productSupplierStatement${supplierInformationList.supplierId}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
                  ><i class="fa fa-eye"></i> Statement </router-link> 
                        </td> 
                    </tr>
                    <tr>
                        <th class="text-right" colspan="3"> Total </th>
                        <th> {{totalSale}} </th>
                        <th> {{totalPurchase}} </th>
                        
                        <th> {{totalProfit}} </th>
                        <th class="text-right" colspan="2"> </th>
                    </tr>
              </tbody>
           </table>
            
        
         </div>
     
      </div>


  </span>
</template>
<script>
import datatable from "datatables.net-bs4";
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import jsZip from 'jszip'
 
// below you should only import what you need
// Example: import buttons and plugins
import 'datatables.net-buttons/js/dataTables.buttons.js'
import 'datatables.net-buttons/js/buttons.html5.js'
import 'datatables.net-buttons/js/buttons.print.js'
 
// import the rest for your specific theme
import 'datatables.net-buttons-bs4'
 
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css'
import Multiselect from "vue-multiselect";
import moment from 'moment';
    export default {
        data(){
            return{
                sId:'',
                gets:'',
                assetSupplierGetDatas:{},
                lists:{},
                companyName:'',
                productSupplierLists:[],
                supplierInformationLists:[],
                newBrandLists:[],
                totalSale:'',
                totalPurchase:'',
                totalProfit:'',

                moment: moment,
                loading:false,

                form: new Form({
                        rendomNumber: new Date().getTime(),
                        productSupplierId:'0',
                        brandId:'0',
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

            }
        },
        props:{
           limit: {
             type: Number,
             default: 2
         }
      },    components: {
    Multiselect,
  },
        mounted(){
          this.productSupplierList1();
          this.productBrnadList();
          this.getInvoiceSetupInformation();
                
        
        },
        methods:{
viewProduct(sid,bid,searchId){

    //alert(sid+'-'+bid+'-'+searchId);
    axios.get("/salesOrderSupplierSearch/"+sid+'/'+bid+'/'+searchId).then((res) => {
        // this.$router.push('/supplierReportView'+searchId);
        window.open('/supplierReportView'+searchId, '_blank');
      });

},
        searchData(){
            
            this.getInformation(this.form.productSupplierId,this.form.brandId,this.form.OrderRequestDate);

        },

              productSupplierList1() {
      axios.get("/shopWishProductSupplier").then((res) => {
        this.productSupplierLists = res.data.productSupplierList;
      });
    },

        productBrnadList() {
      axios.get("/productBrandListPurchase").then((res) => {
        this.newBrandLists = res.data.shopProductBrandList;
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
      
      axios.get("/brandWiseProductList/" + this.form.productSupplierId +'/'+value.productBrandEntryId)
        .then((res) => {
          this.productNameLists  = res.data.productList
        });
    },

    getInvoiceSetupInformation() {
    let uri = `/getInvoiceSetupInformation/3`;
    axios.get(uri).then((response) => {
      this.gets = response.data.data;
      this.companyName = response.data.data.companyName;
      this.getInformation(this.form.productSupplierId,this.form.brandId,this.form.OrderRequestDate);
    }); 
  },
    
    
    getInformation(productSupplierId,brandId,OrderRequestDate) {

        let uri = '';
        if(OrderRequestDate){
             uri =  "/supplierSalesReport/"+productSupplierId+'/'+brandId+'/'+OrderRequestDate;
        }else{
             uri =  "/supplierSalesReport/"+productSupplierId+'/'+brandId+'/0';
        }
    
    axios.get(uri).then((res) => {
        this.supplierInformationLists = res.data.data;

        this.totalSale = res.data.totalSale;
        this.totalPurchase = res.data.totalPurchase;
        this.totalProfit = res.data.totalProfit;
      }); 
  },


            
  

           statement(id) {
        this.$router.push('/supplierStatement'+id)
    },
       details(id) {
         this.sId=id;
      axios.get(`assetProductList/${id}`).then((res) => {
        this.lists = res.data.list;
      });
      $("#salesId").modal("show");
    },

        
        },
        created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    window.deleteExpense = this.deleteExpense;
    window.statement = this.statement;
    window.details = this.details;
    // window.pdetails = this.pdetails;
  },
    }

</script>
