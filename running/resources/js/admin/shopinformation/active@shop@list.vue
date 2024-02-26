<template>
  <span>
    <div class="row" style="margin-top: -2%">
      <div class="col-12 col-md-4"></div>
      <div class="col-12 col-md-3">
        <div class="form-group">
          <label style="margin-left: 27%">Registration Source</label>
          <select
            v-model="receiverbankTypeEntryId"
            name="bankTypeEntryId"
            class="form-control"
            id="table1"
           
          >
            <option value="">Select One</option>
            <option value="0">
             Admin
            </option>
            <option value="1">
             Safe Job
            </option>
            <option value="2">
             Reffer
            </option>
            <option value="3">
             Open
            </option>
          </select>
        </div>

        <div class="form-group">
          <label style="margin-left: 27%"> Shop Type</label>
           <select
                v-model="shopTypeId"
                class="form-control"
                 id="table"
              
              >
               <option value="">Select One</option>
                <option
                  v-for="shopTypeList in shopTypeLists"
                  :key="shopTypeList.shopTypeEntryId"
                  :value="shopTypeList.shopTypeEntryId"
                >
                  {{ shopTypeList.shopTypeName }}
                </option>
              </select>
        </div>
      </div>
    </div>
    <div
      class="card main-card element-block-example mt-0"
      style="width: 91%; margin: 0 auto"
    >
      <div class="card-header-tab card-header alert-info">
        <h4>
          <i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Active Shop List
        </h4>
        
      </div>
      <div class="card-body table-responsive bg-white">
        <table
          style="width: 1300px"
          class="table table-hover table-striped table-bordered"
          id="sampleTable"
        >
          <thead>
             <tr>
                <th>ID</th>                
                <th>Registration Date</th>                
                <!-- <th>Shop Type</th> -->
                <th>Shop Name</th>
                <th>User Name</th>
                <th>Shop Id </th>
                <!-- <th>Phone</th> -->
                <th>Details</th>
              
               
              </tr>
          </thead>
          <tbody></tbody>
        </table>
       <div  class="modal fade" id="details" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog xl" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" v-for="shopInformation in shopInformations">
        <!-- shop regi info -->
         <div
          class="col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color"
        >
          
            <div class="row">

            <div class="col-lg-6 col-12">
            
            
            <div class="form-group">
              <label> Show Type
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              {{shopInformation.shoptype.shopTypeName }}
             
            </div>


            <div class="form-group">
              <label> Shop ID
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
            {{ shopInformation.shopSirialId }}
            </div>
            

            <div class="form-group">
              <label> Shop Name
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
         {{ shopInformation.shopName }}
            </div>
            
               


         
            
               <div class="form-group">
              <label>  Need branch
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              {{shopInformation.haveBranch}}
            </div>


              

            
            </div>


          <!------------------     ----------------------->

          
            <div class="col-lg-6 col-12">
            
            
            

            <div class="form-group">
              <label> Shop Reffer By
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
                   <span v-if="shopInformation.refferuser">  {{shopInformation.refferuser.name}}</span>
            </div>

                           

            <div class="form-group">
              <label> Shop Website Link
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
            {{shopInformation.website}}
            </div>
               
                           

            <div class="form-group">
              <label> Shop Facebook Link
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
              {{shopInformation.facebook}}
            </div>
                           

            <div class="form-group">
              <label> Shop Youtube Link
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
  {{shopInformation.yoytubr}}
            </div>
                           

         
               
            </div>
            </div>        
        </div>
        <!-- shop regi info -->
         <!-- ============================================================ -->
       <!-- ===================== shop owner information =============== -->
       <!-- ============================================================ -->
         <div
          class="col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"
        >

          <div class="row">

              <div class="col-12">
                  <h5> Shop Owner Information </h5>
                  <hr>
              </div>
              </div>

          
            <div class="row">

            <div class="col-lg-6 col-12">
             

            <div class="form-group">
              <label> Owner Name:
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
          {{shopInformation.shopownerinfo.shopOwnerName}}
            </div>
            
              


            <div class="form-group">
              <label> Owner Mobile No:
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
 
          {{shopInformation.shopownerinfo.shopOwnerMobileNo}}
            </div>
            
              


            <div class="form-group">
              <label> Owner Email:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
          {{shopInformation.shopownerinfo.shopOwnerEmail}}
            </div>
            
            
              

            
            </div>


          <!------------------     ----------------------->

          
            <div class="col-lg-6 col-12">
            
            
               

            <div class="form-group">
              <label> Owner Address:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
              {{shopInformation.shopownerinfo.shopOwnerAddress}}
            </div>
            
               

            <div class="form-group">
              <label> Owner Phone No:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
             {{shopInformation.shopownerinfo.shopOwnerPhoneNo}}
            </div>
               
            </div>



            </div>
 
        </div>




       <!-- ============================================================ -->
       <!-- ================== // shop owner information =============== -->
       <!-- ============================================================ -->


        <!-- ===================================================================== -->
       <!-- ===================== shop Contact Person information =============== -->
       <!-- ===================================================================== -->
         <div
          class="col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"
        >

          <div class="row">

              <div class="col-12">
                  <h5> Shop Contact Person </h5>
              
                  <hr>
              </div>
              </div>

          
            <div class="row">

            <div class="col-lg-6 col-12">
             

            <div class="form-group">
              <label> Name:
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              {{shopInformation.shopcontactpersion.CPName}}
            </div>
            
              


            <div class="form-group">
              <label>  Mobile No:
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
 
              {{shopInformation.shopcontactpersion.CPMobileNo}}
            </div>
            
              


            <div class="form-group">
              <label> Email:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
              {{shopInformation.shopcontactpersion.CPEmail}}
            </div>
             
            </div>


          <!------------------   ----------------------->

          
            <div class="col-lg-6 col-12">
            
            
               

            <div class="form-group">
              <label>  Address:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
             {{shopInformation.shopcontactpersion.CPAddress}}
            </div>
            
               

            <div class="form-group">
              <label>  Phone No:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
            {{shopInformation.shopcontactpersion.CPPhoneNo}}
            </div>
               
            </div>



            </div>
 
        </div>




       <!-- ===================================================================== -->
       <!-- ================== // shop Contact person information =============== -->
       <!-- ===================================================================== -->

    <!-- ===================================================================== -->
       <!-- ===================== shop representative information =============== -->
       <!-- ===================================================================== -->
         <div
          class="col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"
        >

          <div class="row">

              <div class="col-12">
                  <h5> Shop Representative </h5>
                  
                  <hr>
              </div>
              </div>

          
            <div class="row">

            <div class="col-lg-6 col-12">
             

            <div class="form-group">
              <label>  Name:
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              {{shopInformation.shoprepresentative.SRName}}
            </div>
            
              


            <div class="form-group">
              <label>  Mobile No:
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
 
             {{shopInformation.shoprepresentative.SRMobileNo}}
            </div>
            
              


            <div class="form-group">
              <label>  Email:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
            {{shopInformation.shoprepresentative.SREmail}}
            </div>
            
            
              

            
            </div>


          <!------------------     ----------------------->

          
            <div class="col-lg-6 col-12">
            
            
               

            <div class="form-group">
              <label>  Address:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
           {{shopInformation.shoprepresentative.SRAddress}}
            </div>
            
               

            <div class="form-group">
              <label>  Phone No
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
                  {{shopInformation.shoprepresentative.SRPhoneNo}}
            </div>
               
            </div>



            </div>
 
        </div>




       <!-- ===================================================================== -->
       <!-- ================== // shop representative information =============== -->
       <!-- ===================================================================== -->


       <!-- ===================================================================== -->
       <!-- ===================== shop Address information =============== -->
       <!-- ===================================================================== -->
         <div
          class="col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"
          v-for="address in saddress" v-if="address.shopId==shopInformation.id"
        >

          <div class="row">

              <div class="col-12">
                  <h5> Shop Address & Location </h5>
                  <hr>
              </div>
              </div>

          
            <div class="row">

            <div class="col-lg-6 col-12">
             

            <!-- <div class="form-group">
              <label> Currency
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
  
              <select
                v-model="form.currencyId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('currencyId') }"
                name="currencyId"
              >
                <option value=""> Select Currency  </option>
                <option
                  v-for="currencyList in currencyLists"
                  :key="currencyList.id"
                  :value="currencyList.id"
                >
                  {{ currencyList.code }}
                </option>
                 
              </select>  
              <has-error :form="form" field="currencyId"></has-error>
            </div> -->
            
             

            <div class="form-group">
              <label> Country :
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
  
            {{address.country.name}}
            </div>
            

             <div class="form-group">
              <label> District :
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
             <span v-if="address.district">     {{address.district.district_name}}</span>
            </div>
            
            
            <div class="form-group">
              <label> Union :
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
               <span v-if="address.union">     {{address.union.union_name}}</span>
            </div>
            
            
            
              


            <div class="form-group">
              <label>  Address 1:
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
 
             {{address.addressLine1}}
            </div>
            
              


            <div class="form-group">
              <label>  Front Side:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
               {{address.front}}
            </div>
            
            
              


            <div class="form-group">
              <label>  Left Side:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
            {{address.left}}
            </div>
            
              


            <div class="form-group">
              <label>  Shop Size:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
  {{address.shopSize}}
            </div>


            <div class="form-group">
              <label>  Shop No:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
               {{address.shopNo}}
            </div>
            
            
              

            
            </div>


          <!------------------     ----------------------->

          
            <div class="col-lg-6 col-12">
             
            
            
            <div class="form-group">
              <label> Division: 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
  
               {{address.division.division_name}}
            </div>
            
             
            
             
            
            
            <div class="form-group">
              <label> Upazilla: 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
   <span v-if="address.thana">   {{address.thana.upazila_name}}</span>
            </div>
            
            
             
            <div class="form-group">
              <label> Ward :
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
  
          <span v-if="address.ward">   {{address.ward.ward_name}}</span>
            </div>
            
            
              

            <div class="form-group">
              <label>  Address 2:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
             {{address.addressLine2}}
            </div>
            
              


            <div class="form-group">
              <label>  Back Side:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
          {{address.back}}
            </div>
            
            
              


            <div class="form-group">
              <label> Right Side 
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 {{address.right}}
            </div>
            
              


            <div class="form-group">
              <label>  Market Name
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
              {{address.marketName}}
            </div>


            <div class="form-group">
              <label>  Area Knone Name
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
            {{address.areaKnownName}}
             
            </div>
            
            
              

            
            </div>



            </div>
 
        </div>




       <!-- ===================================================================== -->
       <!-- ==================== // shop address information ==================== -->
       <!-- ===================================================================== -->



      </div>
    <!-- <router-link
                    :to="`/shopRegistration@Edit${shopInformation.id}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
                    data-dismiss="modal" aria-label="Close"
                  ><i class="fa fa-edit"></i> Edit </router-link
                  > -->
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
  data() {
    return {
        shopTypeId:'',
      receiverbankTypeEntryId: "",
      receiverbankEntryId: "",
      showBankTypeDatas: {},
      showBankNames: {},
      shopTypeLists: {},
      saddress: {},
      lists: {},
      shopInformations:'',
    };
  },
  mounted() {
    this.view();
    this.show();    
    this.shopTypeList();
  },
  methods: {
      shopTypeList() {
      let uri = `shopTypeEntry`;
      axios.get(uri).then((response) => {
        this.shopTypeLists = response.data.data;
      });
    },
    show(){
                 $("#table1 ").on("change", function () {
          // Get the value from the select box
          var value = $(this).val();
           localStorage.setItem('value1', JSON.stringify(value));
          // Do what you need to do with value

          // Reset the select back to the first option
          $(this).val("default");
          $(document).ready(function () {
            $("#sampleTable ").DataTable({
              processing: true,
              serverSide: true,

              bDestroy: true,
              ajax: "/activeShop/" + value,
              columns: [
                {
                  data: "id",
                },
                {
                  data: "created_at",
                },
                // {
                //   data: "shopTypeId",
                // },
                {
                  data: "shopName",
                },
                {
                  data: "userName",
                },
                {
                  data: "shopSirialId",
                },
                 {
                  data: "id",
                
                  render: function (data, row) {
                    var ok =
                      '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="details(' +
                      data +
                      ')">' +
                      
                      "Details</button>";
                    return ok;
                  },
                },

              
              ],
         
          });
        });
      });
    },
    view() {
    

  
       $("#table ").on("change", function () {
          // Get the value from the select box
          var valu = $(this).val();
          var v= localStorage.getItem('value1');
         var $dt= JSON.parse(v)
         if($dt==''){
                var $d=10;
         }
         else{
             var  $d=$dt;
         }
          // Do what you need to do with value

          // Reset the select back to the first option
          $(this).val("default");
          $(document).ready(function () {
            $("#sampleTable ").DataTable({
              processing: true,
              serverSide: true,

              bDestroy: true,
              ajax: "/activeShopGet/" +$d + "/" + valu,
              columns: [
                {
                  data: "id",
                },
                {
                  data: "created_at",
                },
                // {
                //   data: "shopTypeId",
                // },
                {
                  data: "shopName",
                },
                {
                  data: "userName",
                },
                {
                  data: "shopSirialId",
                },
                   {
                  data: "id",
                
                  render: function (data, row) {
                    var ok =
                      '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="details(' +
                      data +
                      ')">' +
                      
                      "Details</button>";
                    return ok;
                  },
                },
            
              ],
         
          });
        });
      });
    },
   
 
    details(id) {
      axios.get(`activeShop/${id}/edit`).then((res) => {
        this.shopInformations = res.data.newshop;
          this.saddress = res.data.shopaddress;
      });
      $("#details").modal("show");
    },
  },
  created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });

    window.details = this.details;
  },
};
</script>