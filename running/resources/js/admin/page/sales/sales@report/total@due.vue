<template>
  <span>
    <div class="card">
      <div class="card-header " style="background:rgba(221, 221, 221, 0.46);border:1px solid rgba(0, 0, 0, 0.12)">
        <h3 style="color:black;margin:0 auto">Total Due  &nbsp;{{dues.totaldue}}</h3>
     
      </div>
      <div class="table-responsive bg-white ml-5">
        <div class="">
       <center> <div class="form-group col-12 col-md-4  " >
          <label for="exampleInputPassword1" style="margin-left: 27%"
            >Select Customer Type</label
          >
          <select id="table" v-model="customerType" class="form-control">
            <option>Selecet One</option>
            <option
              v-for="totaldue in totaldues"
              :value="totaldue.accountHeadCode"
              :key="totaldue.id"
            >
              {{ totaldue.type.shopCustomerName }}&nbsp;({{totaldue.currentDue}})
            </option>
          </select>
        </div>
            </center>
      </div>
  
       <table class="table table-hover table-bordered table-striped" style="width:1350px" id="sampleTable">
            <thead>
             <tr>
              <th>SN</th>
              <!-- <th>Sales Date</th>
              <th>C.Type</th> -->
              <th>Customer Name</th>
              <!-- <th>Customer Phone</th> -->
              <!-- <th>Invoice Amount</th>
              <th>Paid Cash</th> -->
              <th>Total Sales</th>
              <th>Total Paid</th>
              <th>Total Due</th>
              <th>Statement</th>
            </tr>
              </thead>
              <tbody>
               
              </tbody>
           </table>
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
          date:'',
          dateDue:''
             }),
           
            customerType:'',
             customerTypeLists: [],
             dues: [],
             totaldues: [],
            
           }
        },
      
        mounted(){
           
            this.dueSale();
         this.customerInfoListReport();
            
        },
        methods:{
         
            dueSale() {
                axios.get('dueSaleTotal').then(res=>{
                   this.dues=res.data;             
                   this.totaldues=res.data.due;
                }
                ) 

            },
             customerInfoListReport() {
                $("#table ").on("change", function () {
        // Get the value from the select box
        
   var value = $(this).val();
        // Do what you need to do with value

        // Reset the select back to the first option
        $(this).val("default");
             $(document).ready(function () {
      $("#sampleTable").DataTable({
        processing: true,
        serverSide: true,
              bDestroy: true,
        ajax: "/salesCustomerListTotalDue/"+value,

        columns: [
          {
              data: "salesCustomerEntryId",
            },
           
           
            {
              data: "customer",
              // name: "customerName.customerName",
            },
            // {
            //   data: "customerPhone",
            //   // name: "customerPhone.customerPhone",
            // },

            {
              data: "debitAmount",
            },
            {
              data: "creditAmount",
            },
            {
              data: "balanceAmount",
            },
        
          {
              data: "salesCustomerEntryId",
              render: function (data, row) {
                var ok =
                  '<button type="button" onclick="customerStatement(' +
                  data +
                  ')"     class="btn btn-hover-shine btn-outline-info"> Statement </button>';
                return ok;
              },
            },
         
          
        ],
      });
    });
      });
             
   },
   customerStatement(id) {
      this.$router.push("/customerStatement" + id);
      // alert(id);
    },
    customerInfoTypeListReport() {
                axios.get('/salesCustomerTypeListReport').then(res => {
                    this.customerTypeLists = res.data.customerTypeLists
                   
                })
            },

     
          
            // changeCustomerStatus(salesCustomerEntryId){
            //     axios.get('/salesProductEntry/'+salesCustomerEntryId).then(res => {
            //          this.customerInfoListReport();
            //     })
            // },
          
        },
         created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    window.customerStatement = this.customerStatement;
  },
          
          
          
       
        
    }
</script>

