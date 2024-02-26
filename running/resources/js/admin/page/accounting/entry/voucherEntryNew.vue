<template id="">
  <span>

  

    <div class="card">
      
      
            <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Voucher Entry </h4>
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
              <label> Date <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
 
              <input type="date"
                v-model="form.voucherDate"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('voucherDate') }"
              > 
              <has-error :form="form" field="voucherDate"></has-error>
            </div>
            
            
            <div class="form-group">
              <label> Voucher Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
 
              <select
                v-model="form.voucherType"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('voucherType') }"
                @change="getVoucherCode()"
                >
                <option value=""> Select Voucher Type </option>
                <option v-for="voucherTypeList in voucherTypeLists" 
                v-if="voucherTypeList.id<6"
                :value="voucherTypeList.id"
                > {{voucherTypeList.name}} </option> 
              </select>
              <has-error :form="form" field="voucherType"></has-error>
            </div>

            
             
            
            <div class="form-group">
              <label> Voucher No
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
 
              <input type="text"
                v-model="form.voucherNo"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('voucherNo') }"
                disabled
                >
              <has-error :form="form" field="voucherNo"></has-error>
            </div>
            
            <div class="downOfVoucherNo" v-if="paymentToStatus">
            <div class="form-group">
              <label> {{paymentTo}} </label>
 
              <input type="text"
                v-model="form.paymentTo"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('paymentTo') }"
                >
              <has-error :form="form" field="paymentTo"></has-error>
            </div>
            
            <div class="form-group">
              <label> Mobile No </label>
 
              <input type="text"
                v-model="form.mobileNo"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('mobileNo') }"
                >
              <has-error :form="form" field="mobileNo"></has-error>
            </div>
            
            
            <div class="bankInfo" v-if="bankInfo">
                
            <div class="form-group">
              <label> Check Payment Type </label>
 
              <select
                v-model="form.checkPaymentType"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('checkPaymentType') }"
                @change="checkPaymentType()"
                >
                <option value=""> Select </option>
                <option value="1"> Cash Check </option>
                <option value="2"> Account Payable Check </option>
              </select>
              <has-error :form="form" field="checkPaymentType"></has-error>
            </div>

            <div v-if="receiverBankAccountNameStatus">
            <div class="form-group" >
              <label> {{bankSenderName}} Bank Account Name </label>
 
              <input type="text"
                v-model="form.receiverBankAccountName"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('receiverBankAccountName') }"
                >
              <has-error :form="form" field="receiverBankAccountName"></has-error>
            </div>

            <div class="form-group">
              <label> {{bankSenderName}} Bank Account No </label>
 
              <input type="text"
                v-model="form.receiverBankAccountNo"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('receiverBankAccountNo') }"
                >
              <has-error :form="form" field="receiverBankAccountNo"></has-error>
            </div>
            </div>

            
            <div class="form-group">
              <label> Cheque No  </label>
 
              <input type="text"
                v-model="form.chequeNo"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('chequeNo') }"
                >
              <has-error :form="form" field="chequeNo"></has-error>
            </div>
            
            <div class="form-group">
              <label> Cheque Date  </label>
 
              <input type="date"
                v-model="form.chequeDate"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('chequeDate') }"
                >
              <has-error :form="form" field="chequeDate"></has-error>
            </div>
            </div>


            </div>
 
          </div>



            <div class="col-lg-6">
            <div class="form-group">
              <!-- there show register from chart of accounts -->
              <label> {{headOfCashBookTitle}} <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
              
              <span v-if="available_balance_status">
                <span class="badge badge-primary"> {{available_balance_text}} </span>
              </span>
              <input type="hidden" v-model="form.available_balance">

              <select
                v-model="form.headOfCashBook"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('headOfCashBook') }"
                @change="checkBalance()"
              >
              <option value=""> -------------- </option>
              <option v-for="headOfCashBookList in headOfCashBookLists"
              :value="headOfCashBookList.headCode"> {{headOfCashBookList.headName}} </option>
              </select>
              <has-error :form="form" field="headOfCashBook"></has-error>
            </div>
            
            
            <div class="form-group">
              <!-- there show sub ladger from chart of accounts -->
              <label> Head Of Accounts <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
 
              <select
              disabled
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
              <label> Sub Head  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
              
              
               <span v-if="head_available_balance_status" v-html="head_available_balance_text">
              
              </span>
              <input type="hidden" v-model="form.head_available_balance">



                        <multiselect
                          @input="checkHeadBalance"
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
                @change="checkHeadBalance()"
                >
                <option v-for="subHeadOfAccountList in subHeadOfAccountLists" 
                :value="subHeadOfAccountList.headCode"> {{subHeadOfAccountList.headName}} </option> 
              </select>
              <has-error :form="form" field="subHead"></has-error>
            </div>

            
            
            <div class="form-group">
              <label> Amount
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
             
              <input type="text"
                v-model="form.voucherAmount"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('voucherAmount') }"
                @keyup.prevent="calculateAmount()" @keyup="calculate"
                >
              <has-error :form="form" field="voucherAmount"></has-error>
              <span v-if="invalid" style="color:red">Negative And Character Value Not Allowed</span>
            </div>
            
            <div class="form-group">
              <label> Particular
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
 
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


                                <button type="button" @click="clearForm()" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Clear </span>
                                </button>

                                <button type="submit" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right"
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
                  ><i class="fa fa-eye"></i> View </router-link
                  >
                </td>
                 
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
import Multiselect from "vue-multiselect";
import moment from 'moment';
export default {

  
  data() {
    return {
      loading: false,
      voucherTypeLists: [],
      voucherInformationLists: [],
      paymentTo:'Receiver Name',
      paymentToStatus:true,
      bankInfo:false,
      receiverBankAccountNameStatus:false,
      headOfCashBookTitle:'Head Of Cash Book',
      available_balance_text:'',
      head_available_balance_text:'',
      bankSenderName : '',
      available_balance_status:false,
      head_available_balance_status:false,
      headOfCashBookLists:[],
      headOfAccountLists:[],
      subHeadOfAccountLists:[],
      subHeadStatus:false,
      invalid:false,
      moment: moment,

 
      form: new Form({
                        voucherDate: new Date().toISOString().slice(0,10),
                        voucherType: "",
                        voucherNo: "",
                        paymentTo: "",
                        mobileNo: "",
                        checkPaymentType: "",
                        receiverBankAccountName: "",
                        receiverBankAccountNo: "",
                        chequeNo: "",
                        chequeDate: new Date().toISOString().slice(0,10),
                        headOfCashBook: "",
                        headOfAccounts: "",
                        subHead: "",
                        subHeadMulti: "",
                        voucherAmount: "",
                        available_balance: "",
                        head_available_balance: "",
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
    clearForm(){


      this.subHeadStatus= false;
      this.available_balance_status= false;
      this.form.voucherType = '';
      this.form.voucherNo = '';
      this.form.paymentTo = '';
      this.form.mobileNo = '';
      this.form.checkPaymentType = '';
      this.form.receiverBankAccountName = '';
      this.form.receiverBankAccountNo = '';
      this.form.chequeNo = '';
      this.form.chequeDate = '';
      this.form.headOfCashBook = '';
      this.form.headOfAccounts = '';
      this.form.subHead = '';
      this.form.subHeadMulti = '';
      this.form.voucherAmount = '';
      this.form.particular = '';
      

    },
    view() {
      let url = "voucherEntryInformation";
      axios.get(url)
        .then((response) => {
          this.voucherInformationLists = response.data.voucherInformation;
          this.voucherTypeLists = response.data.list;
        }).catch(error=>{
       if (error.response.status === 401) {
         Toast.fire({
            icon: "error",
            title: "Loging out......",
          });
         //auth.logout();
        window.location.replace('')
       }
 });
    },

    emptyAfterSubmit(){
      this.available_balance_status = false;
      this.available_balance_text = '';
      this.form.available_balance = '';

      this.head_available_balance_status = false;
      this.head_available_balance_text = '';
      this.form.head_available_balance = '';

      this.subHeadStatus = false;
      this.form.voucherAmount='';
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
    calculateAmount(){

      // this.form.voucherAmount = 1;
      let cash_avaialble = this.form.available_balance;
      let head_available = this.form.head_available_balance;
      let amount = 0;
      





      // -----------------
        if(this.form.voucherAmount<0){
          //this.form.voucherAmount = 0;
        }
      // -----------------
     

      if(cash_avaialble>head_available){
         amount = head_available;
      }
      else if(cash_avaialble<head_available){
         amount = cash_avaialble;
      } 
      else{
         amount = cash_avaialble;
      }

       if(this.form.voucherType<5){
         
              if(this.form.voucherAmount>amount){
                if(amount>0){
                  this.form.voucherAmount = amount;
                }
                else
                {
                 // this.form.voucherAmount = 0;
                }
              }
       }
       else{

              if(this.form.voucherAmount>cash_avaialble){
                if(cash_avaialble>0){
                  this.form.voucherAmount = cash_avaialble;
                }
                else
                {
                 // this.form.voucherAmount = 0;
                }
              }
       }

    },
    checkBalance(){
      
      this.form.headOfAccounts = '';
      this.form.subHead = '';
      
        let url = "checkBalance/"+this.form.headOfCashBook;
        axios.get(url)
          .then((response) => {
            this.available_balance_status = true;
            this.available_balance_text = response.data.available_balance;
            this.form.available_balance = response.data.available_balance;
          });

    },
    checkHeadBalance(value){

      this.form.subHead = value.headCode;

      this.form.voucherAmount = '';
      
        let url = "checkBalance/"+this.form.subHead;
        axios.get(url)
          .then((response) => {
            this.headOfAccountLists = response.data.headAcc;
            this.form.headOfAccounts = response.data.precode;
            // alert(response.data.available_balance);
            this.head_available_balance_status = true;
            let abl = Math.abs(response.data.available_balance);
            if(response.data.available_balance>=0){
            this.head_available_balance_text = '<span class="badge badge-success">'+abl+'</span>';
            }
            else
            {
            this.head_available_balance_text = '<span class="badge badge-danger">'+abl+'</span>';
            }

            this.form.head_available_balance = abl;
          });

    },

 getVoucherCode(){

  this.emptyAfterSubmit();

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
        });


        


        if(this.form.voucherType == 1){
              this.paymentTo = 'Receiver Name';
              this.headOfCashBookTitle = 'Head Of Cash Book';
              this.paymentToStatus = true;
              this.bankInfo = false;
              this.subHeadStatus = true;


              // get voucher head code
                      let url = "getVoucherHeadCashbookCodeNew/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.subHeadOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code

        }

        else if(this.form.voucherType == 2){
              this.paymentTo = 'Sender Name';
              this.headOfCashBookTitle = 'Head Of Cash Book'
              this.paymentToStatus = true;
              this.bankInfo = false;
              this.subHeadStatus = true;


              // get voucher head code
                      let url = "getVoucherHeadCashbookCodeNew/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.subHeadOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code

        }

        else if(this.form.voucherType == 3){
              this.paymentTo = 'Receiver Name';
              this.headOfCashBookTitle = 'Head Of Bank Book'
              this.paymentToStatus = true;
              this.bankInfo = true;
              this.bankSenderName = 'Receiver';
              this.subHeadStatus = true;

              // get voucher head code
                      let url = "getVoucherHeadCashbookCodeNew/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.subHeadOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }

        else if(this.form.voucherType == 4){
              this.paymentTo = 'Sender Name';
              this.headOfCashBookTitle = 'Head Of Bank Book'
              this.paymentToStatus = true;
              this.bankInfo = true;
              this.subHeadStatus = true;
              this.bankSenderName = 'Sender';
 

              // get voucher head code
                      let url = "getVoucherHeadCashbookCodeNew/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.subHeadOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }

        else if(this.form.voucherType == 5){
              this.paymentTo = 'Receive by';
              this.paymentToStatus = false;
              this.bankInfo = false;
              this.subHeadStatus = true;

              // get voucher head code
                      let url = "getVoucherHeadCashbookCodeNew/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.subHeadOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }

        else if(this.form.voucherType == 6){
              this.paymentTo = 'Receive by';
              this.paymentToStatus = false;
              this.bankInfo = false;
              this.subHeadStatus = true;

              // get voucher head code
                      let url = "getVoucherHeadCashbookCodeNew/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.subHeadOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }
 },
getSubHeadOfAccounts(){
                this.form.subHead = '';
                // get voucher head code
                      let url = "getSubHeadOfAccountsForContraVoucher/"
                      +this.form.voucherType+'/'
                      +this.form.headOfCashBook+'/'
                      +this.form.headOfAccounts;
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
 
 

    addNewVoucherInformation() {
      this.loading = true;
      this.form.post("voucherEntryInformation").then((response) => {
        this.loading = false;
          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
              background: '#c9f4c9', //green
            title: "Voucher Entry Successfull.",
          }),

          this.view();
          this.form.reset();
          this.emptyAfterSubmit();
          
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