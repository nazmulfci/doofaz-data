<template id="">
  <span>

  

    <div class="card">
            <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Opening Voucher Entry </h4>
        </div>
      </div>


<form @submit.prevent="addNewVoucherInformation"> 
      <div class="supplier-entry py-4 px-2 comm-form-back-img">

     
         <div
          class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"
        >
            <div class="row">
            <div class="col-lg-6">
            <div class="form-group">
              <label> Date <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <input type="date"
                v-model="form.voucherDate"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('voucherDate') }"
              > 
              <has-error :form="form" field="voucherDate"></has-error>
            </div>
            
            
            <div class="form-group">
              <label> Voucher Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <select
                v-model="form.voucherType"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('voucherType') }"
                @change="getVoucherCode()"
                >
                <option value="">Select Voucher Type</option>
                <option v-for="voucherTypeList in voucherTypeLists"
                v-if="voucherTypeList.shortName=='OV'"
                 :value="voucherTypeList.id"> {{voucherTypeList.name}} </option> 
              </select>
              <has-error :form="form" field="voucherType"></has-error>
            </div>

            
             
            
            <div class="form-group">
              <label> Voucher No
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <input type="hidden"
                v-model="form.voucherNo1"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('voucherNo1') }"
                disabled
                >
 
              <input type="text"
                v-model="form.voucherNo"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('voucherNo') }"
                disabled
                >
              <has-error :form="form" field="voucherNo"></has-error>
            </div>
            
          </div>



            <div class="col-lg-6">
             
            <div class="form-group">
              <!-- there show sub ladger from chart of accounts -->
              <label> Head Of Accounts <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <select
                v-model="form.headOfAccounts"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('headOfAccounts') }"
                @change="getSubHeadOfAccounts()"
                >
                <option value=""> ---------------- </option>
                <option v-for="headOfAccountList in headOfAccountLists" 
                :value="headOfAccountList.headCode"> {{headOfAccountList.headName}} </option> 
              </select>
              <has-error :form="form" field="headOfAccounts"></has-error>
            </div>
            
            
            <div class="form-group" v-if="subHeadStatus">
              <!-- there show register from chart of accounts -->
              <label> Sub Head  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 

               <multiselect
                          @input="checkHaveOpening"
                          label="headName"
                          placeholder="-------"
                          :options="subHeadOfAccountLists"
                          :show-labels="false"
                          v-model="form.subHeadMulti"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('productSupplierId'),
                          }"
                          style="
                            padding: 0px !important;
                            padding-bottom: 3px !important;
                          "
                        >
                        </multiselect>

              <select style="display:none;"
                v-model="form.subHead"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('subHead') }"
                @change="checkHaveOpening()"
                >
                <option v-for="subHeadOfAccountList in subHeadOfAccountLists" 
                :value="subHeadOfAccountList.headCode"> {{subHeadOfAccountList.headName}} </option> 
              </select>
              <has-error :form="form" field="subHead"></has-error>
              <span v-if="thisCodeAllreadyHave" class="badge badge-danger">
                This Code Allready have in Openning.
              </span>
            </div>

            
             
            
            <div class="form-group">
                <div class="row">
                <div class="col-6">
              <label> Amount
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                </div>

                <div class="col-6">
              <label> Dr. / Cr.
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                </div>
                </div>


                <div class="row">
                <div class="col-6">
              <input type="text"
                v-model="form.voucherAmount"
                @keyup="calculate"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('voucherAmount') }"
                >
              <has-error :form="form" field="voucherAmount"></has-error>
              <span v-if="invalid" style="color:red">Negative And Character Value Not Allowed</span>
                </div>
            
            <div class="col-6">
              <select
                v-model="form.drcr_type"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('drcr_type') }"
                >
                <option value="1"> Debit </option> 
                <option value="2"> Credit </option> 
              </select>
              <has-error :form="form" field="drcr_type"></has-error>
            </div>
            </div>


            </div>
            
            <div class="form-group">
               
              <button v-if="submit_have" type="button"
              @click="addTmpVoucher()"
               class="btn btn-primary float-right mb-3"> Add </button>
               
              <button v-if="invalid_have" type="button"
               class="btn btn-danger float-right mb-3"> Add </button>
            </div>
            
            
            <div class="form-group">
               
              <table class="table table-bordered mt-3">
                  <tr class="bg-light">
                      <th> Head Name </th>
                      <th> Dr </th>
                      <th> Cr </th>
                  </tr>
                  <tbody v-html="tmpHeadEntrys">
                  </tbody>
              </table>

            </div>
            
            <div class="form-group">
              <label> Particular
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <textarea
                v-model="form.particular"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('particular') }"
                rows="5"
                ></textarea>
              <has-error :form="form" field="particular"></has-error>
            </div>
            
          
 
          </div>
          </div>


        </div>
 
        

        
        </div>




        <!-- -----------------------------   card footer  -->
 
