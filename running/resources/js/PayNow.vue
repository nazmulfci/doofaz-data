<template lang="">
    <span>    
    <div class="row" v-if="authInfos.paymentStatus == 1">    
     <div class="col-12">    
       <div class="alert alert-danger alert-dismissible fade show border border-danger" role="alert" style="overflow:hidden;">  
             <div class="float-left">    
                       <h4 class="alert-heading">     
                         <span class="pe-7s-attention"></span>    
                              {{noti.title}}    
                        </h4>    
                        <h6> {{noti.details}} <button class="border-0 btn-transition btn btn-outline-danger">1200 tk.</button> </h6>    
              </div>    
               <div class="float-right">    
                 <button data-toggle="modal" data-target="#exampleModalpaynow" type="button" class="mb-2 mt-3 mr-2 btn-pill btn-transition btn btn-outline-danger"> <i class="fa fa-usd"> Pay Now </i> </button>
    
               </div>    
             </div>    
           </div>    
         </div>    
    <div class="row" v-if="authInfos.paymentStatus == 3">    
        <div class="col-12">    
            <div class="alert alert-warning alert-dismissible fade show border border-warning" role="alert" style="overflow:hidden;">   
                    <div class="float-left">    
                        <h4 class="alert-heading">    
                        <span class="pe-7s-attention"></span> Your payment date grace till {{moment(accountInfos.billingGraceDate).format("DD MMMM YYYY")}}.</h4>
    
                     </div>    
                <div class="float-right">    
                    <button type="button" class="mb-2 mt-3 mr-2 btn-pill btn-transition btn btn-outline-danger"> <i class="fa fa-usd"> Pay Now </i> </button>
    
                </div>    
            </div>    
        </div>    
    </div>    
    <div class="main-card mb-3 card">    
        <div class="no-gutters row">    
            <!-- modal pay now -->
    
            <div class="modal fade" id="exampleModalpaynow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">   
                <div class="modal-dialog" role="document">    
                    <div class="modal-content">    
                        <div class="modal-header">    
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">     
                   <span aria-hidden="true">&times;</span>
       
                         </button>                      
                            </div>    
                        <div class="modal-body">   
                            <img :src="'/images/'+info.image" class="img-responsive" width="100%">
                 <form @submit.prevent="add()">
                            <!-- <bill-pay></bill-pay> -->
                             <div class="form-group"> <label class="text-primary"><bold> Trx Id  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></bold> </label>
 
              <input type="text"
                v-model="form.trxId"
                class="form-control"
              
                :class="{ 'is-invalid': form.errors.has('trxId') }"
              >
              <has-error :form="form" field="trxId"></has-error>
            </div>   
                             <div class="form-group"> <label class="text-primary"> <bold> Note</bold>
                             </label>
 
              <textarea  type="text"
                v-model="form.note"
                class="form-control"
            
              
              >
              </textarea >
            
            </div>   

            <button    :disabled="loading" class="btn btn-primary" type="submit">   <span
                            v-if="loading"
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>Submit</button>

              </form>
      

    
                        </div> 
                    </div>    
                </div>    
            </div>    
            <div class="col-md-6 col-xl-4">    
            </div>    
            <div class="col-md-6 col-xl-4">    
                <div class="widget-content">    
                    <div class="widget-content-wrapper">    
                        <div class="widget-content-right ml-0 mr-3">    
                            <div class="widget-numbers text-success">    
                                <div class="icon-wrapper rounded-circle">    
                                    <div class="icon-wrapper-bg bg-light opacity-7"></div> <i class="pe-7s-cash text-success"></i></div>
    
                            </div>    
                        </div>    
                        <div class="widget-content-left">    
                            <div class="widget-heading"> Select Payment Option </div>    
                            <div class="dropdown">
    
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    
        Select Option
    
      </button>    
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">    
                                    <a v-for="showBankName in showBankNames" :value="showBankName.bank.bankEntryId" :key="showBankName.id" class="dropdown-item" @click.prevent="showInstracution(showBankName.bank.bankEntryId)" data-toggle="modal" data-target="#exampleModalpaynow">    {{ showBankName.bank.bankName }}</a>    
    
    
                                </div>
    
                            </div>
    
    
    
    
    
    
    
                            <div class="widget">Billing Date: {{moment(accountInfos.billingDate).format("DD MMMM YYYY")}}</div>
    
                            <!-- <div class="widget"> {{currencyRate}} {{authInfos.code}} <router-link to="branchSetup" class=""> Details </router-link></div> -->
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
    
    
    
    </span>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      authInfos: "",
      accountInfos: [],
      showBankNames: [],
      currencyRate: "",
      symbols: "",
      code: "",
        loading: false,
      moment: moment,
      form: new Form({
        codes: "",
        trxId:"",
        note:""
      }),
      noti: [],
      info: [],
    };
  },
  mounted() {
    this.view();
    this.getAuthInfo();
    this.getAccountInfoById();
    this.senderBankTypeIdCatch();

    // this.shopBillDateExpired();
  },

  methods: {
    shopBillDateExpired() {
      let url = "shopBillDateExpired";
      axios.get(url).then((response) => {
        if (response.data.data == "Expired") {
          //   this.$router.push('shop');
        }
      });
    },
    showInstracution(id) {
      axios.get("billingInformation/" + id).then((res) => {
        this.info = res.data.show;
      });
    },
    add(){
      this.loading = true
               this.form.post('billingDetails').then(res=>{
                 this.loading = false
                 $('#exampleModalpaynow').modal('hide');
                     Toast.fire({
                       icon:'success',
                       title:'Successfully Submitted',
                     })
              }) .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
    },
    getAuthInfo() {
      let url = "getAuthInfo";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.authInfos = response.data;
        });
    },
    view() {
      axios.get("/expireDateInfo").then((res) => {
        this.noti = res.data.getNoti;
      });
    },

    getAccountInfoById() {
      let url = "getAccountInfoById";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.accountInfos = response.data;
        });
    },
    senderBankTypeIdCatch() {
      axios.get("/bankNameListGetInfo").then((res) => {
        this.showBankNames = res.data.bankNameList;
      });
    },
  },
};
</script>