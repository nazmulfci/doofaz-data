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
              Schedule List
            <div class="page-title-subheading">
              Schedule List
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
                <th>Phone</th>
                <th>Training Date</th>
                <th>Training Time</th>
                <th>Training Location</th>
                <th>Member</th>
                <th>Details</th>
                <th>Action</th>
               
              </tr>
            </thead>
            <tbody v-for="list in lists" :key="list.id">
            
              <tr v-for="(shopInformation, index) in shopInformations" :key="shopInformation.shopInfoId" v-if="list.shopId==shopInformation.id">
                <td>{{ ++index }}</td>
             
                <td>{{ shopInformation.shoptype.shopTypeName }}</td>
                <td>{{ shopInformation.shopName }}</td>
                <td>{{ shopInformation.shopSirialId }}</td>
            <td><span v-if="shopInformation.shopownerinfo">{{ shopInformation.shopownerinfo.shopOwnerMobileNo }}</span></td>
                <td>{{ list.tDate }}</td>
                <td>{{ list.tTime}}</td>
                <td>{{ list.tLocation}}</td>
                <td>{{ list.tMember}}</td>
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
  
    </div>
  </div>
</div>
                </td>
                <td>
                    <!-- Modal -->
<div class="modal fade" :id="'triner'+shopInformation.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Assign Triner</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
                <label>Select Trainer</label>
                <select  class="form-control" v-model="trainerId">
                  <option value="">Select One</option>
                  <option    v-for="list in employeeLIsts"
                  :key="list.id"
                  :value="list.id">    {{list.name}} <span class="badge badge-info">{{list.mobile}}</span></option>
                 </select>
                 
              </div>
              <button data-dismiss="modal" aria-label="Close" @click.prevent="assign(list.id)" class="btn btn-success">Assign</button>
      </div>
      
    </div>
  </div>
</div>
              <div class="dropdown">
  <button class="dropbtn"><i class="fa fa-cogs" aria-hidden="true"></i>
Select One</button>
  <div class="dropdown-content">
    <a href="#" data-toggle="modal" :data-target="'#'+'triner'+shopInformation.id">Assign Trainer</a>
     <router-link
                    :to="`/trainingscheduleedit${list.id}`"
                  
                  
                  ><i class="fa fa-edit"></i> Next Schedule </router-link
                  >
  
  </div>
</div>   
                </td>
            
              </tr>
               
            </tbody>
          </table>
         
        </div>
      </div>
    </div>
  </span>
</template>

<script>

export default {

  
  data() {
    return {
      userLists: [],
      shopTypeLists: [],     
      employeeLIsts: [],     
      lists: [],
      userNameExist: false, 
      trainerId:"",
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
    this.userList();


  },

  methods: {


    userList() {
    
      axios.get('https://portal.safejob.net/api/employeeList').then((response) => {
        this.employeeLIsts = response.data.user;
      });
    },
  assign(id){
    
      axios.post(`trainerAssign/${id}`,{trainerId:this.trainerId})
     
        .then((response) => {
            Toast.fire({
                icon: 'success',
                title: 'Forwarded Successfull.'
            })
        this.view();
        });
  },

    view() {
      let url = "training/create";
      axios.get(url)
     
        .then((response) => {
          this.shopInformations = response.data.newshop;
          this.saddress = response.data.shopaddress;
          this.lists = response.data.slist;
        });
    },

    shopTypeList() {
      let uri = `shopTypeEntry`;
      axios.get(uri).then((response) => {
        this.shopTypeLists = response.data.data;
      });
    },

    // userList() {
    //   let uri = `getUserInfo`;
    //   axios.get(uri).then((response) => {
    //     this.userLists = response.data.data;
    //   });
    // },

  
    


  

 

   
  },
};
</script>