<div class="d-block pt-3 pb-4 card-footer overflow-hidden">
<div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">


                                <button type="reset" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Clear </span>
                                </button>

                                <button v-if="submitButton" type="submit" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right"
                                :disabled="loading"
              >
                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>

                <span v-else class="mr-2 opacity-7">
                  <i class="fa fa-paper-plane"></i>
                </span>
                                    <span class="mr-1"> Add New Entry </span>
                                </button>


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 


        
        </form>
 
    </div>

    <div class="card mt-5">
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          View Information </h4>
      </div>

      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
            <thead>
              <tr>
                <th>SL</th>
                <th>Date</th>
                <th>Voucher No </th>
                <th>Voucher Type </th>
                <th> Amount </th>
                <th> View </th>
                <!-- <th> Action </th> -->
              </tr>
            </thead>
            <tbody>
              <tr
              v-for="voucherInformationList,index in voucherInformationLists" 
              :key="voucherInformationList.id">
                <td>{{ ++index }}</td>
                <td> {{moment(voucherInformationList.voucherDate).format("DD MMMM YYYY")}} </td>
                <td>{{ voucherInformationList.voucherNo }}</td>
                <td>
                  <span v-for="voucherTypeList in voucherTypeLists" v-if="voucherTypeList.id==voucherInformationList.voucherType">
                    {{ voucherTypeList.name }}
                  </span>
                  </td>
                <td>{{ voucherInformationList.voucherAmount }}</td>
                 
                <td>
                  <router-link
                    :to="`/viewVoucher${voucherInformationList.id}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
                  ><i class="fa fa-eye"></i> View</router-link
                  >
                </td>
                <!-- <td>
                  <button 
                    @click.prevent="deletePost(voucherInformationList.id)"
                    class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine"
                >
                  <i class="fa fa-trash"></i>Delete
                  </button>
                </td>  -->
              </tr>
            </tbody>
          </table>


 
        </div>
      </div>
    </div>
  </span>
</template>

<style>
.tree{
  width:1px;
  height: 51px;
  background: black;
  position: relative;
  float: left;
  margin-right: 30px;
  
}  
.tree1{
  width: 30px;
  height: 1px;
  background: rgb(0, 0, 0);
  margin-top: 25px;
}
</style>

