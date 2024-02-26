<template id="">
  <span>
      <div class="card">
        <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Sales Product Price Update </h3>
         </div>
         <form @submit.prevent="productPriceUpdate()">
         
           <div class="py-4 px-2">
            <div class="offset-sm-1 col-9 pl-sm-5 supplier-border">
                  <div class="form-row">
                      <div class="col-sm-3 col-6 mt-2">
                        <label class="p-0"> Product Name </label>
                      </div>
                      <div class="col-sm-8 col-12">
                        <input type="text" disabled v-if="view.product_name" :value="view.product_name.productName" name="productNameId" :class="{ 'is-invalid': form.errors.has('productNameId') }" class="form-control" placeholder="Product Name">
                        <has-error :form="form" field="productNameId"></has-error>
                      </div>
                  </div>
                  <div class="form-row pt-3">
                      <div class="col-sm-3 col-6 mt-2">
                        <label class="p-0">Purchase Unit Price</label>
                      </div>
                      <div class="col-sm-8 col-12">
                        <input type="text" disabled v-if="view.brand" :value="view.brand.unitPrice" name="unitPrice" :class="{ 'is-invalid': form.errors.has('unitPrice') }" class="form-control" placeholder="Purchase Unit Price">
                        <has-error :form="form" field="unitPrice"></has-error>
                      </div>
                   </div>
                 <div class="form-row pt-3">
                      <div class="col-sm-3 col-6 mt-2">
                        <label class="p-0">MRP Price</label>
                      </div>
                      <div class="col-sm-8 col-12">
                           <span v-if="negative" style="color:red">Negative Value Not Allowed</span>
                           <!-- v-modal="form.mrpPrice" -->
                        <div type="text" @click="showAdvanceUnitSetupSales(view.productId,2,view.salesProductPriceEntryId)"  @keyup="mrp" @keyup.prevent="inputValueCheck()" name="mrpPrice"  class="form-control" placeholder="MRP Price">{{form.mrpPrice}}</div>
                        <has-error :form="form" field="mrpPrice"></has-error>
                      </div>
                   </div>
                  <div class="form-row pt-3">
                      <div class="col-sm-3 col-6 mt-2">
                        <label class="p-0">Sales Price</label>
                      </div>
                      <div class="col-sm-8 col-12">
                         <span v-if="negative1" style="color:red">Negative Value Not Allowed</span>
                          <!-- v-model="form.salesPrice" -->
                        <div type="text" @click="showAdvanceUnitSetupSales(view.productId,1,view.salesProductPriceEntryId)" @keyup="sales" @keyup.prevent="inputValueCheck()" name="salesPrice"  class="form-control" placeholder="Sales Price"> {{form.salesPrice}} </div>
                        <has-error :form="form" field="salesPrice"></has-error>
                      </div>
                  </div>
                  <div class="form-row pt-3">
                      <div class="col-sm-3 col-6 mt-2">
                        <label class="p-0">Wholesale Price</label>
                      </div>
                      <div class="col-sm-8 col-12">
                          <span v-if="negative2" style="color:red">Negative Value Not Allowed</span>
                           <!-- v-model="form.wholesalePrice" -->
                        <div type="text" @click="showAdvanceUnitSetupSales(view.productId,3,view.salesProductPriceEntryId)" @keyup="wholesale" @keyup.prevent="inputValueCheck()" name="wholesalePrice"  class="form-control" placeholder="Whole sale Price">{{form.wholesalePrice}}</div>
                      </div>
                  </div>
                  <div class="form-row pt-3">
                      <div class="col-sm-3 col-6 mt-2">
                        <label class="p-0">Special Price</label>
                      </div>
                      <div class="col-sm-8 col-12">
                          <span v-if="negative3" style="color:red">Negative Value Not Allowed</span>
                         <!-- v-model="form.specialPrice" -->
                        <div type="text" @click="showAdvanceUnitSetupSales(view.productId,4,view.salesProductPriceEntryId)" @keyup="special" @keyup.prevent="inputValueCheck()" name="specialPrice"  class="form-control" placeholder="Special Price">{{form.specialPrice}}</div>
                        <has-error :form="form" field="specialPrice"></has-error>
                      </div>
                  </div>
                  <div class="form-row pt-3">
                      <div class="col-sm-3 col-6 mt-2">
                        <label class="p-0">E-Commerce Price</label>
                      </div>
                      <div class="col-sm-8 col-12">
                          <span v-if="negative4" style="color:red">Negative Value Not Allowed</span>
                        <!-- v-model="form.eCommercePrice" -->
                        <div type="text" @click="showAdvanceUnitSetupSales(view.productId,5,view.salesProductPriceEntryId)"   @keyup="ecommerce" @keyup.prevent="inputValueCheck()" name="eCommercePrice"  class="form-control" placeholder="E-Commerce Price">{{form.eCommercePrice}}</div>
                        <has-error :form="form" field="eCommercePrice"></has-error>
                      </div>
                  </div>

                  <div class="col-11 text-right pr-0 pt-3">
                    <button type="submit" class="btn-pill btn-hover-shine btn btn-primary"
                    :disabled="loading">
                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>

                <span v-else class="mr-2 opacity-7">
                  <i class="fa fa-paper-plane"></i>
                </span>Update</button>
                  </div>
             </div>
           </div>
       </form>
     </div>



 

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> {{priceType}} </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="table-responsive alert-success">
                       <table class="table table-bordered">
                         
                         <tbody>
                            <tr>
                              <th> Quantity  </th>
                              <th> Unit  </th>
                              <th> Unit Price  </th>
                              <th> Total Price  </th>
                            </tr>

                            <tr v-for="advanceUnitSetupList in adv_sales_priceLists">
                          
                           <td> {{advanceUnitSetupList.totalQuantity}} 
                             <input v-bind:id="'quantity-'+advanceUnitSetupList.id"  type="hidden" class="form-control" :value="advanceUnitSetupList.totalQuantity">
                           </td>
                           <td> <span
                                    v-for="unitNameShow in unitNameShows"
                                    :value="unitNameShow.uniteEntryId"
                                    v-if="unitNameShow.uniteEntryId==advanceUnitSetupList.totalUnitId"
                                  >
                                    {{ unitNameShow.uniteEntryName }}
                                  </span> </td>
 
                                  <td> <input style="width:200px;" @change="changeSalesUnitPrice(advanceUnitSetupList.id,priceTypeId)" step="0.00" v-bind:id="'price-'+advanceUnitSetupList.id" :min="advanceUnitSetupList.salesUnitPrice" type="number" class="form-control" :value="advanceUnitSetupList.salesUnitPrice" :placeholder="advanceUnitSetupList.salesUnitPriceShow"> </td>
                                  <td  v-bind:id="'totalPrice-'+advanceUnitSetupList.id"> {{advanceUnitSetupList.salesTotalPrice}}</td>
                           
                         </tr>
                         </tbody>

                       </table>
                       </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  data-dismiss="modal"> Done </button>
      </div>
    </div>
  </div>
