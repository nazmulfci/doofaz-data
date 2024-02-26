<template id="">
  <span>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/productsupplier@report">Product Supplier Report</router-link></li>
         <button
         @click.prevent="Statement()"
                    class="btn btn-hover-shine  btn-primary">
                    Statment </button>
      </ol>
    </nav>
    <div class="card main-card  element-block-example">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Purchase Invoice List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered table-striped">
          <thead>
             <tr>
               <th>SN</th>
               <th>Purchase Date</th>
               <th>Purchase Invoice No</th>
               <th>Purchase Amount</th>
               <th>Discount Amount</th>
               <th>Total Purchase Cost</th>
               <th>Paid</th>
            
             </tr>
            </thead>
            <tbody>
              <tr v-for="(purchaseInvoiceReport, index) in purchaseInvoiceReports">
                <td>{{ index+1 }}</td>
                <td>{{ purchaseInvoiceReport.purchaseDate }}</td>
                 <td>  <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" @click.prevent="viewInvoiceInfo(purchaseInvoiceReport.purchaseInvoiceId)" data-toggle="modal"  :data-target="'#purchaseId'">  {{ purchaseInvoiceReport.purchaseInvoiceNo }}</button></td>
                <td>{{ purchaseInvoiceReport.totalPurchaseValue }}</td>
                <td>{{ purchaseInvoiceReport.discount }}</td>
                <td>{{ purchaseInvoiceReport.currentPayable }}</td>
                <td>
                  <span v-if="purchaseInvoiceReport.bank==null">
                   {{parseFloat(purchaseInvoiceReport.cash)}}
                  </span>
                  <span v-if="purchaseInvoiceReport.cash==null">
                   {{parseFloat(purchaseInvoiceReport.bank)}}
                  </span>
                  <span v-if="purchaseInvoiceReport.bank!=null&&purchaseInvoiceReport.cash!=null">
                   {{parseFloat(purchaseInvoiceReport.cash)+parseFloat(purchaseInvoiceReport.bank)}}
                  </span>
                </td>
                  <!-- Modal -->
              <div
                class="modal fade"
                :id="'purchaseId'"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog  modal-lg" role="document">
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
                            Purchase Invoice
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

                          <div id="" style="padding-top: 0px !important">
                            <div class="invoice">
                              <div style="min-width: 600px">
                                <header
                                  :style="
                                    'border-bottom-color:' + gets.themeColor
                                  "
                                  style="margin-bottom: 5px !important"
                                >
                                  <div class="row" v-if="gets.logo">
                                    <div class="col">
                                      <a target="_blank" href="#">
                                        <img
                                          :src="
                                            'images/invoice_logo/' + gets.logo
                                          "
                                          style="
                                            max-height: 105px;
                                            max-width: 100%;
                                          "
                                        />
                                      </a>
                                    </div>
                                    <div class="col company-details">
                                      <!-- <h2 class="name">
                            <a target="_blank" href="#">
                            
                            </a>
                        </h2> -->

                                      <div>{{ gets.address }}</div>
                                      <div>{{ gets.mobileNo }}</div>
                                      <div>{{ gets.email }}</div>
                                      <div>{{ gets.website }}</div>
                                    </div>
                                  </div>

                                  <div class="row" v-else>
                                    <div class="col text-center">
                                      <h3 class="text-uppercase">
                                        <b> {{ gets.companyName }} </b>
                                      </h3>
                                      <div>{{ gets.address }}</div>
                                      <div>{{ gets.mobileNo }}</div>
                                      <div>{{ gets.email }}</div>
                                      <div>{{ gets.website }}</div>
                                    </div>
                                  </div>
                                </header>
                                <main>
                                  <div class="row contacts">
                                    <div class="col invoice-to">
                                      <div class="text-gray-light">
                                        <u> <b> Supplier Information :</b> </u>
                                      </div>
                                      <div class="address">
                                        {{ supplierInfo.productSupplierName }}
                                      </div>
                                      <div class="address">
                                        {{
                                          supplierInfo.productSupplierAddress
                                        }}
                                      </div>
                                      <div class="email">
                                        <a
                                          :href="
                                            'mailto:' +
                                            supplierInfo.productSupplierMail
                                          "
                                          :style="'color:' + gets.themeColor"
                                        >
                                          {{
                                            supplierInfo.productSupplierMail
                                          }}</a
                                        >
                                      </div>
                                    </div>
                                    <div class="col invoice-details">
                                      <h4
                                        class="text-center invoice-id"
                                        :style="'color:' + gets.themeColor"
                                      >
                                        <u> {{ gets.toText }} </u>
                                      </h4>
                                    </div>
                                    <div class="col invoice-details">
                                      <div class="date">
                                        {{ gets.toText }}:
                                        {{ invoiceInfo.purchaseInvoiceNo }}
                                      </div>
                                      <div class="date">
                                        Purchase Date:
                                        {{ invoiceInfo.purchaseDate }}
                                      </div>
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
                                        <th class="text-left">Name</th>
                                        <th class="text-left"> Brand</th>
                                        <th class="text-left"> Type</th>
                                        <th class="text-left">UNIT</th>
                                        <th class="text-left">Color/Size</th>
                                        <th class="text-right">Quantity</th>
                                        <th class="text-right">UNIT PRICE</th>
                                        <th class="text-right">TOTAL PRICE</th>
                                        <th class="text-right">OFF</th>
                                        <th class="text-right">TOTAL</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr
                                        v-for="(
                                          invoiceProductList, index
                                        ) in invoiceProductLists"
                                      >
                                        <td>{{ ++index }}</td>
                                        <td class="text-left">
                                          <span
                                            v-for="purchaseProductLists in purchaseProductList"
                                            v-if="
                                              purchaseProductLists.productNameId ==
                                              invoiceProductList.productId
                                            "
                                          >
                                            {{
                                              purchaseProductLists.productName
                                            }}
                                          </span>
                                        </td>

                                        <td>
                                          <span
                                            v-for="productBrandList in productBrandLists"
                                            :key="
                                              productBrandList.productBrandEntryId
                                            "
                                            v-if="
                                              productBrandList.productBrandEntryId ==
                                              invoiceProductList.brandId
                                            "
                                            >{{
                                              productBrandList.productBrandName
                                            }}</span
                                          >
                                        </td>
                                        <td>
                                          <span
                                            v-for="purchaseType in purchaseTypes"
                                            :key="purchaseType.id"
                                            v-if="
                                              purchaseType.id ==
                                              invoiceProductList.purchaseType
                                            "
                                          >
                                            {{ purchaseType.purchaseType }}
                                          </span>

                                          <span
                                            v-for="countryList in countryLists"
                                            :key="countryList.id"
                                            v-if="
                                              countryList.id ==
                                              invoiceProductList.countryId
                                            "
                                          >
                                            <br />
                                            ({{ countryList.name }})
                                          </span>
                                        </td>

                                        <td>
                                          <span
                                            v-for="unitList in unitLists"
                                            :key="unitList.uniteEntryId"
                                            v-if="
                                              unitList.uniteEntryId ==
                                              invoiceProductList.unitId
                                            "
                                          >
                                            {{ unitList.uniteEntryName }}
                                          </span>
                                        </td>
                                        <td>
                                          <span
                                          v-for="colorList in colorLists"
                                          v-if="colorList.id==invoiceProductList.colorId">{{
                                            colorList.colorName
                                          }}</span>
                                          
                                          <span
                                          v-for="sizeList in sizeLists"
                                          v-if="sizeList.id==invoiceProductList.sizeId">/ {{
                                            sizeList.sizeName
                                          }}</span>
                                        </td>

                                        <td class="">
                                          {{ invoiceProductList.quantity }}
                                        </td>
                                        <td class="">
                                          {{ invoiceProductList.unitPrice }}
                                        </td>

                                        <td class=""> {{ invoiceProductList.totalPrice }} </td>
                                        <td class=""> {{ invoiceProductList.discount }}% </td>
                                        <td class=""> {{ invoiceProductList.totalWithDiscount }} </td>
                                      </tr>
                                    </tbody>
                                    <tr>
                                      <td
                                        colspan="10"
                                        class="text-right border-0"
                                      >
                                        <b> Grand Total </b>
                                      </td>
                                      <td class="border-0">
                                        <b>
                                          :
                                          {{
                                            invoiceInfo.totalPurchaseValue
                                          }}</b
                                        >
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
                                            <td class="bg-light">
                                              {{ invoiceInfo.discount }}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="text-right">
                                              Supplier Payable
                                            </td>
                                            <td class="bg-light">
                                              {{ invoiceInfo.supplierPayable }}
                                            </td>
                                          </tr>

                                          <tr>
                                            <td class="text-right">
                                              Total Product Cost
                                            </td>
                                            <td>
                                              {{ invoiceInfo.totalProductCost }}
                                            </td>
                                          </tr>
                                          <tr></tr>
                                          <tr>
                                            <td class="text-right">
                                              Current Payable
                                            </td>
                                            <td class="bg-light">
                                              {{ invoiceInfo.currentPayable }}
                                            </td>
                                          </tr>
                                          <tr v-if="invoiceInfo.cash>0">
                                            <td class="text-right">
                                              Cash Payment
                                            </td>
                                            <td class="bg-light">
                                              {{ invoiceInfo.cash }}
                                            </td>
                                          </tr>
                                          <tr v-if="invoiceInfo.bank>0">
                                            <td class="text-right">
                                              Bank Payment
                                            </td>
                                            <td class="bg-light">
                                              {{ invoiceInfo.bank }}
                                            </td>
                                          </tr>
                                          <tr v-if="invoiceInfo.bank>0">
                                            <td class="text-right">
                                              Bank Name
                                            </td>
                                            <td class="bg-light">
                                              {{ bankInfoDetails.bankName }} ({{bankInfoDetails.bankAccountType}})
                                            </td>
                                          </tr>
                                          <tr v-if="invoiceInfo.bank>0">
                                            <td class="text-right">
                                              Bank Account
                                            </td>
                                            <td class="bg-light">
                                              {{ bankInfoDetails.bankAccountNo }} 
                                              <span v-if="bankInfoDetails.branch">({{bankInfoDetails.branch}})</span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>

                                  <div class="row mt-5">
                                    <div class="col">
                                      <center>
                                        <span style="text-decoration: overline">
                                          &nbsp; &nbsp; &nbsp; Supplier Sign
                                          &nbsp; &nbsp; &nbsp;</span>
                                      </center>
                                    </div>
                                    <div class="col"></div>
                                    <div class="col">
                                      <center>
                                        <span style="text-decoration: overline">
                                          &nbsp; &nbsp; &nbsp; Authorize Sign
                                          &nbsp; &nbsp; &nbsp;
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

                      <!-- <div class="card main-card  element-block-example">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Purchase Product List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered  table-striped">
           <thead>
              <tr>
                 <th>SN</th>
                 <th>Purchase Date</th>
                 <th>Product Name</th>
                 <th>Brand</th>
                 <th>Quantity</th>
                 <th>Unit</th>
                 <th>Unit Price</th>
                 <th>Total Price</th>
                
               </tr>
            </thead>
            <tbody>
              <tr  v-for="getInfo in purchaseInvoiceReport.purchase_product" >
                <td>{{ index+1 }}</td>
                <td>{{ getInfo.created_at }}</td>
                <td v-if="getInfo.product_name">{{ getInfo.product_name.productName }}</td>
                <td v-if="getInfo.brand_name">{{ getInfo.brand_name.productBrandName }}</td>
                <td v-if="getInfo">{{ getInfo.quantity }}</td>
                <td v-if="getInfo.unit_name">{{ getInfo.unit_name.uniteEntryName }}</td>
                <td v-if="getInfo">{{ getInfo.unitPrice }}</td>
                <td v-if="getInfo">{{ getInfo.totalPrice }}</td>
             
              </tr>
            </tbody>
        </table>
       </div>
    </div> -->
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
              </tr>
            </tbody>
         </table>
       </div>
     </div>
  </span>
