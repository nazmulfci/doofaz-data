.<template>
   <span>
    
   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Cheque List</h3>
      </div>
      <div class="table-responsive bg-white p-2">
               <div class="row">
                   <div class="col-12 col-md-4 col-xs-12"></div>
                     <div class="col-12 col-md-4 col-xs-12">
                <div class="form-group">
                 <label>Select Bank Name</label>
                  <select v-model="form.bankEntryId" id="table" name="bankEntryId" class="form-control" 
              
                  @change.prevent="bankAccountIdCatch()"  >
                      <option value="">Select Bank Name</option>
                      <option v-for="showBankName in showBankNames" :value="showBankName.bank" :key="showBankName.id" > 
                          <span v-for="bank in banks" v-if="showBankName.bank==bank.bankEntryId">
                          {{ bank.bankName }}
                          </span>
                          </option>
                  </select>
                  <has-error :form="form" field="bankEntryId"></has-error>
              </div>
                     </div>
                     </div>
                     <div class="row">
                      <div class="col-12 col-md-4 col-xs-12"></div>
                     <div class="col-12 col-md-4 col-xs-12">
                <div class="form-group">
                 <label>Select Account Name</label>
                  <select v-model="form.bankAccountId" name="bankEntryId" class="form-control" 
                  
               id="table1">
                      <option value="">Select Account Name</option>
                      <option v-for="acc in accs" :value="acc.bankAccountId" :key="acc.id" > 
                          <span v-for="account in accounts" v-if="account.bankId==acc.bankAccountId">
                          {{ account.bankAccountName }} ({{account.bankBranch}} / {{account.bankAccountNumber}})
                          </span>
                          </option>
                  </select>
                  <has-error :form="form" field="bankEntryId"></has-error>
              </div>
              </div>
               </div>
        <table class="table table-hover table-bordered mb-0" width="1350px" id="sampleTable">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th> Bank </th>
               <th> Account Name</th>
               <th> Account Number</th>
               <th> Cheque no </th>
               <th> Status </th>
               <th> Action </th>       
               <th> view </th>
             </tr>
            </thead>
            <tbody>
              <tr >
              
              </tr>
            </tbody>
         </table>
            <!-- Modal -->
        <div
          class="modal fade"
          id="modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-primary text-light">
                <h5 class="modal-title" id="exampleModalLongTitle">
               Change Status
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
              <form  @submit.prevent="create()">
              <div class="modal-body">
               <label for="exampleFormControlSelect1">select Status Type</label>
    <select v-model="form.status" class="form-control" id="exampleFormControlSelect1">
      <option v-for="gt in gets" :key="gt.id" :value="gt.id">{{gt.chequeType}}</option>
    
    </select>
      <div class="form-group">
    <label for="exampleFormControlTextarea1">Note</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" v-model="form.note" rows="3"></textarea>
  </div>
  </div>
              <div class="modal-footer">
                <button
                  type="submit"
                  class="btn btn-hover-shine btn-primary"
               
                >
                  Submit
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
            <!-- Modal -->
        <div
          class="modal fade"
          id="details"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-primary text-light">
                <h5 class="modal-title" id="exampleModalLongTitle">
               Cheque Details
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
             <table class="table table-hover table-bordered mb-0" width="1350px" id="sampleTable">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">             

               <th>  Delivery Date </th>
               <th> Issue Date</th>
               <th> Cheque Type </th>
               <th> Receiver Name </th>
               <th> Account Name </th>
               <th> Account Number </th>
               <th> Amount </th>       
             
             </tr>
            </thead>
            <tbody>
              <tr >
                  <td>{{viewInfo.cashDate	}}</td>
                  <td>{{viewInfo.issueDate	}}</td>
                  <td>{{viewInfo.chequeType	}}</td>
                  <td>{{viewInfo.receiver	}}</td>
                  <td>{{viewInfo.accountName	}}</td>
                  <td>{{viewInfo.accountNumber	}}</td>
                  <td>{{viewInfo.amount	}}</td>
              </tr>
            </tbody>
         </table>

          </div>
            
         
             
            </div>
          </div>
        </div>
       </div>
     </div> 


  </span>
</template>

