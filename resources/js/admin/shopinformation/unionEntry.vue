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
            Shop Registration
            <div class="page-title-subheading">
              Shop Registration
            </div>
          </div>
        </div>
        <div class="page-title-actions">
          <router-link to="/qrCodeSetup"
            type="button"
            class="btn-shadow mr-3 btn btn-warning"
            title=""
            data-placement="bottom"
            data-toggle="tooltip"
            data-original-title="Refresh"
            
          >
            <i class="fa fa-undo text-white"></i>
          </router-link>
          <div class="d-inline-block dropdown">
            <button
              type="button"
              class="btn-shadow btn btn-info"
              onclick="window.history.back()"
            >
              
                <span class="lnr lnr-arrow-left"></span>
              Back
            </button>
            
          </div>
        </div>
      </div>
    </div>

<!-- ------------------- // page title  -->





    <div class="card">
      
      
            <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Shop Registration </h4>
        </div>
      </div>


<form @submit.prevent="addShopInformation"> 
      <div class="supplier-entry py-4 px-2 comm-form-back-img ">

       
         




       <!-- ===================================================================== -->
       <!-- ===================== shop Address information =============== -->
       <!-- ===================================================================== -->
         <div
          class="col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"
        >

          <div class="row">

              <div class="col-12">
                  <h5> Shop Address & Location </h5>
                  <hr>
              </div>
              </div>

          
            <div class="row">

            <div class="col-lg-12 col-12">
             
            
             

            <div class="form-group">
              <label> Country 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
  
              <select
                v-model="form.countryId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('countryId') }"
                name="countryId"
                @change.prevent="divisionShow()"
              >
                <option value=""> Select Country  </option>
                <option
                  v-for="(countryList,index) in countryLists"
                  :key="countryList.id"
                  :value="countryList.id"
                >
                {{++index}}
                  {{ countryList.name }}
                </option>
                 
              </select>  
              <has-error :form="form" field="countryId"></has-error>
            </div>
            


              <div class="form-group">
              <label> Division 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
  
              <select
                v-model="form.divisionId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('divisionId') }"
                @change.prevent="districtShow()"
              >
                <option value=""> Select Division  </option>
                <option
                  v-for="divisionList,index in divisionLists"
                  :key="divisionList.id"
                  :value="divisionList.id"
                >
                {{divisionList.id}},
                  {{ divisionList.division_name }}
                </option>
                </select>
              <has-error :form="form" field="divisionId"></has-error>
            </div>

            
             <div class="form-group">
              <label> District 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
  
              <select
                v-model="form.districtId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('districtId') }"
                @change.prevent="upazillaShow()"
              >
                <option value=""> Select District  </option>
                <option
                  v-for="districtList,index in districtLists"
                  :key="districtList.id"
                  :value="districtList.id"
                >
                {{districtList.id}},
                  {{ districtList.district_name }}
                </option>
                </select>
              <has-error :form="form" field="districtId"></has-error>
            </div>
            <div class="form-group">
              <label> Upazilla 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
  
              <select
                v-model="form.thanaId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('thanaId') }"
                @change.prevent="unionShow()"
              >
                <option value=""> Select Upazila  </option>
                <option
                  v-for="upazillaList,index in upazillaLists"
                  :key="upazillaList.id"
                  :value="upazillaList.id"
                >
                  {{++index}},{{ upazillaList.upazila_name }},{{upazillaList.id}}
                </option>
                </select>
              <has-error :form="form" field="thanaId"></has-error>
            </div>
            
            <div class="form-group">
              <label> Union 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
  
              <select
                v-model="form.unionId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('unionId') }"
                @change.prevent="wardShow()"
              >
                <option value=""> Select Union  </option>
                <option
                  v-for="unionList,index in unionLists"
                  :key="unionList.unID"
                  :value="unionList.unID"
                >{{unionList.union_name}},
                  {{ unionList.union_bn_name }}
                </option>
                </select>
              <has-error :form="form" field="unionId"></has-error>
            </div>
            
            
            

            
              
                <div class="form-group">
              <label>  Union List 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
 
              <textarea 
                v-model="form.addressLine1"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('addressLine1') }"
              ></textarea>
              <has-error :form="form" field="addressLine1"></has-error>
            </div>

            
            
            
            
              


            
            
              


              

            
            </div>


          <!------------------     ----------------------->

          
            


            </div>
 
        </div>




       <!-- ===================================================================== -->
       <!-- ==================== // shop address information ==================== -->
       <!-- ===================================================================== -->



        </div>




        <!-- -----------------------------   card footer  -->
 
<div class="d-block pt-3 pb-4 card-footer overflow-hidden">
<div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">


                                <button type="reset" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Clear </span>
                                </button>

                                <button type="submit" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> Add New Entry </span>
                                </button>


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 


        
        </form>
 
    </div>

  </span>
</template>

<script>

