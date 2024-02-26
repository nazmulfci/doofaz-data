<template id="">
  <span>
    <div class="card main-card element-block-example">
      
                  <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Purchase Return </h4>
        </div>
      </div>
      
      
      <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white">

           <div class="row">
             <div class="col"></div>
             <div class="col">
                <table class="table table-bordered">
                  <tr>
                    <td><input type="text" v-model="invoiceNo" class="form-control" placeholder="Invoice No"></td>
                    <td>
                      <button type="button" class="btn btn-danger searchBtnLoading" style="display:none;"> Search </button>
                      <button type="button" class="btn btn-primary searchBtn"
                      @click="searchInvoice()" data-toggle="modal"
                      :data-target="'#purchaseId'"> Search </button>
                  </td>
                  </tr>
                </table>
             </div>
             <div class="col"></div>
           </div>



           <!-- ================================= modal  -->
           
                <h1 v-if="invoiceLoadingStatus" class="text-center text-danger"> <span
                                                class="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                              ></span>
                                               </h1>
 
           
                <h4 v-if="invoiceNoStatus" class="text-center text-danger"> Result Not Found </h4>
 
             
                    <div class="modal-body" v-if="invoiceYesStatus">
                      <div class="card">
                      
                        <div class="card-body p-0">
                         
                          <div id="invoice" style="padding-left: 0px !important;padding-right: 0px !important;padding-top: 0px !important;">
                            <div class="invoice overflow-auto">
                              <div style="min-width: 600px">
                                
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
                                            ">
                                            {{ purchaseProductLists.productName }}
                                          </span>
                                        </td>

                                        <td>
                                          <span v-for="allProductBrandList in allProductBrandLists"
                                          v-if="allProductBrandList.productBrandEntryId==invoiceProductList.brandId">
                                              {{allProductBrandList.productBrandName}}
                                          </span>
                                            
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


                                          <input type="hidden" v-bind:id="'quantity-'+invoiceProductList.id" :value="invoiceProductList.quantity">
                                          <input type="hidden" v-bind:id="'stock-'+invoiceProductList.id" :value="invoiceProductList.stock">
                                        </td>
                                        <td v-bind:id="'td-'+invoiceProductList.id">
                                          <table>
                                            <tr>
                                              <td>
                                                <select class="form-control unitId"
                                              v-bind:id="'unitId-'+invoiceProductList.id" @change="checkStock(invoiceProductList.id)">
                                            <option value=""> ----- </option>
                                            <option
                                            v-for="singleList in invoiceProductList.singleUnitList"
                                            :value="singleList.unitId">
                                            <span v-for="unitList in unitLists" v-if="unitList.uniteEntryId==singleList.unitId"> {{unitList.uniteEntryName }}</span>
                                          </option>
                                          </select>
                                        </td>
                                              <td> 
                                                <input type="hidden"
                                              v-bind:id="'newQuantity1-'+invoiceProductList.id">
                                                <input type="number"
                                              v-bind:id="'newQuantity-'+invoiceProductList.id"
                                          min="1"
                                           step="0.01" class="form-control newQuantity">
                                           <input type="hidden" v-bind:id="'returnable-'+invoiceProductList.id" :value="invoiceProductList.returnable">
                                          </td>
                                              
                                              <td>
                                                <button style="display:none;"
                                               v-bind:id="'btnd-'+invoiceProductList.id" class="btn btn-danger"> 
                                               <span
                                                class="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                              ></span>
                                               </button>
                                                <button
                                               v-bind:id="'btn-'+invoiceProductList.id"
                                                @click="productReturn(invoiceProductList.id)" class="btn btn-primary"> Return </button></td>
                                            </tr>
                                          </table>
                                         </td>
                                        <td class="">
                                          <span v-bind:id="'unitPrice-'+invoiceProductList.id">
                                          {{ invoiceProductList.unitPrice }}
                                          <input type="hidden" v-bind:id="'unit-'+invoiceProductList.id" :value="invoiceProductList.unitPrice">
                                          </span>
                                        </td>
                                        <td class="">
                                          <span v-bind:id="'totalPrice-'+invoiceProductList.id">{{ invoiceProductList.totalPrice }} </span>
                                        </td>
                                        <td class=""> 
                                          <span v-bind:id="'discountAmount-'+invoiceProductList.id">{{ invoiceProductList.discount }}</span>% 
                                        </td>
                                        <td class="">
                                          <span v-bind:id="'totalWithDiscount-'+invoiceProductList.id">{{ invoiceProductList.totalWithDiscount }} </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tr>
                                      <td
                                        colspan="10"
                                        class="text-right border-0"
                                      >
                                        <b> Grand Total : </b>
                                      </td>
                                      <td class="border-0">
                                        <b id="grandTotal">{{invoiceInfo.totalPurchaseValue}}</b>
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
                                              {{ invoiceInfo.discount }}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="text-right">
                                              Supplier Payable
                                            </td>
                                            <td class="bg-light" id="supplierPayable">
                                              {{ invoiceInfo.supplierPayable }}
                                            </td>
                                          </tr>

                                          <tr>
                                            <td class="text-right">
                                              Total Product Cost
                                            </td>
                                            <td id="totalProductCost">
                                              {{ invoiceInfo.totalProductCost }}
                                            </td>
                                          </tr>
                                          <tr></tr>
                                          <tr>
                                            <td class="text-right">
                                              Current Payable
                                            </td>
                                            <td class="bg-light" id="currentPayable">
                                              {{ invoiceInfo.currentPayable }}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                    <form action="" v-if="formStatus"  @submit.prevent="returnSubmit()">
                                      <button type="button"  class="btn btn-danger float-right sbtnd" style="display:none;"> <span
                                                class="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                              ></span>
                                               </button>
                                      <button type="submit" class="btn btn-primary float-right sbtn"> Submit </button>
                                    </form>
                                  
                                </main>
                              </div>
                              <!--DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom-->
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
 
                    </div>
                 


           <!-- ================================= //modal  -->





        
      </div>
      </div>
    </div>


  </span>
