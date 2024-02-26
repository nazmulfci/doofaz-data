<template id="">
  <span>
     <div class="card main-card  element-block-example">
         <div class="card-header">
          <h3><i
            class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
          ></i> Asset Supplier Report </h3>
          </div>
        
           <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered" id="sampleTable">
          <thead>
            <tr class="alert-info">
                <tr>
                  <th>SN</th>
                  <th>Supplier.Name</th>                 
                  <th>Phone</th>                 
                  <th>Total Purchase</th>
                  <th>Paid</th>
                  <th>Due</th>
                  <th>Action</th>
                  <th>Statement</th>
                </tr>
            
               </thead>
              <tbody >
                <tr >
                  <!-- <td>{{ index+1 }}</td>
                  <td>{{ assetSupplierGetData.assetSupplierName }}</td>
                  <td>{{ assetSupplierGetData.assetSupplierCode }}</td>
                  <td>{{ assetSupplierGetData.assetSupplierPhone }}</td>
                  <td>{{ assetSupplierGetData.assetSupplierHotLine }}</td>
                  <td>{{ assetSupplierGetData.assetSupplierMail }}</td>
                  <td>{{ assetSupplierGetData.assetSupplierFb }}</td>
                  <td>{{ assetSupplierGetData.assetSupplierWeb }}</td>
                  <td>{{ assetSupplierGetData.assetSupplierImo }}</td>
                  <td>{{ assetSupplierGetData.assetSupplierAddress }}</td>
                  <td>
                    <router-link :to="`/supplierStatement${assetSupplierGetData.assetSupplierId}`" 
                    class="btn btn-hover-shine  btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    Statment </router-link>
                  </td> -->
                </tr>
              </tbody>
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
                          <th>Purchase.Date</th>
                          <th>Product.Name</th>
                          <th>Brand</th>
                          <th>Quantity</th>
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
         <pagination :data="lists" :limit="limit"  @pagination-change-page="getPaginateList">
           <span slot="prev-nav">&lt; Previous</span>
           <span slot="next-nav">Next &gt;</span>
         </pagination>
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
    export default {
        data(){
            return{
              sId:'',
                gets:'',
                assetSupplierGetDatas:{},
                lists:{},
                companyName:'',
            }
        },
        props:{
           limit: {
             type: Number,
             default: 2
         }
      },created(){
        
      },
        mounted(){
          this.getInvoiceSetupInformation();
             this.getPaginateList();
            
        
        },
        methods:{

          
    getInvoiceSetupInformation() {
    let uri = `getInvoiceSetupInformation/3`;
    axios.get(uri).then((response) => {
      this.gets = response.data.data;
      this.companyName = response.data.data.companyName;
      this.productSupplierList();
    }); 
  },


            productSupplierList(){
              // axios.get('/assetSupplierList').then(res =>{
              //     this.assetSupplierGetDatas = res.data.assetSupplierGetData;
              // })
                  var companyName = this.gets.companyName;
                  var address = this.gets.address;
                  var contact = this.gets.mobileNo+', '+this.gets.email+', '+this.gets.website;
                  var pageTitle = 'Asset Supplier List';

                 $(document).ready(function () {
                  
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.pdfMake = pdfMake;
window.JSZip = require('jszip')


       var table = $("#sampleTable").DataTable({
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
            { orderable: false, targets: [ 6 ] },
            { orderable: false, targets: [ 7 ] }
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

          ajax: "/assetSupplierList",

          columns: [
            
           
            {
        "title": "SN",
        render: function (data, type, row, meta) {
        return meta.row + meta.settings._iDisplayStart + 1;
        }
        }, 
            {
              data: "supplier",
              name:"assetSupplier.assetSupplierName"
             
            },
            {
              data: "phone",
              name:"assetSupplier.assetSupplierPhone"
             
            },
            {
              data: "totalAmount",
             
            },
            {
              data: "paidAmount",
             
            },
          
            {
              data: "currentDue",
             
            },
            {
              data: "supplierId",
              render: function (data, row) {
                var ok =
                  '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="details(' +
                  data +
                  ')"><i class=" fa fa-eye"></i>Product List</button>';
              
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
     getPaginateList(page = 1){
            axios.get('/assetProductList/'+this.sId+'?page=' + page).then(response => {
              this.lists = res.data.list;
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
    window.statement = this.statement;
    window.details = this.details;
    // window.pdetails = this.pdetails;
  },
    }

</script>
