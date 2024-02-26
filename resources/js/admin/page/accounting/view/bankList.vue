<template>
   <span>
    

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Bank List</h3>
      </div>
      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-bordered mb-0" width="1200px" id="sampleTable">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th>SN</th>
                <th>Bank Type</th>
               <th>Bank Name</th>
               <th>Account Name</th>
               <th>Account Number</th>           
               <th>Balance</th>
               <th>Action</th>
             </tr>
            </thead>
             <!-- v-html="shopBankAllDatas" -->
            <tbody>
                <tr>
                <!-- <td>{{ index+1 }}</td>
                <td>{{ shopBankAllData.bankTypeId }}</td>
                <td>{{ shopBankAllData.bankId }}</td>
                <td>{{ shopBankAllData.bankBranch }}</td>
                <td>{{ shopBankAllData.bankAccountName }}</td>
                <td>{{ shopBankAllData.bankAccountNumber }}</td>
                <td>{{ shopBankAllData.balance }}</td>
                <td>
                    <router-link :to="`/shopadd@bankEdit${shopBankAllData.bankId}`" class="btn btn-hover-shine  btn-primary"><i class=" fa fa-edit"></i> Statement </router-link>
                  </td> -->
              </tr>  
            </tbody>
         </table>
       </div>
     </div>


  </span>
</template>

// <script>
//     export default {
//         data(){
//             return{
                
//                     mobile_bank_info:0,
//                     agent_bank_info:0,
//                     corporate_bank_info:0,

//                 form: new Form({
//                     bankTypeEntryId: '',
//                     bankEntryId: '',
//                     bankBranch: '',
//                     bankAccountType: '',
//                     bankAccountName: '',
//                     bankAccountNumber: '',
//                     status: 1,
//                 }),
//                 // showDataEntrys:[],
//                 showBankTypeDatas:[],
//                 showBankNames: [],
//                 shopBankAllDatas: [],
//                 corporateBankAccountTypes: [],
//                 mobileBankAccountTypes: [],
//             }

//         },
//         mounted() {
//             this.getData();
//             this.showBankType();
//             this.corporateBankAccountType();
//             this.mobileBankAccountType();
//         },
//         methods: {
           
//             getData() {
//                 axios.get('getBankListWithBalance')
//                     .then(res => {
//                         this.shopBankAllDatas = res.data.showData

//                     })
//             },
           
//         }
//     }
// </script>
// <script>
import datatable from "datatables.net-bs4";
export default {
  data() {
    return {
     
    };
  },
  mounted() {
    this.view();
  },
  methods: {
    view() {
      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }
      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          ajax: "/getBankListWithBalance",

          columns: [
            
           
            {
              data: "bankId",
             
            },
            {
              data: "bankTypeEntry",
              name:"bankTypeEntry.bankTypeEntryName"
             
            },
            {
              data: "bankEntry",
              name:"bankEntry.bankName"
             
            },
              {
              data: "bankAccountName",
             
            },
            {
              data: "bankAccountNumber",
             
             
            },
            {
              data: "account",
             name:"account.balanceAmount"
             
            },
          
            {
              data: "accountCode",
              render: function (data, row) {
                var ok =
                  '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="statement(' +
                  data +
                  ')"> Ladger </button>';
                return ok;
              },
            },
            
           
          ],
        });
      });
    },
    statement(id) {
        this.$router.push('/cashBankLadger'+id)
    },
  },
  created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    window.deleteExpense = this.deleteExpense;
    window.statement = this.statement;
  },
};
</script>