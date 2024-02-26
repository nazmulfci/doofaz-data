<template id="">
  <span>
     <div class="card main-card  element-block-example">
         <div class="card-header">
          <h3><i
            class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
          ></i> Asset List Details  </h3>
          </div>
        
           <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered" id="sampleTable">
          <thead>
            <tr>
                <tr>
                <th>SN</th>
                <th>Asset<span class="textTransparent">_</span>Category<span class="textTransparent">_</span>Name </th>
                <th>Asset<span class="textTransparent">_</span>Product<span class="textTransparent">_</span>Name </th>
                <th>Asset<span class="textTransparent">_</span>Brand<span class="textTransparent">_</span>Name</th>
                <th>Asset<span class="textTransparent">_</span>Supplier<span class="textTransparent">_</span>Name</th>
                <th>Quantity</th>
                <th>Unit<span class="textTransparent">_</span>Price</th>
                <th>Total<span class="textTransparent">_</span>Cost</th>
               
                <th>Purchase<span class="textTransparent">_</span>Date</th>
                <th>Mfg<span class="textTransparent">_</span>Date</th>
                <th>Expiry<span class="textTransparent">_</span>Date</th>
                <th>Invoice<span class="textTransparent">_</span>No</th>
                <th>Model<span class="textTransparent">_</span>No</th>
                <th>Depreciation</th>
                <th>Warranty</th>
                <th>Guarantee</th>
                <th>Color</th>
                <th>Size</th>
                <th>Description</th>
                <th>History</th> 
                </tr>
            </thead>
              
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
    export default {
        data(){
            return{
                gets:'',
                companyName:'',
            }
        },
        props:{
           limit: {
             type: Number,
             default: 2
         }
      },
        mounted(){
          this.getInvoiceSetupInformation();
        },
        methods:{

          
    getInvoiceSetupInformation() {
    let uri = `getInvoiceSetupInformation/3`;
    axios.get(uri).then((response) => {
      this.gets = response.data.data;
      this.companyName = response.data.data.companyName;
      
      this.productSupplierList(this.$route.params.id);
    }); 
  },


            productSupplierList(e){
              // axios.get('/assetSupplierList').then(res =>{
              //     this.assetSupplierGetDatas = res.data.assetSupplierGetData;
              // })
                  var companyName = this.gets.companyName;
                  var address = this.gets.address;
                  var contact = this.gets.mobileNo+', '+this.gets.email+', '+this.gets.website;
                  var pageTitle = 'Asset List Details';

                 $(document).ready(function () {
                  
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.pdfMake = pdfMake;
window.JSZip = require('jszip')


       var table = $("#sampleTable").DataTable({
         lengthMenu: [[10, 25, 50, 100,-1], [10, 25, 50, 100, "All"]],
          processing: true,
          language: 
                      {          
                      "processing": "<div style='color:white;position:fixed;top:35%;left:8%;width:90%;min-height:150px;max-height:80%;background:url(/dashboard/assets/images/pre-loader.gif),rgba(0,0,0,.2);background-repeat:no-repeat;background-position:center top;z-index:10;'>Processing..</div>",
                      },
          serverSide: true,
          columnDefs: [
            { orderable: false, targets: [ 18 ] }
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
                        columns: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
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
                columns: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
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
                columns: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
            }
        }
    ],

          ajax: '/shopAssetEntryReportDetails/'+e,

          columns: [
            {
              "title": "SN",
              render: function (data, type, row, meta) {
              return meta.row + meta.settings._iDisplayStart + 1;
              }
            }, 
            { data:"asset_category_name",},
            { data:"asset_code_name",},
            { data:"asset_brand_name",},
            { data:"supplier_name",},
            { data:"productQuantity",},
            { data:"productCost",},
            { data:"totalProductCost",},
            { data:"purchasedate",},
            { data:"mfgDate",},
            { data:"expiryDate",},
            { data:"invoiceNo",},
            { data:"modelNo",},
            { data:"depreciation",},
            { data:"warranty",},
            { data:"guarantee",},
            { data:"color",},
            { data:"size ",},
            { data:"description",},
            {
              data: "shopAssetEntryId",
              render: function (data, row) {
                var ok =
                  '<button type="button" class="btn-pill btn-shadow btn btn-outline-primary mr-2"   onclick="details(' +
                  data +
                  ')"><i class=" fa fa-eye"></i> History </button>';
              
                return ok;
              },
            },
            
            
           
          ],
        });
        $( table.table().container() ).removeClass( 'form-inline' );
        $('.col-xs-12').addClass('col-12').removeClass( 'col-xs-12' );
        $.fn.dataTable.ext.errMode = 'none';
      });
            },
         

       details(id) { 
                 this.$router.push('/assetentry@statusHistory'+id);
                   },
        },
        created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });

    window.details = this.details;
  },
    }

</script>