<template id="">
  <span>



        <!-- ------------------- page title  -->
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-menu icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Expired Shop
            <div class="page-title-subheading">
              Expired Shop
            </div>
          </div>
        </div>
        
      </div>
    </div>

<!-- ------------------- // page title  -->





    
    <div class="card mt-5">
     
      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>               
       
                
                <th>Shop Type</th>
                <th>Shop Name</th>
                <th>Shop Id </th>
                <th>Billing Date</th>
                <th>Phone</th>               
                <th>Trx Id</th>               
                <th>Note</th>               
                <th>Details</th>
                <th>Action</th>
             
               
              </tr>
            </thead>
            <tbody >
            
              <tr v-for="(shopInformation, index) in shopInformations" :key="shopInformation.shopInfoId" >
                <td>{{ ++index }}</td>
             
                <td>{{ shopInformation.shoptype.shopTypeName }}</td>
                <td>{{ shopInformation.shopName }}</td>
                <td>{{ shopInformation.shopSirialId }}</td>
                  <td><span v-if="shopInformation.account">{{moment(shopInformation.account.billingDate).format("DD MMMM YYYY")}}</span></td>
               <td><span v-if="shopInformation.shopownerinfo">{{ shopInformation.shopownerinfo.shopOwnerMobileNo }}</span></td>
           
        
          
               <td><span v-if="shopInformation.billinginfo">{{ shopInformation.billinginfo.trxId }}</span></td>
           
        
          
               <td><span v-if="shopInformation.billinginfo">{{ shopInformation.billinginfo.note }}</span></td>
           
        
          
             
           
        
                <td>
                  
                  <div >
                   <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#'+'details'+shopInformation.id">
<i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;More
</button>
                  </div>
                  <!-- Modal -->