</template>
<script>
    export default {
        data(){
            return{
                purchaseInvoiceReports:{},
                 purchaseInvoiceReports: {},
      gets: "",
      invoiceInfo: "",
      invoiceProductLists: [],
      purchaseProductList: [],
      productBrandLists: [],
      purchaseTypes: [],
      unitLists: [],
      bankInfoDetails: [],
      countryLists: [],
      colorLists: {},
      sizeLists: {},
      supplierInfo: "",
            }
        },
   
        mounted(){
            this.productSupplierList();
            this.getInvoiceSetupInformation();
            this.colorList();
    this.sizeList();
        },
        methods:{

               Statement(){
               this.$router.push('/productSupplierStatement'+this.$route.params.productSupplierId)
        },
        colorList(){
      axios.get("/colorListAll").then((res) => {
        this.colorLists = res.data.colorList;
      });
    },
    sizeList(){
      axios.get("/sizeListAll").then((res) => {
        this.sizeLists = res.data.sizeList;
      });
    },
            productSupplierList(){
              axios.get('/supplierInvoiceDetails/'+this.$route.params.productSupplierId).then(res =>{
                  this.purchaseInvoiceReports = res.data.purchaseInvoiceReports

              })
            },
              getInvoiceSetupInformation() {
      let uri = `getInvoiceSetupInformation/2`;
      axios.get(uri).then((response) => {
        this.gets = response.data.data;
      });
    },
    bankDetails(id) {
      let uri = 'getInvoiceBankDetails/'+id;
      axios.get(uri).then((response) => {
        this.bankInfoDetails = response.data.data;
      });
    },
    viewInvoiceInfo(id) {
      let uri = 'getInvoiceInformation/'+id;
      axios.get(uri).then((response) => {
        this.unitLists = response.data.unitList;
        this.countryLists = response.data.countryList;
        this.purchaseTypes = response.data.purchaseType;
        this.productBrandLists = response.data.productBrandList;
        this.supplier_id = response.data.data.productSupplierId;
        this.invoiceInfo = response.data.data;
        this.invoiceProductLists = response.data.invoiceProductLists;
        if(response.data.supplierInfo){
        this.supplierInfo = response.data.supplierInfo;
        }
        this.purchaseProductList = response.data.purchaseProductList;

        if(this.invoiceInfo.bank>0){
          this.bankDetails(id);
        } 

      });
    },
        }
      }
</script>
