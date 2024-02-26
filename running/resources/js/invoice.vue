 <template id="">
  <span>

 
  
            <header  :style="'border-bottom-color:'+gets.themeColor" style="margin-bottom:5px!important;">
                <div class="row" v-if="gets.logo">
                    <div class="col">
                        <a target="_blank" href="#">
                            <img :src="'images/invoice_logo/'+ gets.logo" style="max-height:105px;max-width:100%;"/>
                            </a>
                    </div>
                    <div class="col company-details">
                        <!-- <h2 class="name">
                            <a target="_blank" href="#">
                            
                            </a>
                        </h2> -->
                        
                        <div>  {{gets.address}} </div>
                          <div>{{gets.mobileNo}}</div>
                        <div> {{gets.email}} </div> 
                        <div> {{gets.website}} </div>
                    </div>
                </div>

                <div class="row" v-else>
                  <div class="col text-center">
                    <h3 class="text-uppercase"> <b> {{gets.companyName}} </b> </h3>
                    <div>  {{gets.address}} </div>
                          <div>{{gets.mobileNo}}</div>
                        <div> {{gets.email}} </div> 
                        <div> {{gets.website}} </div>
                  </div>
                </div>
            </header>
        
  </span>
</template>

 <style>
    .table tr td{
       padding:5px; 
    }
 </style>



<script>


 



export default {
  data() {
    return {
      form: new Form({
        supplier_id: "",
        scanInformation: "",
      }),
      gets:'',
    //   invoiceInfo:'',
    //   invoiceProductLists:[],
    //   purchaseProductList:[],
    //   productBrandLists:[],
    //   purchaseTypes:[],
    //   unitLists:[],
    //   countryLists:[],
    //   supplierInfo:'', 
      
    };
  },
 
  mounted(){

    this.getInvoiceSetupInformation();
    // this.getInvoiceInformation();
    // this.getSupplyerInformation();
    // this.getProductList();
 
     
  },

  methods: {

    getInvoiceSetupInformation() {
    let uri = `getInvoiceSetupInformation/2`;
    axios.get(uri).then((response) => {
      this.gets = response.data.data;
    });
  },

//     getInvoiceInformation() {
//     let uri = `getInvoiceInformation/${this.$route.params.id}`;
//     axios.get(uri).then((response) => {
//       this.unitLists = response.data.unitList;
//       this.countryLists = response.data.countryList;
//       this.purchaseTypes = response.data.purchaseType;
//       this.productBrandLists = response.data.productBrandList;
//       this.supplier_id = response.data.data.productSupplierId;
//       this.invoiceInfo = response.data.data;
//       this.invoiceProductLists = response.data.invoiceProductLists;
//       this.supplierInfo = response.data.supplierInfo;
//       this.purchaseProductList = response.data.purchaseProductList;
//     });
//   },

 


  },
};

 
</script>