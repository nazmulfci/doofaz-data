<template id="">
    <span>
   
      
  
      <div class="card">
        <div class="card-header-tab card-header alert-info">
  <h4><i
              class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
            ></i>
            View Information </h4>
        </div>
  
        <div class="supplier-entry py-4 px-2">
           <div class="card-body table-responsive bg-white">
          <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Area</th>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Mobile No</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(shopInformation, index) in shopInformations" >
                  <td>{{ ++index }}</td>
                  <td><span v-for="areaList in viewAreaLists" v-if="areaList.id==shopInformation.areaId">{{ areaList.areaName }}</span></td>
                  <td><span v-for="productTypeList in productTypeLists" v-if="productTypeList.id==shopInformation.productTypeId">{{ productTypeList.productType }}</span></td>
                  <td>{{ shopInformation.shopOfficeName }}</td>
                  <td>{{ shopInformation.mobileNo }}</td>
                  <td>
                    {{moment(shopInformation.created_at).fromNow()}}
                      </br>
                    {{moment(shopInformation.created_at).format("DD MMMM YYYY")}}
                      </br>
                    {{moment(shopInformation.created_at).format("h:mm:ss a")}}
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
  import moment from 'moment';
  export default {
  
    
    data() {
      return {

        moment: moment,
        loading:false,
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
           
          currencyId: "",

          countryId: "",
          divisionId: "",
          districtId: "",
          thanaId: "",
          unionId: "",
          wardId: "",
          areaId: "",
          floorId: "",
          houseMarketId: "",
          
          expertPerson:'',
          aboutSoftwareComment:'',
          youtube:'',
          haveComputer:'',
          officerOrManager:'',
          howMuchStay:'',
          contactNo:'',
          whatsapp:'',
          ownersName:'',
          howMuchOwner:'',
          productTypeId:'',
          whyDisagree:'',
          usedSoftwareName:'',
          doYouUseSoftware:'',
          intarest:'',
          facebook:'',
          email:'',
          mobileNo:'',
          shopOfficeSize:'',
          shopOfficeNo:'',
          shopOfficeName:'',
          shopOrOffice:'',

          blockRoadNameNumber:'',
          blockRoadId:'',

          houseMarketName:'',
          houseMarketNumber:'',
          howMuchFloor:'',
        }),
         
        areaLists: [],
        blockRoadLists: [],
        houseMarketLists: [],
        productTypeLists: [],
        shopInformations: [],
        viewAreaLists: [],
        totalFloor: 0,
        usedSoftwareStatus: false,
        notUsedSoftwareStatus: false,
      
      };
    },
  
    mounted() {
   
     
      this.userList();
      this.view();
      this.viewProductType();
      this.viewArea();
  
    },
  
    methods: {
      view() {

axios.get('dataInformationReport').then((response) => {
  this.shopInformations = response.data.data;
});

},
viewArea() {

axios.get('viewArea').then((response) => {
this.viewAreaLists = response.data.data;
});
},

viewProductType() {

axios.get('productTypeView').then((response) => {
this.productTypeLists = response.data.data;
});

},


userList() {
let uri = `getUserInfo`;
axios.get(uri).then((response) => {
  this.userLists = response.data.shop;
});

},
    },
  };
  </script>