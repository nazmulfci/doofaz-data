<template>
  <span>
      <div class="row">
      <div class="col-12 col-md-1"></div>
       <div class="col-12 col-md-12"> 
    <div class="card main-card  element-block-example">
      <div class="card-header" style="background-color: #34f0cd">
        <!-- <h3 style="color:black">Expired Date Soon Product Report</h3> -->
         <span style="margin: 0px auto;  font-weight: bold; font-size: 30px">
          <router-link :to="`/product@sales`">
            <i class="fa fa-balance-scale" aria-hidden="true"></i>
            Sales
          </router-link>
        </span>
      </div>
      <div class="table-responsive bg-white p-2">
        <table class="table table-hover table-bordered table-striped p-2" width="880px">
          <!-- <thead>
             <tr>
               <th>SN</th>
               <th>Product Name</th>
               <th>Brand</th>
               <th>Mfg Date</th>
               <th>Exp Date</th>
               <th>Expired Date Soon</th>
             </tr>
            </thead> -->
            <tbody>
               <tr v-for="soonDate in soonDates" :key="soonDate.id">
                   <td>Title:&nbsp;Expired Date Soon Product</td>
                   <td>Product:&nbsp;<span v-if="soonDate.product_name">{{soonDate.product_name.productName}}</span></td>
                   <td>Brand:&nbsp;<span v-if="soonDate.product_price_details">{{soonDate.product_price_details.brand_name.productBrandName}}</span></td>
                   <td>Expired Date Soon:&nbsp;<span > {{ parseDate( nowDates ,soonDate.expiryDate) }}&nbsp;Days</span></td>
                   <td><button type="button" @click.prevent="soonExp(soonDate.purchaseProductDetailsId)"   class="btn btn-info"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
seen</button></td>
              </tr>
               <tr v-for="expired in expireds" :key="expired.id">
                   <td>Title:&nbsp;Expired Date  Product</td>
                   <td>Product:&nbsp;<span v-if="expired.product_name">{{expired.product_name.productName}}</span></td>
                   <td>Brand:&nbsp;<span v-if="expired.product_price_details">{{expired.product_price_details.brand_name.productBrandName}}</span></td>
                   <td><button class="mr-2 btn-pill btn-hover-shine btn btn-danger"> <span >Date Expired</span></button></td>
                   <td><button type="button" @click.prevent="dateExp(expired.purchaseProductDetailsId)" class="btn btn-info"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
seen</button></td>
              </tr>
               <tr v-for="shortage in shortages" :key="shortage.id">
                   <td>Title:&nbsp;Shortage Product Notification</td>
                   <td>Product:&nbsp;<span v-if="shortage.product_name">{{shortage.product_name.productName}}</span></td>
                   <td>Brand:&nbsp;<span v-if="shortage.product_price_details">{{shortage.product_price_details.brand_name.productBrandName}}</span></td>
                   <td>Current Quantity:&nbsp;<button  class="mr-2 btn-pill btn-hover-shine btn btn-danger"> <span v-if="shortage.total">{{ shortage.total.totalQuantity }}</span></button></td>
                   <td>Alert Quantity:&nbsp;<button class="mr-2 btn-pill btn-hover-shine btn btn-danger"> <span >{{ shortage.quantityNoti }}</span></button></td>
                   <td><button type="button" @click.prevent="shortageUp(shortage.purchaseProductDetailsId)" class="btn btn-info"><i class="fa fa-eye" aria-hidden="true"></i>
&nbsp;Seen</button></td>
              </tr>
               <tr v-for="low in lows" :key="low.id">
                   <td>Title:&nbsp;Low Quantity Product </td>
                   <td>Product:&nbsp;<span v-if="low.product_name">{{low.product_name.productName}}</span></td>
                     <td>Total Quantity:&nbsp;<button  class="mr-2 btn-pill btn-hover-shine btn btn-danger"> <span >{{ low.totalQuantity }}</span></button></td>
                   <td><button type="button" @click="lowQuan(low.purchaseProductTotalPriceId)" class="btn btn-info"><i class="fa fa-eye" aria-hidden="true"></i>
&nbsp;Seen</button></td>
              </tr>
               <tr v-for="zero in zeros" :key="zero.id">
                   <td>Title:&nbsp;Stock Zero Product </td>
                   <td>Product:&nbsp;<span v-if="zero.product_name">{{zero.product_name.productName}}</span></td>
                    <td><button class="mr-2 btn-pill btn-hover-shine btn btn-danger"> <span >Stock Zero</span></button></td>
                   <td><button type="button" @click="stZero(zero.purchaseProductTotalPriceId)" class="btn btn-info"><i class="fa fa-eye" aria-hidden="true"></i>
&nbsp;Seen</button></td>
              </tr>
            </tbody>
         </table>
       </div>
       </div>
       </div>
       
     </div>
    </span>
</template>
<script>
import moment from "moment";
    export default {
      data () {
          return {
         soonDates:[]  , 
         shortages:[]  , 
         nowDates:[]  , 
         expireds:[]  , 
         zeros:[]  , 
         lows:[]  , 
              moment: moment,
          }
      },
      
      mounted(){
         this.expireDateSoonProductList();
      
      },
      methods:{
          parseDate (start, end) {
        return moment(end, 'YYYY-MM-DD ').diff(moment(start, 'YYYY-MM-DD '), "days")
    },
    dateExp(id){
        axios.get('/alertNoti/'+id).then(res=>{
          this.expireDateSoonProductList(); 
        })
    },
    soonExp(id){
        axios.get('/alertsoonExpNoti/'+id).then(res=>{
          this.expireDateSoonProductList(); 
        })
    },
    shortageUp(id){
        axios.get('/alertshortageNoti/'+id).then(res=>{
          this.expireDateSoonProductList(); 
        })
    },
    lowQuan(id){
        axios.get('/alertNoti/'+id+'/edit').then(res=>{
          this.expireDateSoonProductList(); 
        })
    },
    stZero(id){
        axios.get('/alertstockZeroNoti/'+id).then(res=>{
          this.expireDateSoonProductList(); 
        })
    },
           expireDateSoonProductList(){
           
        axios.get('/alertNoti').then(res=>{
            this.soonDates=res.data.soonDates;   
            this.nowDates=res.data.nowData;   
            this.shortages=res.data.shortage;   
            this.lows=res.data.low;   
            this.expireds=res.data.expired;   
            this.zeros=res.data.stockZero;   
        })

          },
      
      }
    }
</script>
