<template id="">
  <span>
     
          <div class="row" style="margin-top: -2%">
      <div class="col-12 col-md-3 col-xs-12"></div>
      <div class="col-12 col-md-4 col-xs-12">
        <div class="form-group">
          <label for="exampleInputPassword1" style="margin-left: 27%"
            >Select Customer Type</label
          >
          <select id="table" v-model="customerType" class="form-control">
            <option>Selecet One</option>
            <option
              v-for="customerTypeList in customerTypeLists"
              :value="customerTypeList.shopCustomerTypeEntryId"
              :key="customerTypeList.id"
            >
              {{ customerTypeList.shopCustomerName }}
            </option>
          </select>
        </div>
      </div>
    </div>
       
    <div class="card main-card  element-block-example">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">  Customer List Report</h3>
      </div>
   
        <div class="table-responsive bg-white p-2">
          <table class="table table-hover table-bordered table-striped" id="sampleTable">
            <thead>
               <tr>
                   <th>SN</th>
                   <th>Customer Type Name</th>
                   <th>Customer Name</th>
                   <th>Customer Email</th>
                   <th>Customer Phone</th>
                   <th>Customer Imo Number</th>
                   <th>Customer Facebook ID</th>
                   <th>Customer Address</th>
                   <th>Reference Name</th>
                   <th>Reference Email</th>
                   <th>Reference Phone</th>
                   <th>Statement</th>
                 
               </tr>
              </thead>
              <tbody>
               
              </tbody>
           </table>
            <!-- <td>
                      <div v-if="customerReport.customerStatus == 1">
                          <button type="button" @click="changeCustomerStatus(customerReport.salesCustomerEntryId)"  class="btn btn-hover-shine btn-success">Active</button>
                      </div>
                      <div v-else>
                          <button type="button" @click="changeCustomerStatus(customerReport.salesCustomerEntryId)"  class="btn btn-hover-shine btn-danger">Deactive</button>
                      </div>
                    </td> -->
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
          
             }),
             customerType:'',
             customerTypeLists: [],
           }
        },
      
        mounted(){
            this.customerInfoListReport();
            this.customerInfoTypeListReport();
            
        },
        methods:{
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
        ajax: "/salesCustomerListReportwithType/"+value,

        columns: [
          {
            data: "salesCustomerEntryId",
          },

          {
            data: "shopCustomerTypeName",name:"shopCustomerTypeName.shopCustomerName"
          },
          {
            data: "customerName",
          },
          

          {
            data: "customerEmail",
          },
          {
            data: "customerPhone",
          },

         
         
          {
            data: "customerImoNumber",
          },
          {
            data: "customerFacebookID",
          },
         
       
          {
            data: "customerAddress",
          },
          {
            data: "referenceName",
          },
        
          {
            data: "referenceEmail",
          },
          {
            data: "referencePhone",
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
                $(document).ready(function () {
      $("#sampleTable").DataTable({
        processing: true,
        serverSide: true,
              bDestroy: true,
        ajax: "/salesCustomerListReport",

        columns: [
          {
            data: "salesCustomerEntryId",
          },

          {
            data: "shopCustomerTypeName",name:"shopCustomerTypeName.shopCustomerName"
          },
          {
            data: "customerName",
          },
          

          {
            data: "customerEmail",
          },
          {
            data: "customerPhone",
          },

         
         
          {
            data: "customerImoNumber",
          },
          {
            data: "customerFacebookID",
          },
         
       
          {
            data: "customerAddress",
          },
          {
            data: "referenceName",
          },
        
          {
            data: "referenceEmail",
          },
          {
            data: "referencePhone",
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
