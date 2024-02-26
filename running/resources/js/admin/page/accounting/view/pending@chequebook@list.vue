.<template>
   <span>
    
   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Cheque List</h3>
      </div>
      <div class="table-responsive bg-white p-2">
              
        <table class="table table-hover table-bordered mb-0" width="1350px" id="sampleTable">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th> Bank </th>
               <th> Account Name</th>
               <th> Account Number</th>
               <th> Cheque no </th>
               <th> Delivery Date </th>
               <th> Issue Date </th>
               <th> Status </th>                    
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

               <th> Delivery Date </th>
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
          
           this.showInfo();
          
 

        },
        methods: {
       
         
    
          
        
           showInfo() {
              function removeHTML(str) {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = str;
      return tmp.textContent || tmp.innerText || "";
    }
            
    
       
                       $(document).ready(function () {
      $("#sampleTable").DataTable({
        processing: true,
        serverSide: true,
              bDestroy: true,
        ajax: "/chequePosting/create",

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
            data: "deliveryDate",name:"posting.cashdate"
          },
          {
            data: "issueDate",name:"posting.issueDate"
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
                 '<span  class="badge badge-success" onclick="viewDetails('+data+')" >view</span>';
                return ok;
             }

          },
          
     
          
        ],
    
      });
      });

   
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

    window.viewDetails = this.viewDetails;
 
  },
      
    }
</script>
