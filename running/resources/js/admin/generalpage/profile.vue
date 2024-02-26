<template id="">
  <span>
    <div class="card p-0 col-10 col-sm-8 col-md-6  offset-md-3 offset-sm-2 offset-1">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <!-- <h3 style="color:black">Profile</h3> -->
      </div>
    
      <div class="profile-entry p-md-5 p-3">
        <div class="profile-img">
            <img  class="rounded-circle" src="dashboard/assets/images/dropdown-header/profile.png" alt="">
            <h4 class="mt-2">{{authInfos.shopName}}({{authInfos.shopSirialId}})</h4>
            <h5>  Registration Date:&nbsp; {{moment(reg.created_at).format("DD MMMM YYYY")}}</h5>
          <h5>  Billing Date:&nbsp; {{moment(accountInfos.billingDate).format("DD MMMM YYYY")}}</h5>
    
        </div>
        <div class="profile-status mt-2">
           <ul>
             <li>
                 <i class="fa fa-user" aria-hidden="true"></i>
                 <span class="profile-icon">
                     Owner Name:&nbsp;{{owners.shopOwnerName}} &nbsp;<i class="fas fa-pencil-alt" @click.prevent="edit(1)" data-toggle="modal" data-target="#exampleModal"></i>
                 </span>
                  <span class="float-right ">
                    <i class="fa fa-user"></i>
                     <span class="profile-icon">
                 Representative Name:&nbsp;{{representative.SRName}}&nbsp;<i class="fas fa-pencil-alt" @click.prevent="edit(4)" data-toggle="modal" data-target="#exampleModal"></i>
                 </span>
                 </span>
               <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Info</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
         <form @submit.prevent="editInfo()">
      <div class="modal-body">
     
      <div class="form-group" v-if="ownerName">
    <label for="exampleInputEmail1">Owner Name</label>
    <input type="text" class="form-control" v-model="form.shopOwnerName" id="exampleInputEmail1"  placeholder="Owner Name">
   
  </div>
      <div class="form-group" v-if="ownerMobile">
    <label for="exampleInputEmail1">Owner Phone</label>
    <input type="text" class="form-control" v-model="form.shopOwnerMobileNo" id="exampleInputEmail1"  placeholder="Owner Mobile">
   
  </div>
      <div class="form-group" v-if="ownerEmail">
    <label for="exampleInputEmail1">Owner Email</label>
    <input type="email" class="form-control" v-model="form.shopOwnerEmail" id="exampleInputEmail1"  placeholder="Owner Email">
   
  </div>
      <div class="form-group" v-if="SRName">
    <label for="exampleInputEmail1">Representative Name</label>
    <input type="text" class="form-control" v-model="form.SRName" id="exampleInputEmail1"  placeholder="Representative Name">
   
  </div>
      <div class="form-group" v-if="SRMobileNo">
    <label for="exampleInputEmail1">Representative Mobile</label>
    <input type="text" class="form-control" v-model="form.SRMobileNo" id="exampleInputEmail1"  placeholder="Representative Mobile">
   
  </div>
      <div class="form-group" v-if="SREmail">
    <label for="exampleInputEmail1">Representative Email</label>
    <input type="email" class="form-control" v-model="form.SREmail" id="exampleInputEmail1"  placeholder="Representative Email">
   
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button  type="submit" class="btn btn-primary">Save changes</button>
      </div>
         </form>
    </div>
  </div>
</div>
             </li>
             <li>
                 <i class="fa fa-phone"></i>
                 <span class="profile-icon">
                 Owner Phone:&nbsp;{{owners.shopOwnerMobileNo}}&nbsp;<i class="fas fa-pencil-alt" @click.prevent="edit(2)" data-toggle="modal" data-target="#exampleModal"></i>
                 </span>
                  <span class="float-right ">
                    <i class="fa fa-phone"></i>
                     <span class="profile-icon">
                 Representative Phone:&nbsp;{{representative.SRMobileNo}}&nbsp;<i class="fas fa-pencil-alt" @click.prevent="edit(5)" data-toggle="modal" data-target="#exampleModal"></i>
                 </span>
                 </span>
               
             </li>
             <li>
                <i class="fas fa-envelope"></i>
                 <span class="profile-icon">
                 Owner Email:&nbsp;{{owners.shopOwnerEmail}}&nbsp;<i class="fas fa-pencil-alt" @click.prevent="edit(3)" data-toggle="modal" data-target="#exampleModal"></i>
                 </span>
                  <span class="float-right ">
                   <i class="fas fa-envelope"></i>
                     <span class="profile-icon">
                 Representative Email:&nbsp;{{representative.SREmail}}&nbsp;<i class="fas fa-pencil-alt" @click.prevent="edit(6)" data-toggle="modal" data-target="#exampleModal"></i>
                 </span>
                 </span>
               
             </li>
           
           </ul>
        </div>
      </div>
    </div>
  </span>