export default {

  
  data() {
    return {
      userLists: [],
      employeeLIsts: [],
      shopTypeLists: [],
      countryLists: [],
      currencyLists: [],
      divisionLists: [],
      districtLists: [],
      upazillaLists: [],
      unionLists: [],
      wardLists: [],
      userNameExist: false,
  shops: false,
      employees: false,

      image: "",
      form: new Form({
        
        shopTypeId: "",
        shopSirialId: "",
        shopSirialNo: "",
        shopName: "",
        email: "",
        refferUserId: "",
        website: "",
        facebook: "",
        youtube: "",
        haveBranch: 2,
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
        refferType: "",

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
 
    this.userList();
    this.shopTypeList();
    this.counryList();
    this.currencyList();
    this.view();
    this.getCurrentRate();

  },

  methods: {
  shop(){
    this.shops=true;
    this.employees=false;
    this.form.refferType=1;

  },
  employee(){
 this.shops=false;
    this.employees=true;
     this.form.refferType=2;
  },
  getCurrentRate(){
    let url = 'https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=21eba4f4ff74e127cda2'
    // let url = 'http://sms.doofazit.com/api/v1/send?api_key=44515814867233291581486723&contacts=01812454358&senderid=8801844532643&msg=tst-api'
    axios.get(url).then(response=>{
      this.rate = response.data;
    });
    
  }, 
  alertRate(){
    alert(this.rate.USD_PHP);
  },

      ownerAsContactPerson($event){

        // alert($event.target.checked);
    if ($event.target.checked){
      this.form.CPName = this.form.shopOwnerName;
      this.form.CPMobileNo = this.form.shopOwnerMobileNo;
      this.form.CPEmail = this.form.shopOwnerEmail;
      this.form.CPAddress = this.form.shopOwnerAddress;
      this.form.CPPhoneNo = this.form.shopOwnerPhoneNo;
    }
    else{
      this.form.CPName = '';
      this.form.CPMobileNo = '';
      this.form.CPEmail = '';
      this.form.CPAddress = '';
      this.form.CPPhoneNo = '';
    }

  },

 

      ownerAsRepresentative($event){

        // alert($event.target.checked);
    if ($event.target.checked){
      this.form.SRName = this.form.shopOwnerName;
      this.form.SRMobileNo = this.form.shopOwnerMobileNo;
      this.form.SREmail = this.form.shopOwnerEmail;
      this.form.SRAddress = this.form.shopOwnerAddress;
      this.form.SRPhoneNo = this.form.shopOwnerPhoneNo;
    }
    else{
      this.form.SRName = '';
      this.form.SRMobileNo = '';
      this.form.SREmail = '';
      this.form.SRAddress = '';
      this.form.SRPhoneNo = '';
    }

  },

    view() {
      let url = "shopInformation";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.shopInformations = response.data;
        });
    },

    shopTypeList() {
      let uri = `shopTypeEntry`;
      axios.get(uri).then((response) => {
        this.shopTypeLists = response.data.data;
      });
    },

    userList() {
      let uri = `getUserInfo`;
      axios.get(uri).then((response) => {
        this.userLists = response.data.shop;
      });
      axios.get('https://portal.safejob.net/api/employeeList').then((response) => {
        this.employeeLIsts = response.data.user;
      });
    },

    currencyList() {
      let uri = `currencyList`;
      axios.get(uri).then((response) => {
        this.currencyLists = response.data.currencyList;
      });
    },

    counryList() {
      let uri = `countryList`;
      axios.get(uri).then((response) => {
        this.countryLists = response.data.countryList;
      });
    },

    divisionShow() {
      axios.get("divisionListById/" + this.form.countryId).then((res) => {
        this.divisionLists = res.data.divisionList; 
        // alert(this.form.countryId);
      });
    },

    districtShow() {
      axios.get("districtListById/" + this.form.divisionId).then((res) => {
        this.districtLists = res.data.districtList; 
        // alert(this.form.countryId);
      });
    },

    upazillaShow() {
      axios.get("upazilaListById/" + this.form.districtId).then((res) => {
        this.upazillaLists = res.data.upazillaList; 
        // alert(this.form.countryId);
      });
    },

    unionShow() {
      axios.get("unionListById/" + this.form.thanaId).then((res) => {
        this.unionLists = res.data.unionList; 
        // alert(this.form.countryId);
      });
    },

    wardShow() {
      axios.get("wardListById/" + this.form.unionId).then((res) => {
        this.wardLists = res.data.wardList; 
        // alert(this.form.countryId);
      });
    },

        changeStatus(id){
          let uri = `shopInformation/changeStatus/${id}`;
        axios.get(uri).then(response=>{
        
        let text_message = "Welcome to cashbook. your shop user name :"
                           +response.data.email+" and password :"
                           +response.data.password;
        let mobileNo = response.data.mobileNo;
        let smsStatus = response.data.smsStatus;
        
        Toast.fire({
                icon: 'success',
                title: 'Status Change Successfully'
            })
            
            if(smsStatus == 1){
              let smsurl= "http://sms.doofazit.com/api/v1/send?api_key=44515814867233291581486723&contacts="+mobileNo+"&senderid=8801844532643&msg="+text_message;
              // axios.get(smsurl).then(res =>{
              //     alert(res.data);
              // }) 
            //  fetch(smsurl).then(response=>{console.log(response.data.results)});
            fetch(smsurl);
              // const data = await res.json();
              // this.sms = data;
            }


            this.view();
        })
    },

    getShopId(){
      axios.get(`getShopId/`+this.form.shopTypeId).then(res =>{
          this.form.shopSirialId = res.data.data;
          this.form.shopSirialNo = res.data.no;
      })
    },
    haveBranch(){
      if(this.form.haveBranch == 1){
        this.howManyBranch = true;
      }else{
        this.howManyBranch = false;
      }
    },

    checkUserName(){
      axios.get(`checkemail/`+this.form.email).then(res =>{
          if(res.data.exist == 'Allready exist.'){
            this.userNameExist = true;
          }else{
            this.userNameExist = false;
          }
      })
    },

    deletePost(id){
      let uri = `qrCodeSetup/${id}`;
      axios.delete(uri).then((response) => {
        Toast.fire({
                icon: 'success',
                title: 'Delete Successfull.'
            })
        this.view();
      });
    },
 
 

    addShopInformation() {
    
    
    
      this.form.post("unionList").then((response) => {
        
          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
            background: '#c9f4c9', //green
            title: "Union Add Successfull.",
          })

    this.form.thanaId = '';
    this.form.addressLine1 = '';
            
            
          
      });
    },
  },
};
</script>