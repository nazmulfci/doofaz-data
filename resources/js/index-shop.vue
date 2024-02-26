<template lang="">
  <span>
         <div class="row">
             <div class="col-md-8 offset-md-2">
                 <div class="dashboard-area text-center">

                      <button class="btn btn-sm btn-secondary">
                        <router-link to="/priority@list">Priority List</router-link>
                      </button>

                      <button class="btn btn-sm btn-dark">
                        <router-link to="/followup@list">Followup List</router-link>
                      </button>

                      <button class="btn btn-sm btn-info">
                          <router-link to="/metting@report@list1"> Metting List</router-link>
                      </button>

                      <button class="btn btn-sm btn-dark">
                          <router-link to="/guest@lists"> Guest List</router-link>
                      </button>

                      <button class="btn btn-sm btn-dark">
                          <router-link to="/new@entry@list"> Shop List </router-link>
                      </button>

                      <button class="btn btn-sm btn-success">
                        <router-link to="/today@data"> Today Entry({{ count_info }})</router-link>
                      </button>
                      
                      <button class="btn btn-sm btn-danger">
                        <router-link to="/data@entry">Shop Entry</router-link>
                      </button>

                      <button class="btn btn-sm btn-primary">
                        <router-link to="/guest@entry">Guest Entry</router-link>
                      </button>

                 </div>

                <div class="card mt-2">
                    <!-- <div class="card-header">Data Information Search</div> -->
                    <div class="card-body">
                        <div class="col-md-6 offset-md-3 border">
                            <form @submit.prevent="SearchInfo()">

                                <div class="form-group">
                                    <label>Shop / office name </label>
                                    <input type="text" list="browsers" v-model="form.shopOfficeName" class="form-control" placeholder="Shop / Office Name">
                                    
                                    <datalist id="browsers">
                                      <option v-for="shopNameList in shopNameLists">{{ shopNameList.shopOfficeName }} (<span v-if="shopNameList.house_market_name"> {{ shopNameList.house_market_name.houseMarketName }}</span>
                                       <span v-if="shopNameList.area_name">, {{ shopNameList.area_name.areaName }}</span> )
                                      </option>
                                    </datalist>
                                </div>

                                <div class="form-group">
                                    <label>Mobile No</label>
                                    <input type="text" v-model="form.mobileNo" class="form-control" placeholder="Mobile no">
                                </div>

                                <div class="form-group">
                                    <label>Date</label>
                                    <input type="date" v-model="form.date" class="form-control" placeholder="Date">
                                </div>


                                 <div class="" v-if="role==3">
                                    <div class="form-group">
                                        <label>Employee</label>
                                        <select class="form-control" v-model="form.employeeId">
                                             <option value="">Select Employee</option>
                                             <option v-for="(EmployeeInfo,index) in employeeLists" :key="index" :value="EmployeeInfo.id">
                                                {{ EmployeeInfo.userName }}
                                             </option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label>Category Status</label>
                                        <select class="form-control" v-model="form.employeeStatus">
                                            <option value=""> ---- </option>
                                            <!-- <option value="1">New</option> -->
                                            <option value="2">Pending</option>
                                            <option value="3">Cancel</option>
                                            <option value="4">Final</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label>স্ট্যাটাস</label>
                                        <select class="form-control" v-model="form.status">
                                            <option value=""> ---- </option>
                                            <!-- <option value="1">New</option> -->
                                            <option :value="statusType.id" v-for="statusType in status_type_list" :key="statusType.id">
                                                 {{ statusType.name }}
                                            </option>
                                        </select>
                                    </div>


                                    <div class="form-group">
                                        <label> ক্যাটেগরি </label>
                                        <select class="form-control" v-model="form.categoryId">
                                            <option value=""> ----- </option>
                                            <option value="All">All</option>
                                            <option v-for="CategoryInfo,index in categoryLists" :key="index" :value="CategoryInfo.id">
                                                {{ CategoryInfo.category_name }}
                                            </option>
                                        </select>
                                    </div>
                                 </div>


                                    <div class="form-group">
                                        <label> ব্যবসার ধরণ </label>
                                        <select v-model="form.productTypeId" class="form-control">
                                         <option value=""> Select Product Type  </option>
                                        <option
                                          v-for="productTypeList in productTypeLists"
                                          :key="productTypeList.id"
                                          :value="productTypeList.id"
                                        >
                                          {{ productTypeList.productType }}
                                        </option>
                                      </select>
                                    </div>


                                <div class="form-group" v-if="role==4">
                                    <label>এরিয়া</label>

                                    <select
                                      v-model="form.areaId"
                                      class="form-control"
                                      :class="{ 'is-invalid': form.errors.has('areaId') }"
                                      @change.prevent="viewBlock()">
                                      <option value=""> Select Area </option>
                                      <option v-for="assignArea,index in assignAreaLists" :key="index" :value="assignArea.areaId">
                                        <span v-if="assignArea.area">{{ assignArea.area.areaName }}</span>
                                      </option>
                                      </select>
                                    <has-error :form="form" field="areaId"></has-error>
                                </div>

                                <div class="form-group" v-if="role==3">
                                    <label>এরিয়া</label>

                                    <select
                                      v-model="form.areaId"
                                      class="form-control"
                                      :class="{ 'is-invalid': form.errors.has('areaId') }"
                                      @change.prevent="viewBlock()">
                                      <option value=""> Select Area  </option>
                                      <option v-for="areaList,index in areaLists" :key="index" :value="areaList.id">
                                        {{ areaList.areaName }}
                                      </option>
                                      </select>
                                    <has-error :form="form" field="areaId"></has-error>
                                </div>

                                <div class="form-group" v-if="blockShow">
                                    <label> ব্লক </label>
                                    <select
                                    v-model="form.blockId"
                                    class="form-control"
                                    :class="{ 'is-invalid': form.errors.has('blockRoadId') }"
                                    name="blockRoadId"
                                    @change.prevent="viewRoad(),viewHouse(e)"
                                  >
                                     <option value=""> Select Block </option>
                                    <option
                                      v-for="blockRoadList in blockRoadLists"
                                      :key="blockRoadList.id"
                                      :value="blockRoadList.id"
                                    >
                                      {{ blockRoadList.blockRoadNameNumber }}
                                    </option>

                                  </select>
                                  <has-error :form="form" field="blockRoadId"></has-error>
                                </div>

                                <div class="form-group" v-if="roadShow">
                                    <label>রোড</label>
                                    <select
                                    v-model="form.roadId"
                                    class="form-control"
                                    :class="{ 'is-invalid': form.errors.has('roadId') }"
                                    name="roadId"
                                    @change.prevent="viewHouse(0)"
                                  >
                                     <option value=""> Select Road </option>
                                    <option
                                      v-for="roadInfo in roadList"
                                      :key="roadInfo.id"
                                      :value="roadInfo.id"
                                    >
                                      {{ roadInfo.roadNameNumber }}
                                    </option>

                                  </select>
                                  <has-error :form="form" field="roadId"></has-error>
                                </div>


                                <div class="form-group" v-if="houseShow">
                                    <label>বাড়ি / মার্কেট</label>
                                    <select
                                        v-model="form.houseMarketId"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.has('houseMarketId') }"
                                        name="houseMarketId"
                                        >
                                        <option value=""> Select Market </option>
                                        <option
                                            v-for="houseMarketList in houseList"
                                            :key="houseMarketList.id"
                                            :value="houseMarketList.id"
                                        >
                                            {{ houseMarketList.houseMarketName }}
                                            <span v-if="houseMarketList.houseMarketNumber">({{ houseMarketList.houseMarketNumber }})</span>
                                        </option>

                                        </select>
                                </div>

                                <div class="row">
                                <div class="col-md-12 mb-2">
                                <button type="submit" class="btn btn-md btn-primary float-right">Search</button>
                                <button type="reset" @click="resetForm()" class="btn btn-md btn-danger float-left">Reset</button>
                                </div>
                                </div>
                              </form>
                        </div>
                    </div>
                </div>
             </div>
         </div>

         <div class="card mt-4" v-if="searchShow && searchList.length>0">
            <!-- v-if="searchShow && searchList.length>0" -->
            <div class="card-body">
                <div class="table-responsive">
                  <new-entry-list
                  :shopInformations="searchList"
                  :role="getRoleShow"
                  buttonHideShow="new"
                ></new-entry-list>
                </div>
            </div>
        </div>

    </span>