<script>
import datatable from "datatables.net-bs4";
    export default {
        data(){
            return{
                  


                form: new Form({
               

                 
                    branchName: '',
                    accNo: '',               
                    bankTypeEntryId: '',
                    bankEntryId: '',
                    bankAccountId: '',                
                    firstPage: '',                
                    lastPage: '',
                    note:''     ,
                    status:'',           
                    statusId:'',           
                 
                 
                }),

               
                viewInfo:'',
                datas: [],
                banks: [],
                accounts: [],
                accs: [],
                gets: [],
                infos: [],
                showBankNames: [],
              
            }

        },
        mounted() {          
            this.view();
           this.showInfo();
           this.chequeStatus();
 

        },
        methods: {
        create(){
          this.form.put('chequePosting/'+ this.form.statusId).then(res=>{
                      function removeHTML(str) {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = str;
      return tmp.textContent || tmp.innerText || "";
    }
                             $(document).ready(function () {
                                var v1= localStorage.getItem('value');
                                var v2= localStorage.getItem('value2');
                                 $(this).val("default");
      $("#sampleTable").DataTable({
        processing: true,
        serverSide: true,
              bDestroy: true,
        ajax: "/chequeInfo/"+JSON.parse(v1)+'/'+JSON.parse(v2),

        columns: [
          {
            data: "id"
          },
          {
            data: "banks", name:'banks.bankName'
          },

          {
            data: "account",name:"account.bankAccountName"
          },
          {
            data: "accountNumber",name:"account.bankAccountNumber"
          },
          {
            data: "checkNo"
          },
          {
            data: "statuss",name:'statuss.chequeType',
            
             render: function (data) {
             var htmlString = removeHTML(data);
              return htmlString.replace(/X/g, "");
             
             }
          },
          {
            data: "id",name:'statuss.chequeType',
            render: function (data) {
              var ok =
                  '<span  class="badge badge-danger" onclick="statusCng('+data+')" >Action</span>';
                return ok;
             }

          },
          {
            data: "id",name:'statuss.chequeType',
            render: function (data) {
              var ok =
                  '<span  class="badge badge-success" onclick="viewDetails('+data+')" >view</span>';
                return ok;
             }

          },
        
     
          
        ],
    
      });
      });
        this.chequeStatus();
               this.form.note=''     ,
                    this.form.status='',           
                    $("#modal").modal("hide");    
            Toast.fire({
              icon:'success',
              title:'successfully Status Change',
            })
          })
       
        }   ,
         
       view(){  axios.get('/bankCheck/create').then(res=>{
                  this.showBankNames=res.data.data,
                  this.accounts=res.data.account,
                  this.banks=res.data.bank
                    
                 

                })
          },
           bankAccountIdCatch() {
                axios.get('/bankCheck/'+this.form.bankEntryId).then(res => {
                    this.accs = res.data.account
                })
            },
            chequeStatus(){
             axios.get('/chequePosting').then(res=>{
               this.gets=res.data.get;
             })
            },
           showInfo() {
              function removeHTML(str) {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = str;
      return tmp.textContent || tmp.innerText || "";
    }
              $("#table ").on("change", function () {
        var value = $(this).val();
        localStorage.setItem('value', JSON.stringify(value));
    
   });
    
        $("#table1 ").on("change", function () {
            var v= localStorage.getItem('value');
        // Get the value from the select box
        var value2 = $(this).val();
          localStorage.setItem('value2', JSON.stringify(value2)); 
        // Do what you need to do with value

        // Reset the select back to the first option
      $(this).val("default");

                       $(document).ready(function () {
      $("#sampleTable").DataTable({
        processing: true,
        serverSide: true,
              bDestroy: true,
        ajax: "/chequeInfo/"+JSON.parse(v)+'/'+value2,

        columns: [
          {
            data: "id"
          },
          {
            data: "banks", name:'banks.bankName'
          },

          {
            data: "account",name:"account.bankAccountName"
          },
          {
            data: "accountNumber",name:"account.bankAccountNumber"
          },
          {
            data: "checkNo"
          },
          {
            data: "statuss",name:'statuss.chequeType',
            
             render: function (data) {
             var htmlString = removeHTML(data);
              return htmlString.replace(/X/g, "");
             
             }
          },
          {
            data: "id",name:'statuss.chequeType',
            render: function (data) {
              var ok =
                  '<span  class="badge badge-danger" onclick="statusCng('+data+')" >Action</span>';
                return ok;
             }

          },
          {
            data: "id",name:'statuss.chequeType',
            render: function (data) {
              var ok =
                 '<span  class="badge badge-success" onclick="viewDetails('+data+')" >view</span>';
                return ok;
             }

          },
          
     
          
        ],
    
      });
      });
    });
   
            },
            statusCng(id){
              this.form.statusId=id;
              axios.get('chequePosting/'+id+'/edit').then(res=>{
            if(res.data.posting=='posting'){
                 Toast.fire({
                 icon:'error',
                 title:'Cheque Posting First',
               })
            }else{
                   if(res.data.true=='true'){
                    Toast.fire({
                 icon:'error',
                 title:'Already Paid',
               })
              }
              else{
              $("#modal").modal("show");
              }
            }
              })
              
             
            //  axios.get('chequePosting').then(res=>{
            //       this.view();
            //     this.showInfo()
            //    Toast.fire({
            //      icon:'success',
            //      title:'Change Status Successfully',
            //    })
            //  })
            },
           viewDetails(id){
        this.viewInfo=0;
      $("#details").modal("show");
      axios.get('chequePosting/'+id).then(res=>{
       this.viewInfo=res.data.view;
      })

   }  
  
          
        },
            created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    window.statusCng = this.statusCng;
    window.viewDetails = this.viewDetails;
 
  },
      
    }
</script>
