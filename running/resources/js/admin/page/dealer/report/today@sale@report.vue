<template id="">
  <span>
     <div class="card main-card  element-block-example">
         <div class="card-header">
          <h3><i
            class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
          ></i> Today Sales Report </h3>
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
                  <th>Company Name</th>                 
                  <th>Brand Name</th>                 
                  <th>Total Sale</th>
                  <th>Purchase</th>
                  <th>Profit</th>
                  <th>View</th>
                  <th>Statement</th>
                </tr>
            
               </thead>
              <tbody> <tr> 
                  <td colspan="8" class="text-center"> <h3> Loading..... </h3></td>
                </tr></tbody>
           </table>
              <!-- Modal -->
        <div
          class="modal fade"
          id="salesId"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-primary text-light">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Product Detalis
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body">
                <div class="card main-card element-block-example">
                  <div
                    class="card-header"
                    style="
                      background-color: rgb(1, 176, 241);
                      border: 1px solid rgba(0, 0, 0, 0.05);
                    "
                  >
                    <h3 style="color: black">Asset Product List</h3>
                  </div>
                  <div class="table-responsive bg-white">
                    <table
                      class="table table-hover table-bordered table-striped"
                    >
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Company Name</th>
                          <th> Brand Name</th>
                          <th>Total Sale</th>
                          <th>Profit</th>
                          <th>Unit.Price</th>
                          <!-- <th>Unit</th>
                          <th>Unit.Price</th>
                          <th>Discount</th>
                          <th>Total.Price</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(list, index) in lists.data" :key="list.id">
                          <td>{{ index + 1 }}</td>
                          <td>{{ list.purchasedate }}</td>
                           <td> <span v-if="list.asset_code_name">{{ list.asset_code_name.assetPorductName	 }}</span></td>
                          <td><span v-if="list.asset_brand_name">{{ list.asset_brand_name.assetBrandName	 }}</span></td>
                         
                          <td>{{ list.productQuantity	 }}</td>
                          <td>{{ list.productCost	 }}</td>
                          <!-- <td>{{ list.created_at }}</td>
                          <td>{{ list.product_name.productName }}</td>
                          <td>{{ list.brand_name.productBrandName }}</td>
                          <td>{{ list.quantity }}</td>
                          <td>{{ list.unitId }}</td>
                          <td>{{ list.unitPrice }}</td>
                          <td></td>
                          <td>{{ list.totalPrice }}</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                   <span class="card_footer">
        
       </span>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-hover-shine btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
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
                newBrandLists:[],

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

          searchData(){
            this.productSupplierList(this.form.productSupplierId,this.form.brandId,this.form.OrderRequestDate);
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
    let uri = `getInvoiceSetupInformation/3`;
    axios.get(uri).then((response) => {
      this.gets = response.data.data;
      this.companyName = response.data.data.companyName;
      this.productSupplierList(this.form.productSupplierId,this.form.brandId,this.form.OrderRequestDate);
    }); 
  },


            productSupplierList(productSupplierId,brandId,OrderRequestDate){
              // axios.get('/assetSupplierList').then(res =>{
              //     this.assetSupplierGetDatas = res.data.assetSupplierGetData;
              // })
                  var companyName = this.gets.companyName;
                  var address = this.gets.address;
                  var contact = this.gets.mobileNo+', '+this.gets.email+', '+this.gets.website;
                  var pageTitle = 'Today Sales Report';

                 $(document).ready(function () {
                  
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      window.pdfMake = pdfMake;
      window.JSZip = require('jszip')


       var table = $("#sampleTable").DataTable({
        retrieve: true,
        paging: false,
        lengthMenu: [[10, 25, 50, 100, 200, 500, -1], [10, 25, 50, 100, 200, 500, "All"]],
        processing: true,
        
          
        language: 
                      {          
                      "processing": "<div style='color:white;position:fixed;top:35%;left:8%;width:90%;min-height:150px;max-height:80%;background:url(/dashboard/assets/images/pre-loader.gif),rgba(0,0,0,.2);background-repeat:no-repeat;background-position:center top;z-index:10;'>Processing..</div>",
                      },
          serverSide: true,
          columnDefs: [
            { orderable: false, targets: [ 1 ] },
            { orderable: false, targets: [ 2 ] },
            { orderable: false, targets: [ 6 ] }
          ],
          dom: 
        "<'row'<'col-sm-6 col-md-4 text-left'l> <'col-sm-6 col-md-4 text-center'B> <'col-sm-12 col-md-4 text-right'f>>"+
        "<'row'<'col-sm-12'tr>>"+
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    buttons: [ 
 
           
      {
        extend: 'excelHtml5',
        text: '<i class="fa fa-file-excel-o"></i> Excel',
        title: companyName,
        filename: pageTitle,
        selectorOpts: {filter: 'applied', order: 'current'},
        createEmptyCells : true,
        sheetName: pageTitle,
        messageTop: pageTitle,
        exportOptions: {
                        columns: [0,1,2,3,4,5]
                    },
        customize: function( xlsx ) {
        //my code
        }
        },
        {
                    extend: "pdf",
                    className: "btn export-pdf",
                    text: '<i class="fa fa-file-pdf-o"></i> PDF',
                    titleAttr: 'PDF',
customize : function(doc){ 
    doc.defaultStyle.alignment = 'center';
    doc.styles.tableHeader.alignment = 'center';
    
        },
        
                    title: companyName,
                    messageTop:address+', Contact:- '+contact,
                    fileName: pageTitle+".pdf",
                    exportOptions: {
                columns: [0,1,2,3,4,5]
            }
            },
      {
            extend: "print",
            className: "btn btn-primary",
            text: '<i class="fa fa-print"></i> Print',
            titleAttr: 'Print',
            title: '',
            messageTop: '<h3 class="text-center">'+companyName+
            '</h3><h5 class="text-center">'+address+
            '</h5><h5 class="text-center border-bottom">'+contact+
            '</h5><center><span class="badge badge-light border border border-secondary">'+pageTitle+
            '</span></center>',
            exportOptions: {
                columns: [0,1,2,3,4,5]
            }
        }
    ],

          ajax: "/supplierSalesReport/"+productSupplierId+'/'+brandId+'/'+OrderRequestDate,

          columns: [
            
            {
        "title": "SN",
        render: function (data, type, row, meta) {
        return meta.row + meta.settings._iDisplayStart + 1;
        }
        }, 
            {
              data: "supplierName",
            },
            {
              data: "brandName",
             
            },
            {
              data: "sales",
             
            },
            {
              data: "purchase",
             
            },
            {
              data: "profit",
             
            },
          
            
            {
              data: "supplierId",
              render: function (data, row) {
                var ok =
                  '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="details(' +
                  data +
                  ')"><i class=" fa fa-eye"></i>View</button>';
              
                return ok;
              },
            },
            {
              data: "supplierId",
              render: function (data, row) {
                var ok =
                  '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="statement(' +
                  data +
                  ')">Statement</button>';
                return ok;
              },
            },
            
           
          ],
        });
        $( table.table().container() ).removeClass( 'form-inline' );
        $('.col-xs-12').addClass('col-12').removeClass( 'col-xs-12' );
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