<div class="modal fade" :id="'details'+shopInformation.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog xl" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
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
 
        <span v-if="shopInformation.shopownerinfo">  {{shopInformation.shopownerinfo.shopOwnerName}}</span>
            </div>
            
              


            <div class="form-group">
              <label> Owner Mobile No:
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
 
        <span v-if="shopInformation.shopownerinfo">   {{shopInformation.shopownerinfo.shopOwnerMobileNo}}</span>
            </div>
            
              


            <div class="form-group">
              <label> Owner Email:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
        <span v-if="shopInformation.shopownerinfo">   {{shopInformation.shopownerinfo.shopOwnerEmail}}</span>
            </div>
            
            
              

            
            </div>


          <!------------------     ----------------------->

          
            <div class="col-lg-6 col-12">
            
            
               

            <div class="form-group">
              <label> Owner Address:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
         <span v-if="shopInformation.shopownerinfo">      {{shopInformation.shopownerinfo.shopOwnerAddress}}</span>
            </div>
            
               

            <div class="form-group">
              <label> Owner Phone No:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
            <span v-if="shopInformation.shopownerinfo">  {{shopInformation.shopownerinfo.shopOwnerPhoneNo}}</span>
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
 
              <span shopInformation.shopcontactpersion>{{shopInformation.shopcontactpersion.CPName}}</span>
            </div>
            
              


            <div class="form-group">
              <label>  Mobile No:
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
 
                 <span shopInformation.shopcontactpersion> {{shopInformation.shopcontactpersion.CPMobileNo}}</span>
            </div>
            
              


            <div class="form-group">
              <label> Email:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
               <span shopInformation.shopcontactpersion>   {{shopInformation.shopcontactpersion.CPEmail}}</span>
            </div>
             
            </div>


          <!------------------   ----------------------->

          
            <div class="col-lg-6 col-12">
            
            
               

            <div class="form-group">
              <label>  Address:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
               <span shopInformation.shopcontactpersion>  {{shopInformation.shopcontactpersion.CPAddress}}</span>
            </div>
            
               

            <div class="form-group">
              <label>  Phone No:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
              <span shopInformation.shopcontactpersion>  {{shopInformation.shopcontactpersion.CPPhoneNo}}</span>
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
 
                 <span shopInformation.shoprepresentative> {{shopInformation.shoprepresentative.SRName}}</span>
            </div>
            
              


            <div class="form-group">
              <label>  Mobile No:
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
 
             <span shopInformation.shoprepresentative>  {{shopInformation.shoprepresentative.SRMobileNo}}</span>
            </div>
            
              


            <div class="form-group">
              <label>  Email:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
          <span shopInformation.shoprepresentative>    {{shopInformation.shoprepresentative.SREmail}}</span>
            </div>
            
            
              

            
            </div>


          <!------------------     ----------------------->

          
            <div class="col-lg-6 col-12">
            
            
               

            <div class="form-group">
              <label>  Address:
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
        <span shopInformation.shoprepresentative>     {{shopInformation.shoprepresentative.SRAddress}}</span>
            </div>
            
               

            <div class="form-group">
              <label>  Phone No
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i> -->
                 </label>
 
                 <span shopInformation.shoprepresentative>   {{shopInformation.shoprepresentative.SRPhoneNo}}</span>
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
              {{address.district.district_name}}
            </div>
            
            
            <div class="form-group">
              <label> Union :
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                   <span v-if="address.union"> {{address.union.union_name}}</span>
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
  
              <span v-if="address.division"> {{address.division.division_name}}</span>
            </div>
            
             
            
             
            
            
            <div class="form-group">
              <label> Upazilla: 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 <span v-if="address.thana">  {{address.thana.upazila_name}}</span>
            </div>
            
            
             
            <div class="form-group">
              <label> Ward :
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
  
            <span v-if="address.ward"> {{address.ward.ward_name}}</span>
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
                </td>
            <td>  <button class="btn btn-danger" @click.prevent="payBill(shopInformation.shopId,shopInformation.userName)">Active</button>   </td>
            
              </tr>
               
            </tbody>
          </table>
         
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
      userLists: [],
      shopTypeLists: [],
      countryLists: [],
      currencyLists: [],
      divisionLists: [],
      districtLists: [],
      upazillaLists: [],
      unionLists: [],
      wardLists: [],
      saddress: [],
      lists: [],
      userNameExist: false,

  moment: moment,
      image: "",
      form: new Form({
        
        shopTypeId: "",
        shopSirialId: "",
        shopName: "",
        email: "",
        refferUserId: "",
        website: "",
        facebook: "",
        youtube: "",
        haveBranch: "",
        totalBranch: "0",


        shopOwnerName: "",
        shopOwnerMobileNo: "",
        shopOwnerEmail: "",
        shopOwnerAddress: "",
        shopOwnerPhoneNo: "",

        CPName: "",
        CPMobileNo: "",
        CPEmail: "",
        CPAddress: "",
        CPPhoneNo: "",

        SRName: "",
        SRMobileNo: "",
        SREmail: "",
        SRAddress: "",
        SRPhoneNo: "",
 
        currencyId: "",
        countryId: "",
        divisionId: "",
        districtId: "",
        thanaId: "",
        unionId: "",
        wardId: "",

        addressLine1: "",
        front: "",
        left: "",
        shopSize: "",
        shopNo: "",

        addressLine2: "",
        back: "",
        right: "",
        marketName: "",
        areaKnownName: "",

      }),

      rate: '',
      sms: {},
      shopInformations: {},
      exit: false,
      howManyBranch: false,
      mess: "",
    };
  },

  mounted() {
 
  

   
    this.view();

  },

  methods: {


  
 

    view() {
      let url = "expiredDateListall";
      axios.get(url)
     
        .then((response) => {
          this.shopInformations = response.data.newshop;
          this.saddress = response.data.shopaddress;
     
        });
    },

  
         payBill(id,userName) {    
           
           Swal.fire({
  title: 'Are you sure?',
  // text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Approve it!'
}).then((result) => {
  this.form.post("payBill/" +id).then((response) => {
         this.view();
         Toast.fire({
            icon: "success",
            title: "Successfull.",
          }),
          axios.put('https://portal.safejob.net/api/newshopMonthly/'+userName)     
        .then((response) => {
          Toast.fire({
            icon: "success",
            title: "Successfull.",
          }),
                this.view();
                this.form.reset();
                // this.$router.push('shop');
                    // window.location.href = '/shop';
          
      });
      })
  if (result.isConfirmed) {

    Swal.fire(
      'Approved!',
      'Tis shop  has been Approved.',
      'success'
    )
  }
})
     
        }, 
           
  
    

  },
};
</script>