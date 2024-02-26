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

                      <button class="btn btn-sm btn-primary">
                        <router-link to="/data@entry">Data Entry</router-link>
                      </button>

                      <button class="btn btn-sm btn-info">
                          <router-link to="/metting@report@list1"> Metting List</router-link>
                      </button>

                      <button class="btn btn-sm btn-dark">
                          <router-link to="/guest@lists"> Guest List</router-link>
                      </button>

                      <button class="btn btn-sm btn-success">
                        <router-link to="/today@data"> Today Entry({{ count_info }})</router-link>
                      </button>

                 </div>

                <div class="card mt-2">
                    <!-- <div class="card-header">Data Information Search</div> -->
                    <div class="card-body">
                        <div class="col-md-6 offset-md-3 border">
                            <form @submit.prevent="SearchInfo()">

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
                                      <option value=""> Select Area  </option>
                                      <option v-for="assignArea,index in assignAreaLists" :key="index" :value="assignArea.areaId">
                                        {{ assignArea.area.areaName }}
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
                                    <label>ব্লক </label>
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
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                              <th>সি.নং</th>
                              <th>প্রতিনিধি</th>
                              <th>এরিয়া</th>
                               <th>প্রতিষ্ঠানের<span id="underscore_remove">_</span>নাম </th>
                              <th>ব্যবসার<span id="underscore_remove">_</span>ধরণ</th>
                              <th>স্ট্যাটাস</th>
                              <th>ক্যাটেগরি </th>
                              <th>ব্লক</th>
                              <th>রোড</th>
                              <th>বাড়ি<span id="underscore_remove">_</span>মার্কেট </th>
                              <th>ফ্লোর<span id="underscore_remove">_</span>নাম্বার </th>
                              <th>দোকান<span id="underscore_remove">_</span>অফিস</th>

                              <th>অফিস<span id="underscore_remove">_</span>নং </th>

                              <th>মোবাইল<span id="underscore_remove">_</span>নাম্বার </th>
                              <th>WhatsApp</th>
                              <th>জরুরী<span id="underscore_remove">_</span>যোগাযোগ</th>
                              <th>মালিকের<span id="underscore_remove">_</span>নাম</th>
                              <th>মালিকের<span id="underscore_remove">_</span>ফোন </th>

                              <th>ম্যানেজার<span id="underscore_remove">_</span>নাম</th>
                              <th>ম্যানেজার<span id="underscore_remove">_</span>ফোন </th>
                              <th>অফিস<span id="underscore_remove">_</span>সাইজ </th>
                              <th>আগ্রহী</th>
                              <th>ব্যবহার<span id="underscore_remove">_</span>করছেন</th>
                              <th>ব্যবহারকৃত<span id="underscore_remove">_</span>নাম  </th>
                              <th>ব্যবহার<span id="underscore_remove">_</span>না<span id="underscore_remove">_</span>করার<span id="underscore_remove">_</span>কারণ </th>

                              <th>দায়িত্বরত</th>
                              <th>কম্পিউটার<span id="underscore_remove">_</span>আছে</th>
                              <th>আইটি<span id="underscore_remove">_</span>লোক<span id="underscore_remove">_</span>আছে</th>
                              <th>ইমেইল</th>
                              <th>ফেইসবুক</th>
                              <th>ওয়েবসাইট</th>

                              <th>মতামত</th>
                              <th>তারিখ<span id="underscore_remove">_</span>ও<span id="underscore_remove">_</span>সময় </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="(shopInformation,index) in searchList">
                                <td>{{ index+1 }}</td>
                                <td>{{ shopInformation.create_by_name_show.userName }}</td>

                                <td v-if="shopInformation.area_information">{{ shopInformation.area_information.areaName }}</td>
                                 <td v-else>0</td>

                                <td>{{ shopInformation.shopOfficeName }}</td>

                                <td v-if="shopInformation.product_type_information">{{ shopInformation.product_type_information.productType }}</td>
                                 <td v-else>0</td>

                                <td v-if="shopInformation.status_type_information">
                                    {{ shopInformation.status_type_information.name }}
                                 </td>
                                 <td v-else>0</td>

                                <td v-if="shopInformation.category_information">
                                    {{ shopInformation.category_information.category_name }}
                                  </td>
                                  <td v-else>0</td>

                                  <td v-if="shopInformation.block_road">{{ shopInformation.block_road.blockRoadNameNumber }}</td>
                                   <td v-else>0</td>

                                  <td v-if="shopInformation.road_information">
                                    {{ shopInformation.road_information.roadNameNumber }}
                                  </td>
                                  <td v-else>0</td>

                                  <td v-if="shopInformation.house_market">{{ shopInformation.house_market.houseMarketName }}</td>
                                   <td v-else>0</td>

                                  <td v-if="shopInformation.floorId!=0">{{ shopInformation.floorId }} Floor</td>
                                  <td v-else>0</td>

                                  <td v-if="shopInformation.shopOrOffice==1">
                                      দোকান
                                  </td>
                                  <td v-else-if="shopInformation.shopOrOffice==2">অফিস</td>
                                  <td v-else>Guest</td>


                                  <td>{{ shopInformation.shopOfficeNo }}</td>

                                  <td>{{ shopInformation.mobileNo }}</td>
                                  <td>{{ shopInformation.whatsapp }}</td>
                                  <td>{{ shopInformation.contactNo }}</td>

                                   <td>{{ shopInformation.owner_name }}</td>
                                  <td>{{ shopInformation.owner_phone }}</td>
                                  <td>{{ shopInformation.manager_name }}</td>
                                  <td>{{ shopInformation.manager_phone }}</td>
                                   <td>{{ shopInformation.shopOfficeSize }}</td>

                                  <td v-if="shopInformation.intarest==1">
                                      Yes
                                  </td>
                                  <td v-else-if="shopInformation.intarest==2">No</td>
                                   <td v-else>0</td>

                                  <td v-if="shopInformation.doYouUseSoftware==1">
                                      Yes
                                  </td>
                                  <td v-else-if="shopInformation.doYouUseSoftware==2">No</td>
                                  <td v-else>0</td>

                                  <td>{{ shopInformation.usedSoftwareName }}</td>
                                  <td>{{ shopInformation.whyDisagree }}</td>


                                  <td v-if="shopInformation.officerOrManager==1">
                                      owner
                                  </td>
                                  <td v-else-if="shopInformation.officerOrManager==2">Manager</td>
                                  <td v-else>0</td>

                                  <td v-if="shopInformation.haveComputer==1">
                                      Yes
                                  </td>
                                  <td v-else-if="shopInformation.haveComputer==2">No</td>
                                  <td v-else>0</td>

                                  <td v-if="shopInformation.expertPerson==1">
                                      Yes
                                  </td>
                                  <td v-else-if="shopInformation.expertPerson==2">No</td>
                                  <td v-else>0</td>

                                  <td>{{ shopInformation.email }}</td>
                                  <td>{{ shopInformation.facebook }}</td>
                                  <td>{{ shopInformation.facebook }}</td>
                                  <td>{{ shopInformation.aboutSoftwareComment }}</td>

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
import moment from "moment";
export default {
  data() {
    return {
      form: new Form({
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
      moment: moment,
    };
  },

  mounted() {
    this.viewRole();
    this.viewEmployee();
    this.viewCategory();
    this.viewArea();
    this.viewProductType();
    this.countInfo();
    this.statusTypeShow();
  },

  methods: {
    resetForm() {
      this.form = new Form({
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
