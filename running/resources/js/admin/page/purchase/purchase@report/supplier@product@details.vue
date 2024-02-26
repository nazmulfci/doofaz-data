<template id="">
  <span>
     <div class="card main-card  element-block-example">
         <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
           <h3 style="color:black">Product Supplier Report</h3>
          </div>
          <div class="table-responsive bg-white p-3">
           <table class="table table-hover table-bordered mb-0" id="sampleTable" style="width:1231px">
             <thead>
                <tr>
                  <th> SN </th>
                  <th> Product</th>                 
                  <th> Brand</th>                 
                  <th> Total_Quantity</th>
                  <th> Total.Price</th>                  
                  <th> Action</th>                  
                </tr>
               </thead>
              <tbody >
                <tr v-for="list,index in lists.data" :key="list.id">
                  <td>{{index+1}}</td>
                  <td>{{list.product_name.productName}}</td>
                  <td>{{list.brand_name.productBrandName}}</td>
                  <td>{{list.quantity}}</td>
                  <td>{{list.totalPrice}}</td>
                 <td>
                   <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" data-toggle="modal" @click="details( list.productId,list.brandId)" :data-target="'#purchaseProductId'">
                      <i class=" fa fa-eye pr-2"></i> Price History
                   </button>
                       <!-- Modal -->
        <div
          class="modal fade"
          id="purchaseProductId"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-primary text-light">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Price History
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
                    ">
                    <h3 style="color: black"> Product List </h3>
                  </div>
                  <div class="table-responsive bg-white">
                    <table
                      class="table table-hover table-bordered table-striped"
                    >
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Date</th>
                          <th>Product.Name</th>
                          <th>Brand</th>                        
                          <th>Color/Size</th>                        
                          <th>Invoice.No</th>                        
                          <th>Unit.Price</th>
                     
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(info, index) in infos" :key="info.id">
                          <td>{{index+1}}</td>
                          <td>{{info.created_at}}</td>
                          <td>{{info.product_name.productName}}</td>
                          <td>{{info.brand_name.productBrandName}}</td>
                          <td>
                  <span
                  v-for="colorList in colorLists"
                  v-if="colorList.id==info.colorId">{{
                    colorList.colorName
                  }}</span>
                  
                  <span
                  v-for="sizeList in sizeLists"
                  v-if="sizeList.id==info.sizeId">/ {{
                    sizeList.sizeName
                  }}</span>
                </td>
                          <td>{{info.purchaseInvoiceNo}}</td>
                          <td>{{info.unitPrice}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-hover-shine btn-danger"
                  data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
                </td>
                 
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
  </span>
</template>
<script>

export default {
  data() {
    return {
     lists:[],
     infos:[],
     colorLists: {},
      sizeLists: {},
    };
  },
   props:{
          limit: {
            type: Number,
            default: 2
          }
        },
  mounted() {
      this.view();
      this.getPaginateList();
      this.colorList();
    this.sizeList();
  },
  methods: {
    view() {
axios.get("/supplierProductDetails/"+this.$route.params.productSupplierId).then(res=>{
this.lists=res.data.lists
})
 
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
     getPaginateList(page = 1){
              axios.get('/supplierProductDetails/'+this.$route.params.productSupplierId+'?page=' + page)
              .then(response => {
                  this.lists = response.data.lists;
              });
            },
    details(pid,bid) {
       axios.get('/purchasePriceHistory/'+this.$route.params.productSupplierId+'/'+pid+'/'+bid).then(res=>{
       this.infos=res.data.lists

       })
    },
  }
  
};
</script>