</template>
<script>
export default {
  data() {
    return {

      form: new Form({
            purchaseReturnDate:'',
            purchaseInvoiceNo:'',
            purchaseSupplier:'',
            grandTotal:'',
            invoiceDiscount:'',
            supplierPayable:'',
            totalProductCost:'',
            currentPayable:'',
           }),

      invoiceNo:'',
      formStatus:false,
      invoiceYesStatus:false,
      invoiceNoStatus:false,
      invoiceLoadingStatus:false,
      purchaseInvoiceReports: {},
      gets: "",
      invoiceInfo: "",
      allProductBrandLists: [],
      invoiceProductLists: [],
      purchaseProductList: [],
      productBrandLists: [],
      purchaseTypes: [],
      unitLists: [],
      countryLists: [],
      supplierInfo: "",
           colorLists: {},
      sizeLists: {},
    };
  },
  props: {
    limit: {
      type: Number,
      default: 2,
    },
  },
  mounted() {
    // this.productSupplierList();
    this.colorList();
    this.sizeList();
    this.getInvoiceSetupInformation();
    this.productBrandList();

  },
  methods: {
    returnSubmit(){

                    $('.sbtnd').show();
                    $('.sbtn').hide();


        this.form.post("/returnPurchase")
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

    checkStock(id){
          let unitId = parseFloat($('#unitId-'+id).val());
          $('#newQuantity-'+id).attr('placeholder','stock=0')

          axios.get("/purchaseReturnCheckQuantity/" + id + '/' + unitId)
                .then((res) => {
                    $('#newQuantity-'+id).attr('placeholder','stock='+res.data.stock)
                    $('#newQuantity1-'+id).val(res.data.stock)
                })
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
              axios.get("/purchaseProductReturnEntry/" + id + '/' + quantity + '/' + unitId)
                .then((res) => {
                  if(res.data.status==1){
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
                  this.form.grandTotal=res.data.grandTotal;
                  this.form.invoiceDiscount=res.data.invoiceDiscount;
                  this.form.supplierPayable=res.data.supplierPayable;
                  this.form.totalProductCost=res.data.totalProductCost;
                  this.form.currentPayable=res.data.currentPayable;

                  this.formStatus=true;
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
    productSupplierList() {
      axios.get("/purchaseInvoiceReport").then((res) => {
        this.purchaseInvoiceReports = res.data.purchaseInvoiceReports;
      });
    },
        productBrandList() {
      axios.get("/productBrandList").then((res) => {
        this.allProductBrandLists = res.data.productBrandList;
      });
    },

 
    getInvoiceSetupInformation() {
      let uri = `getInvoiceSetupInformation/2`;
      axios.get(uri).then((response) => {
        this.gets = response.data.data;
      });
    },
    searchInvoice() {

          $('.unitId').val('');
          $('.newQuantity').attr('placeholder','');
      
      $('.searchBtn').hide();
      $('.searchBtnLoading').show();

      $('.newQuantity').val('');
      let uri = `searchPurchaseInvoice/`+this.invoiceNo;
      axios.get(uri).then((response) => {

        if(response.data.invoiceId>0){
          this.invoiceYesStatus = false;
          this.invoiceNoStatus = false;
          this.invoiceLoadingStatus = true;
          this.viewInvoiceInfo(response.data.invoiceId);
        }
        else{
          this.invoiceLoadingStatus = false;
          this.invoiceYesStatus = false;
          this.invoiceNoStatus = true;
                $('.searchBtn').show();
          $('.searchBtnLoading').hide();
        }

      });
    },

    viewInvoiceInfo(id) {
      let uri = 'getInvoiceInfoPurchaseReturn/'+id;
      axios.get(uri).then((response) => {
        this.unitLists = response.data.unitList;
        this.countryLists = response.data.countryList;
        this.purchaseTypes = response.data.purchaseType;
        this.productBrandLists = response.data.productBrandList;
        this.supplier_id = response.data.data.productSupplierId;
        this.form.purchaseSupplier = response.data.data.productSupplierId;
        this.invoiceInfo = response.data.data;
        this.invoiceProductLists = response.data.invoiceProductLists;
        if(response.data.supplierInfo){
        this.supplierInfo = response.data.supplierInfo;
        }
        this.purchaseProductList = response.data.purchaseProductList;

                  this.invoiceLoadingStatus = false;
                  this.invoiceYesStatus = true;

      });

            $('.searchBtn').show();
      $('.searchBtnLoading').hide();

    },
  },
};
</script>