</div>

  </span>

</template>

<script>
    export default {
        data(){
            return{
              loading: false,
                form: new Form({
                    purchaseProductId:'',
                    productNameId:'',
                    productId:'',
                    unitPrice:'',
                    mrpPrice:'',
                    salesPrice:'',
                    wholesalePrice: '',
                    specialPrice:'',
                    eCommercePrice:'',
                }),
                negative:false,
                negative1:false,
                negative2:false,
                negative3:false,
                negative4:false,
                priceType:'',
                priceTypeId:'',
                priceSetupId: '',
                view:'',
                purchaseProductLists:[],
                adv_sales_priceLists:[],
                unitNameShows: [],
                            
            }
        },

        mounted() {
            this.salesProductNameList()
            this.salesProductPriceInfo()
            this.unitNameShow()
        },

        methods: {



          changeSalesUnitPrice(e,priceType){
          let quantity = $('#quantity-'+e).val();
          let unitPrice = $('#price-'+e).val();

          axios.get('/advanceUnitSalesPriceUpdateType/'+e+'/'+unitPrice+'/'+priceType+'/'+this.priceSetupId).then(res => {

                    this.adv_sales_priceLists = res.data.info;

                    if(priceType==1){
                    this.form.salesPrice = res.data.firstPrice;
                    }
                    else if(priceType==2){
                    this.form.mrpPrice = res.data.firstPrice;
                    }
                    else if(priceType==3){
                    this.form.wholesalePrice = res.data.firstPrice;
                    }
                    else if(priceType==4){
                    this.form.specialPrice = res.data.firstPrice;
                    }
                    else if(priceType==5){
                    this.form.eCommercePrice = res.data.firstPrice;
                    }

                   
                  });
                  //  $('#totalPrice-'+e).val(unitPrice);

          },

          showAdvanceUnitSetupSales(productId,priceType,priceSetupId){

            this.adv_sales_priceLists = [];
            this.priceType = '';
            this.priceTypeId = '';
            this.priceSetupId = '';

          axios.get('/advanceUnitSetupCheck/'+productId).then(res => {
            if(res.data.have==0){

            }
            else{
              $("#exampleModal").modal("show");
          axios.get('/advanceUnitSetupByPriceType/'+productId+'/'+priceType+'/'+priceSetupId).then(res => {
            this.adv_sales_priceLists = res.data.data;
            this.priceType = res.data.priceType;
            this.priceTypeId = priceType;
            this.priceSetupId = priceSetupId;


                    if(priceType==1){
                    this.form.salesPrice = res.data.unitPrice;
                    }
                    else if(priceType==2){
                    this.form.mrpPrice = res.data.unitPrice;
                    }
                    else if(priceType==3){
                    this.form.wholesalePrice = res.data.unitPrice;
                    }
                    else if(priceType==4){
                    this.form.specialPrice = res.data.unitPrice;
                    }
                    else if(priceType==5){
                    this.form.eCommercePrice = res.data.unitPrice;
                    }
          });
            }
          });
},

    unitNameShow() {
      axios.get("/unitNameShow").then((res) => {
        this.unitNameShows = res.data.unitNameShow;
      });
    },
            salesProductNameList() {
                axios.get('/salesProductNameShow').then(res => {
                     this.purchaseProductLists = res.data.purchaseProductLists
                })
            },
                mrp(e){
             let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this.form.mrpPrice!==""){
             this.negative=true;
            
              this.form.mrpPrice='';
            }
        else{
          if(this.form.mrpPrice<0){
           this.negative=true;
             this.form.mrpPrice='';
          }
          else{
             this.negative=false;
          }
           this.negative=false;
        }
          },
            sales(e){
             let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this.form.salesPrice!==""){
             this.negative1=true;
            
              this.form.salesPrice='';
            }
        else{
          if(this.form.salesPrice<0){
           this.negative1=true;
             this.form.salesPrice=1;
          }
          else{
             this.negative1=false;
          }
           this.negative1=false;
        }
          },
            wholesale(e){
             let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this.form.wholesalePrice!==""){
             this.negative2=true;
            
              this.form.wholesalePrice='';
            }
        else{
          if(this.form.wholesalePrice<0){
           this.negative2=true;
             this.form.wholesalePrice='';
          }
          else{
             this.negative2=false;
          }
           this.negative2=false;
        }
          },
            special(e){
             let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this.form.specialPrice!==""){
             this.negative3=true;
            
              this.form.specialPrice='';
            }
        else{
          if(this.form.specialPrice<0){
           this.negative3=true;
             this.form.specialPrice='';
          }
          else{
             this.negative3=false;
          }
           this.negative3=false;
        }
          },
            ecommerce(e){
             let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this.form.eCommercePrice!==""){
             this.negative4=true;
            
              this.form.eCommercePrice='';
            }
        else{
          if(this.form.eCommercePrice<0){
           this.negative4=true;
             this.form.eCommercePrice='';
          }
          else{
             this.negative4=false;
          }
           this.negative4=false;
        }
          },
            salesProductPriceInfo() {
                axios.get('/salesProductPriceEntry/'+this.$route.params.salesProductPriceEntryId+'/edit').then(res => {
                    this.form.fill(res.data.getData);
                    this.view=res.data.getData;
                    this.productIdCatch()
                })
            },
            productIdCatch() {
                axios.get('/productUnitePrice/'+this.form.purchaseProductId).then(res => {

                  if(res.data.productUnitePrice){
                     this.form.unitPrice = res.data.productUnitePrice.unitPrice
                     this.form.productNameId = res.data.productUnitePrice.product_name.productName
                     this.form.productId = res.data.productUnitePrice.productId
                  }

                })
            },
            
            productPriceUpdate() {
              this.loading = true;
                this.form.put('/salesProductPriceEntry/'+this.$route.params.salesProductPriceEntryId).then(res => {
                    this.loading = false;
                    if (res.data.alReadyEntry) {
                        Toast.fire({
                          icon: 'error',
                          title: 'Already Sales Product Price Entry'
                        })
                    }
                    else{
                        Toast.fire({
                          icon: 'success',
                          title: 'Sales Product Price Update SuccessFully'
                        })
                        this.$router.push('/priceupdate')
                    }
                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
            },
        }
    }
</script>