<script>
import moment from 'moment';
import Multiselect from "vue-multiselect";
export default {

  
  data() {
    return {
      tmpHeadEntrys: '',
      voucherTypeLists: [],
      voucherInformationLists: [],
      paymentTo:'Pay by',

      thisCodeAllreadyHave:false,
      submit_have:true,
      invalid_have:false,

      paymentToStatus:true,
      bankInfo:false,
      receiverBankAccountNameStatus:false,
      headOfCashBookTitle:'Head Of Cash Book',
      headOfCashBookBox:false,
      headOfCashBookLists:[],
      headOfAccountLists:[],
      subHeadOfAccountLists:[],
      subHeadStatus:false,
      invalid:false,
      moment: moment,
      loading: false,
      submitButton:false,

 
      form: new Form({
                        voucherDate: new Date().toISOString().slice(0,10),
                        voucherType: "",
                        drcr_type: 1,
                        voucherNo: "",
                        voucherNo1: '',
                        paymentTo: "",
                        mobileNo: "",
                        checkPaymentType: "",
                        receiverBankAccountName: "",
                        chequeNo: "",
                        chequeDate: "",
                        headOfCashBook: "1010",
                        headOfAccounts: "",
                        subHead: "",
                        subHeadMulti: "",
                        voucherAmount: "",
                        particular: "",
      }),
       
    };
  },
      components: {
    Multiselect,
  },
  mounted() {
    this.view(); 
  },
  methods: {
    view() {
      let url = "openingVoucherEntryInformation";
      axios.get(url)
        .then((response) => {
          this.voucherInformationLists = response.data.voucherInformation;
          this.voucherTypeLists = response.data.list;
        });
    },
checkHaveOpening(value){
  this.form.subHead = value.headCode;
    let url = "checkAccountCodeInOpening/"+this.form.subHead;
      axios.get(url)
        .then((response) => {
          if(response.data.have==1){
            this.thisCodeAllreadyHave=true
            this.submit_have=false
            this.invalid_have = true
          }
          else{
            this.thisCodeAllreadyHave=false
            this.submit_have=true
            this.invalid_have = false
          }
        });
},
      calculate(e){
         
         let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) &&  this.form.voucherAmount !== "") {
        this.invalid = true;
       
       this.form.voucherAmount= '';
      } else {
       this.invalid = false;
       
      }
    },
 getVoucherCode(){

   this.form.headOfCashBook='';
   this.form.headOfAccounts='';
   this.subHeadStatus=false;
   this.form.subHead='';
   this.headOfCashBookLists=[];
   this.headOfAccountLists=[];


let url = "getVoucherCode/"+this.form.voucherType;
      axios.get(url)
        .then((response) => {
          this.form.voucherNo = response.data.code;
          this.form.voucherNo1 = response.data.code1;
        });
 


        


        if(this.form.voucherType == 1){
              this.paymentTo = 'Pay by';
              this.headOfCashBookTitle = 'Head Of Cash Book';
              this.paymentToStatus = true;
              this.bankInfo = false;


              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code

        }

        else if(this.form.voucherType == 2){
              this.paymentTo = 'Receive by';
              this.headOfCashBookTitle = 'Head Of Cash Book'
              this.paymentToStatus = true;
              this.bankInfo = false;


              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code

        }

        else if(this.form.voucherType == 3){
              this.paymentTo = 'Pay by';
              this.headOfCashBookTitle = 'Head Of Bank Book'
              this.paymentToStatus = true;
              this.bankInfo = true;

              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }

        else if(this.form.voucherType == 4){
              this.paymentTo = 'Receive by';
              this.headOfCashBookTitle = 'Head Of Bank Book'
              this.paymentToStatus = true;
              this.bankInfo = true;

              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }

        else if(this.form.voucherType == 5){
              this.paymentTo = 'Receive by';
              this.paymentToStatus = false;
              this.bankInfo = false;

              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }

        else if(this.form.voucherType == 6){
              this.paymentTo = 'Receive by';
              this.paymentToStatus = false;
              this.bankInfo = false;

              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }

        else if(this.form.voucherType == 7){
              this.paymentTo = 'Receive by';
              this.paymentToStatus = false;
              this.bankInfo = false;

              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }
 },
getSubHeadOfAccounts(){
                // get voucher head code
                      let url = "getSubHeadOfAccounts/"+this.form.headOfAccounts;
                      axios.get(url).then((response) => {
                        this.subHeadStatus = true;
                        this.subHeadOfAccountLists = response.data.subHeadList;
                      });
              // get voucher head code
},
 checkPaymentType(){
     if(this.form.checkPaymentType==2){
     this.receiverBankAccountNameStatus = true;
     }else{
     this.receiverBankAccountNameStatus = false;
     }
 },
    
 

    deletePost(id) {
      let uri = `voucherEntryInformation/${id}`;
      axios.delete(uri).then((response) => {
        Toast.fire({
                icon: 'success',
                title: 'Delete Successfull.'
            })
        this.view();
      });
    },
 
    addTmpVoucher(){
      this.invalid_have = true;
      this.submit_have = false;
        
 
          let url = "addTmpVoucher/"
          +this.form.voucherNo1
          +"/"+this.form.headOfAccounts
          +"/"+this.form.subHead
          +"/"+this.form.voucherAmount
          +"/"+this.form.drcr_type
          +"/"+this.form.voucherDate;

                      axios.get(url).then((response) => {
                        // this.subHeadStatus = true;
                        this.tmpHeadEntrys = response.data.data;
                        this.form.voucherAmount = '';
                        this.form.subHead = '';
                        this.form.subHeadMulti = '';
                        this.form.headOfAccounts = '';
                        this.submitButton = true;

                              this.invalid_have = false;
                              this.submit_have = true;
                      }).catch((res) => {
                          this.loading = false;
                          Toast.fire({
                            icon: "error",
                            title: "Something Missing",
                          });
                          this.invalid_have = false;
                          this.submit_have = true;
                        });

    },

    addNewVoucherInformation() {
      this.loading = true;
      this.form.post("voucherEntryInformation").then((response) => {
        this.loading = false;
          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
              background: '#c9f4c9', //green
            title: "Voucher Entry Successful.",
          }),
          this.submitButton = false;
          this.tmpHeadEntrys='';
          this.view();
          this.form.reset();
          
      }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },
  },
};
</script>