</template>
<script>
import NewEntryList from "./admin/page/survay/newEntryList.vue"
import moment from "moment";
export default {
  components: {
    "new-entry-list": NewEntryList,
  },
  data() {
    return {
      form: new Form({
        shopOfficeName: "",
        mobileNo: "",
        date: "",
        employeeId: "",
        employeeStatus: "",
        status:"",
        categoryId: "",
        areaId: "",
        blockId: "",
        roadId: "",
        houseMarketId: "",
        productTypeId: "",
      }),
      count_info: "",
      areaLists: [],
      assignAreaLists: [],
      blockRoadLists: [],
      roadList: [],
      houseList: [],
      searchList: [],
      blockShow: false,
      roadShow: false,
      houseShow: false,
      searchShow: false,
      role: [],
      employeeLists: [],
      categoryLists: [],
      productTypeLists: [],
      status_type_list: [],
      getRoleShow: [],
      buttonHideShow: [],
      shopNameLists: [],
      moment: moment,
    };
  },

  mounted() {
    this.shopOfficeName();
    this.viewRole();
    this.viewEmployee();
    this.viewCategory();
    this.viewArea();
    this.viewProductType();
    this.countInfo();
    this.statusTypeShow();
  },

  methods: {
    shopOfficeName(){
      axios.get("shopName/show").then((response) => {
        this.shopNameLists = response.data.data;
      });
    },
    resetForm() {
      this.form = new Form({
        shopOfficeName: "",
        mobileNo: "",
        date: "",
        employeeId: "",
        employeeStatus: "",
        status: "",
        categoryId: "",
        areaId: "",
        blockId: "",
        roadId: "",
        houseMarketId: "",
      });
      this.searchList = [];
      this.houseShow = false;
      this.roadShow = false;
      this.blockShow = false;
    },

    viewRole() {
      axios.get("get/role").then((response) => {
        this.role = response.data.data;
      });
    },

    viewEmployee() {
      axios.get("get/employee/list").then((response) => {
        this.employeeLists = response.data.data;
      });
    },

    viewCategory() {
      axios.get("get/category/list").then((response) => {
        this.categoryLists = response.data.data;
      });
    },

    viewArea() {
      axios.get("dashboard/area/show").then((response) => {
        this.areaLists = response.data.area;
        this.assignAreaLists = response.data.areaAssign;
      });
    },

    // block
    viewBlock() {
      this.blockShow = true;
      let id = this.form.areaId;
      axios.get("blockShowByArea/" + id).then((response) => {
        this.blockRoadLists = response.data.data;
      });
    },
    //block

    //road
    viewRoad(e) {
      this.roadShow = true;
      this.houseShow = true;
      let areaId = this.form.areaId;
      let blockId = this.form.blockId;
      axios.get("roadShowByAreaBlock/" + areaId + "/" + blockId).then((response) => {
        this.roadList = response.data.data;
      });
    },
    //road

    //house
    viewHouse(e) {
      console.log(e);
      this.houseShow = true;

      let areaId = this.form.areaId;
      let blockId = this.form.blockId;
      let roadId = 0;
      if (e == 0) {
        roadId = this.form.roadId;
      } else {
        roadId = e;
      }
      let url = "";
      if (roadId) {
        url = "houseShowByAreaBlockRoad/" + areaId + "/" + blockId + "/" + roadId;
      } else {
        url = "houseShowByAreaBlockRoad/" + areaId + "/" + blockId + "/" + 0;
      }

      axios.get(url).then((response) => {
        this.houseList = response.data.data;
      });
    },
    //house

    SearchInfo() {
      console.log(this.form.employeeId);

      if (
        this.form.shopOfficeName != "" ||
        this.form.mobileNo != "" ||
        this.form.date != "" ||
        this.form.categoryId != "" ||
        this.form.employeeId !== "" ||
        this.form.employeeStatus != "" ||
        this.form.status != "" ||
        this.form.areaId != "" ||
        this.form.productTypeId != "" ||
        this.form.blockId != "" ||
        this.form.roadId != "" ||
        this.form.houseMarketId != ""
      ) {
        this.searchShow = true;
        this.form.post("search/info").then((response) => {
          this.searchList = response.data.data;
          if(this.searchList.length==0){
            Toast.fire({
              icon: "error",
              title: "No Data Found",
            });
          }
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "Please fill up information",
        });
      }
    },

    countInfo() {
      axios.get("count/info").then((response) => {
        this.count_info = response.data.data;
      });
    },

    viewProductType() {
      axios.get("productTypeView").then((response) => {
        this.productTypeLists = response.data.data;
      });
    },

     statusTypeShow(){
        axios.get('status/type/show').then((response) => {
          this.status_type_list = response.data.lists;
        });
      },

  },
};
</script>

<style scoped>
button a {
  color: #fff;
  text-decoration: none;
}
</style>
