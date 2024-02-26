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
            New Shop
            <div class="page-title-subheading">
              New Shop
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
                <th>Billing Date</th>
                <th>Details</th>
                <th>Action</th>
               
              </tr>
            </thead>
            <tbody v-for="list in lists" :key="list.id">
            
              <tr v-for="(shopInformation, index) in shopInformations" :key="shopInformation.shopInfoId"
             v-if="list.shopId==shopInformation.id">
                <td>{{ ++index }}</td>
             
                <td>{{ shopInformation.shoptype.shopTypeName }}</td>
                <td>{{ shopInformation.shopName }}</td>
                <td>{{ shopInformation.shopSirialId }}</td>
              <td><span v-if="shopInformation.shopownerinfo">{{ shopInformation.shopownerinfo.shopOwnerMobileNo }}</span></td>
                <td>{{ list.billingDate }}</td>
                <td>
                  
                  <div >
                   <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#'+'details'+shopInformation.id">
<i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;More
</button>
                  </div>
         </td>
                <td>
        <router-link
                    :to="`/billDate@Update${list.id}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine">
                      Grace Date </router-link> 
      
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
      shopInformations: [],
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
      let url = "expiredDateList";
      axios.get(url)
     
        .then((response) => {
          this.shopInformations = response.data.newshop;
          this.saddress = response.data.shopaddress;
          this.lists = response.data.blist;
        });
    },

 
  

  

 

 
 

    
  },
};
</script>