</template>
<script>
import moment from "moment";
    export default {
               data(){
                 return{
                    form: new Form({
                    shopOwnerName: '',
                    shopOwnerMobileNo:'',
                    shopOwnerEmail:'',
                    SRName:'',
                    SRMobileNo:'',
                    SREmail:'',
                  
                }),
                 authInfos:[],
                 owners:'',
                 representative:'',
                 accountInfos:'',
                 reg:'',
                  moment: moment,
                  ownerName:false,
                  ownerMobile:false,
                  ownerEmail:false,
                   SRName:false,
                    SRMobileNo:false,
                    SREmail:false,
                 }
               },
               mounted(){
                 this.getAuthInfo();
                 this.getAccountInfoById();
               },
               methods:{
                 edit(id){
                  if(id==1){
                    this.ownerName=true;
                         this.SRMobileNo=false;
                    this.ownerMobile=false;
                    this.ownerEmail=false;
                      this.SRName=false;
                          this.SREmail=false;
                     this.form.shopOwnerName= this.owners.shopOwnerName,
                    
                   this.form.shopOwnerMobileNo='',
                    this.form.shopOwnerEmail='',
                    this.form.SRName='',
                    this.form.SRMobileNo='',
                    this.form.SREmail=''
                  }
                  if(id==2){
                    this.ownerMobile=true;
                         this.SRMobileNo=false;
                    this.ownerName=false;
                     this.ownerEmail=false;
                       this.SRName=false;
                           this.SREmail=false;
                        this.form.shopOwnerMobileNo= this.owners.shopOwnerMobileNo,
                         this.form.shopOwnerName= '',
                 
                    this.form.shopOwnerEmail='',
                    this.form.SRName='',
                    this.form.SRMobileNo='',
                    this.form.SREmail=''
                  }
                  if(id==3){
                     this.ownerEmail=true;
                     this.SRMobileNo=false;
                    this.ownerMobile=false;
                    this.ownerName=false;  
                      this.SRName=false;  
                          this.SREmail=false;                
                  this.form.shopOwnerEmail= this.owners.shopOwnerEmail,
                   this.form.shopOwnerName= '',
                   this.form.shopOwnerMobileNo='',
                  
                    this.form.SRName='',
                    this.form.SRMobileNo='',
                    this.form.SREmail=''
                  }
                  if(id==4){
                     this.SRName=true;
                     this.SRMobileNo=false;
                     this.ownerEmail=false;
                    this.ownerMobile=false;
                    this.ownerName=false;    
                        this.SREmail=false;                
                      this.form.SRName= this.representative.SRName,
                       this.form.shopOwnerName= '',
                   this.form.shopOwnerMobileNo='',
                    this.form.shopOwnerEmail='',
                   
                    this.form.SRMobileNo='',
                    this.form.SREmail=''
                  }
                  if(id==5){
                     this.SRMobileNo=true;
                     this.SRName=false;
                     this.ownerEmail=false;
                    this.ownerMobile=false;
                    this.ownerName=false;  
                        this.SREmail=false;                  
                      this.form.SRMobileNo= this.representative.SRMobileNo,
                       this.form.shopOwnerName= '',
                   this.form.shopOwnerMobileNo='',
                    this.form.shopOwnerEmail='',
                    this.form.SRName='',
                   
                    this.form.SREmail=''
                  }
                  if(id==6){
                     this.SREmail=true;
                     this.SRName=false;
                     this.ownerEmail=false;
                    this.ownerMobile=false;
                    this.ownerName=false;
                      this.SRMobileNo=false;                    
                      this.form.SREmail= this.representative.SREmail,
                       this.form.shopOwnerName= '',
                   this.form.shopOwnerMobileNo='',
                    this.form.shopOwnerEmail='',
                    this.form.SRName='',
                    this.form.SRMobileNo=''
                  
                  }
                 },
                 editInfo(){
                  this.form.post('informationEdit').then(res=>{
                      Toast.fire({
                              icon: 'success',
                              title: 'Successfully Updated'
                          })
                          $('#exampleModal').hide();
                          this.form.reset()
                          this.getAuthInfo();
                         this.getAccountInfoById();
                  })
                 },
                 getAuthInfo() {
      let url = "getAuthInfo";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.authInfos = response.data;
          this.owners = response.owner;
          this.reg = response.reg;
          this.representative = response.representative;
         
  
          this.form.shopOwnerEmail= response.owner.shopOwnerEmail
        });
    },
    getAccountInfoById() {
      let url = "getAccountInfoById";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.accountInfos = response.data;
        });
    },
               }
    }
</script>
<style media="screen">
  .profile-entry label{
    font-size:17px;
  }
  .profile-img{
    text-align:center
  }
  .profile-img img{
    width: 130px;
    height: 130px;
  }
  .profile-status ul{
    list-style-type:none;
    padding-left:0px;
    margin-bottom:0px;
  }
  .profile-status ul li{
    font-size:16px;
  }
  .profile-status ul li i{
    width:20px;
  }
</style>
