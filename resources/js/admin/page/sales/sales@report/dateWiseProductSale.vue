<template id="">
  <span>

  



    <div class="card">
      <div class="card-header-tab card-header alert-info">
    <h4>
      <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>
          Date Wise Product Sale </h4>
      </div>

      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">

            <thead>
            <tr>
                <th colspan="15" class="text-center"> 
                  <center>
                    <form method="" @submit.prevent="productSearch()">
                      <table class="">
                        <tr>
                            <td>
                                <input type="date" v-model="form.dateFrom" class="form-control" placeholder="Select Date" style="width:150px;">
                            </td>
                            <td> 
                                <input type="date" v-model="form.dateTo" class="form-control" placeholder="Select Date" style="width:150px;">
                            </td>
                            <td>
                              <input type="hidden" v-model="form.productIdClick">
                                <select v-model="form.productId" type="text" class="form-control" placeholder="Select Voucher Type" style="width:180px;">
                                <option value=""> Select Product </option> 
                                <option v-for="voucherTypeList in voucherTypeLists" 
                                :value="voucherTypeList.productNameId"> {{voucherTypeList.productName}} </option> 
                                </select>
                            </td>
                            <td> <input type="submit" class="btn btn-primary" value="Search"> </td>
                            <td> <input type="reset" class="btn btn-danger"> 
                            </td>
                        </tr>
                      </table>
                  </form>
                  </center> 
                   </th>
              </tr>
              </thead>

              <thead>
                  <tr>
                      <th colspan="15" class="text-center"> 
                        <button class="btn btn-success"> <b style="font-size:17px;">Total Profit : {{totalProfit}} </b> </button> </th>
                  </tr>
              </thead>


                            <!-- Table heading -->
                <thead>
                    <tr>
                        
                        <th> SL </th>
                        <th> Date </th>
                        <th> Product Name </th>
                        <!-- <th> Brand </th>
                        <th> Size </th>
                        <th> Color </th> -->
                        <!-- <th> Customer Type </th>
                        <th> Customer Name </th> -->
                        <th> Quantity </th>
                        <th> Return Quantity </th>
                        <th> MRP </th>
                        <th> Sales  </th>
                        <th> Wholesale  </th>
                        <th> Special  </th>
                        <th> E-Commerce  </th>
                        <th> Total Sale  </th>
                        
                        <th> Total Return  </th>
                        <th> Profit  </th>
                        <th> View  </th>
                    </tr> 
                    
                </thead>
                <!-- // Table heading END -->
            <tbody>
                <tr v-for="voucherInformationList,index in voucherInformationLists">
                    <td> {{index+1}} </td>
                    <td> {{moment(voucherInformationList.created_at).format("DD-MMMM-YYYY")}} </td>
                    <td> {{voucherInformationList.productId}} </td>
                    <!-- <td> {{voucherInformationList.brandId}} </td>
                    <td> {{voucherInformationList.size}} </td>
                    <td> {{voucherInformationList.color}} </td> 
                    <td> {{voucherInformationList.salesCustomerType}} </td>
                    <td> {{voucherInformationList.salesCustomerName}} </td> -->
                    <td> {{voucherInformationList.quantity}} </td>
                    <td> {{voucherInformationList.returnQuantity}} </td>
                    <td> {{voucherInformationList.unitPrice}} </td>
                    <td> {{voucherInformationList.sales}} </td>
                    <td> {{voucherInformationList.wholesale}} </td>
                    <td> {{voucherInformationList.special}} </td>
                    <td> {{voucherInformationList.ecommerce}} </td>
                    <td> {{voucherInformationList.totalPrice}} </td>
                    
                    <td> {{voucherInformationList.totalReturn}} </td>
                    <td> {{voucherInformationList.totalProfit}} </td>
                    <td> <button type="button" class="btn btn-primary"
                    data-toggle="modal" data-target="#exampleModalCenter"
                     @click="showDetails(voucherInformationList.product)"> Show  </button> </td>
                </tr>

               <tr v-if="resultNotFound">
                <td colspan="16">
                  <center> Result Not Found. </center>
                </td>
              </tr>
            </tbody>
          </table>

 

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Product Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body table-responsive">
        <table class="table table-bordered">
          <thead>
                    <tr>
                        <th> SL </th>
                        <th> Date</th>
                        <th> Customer Type </th>
                        <th> Customer Name </th>
                        <th> Product Name </th>
                        <th> Brand </th>
                        <th> Size </th>
                        <th> Color </th>
                       
                        <th> Quantity </th>
                        <th> MRP </th>
                        <th> Sales  </th>
                        <th> Wholesale  </th>
                        <th> Special  </th>
                        <th> E-Commerce  </th>
                        <th> Discount </th>
                        <th> Total Sale  </th>
                        <!-- <th> Profit  </th> -->
                    </tr> 
                    
                </thead>

                <tbody>
                  <tr v-for="productDetailsList,index in productDetailsLists">
                    <td> {{index+1}} </td>
                    <td style="white-space:nowrap;"> {{moment(productDetailsList.created_at).format("DD-MMMM-YYYY")}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.salesCustomerType}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.salesCustomerName}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.productId}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.brandId}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.size}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.color}} </td>
 
                    <td style="white-space:nowrap;"> {{productDetailsList.quantity}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.unitPrice}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.sales}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.wholesale}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.special}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.ecommerce}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.totalDiscount}} </td>
                    <td style="white-space:nowrap;"> {{productDetailsList.totalPrice}} </td>
                    <!-- <td style="white-space:nowrap;"> {{productDetailsList.totalProfit}} </td> -->
                </tr>
                </tbody>

        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal"> Close </button>
      </div>
    </div>
  </div>
</div>
 
        </div>
      </div>
    </div>
  </span>
</template>


<script>
import moment from 'moment';
export default {

  
  data() {
    return {
      productDetailsLists: [],
      chartOfAccountLists: [],
      chartOfAccountRegisterLists: [],
      mainHeadLists: [],
      subHeadLists: [],
      voucherTypeLists: [],
      IncomeExpenseCompanyList: [],
      voucherInformationLists: '',
      totalProfit: 0,
      resultNotFound: true,
      moment: moment,
      

 
      form: new Form({
                        mainHead:'',
                        subHead:'',
                        voucherType:'',
                        dateFrom:'',
                        dateTo: moment().format("YYYY-MM-DD"),
                        voucherNo:'',
                        productIdClick:'',
      }),
       
    };
  },
  mounted(){

    this.view();
    this.salesProductList();
  
 
  },
  methods: {

    view() {

this.form.mainHead = '';
this.form.subHead = '';
this.form.voucherType = '';
this.form.voucherDate = '';
this.form.voucherNo = '';

 

    },


 
    
    productSearch() {
      
      let url = 'dateWiseProductSearch';
      this.form.post(url).then((response) => {

          if(response.data.data == ''){
            this.resultNotFound = true;
          }else{
              this.resultNotFound = false;
          }

          this.voucherInformationLists = response.data.productList;
          this.totalProfit = response.data.toatlProfit;
        
          
        });
    },
    showDetails(e) {
      
      // alert(e);
      this.form.productIdClick = e;
      
      let url = 'dateWiseDetailsProductSearch';
      this.form.post(url).then((response) => {

          this.productDetailsLists = response.data.product;

        });
    },

    salesProductList(){
      let url = 'salesProductList';
      this.form.get(url).then((response) => {
 
          this.voucherTypeLists = response.data.data;

        });
    },
 
    
 
 
  },
};
</script>