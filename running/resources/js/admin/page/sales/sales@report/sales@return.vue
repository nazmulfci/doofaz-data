<template>
  <span>
    <div
      class="card main-card element-block-example mt-0"
      style="width: 91%; margin: 0 auto"
    >
      <div class="card-header-tab card-header alert-info">
        <h4>
          <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>
          Sales Return 
        </h4>
        
      </div>
      <div class="card-body table-responsive bg-white">

        <div class="row mb-4">
             
            <div class="col"></div>
            <div class="col">
              <form action="" @submit.prevent="search()">
              <table class="table-bordered">
                <tr>
                    <!-- @input="customerIdCatch" -->

                  <td>
                      
                  <multiselect
                  v-model="form.salesCustomerEntryId"
                  name="salesCustomerEntryId"
                  :custom-label="salesCustomerName"
                  @input="selectCustomer"
                  :options="salesCustomerLists"
                  placeholder="Select one"
                  :show-labels="false"
                  style="width:200px;padding:0px!important;padding-bottom:3px!important;" 
                  >
                  <span slot="noResult"> Oops! Customer Name Not Found </span>
                </multiselect> 
                
                <select style="display:none;"
                  class="form-control"
                  v-model="form.customerId"
                  placeholder="Select one">
                  <option v-for="salesCustomerList in salesCustomerLists" :value="salesCustomerList.salesCustomerEntryId"> {{salesCustomerList.customerName}} </option>
                </select> </td>
                  <td> <input type="text" style="width:200px;" v-model="form.invoiceNoSearch" class="form-control" placeholder="Invoice No"> </td>
                  <td> <input type="date" v-model="form.date" class="form-control"> </td>
                  <td> <button type="submit" class="btn btn-primary"> Search </button> </td>
                </tr>
              </table>
              </form>

            </div>
            <div class="col"></div>
            
        </div>




        <table
          style="width: 100%"
          class="table table-hover table-striped table-bordered"
          id="sampleTable"
        >
          <thead>
            <tr>
              <th>Sales Date</th>
              <th>Invoice No</th>
              <th>Customer Name</th>
              <th>Customer Type</th>
              <th>Sales Amount</th>
              <th>Discount Price</th>
              <th>Total Amount</th>
              <th>Total Receivable</th>
              <th>Paid Cash</th>
              <th>Paid Bank</th>
              <th>Due Amount</th>
            </tr>
          </thead>
          <tbody></tbody>
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
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header bg-primary text-light">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Product Details
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
                <div class="card">
                  <div class="card-header-tab card-header alert-info">
                    <h4>
                      <i
                        class="
                          header-icon
                          lnr-laptop-phone
                          icon-gradient
                          bg-premium-dark
                        "
                      ></i>
                      Sales Invoice
                    </h4>
                  </div>

                  <div class="card-body">
                    <div class="toolbar hidden-print">
                      <div class="text-right">
                        <button
                          id="printInvoice"
                          onclick="jQuery('#invoice').print()"
                          class="btn btn-info"
                        >
                          <i class="fa fa-print"></i> Print
                        </button>
                        <!-- <button class="btn btn-info"><i class="fa fa-file-pdf-o"></i> Export as PDF</button> -->
                      </div>
                    </div>

                    <div id="invoice" style="padding-top: 0px !important">
                      <div class="invoice overflow-auto">
                        <div style="min-width: 600px">
                          <invoice></invoice>

                          <main>
                            <div class="row contacts">
                    <div class="col invoice-to">
                        <div class="text-gray-light">  <u> <b> Customer Information :</b> </u> </div>
                        <span v-for="cus in customer" :key="cus.id">
                        <div class="address" > {{ cus.customer.customerName }} </div>
                        <div class="address" > {{ cus.customer.customerPhone }} </div>
                        </span>
                      
                    </div>
                  
                    <div class="col invoice-details">
                        <div class="date"> Sales Invoice: {{ due.salesInvoiceNo }}</div>
                        <div class="date"> Sales Date: {{ due.salesDate }}</div>
                    </div>

                </div>
                            <table
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                              class="table table-bordered border-0"
                            >
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th class="text-left">Product </th>
                                  <th class="text-left"> Brand</th>      
                                  <th class="text-left">Color/Size</th>
                                  <th class="text-right">Quantity</th>
                                  <th class="text-left">Return Qnt</th>
                                  <th class="text-right">UNIT PRICE</th>
                                  <th class="text-right">TOTAL PRICE</th>
                                  <th class="text-right">OFF</th>
                                  <th class="text-right">TOTAL</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(list, index) in lists" :key="list.salesProductEntryId">
                            <td>{{++index}}</td>
                            <td class="text-left"><span> {{list.productName}} </span></td>

                            <td> <span>{{ list.brandName }}</span> </td>
                             <td class=""> 
                               <span v-if="list.colorId">
                               {{list.colorName}}
                               <span v-if="list.sizeId">/
                               {{list.sizeName}}</span>
                               </span>
                                </td>
                             <td class=""> {{list.quantity}} {{list.unit_name}}</td>
                             <td v-if="list.returnable" v-bind:id="'td-'+list.salesProductEntryId">

                               <small v-if="list.returnQuantity" class="text-danger">Previous Return : {{list.returnQuantity}} </small>
                                          <table>
                                            <tr>
                                               <td>
                                                <select class="form-control" style="width:100px;"
                                              v-bind:id="'unitId-'+list.salesProductEntryId" @change="checkStock(list.salesProductEntryId)">
                                            <option value=""> ----- </option>
                                            <option
                                            v-for="singleList in list.singleUnitList"
                                            :value="singleList.unitId">
                                            <span v-for="unitList in unitLists" v-if="unitList.uniteEntryId==singleList.unitId"> {{unitList.uniteEntryName }}</span>
                                          </option>
                                          </select>
                                        </td>
                                              <td> 
                                                <input type="hidden"
                                              v-bind:id="'newQuantity1-'+list.salesProductEntryId"></input>
                                                <input type="number" style="width:200px;"
                                              v-bind:id="'newQuantity-'+list.salesProductEntryId"
                                          min="1"
                                          :max="list.quantity"
                                           step="0.01" class="form-control newQuantity" >
                                           <input type="hidden" v-bind:id="'returnable-'+list.salesProductEntryId" :value="list.returnable">
                                        </td>
                                       
                                              <td>
                                                <button style="display:none;"
                                               v-bind:id="'btnd-'+list.salesProductEntryId" class="btn btn-danger float-right"> 
                                               <span
                                                class="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                              ></span>
                                               </button>
                                                <button
                                               v-bind:id="'btn-'+list.salesProductEntryId"
                                                @click="productReturn(list.salesProductEntryId)" class="btn btn-primary float-right"> Return </button></td>
                                            </tr>
                                          </table>
                                         </td>
                             <td v-else> {{list.quantity}} </td>
                             <td v-bind:id="'unitPrice-'+list.salesProductEntryId"> {{list.unitPrice}} </td>

                                 <td class="">
                                          <span v-bind:id="'totalPrice-'+list.salesProductEntryId">{{ (list.unitPrice*list.quantity) }} </span>
                                        </td>
                                        <td class=""> 
                                          <span v-bind:id="'discountAmount-'+list.salesProductEntryId">{{ list.totalDiscount }}</span> 
                                        </td>
                                        <td class="">
                                          <span v-bind:id="'totalWithDiscount-'+list.salesProductEntryId">{{ list.totalPrice }} </span>
                                        </td>

                             
                         
                        </tr>
                              </tbody>

                              <tr>
                                      <td
                                        colspan="9"
                                        class="text-right border-0"
                                      >
                                        <b> Grand Total : </b>
                                      </td>
                                      <td class="border-0">
                                        <b id="grandTotal">{{total}}</b>
                                      </td>
                                    </tr>
                                  </table>

                                  <div class="row">
                                    <div class="col"></div>
                                    <div class="col"></div>
                                    <div class="col">
                                      <table class="table table-bordered">
                                        <tbody>
                                          <tr>
                                            <td class="text-right">Discount</td>
                                            <td class="bg-light" id="invoiceDiscount">
                                              {{ due.discountPrice }}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="text-right">
                                              Previous Due
                                            </td>
                                            <td class="bg-light" id="supplierPayable">
                                              {{ due.previousDue  }}
                                            </td>
                                          </tr>

                                          <tr>
                                            <td class="text-right">
                                              Total Invoice Amount
                                            </td>
                                            <td id="totalProductCost">
                                              {{ due.totalPayable  }}
                                            </td>
                                          </tr>
                                          <tr></tr>
                                          <tr>
                                            <td class="text-right">
                                              Current Receivable
                                            </td>
                                            <td class="bg-light" id="currentPayable">
                                              {{ due.currentTotalAmount }}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                    <form action=""  @submit.prevent="returnSubmit()" class="formStatus" style="display:none;">
                                      <button type="button"  class="btn btn-danger float-right sbtnd" style="display:none;"> <span
                                                class="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                              ></span>
                                               </button>
                                      <button type="submit" class="btn btn-primary float-right sbtn"> Submit </button>
                                    </form>
                              
                              
                              
                               
                            <div class="row mt-5">
                              <div class="col">
                                <center>
                                  <span style="text-decoration: overline">
                                    &nbsp; &nbsp; &nbsp; Supplier Sign &nbsp;
                                    &nbsp; &nbsp;</span
                                  >
                                </center>
                              </div>
                              <div class="col"></div>
                              <div class="col">
                                <center>
                                  <span style="text-decoration: overline">
                                    &nbsp; &nbsp; &nbsp; Authorize Sign &nbsp;
                                    &nbsp; &nbsp;
                                  </span>
                                </center>
                              </div>
                            </div>
                          </main>
                        </div>
                        <!--DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom-->
                        <div></div>
                      </div>
                    </div>
                  </div>
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
import Multiselect from "vue-multiselect";
import moment from "moment";
export default {
  components: {
    Multiselect,
  },

  data() {
    return {


      form: new Form({
        date:moment().format("YYYY-MM-DD"),
   
            purchaseReturnDate:'',
            purchaseInvoiceNo:'',
            purchaseSupplier:'',
            grandTotal:'',
            invoiceDiscount:'',
            supplierPayable:'',
            totalProductCost:'',
            currentPayable:'',

            invoiceNoSearch:'',
            salesCustomerEntryId:'',
            customerId:'',
        
        


           }),


      salesInvoiceLists: {},
      gets: {},
      invoiceNo: "",
      lists: "",
        total: "",
        due: "",
        discount: "",
      customer: [],
      salesCustomerLists: [], 
          unitLists:[],
    };
    
  },
  mounted() {
    this.view();
    this.customerTypeIdCatch();
    this.unitNameShow();
  
  },
  methods: {

    
    checkStock(id){
          let unitId = parseFloat($('#unitId-'+id).val());
          $('#newQuantity-'+id).attr('placeholder','stock=0')

          axios.get("/salesReturnCheckQuantity/" + id + '/' + unitId)
                .then((res) => {
                    $('#newQuantity-'+id).attr('placeholder','stock='+res.data.stock)
                    $('#newQuantity1-'+id).val(res.data.stock)
                })
    },

        unitNameShow() {
      axios.get("/unitNameShowPurchase").then((res) => {
        this.unitLists = res.data.unitNameShow;
      });
    },

      selectCustomer(value){
        //alert(value.salesCustomerEntryId);
          this.form.customerId = value.salesCustomerEntryId;

      },
          salesCustomerName({ customerName,customerPhone }) {
      return `${customerName} [${customerPhone}]`;
    },
    customerTypeIdCatch() {
      axios
        .get("/salesCustomerListReport")
        .then((res) => {
          this.salesCustomerLists = res.data.data;
        });
    },
         returnSubmit(){

                    $('.sbtnd').show();
                    $('.sbtn').hide();


        this.form.post("/returnSales")
                .then((res) => {
                  if(res.data.data){
                    
                          this.invoiceNo='';
                          this.invoiceYesStatus=false;
                          this.invoiceNoStatus=false;
                          this.invoiceLoadingStatus=false;

                  Toast.fire({
                    icon: "success",
                    title: "Return Invoice Create Successful.",
                  });
                  $("#salesId").modal("hide");
                  }
                  else{ 
                    Toast.fire({
                    icon: "error",
                    title: "Something Missing.",
                  });
                  $('.sbtnd').hide();
                    $('.sbtn').show();
                  }
                }).catch((res) => {
                  
                    Toast.fire({
                      icon: "error",
                      title: "Something wrong",
                    });

                    $('.sbtnd').hide();
                    $('.sbtn').show();

                  });
    },
     
     
     productReturn(id){ 

       
          

           $('#btnd-'+id).show();
           $('#btn-'+id).hide();

          let quantity = parseFloat($('#newQuantity-'+id).val());
          let unitId = parseFloat($('#unitId-'+id).val());
          let returnable = parseFloat($('#newQuantity1-'+id).val());
       
          if(quantity>returnable){
            Toast.fire({
              icon: "error",
              title: "Invalid Return Quantity.",
            });

           $('#btnd-'+id).hide();
           $('#btn-'+id).show();


          }
          else{
            if(quantity>0){
              axios.get("/salesProductReturnEntry/" + id + '/' + quantity + '/' + unitId)
                .then((res) => {
                  if(res.data.status==1){

                    
                    $('.formStatus').show();

                  $('#td-'+id).html(quantity+' '+res.data.unitName);
                  $('#unitPrice-'+id).html(res.data.unitPrice); 
                  $('#totalPrice-'+id).html(res.data.totalPrice);
                  $('#discountAmount-'+id).html(res.data.discountAmount);
                  $('#totalWithDiscount-'+id).html(res.data.totalWithDiscount);
                  $('#grandTotal').html(res.data.grandTotal);

                  $('#invoiceDiscount').html(res.data.invoiceDiscount);
                  $('#totalProductCost').html(res.data.totalProductCost);
                  $('#supplierPayable').html(res.data.supplierPayable);
                  $('#currentPayable').html(res.data.currentPayable);

                  this.form.purchaseReturnDate=res.data.purchaseReturnDate;
                  this.form.purchaseInvoiceNo=res.data.purchaseInvoiceNo;
                  this.form.purchaseSupplier=res.data.purchaseSupplier;
                  this.form.grandTotal=res.data.grandTotal;
                  this.form.invoiceDiscount=res.data.invoiceDiscount;
                  this.form.supplierPayable=res.data.supplierPayable;
                  this.form.totalProductCost=res.data.totalProductCost;
                  this.form.currentPayable=res.data.currentPayable;

                  
                }else{

                }
                  

                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
          $('#btnd-'+id).hide();
           $('#btn-'+id).show();
        });
          }else{
            Toast.fire({
            icon: "error",
            title: "Invalid Return Quantity.",
          });
           $('#btnd-'+id).hide();
           $('#btn-'+id).show();
          }
          }


      },


    view() {
      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }
      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          ajax: "/salesInvoiceList",

          columns: [
             
            {
              data: "salesDate",
            },
            {
              data: "salesInvoiceNo",
              render: function (data, row) {
                var ok =
                  '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" onclick="editModal(' +
                  data +  ')">' + data + "</button>";
                return ok;
              },
            },
            {
              data: "customerName",
              name: "customerName.customerName",
            },
            {
              data: "customerType",
              name: "customerType.shopCustomerName",
            },
            {
              data: "totalBalance",
            },
            {
              data: "discountPrice",
            },
            {
              data: "totalPayable",
            },
            {
              data: "currentTotalAmount",
            },
            {
              data: "currentPaidAmount",
            },
            {
              data: "mobileAmount",
            },
            {
              data: "currentDue",
            },
          ],
        });
      });
    },
    search() {
      
      var date = this.form.date;
      if(this.form.invoiceNoSearch){
      var invoiceNoSearch = this.form.invoiceNoSearch;
      }
      else{
          var invoiceNoSearch = 0;
      }

      
      if(this.form.salesCustomerEntryId==null){
      var customerId = 0;
      }
      else if(this.form.customerId){
      var customerId = this.form.customerId;
      }
      else{
          var customerId = 0;
      }

      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }
      
      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax: "/salesInvoiceSearchList/"+date+"/"+invoiceNoSearch+"/"+customerId,

          columns: [
             
            {
              data: "salesDate",
            },
            {
              data: "salesInvoiceNo",
              render: function (data, row) {
                var ok =
                  '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" onclick="editModal(' +
                  data +  ')">' + data + "</button>";
                return ok;
              },
            },
            {
              data: "customerName",
              name: "customerName.customerName",
            },
            {
              data: "customerType",
              name: "customerType.shopCustomerName",
            },
            {
              data: "totalBalance",
            },
            {
              data: "discountPrice",
            },
            {
              data: "totalPayable",
            },
            {
              data: "currentTotalAmount",
            },
            {
              data: "currentPaidAmount",
            },
            {
              data: "mobileAmount",
            },
            {
              data: "currentDue",
            },
          ],
        });
      });
    },
  
    editModal(id){
      axios.get(`salesInvoiceList/${id}`).then((res) => {
        this.lists = res.data.lists;
        this.total = res.data.total;
        this.discount = res.data.discount;
        this.due = res.data.due;
        this.customer = res.data.customer;
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
    window.editModal = this.editModal;
  },
};
</script>