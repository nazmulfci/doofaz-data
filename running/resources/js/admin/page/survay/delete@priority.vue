<template id="">
    <span>



      <div class="card mt-5">
        <div class="card-header-tab card-header alert-info">
         <h4>
            <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>
             <button class="btn btn-sm btn-info">
                <router-link to="/priority@list" style="color:#000;font-weight:600;font-size:14px;">Priority List</router-link>
            </button>
         </h4>
        </div>

        <div class="supplier-entry py-4 px-2">
           <div class="card-body table-responsive bg-white">

             <div class="search-form" v-if="role==3">
                 <form @submit.prevent="searchPriorityListWithEmployee()" method="post">
                    <div class="row">
                        <div class="col-md-3">
                             <div class="form-group">
                                <label for="">Employee</label><br/>
                                <select class="form-control" v-model="form2.employee_id">
                                    <option value="">Select Employee</option>
                                    <option v-for="(EmployeeInfo,index) in employeeLists" :key="index" :value="EmployeeInfo.id">
                                        {{ EmployeeInfo.userName }}
                                     </option>
                                </select>
                             </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                               <label for="">Priority Status</label><br/>
                               <select class="form-control" v-model="form2.statusDelete">
                                   <option value="">Select Status</option>
                                   <option value="2">Delete</option>
                               </select>
                            </div>
                        </div>
                        <div class="col-md-1">
                            <div class="form-group">
                                <button type="submit" class="btn btn-sm btn-primary search_btn">Search</button>
                            </div>

                       </div>
                     </div>
                 </form>
             </div>

          <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered text-center">
              <thead>
                <tr>
                  <th>সি.নং</th>
                  <th v-if="role==3">প্রতিনিধি</th>
                  <th>এরিয়া</th>
                   <th>প্রতিষ্ঠানের<span id="underscore_remove">_</span>নাম </th>
                   <th>ব্যবসার<span id="underscore_remove">_</span>ধরণ</th>
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
                  <!-- <th>Action</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(shopInformation, index) in shopInformations" >
                  <td>{{ ++index }}</td>
                  <td v-if="role==3">{{ shopInformation.create_by_name_show.userName }}</td>

                  <td v-if="shopInformation.area_information">
                    {{ shopInformation.area_information.areaName }}
                  </td>
                  <td v-else>0</td>

                   <td>
                    {{ shopInformation.shopOfficeName }}
                   </td>
                    <td v-if="shopInformation.product_type_information">
                        {{ shopInformation.product_type_information.productType }}
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

                  <td v-if="shopInformation.house_market">
                    {{ shopInformation.house_market.houseMarketName }}<br/>
                    H.No# {{ shopInformation.house_market.houseMarketNumber }}
                  </td>
                  <td v-else>0</td>

                  <td>{{ shopInformation.floorId }} Floor</td>

                  <td v-if="shopInformation.shopOrOffice==1">
                      দোকান
                  </td>
                  <td v-else>অফিস</td>


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
                  <td v-else>No</td>

                  <td v-if="shopInformation.doYouUseSoftware==1">
                      Yes
                  </td>
                  <td v-else>No</td>

                  <td>{{ shopInformation.usedSoftwareName }}</td>
                  <td>{{ shopInformation.whyDisagree }}</td>


                  <td v-if="shopInformation.officerOrManager==1">
                      owner
                  </td>
                  <td v-else>Manager</td>



                  <td v-if="shopInformation.haveComputer==1">
                      Yes
                  </td>
                  <td v-else>No</td>



                  <td v-if="shopInformation.expertPerson==1">
                      Yes
                  </td>
                  <td v-else>No</td>

                  <td>{{ shopInformation.email }}</td>
                  <td>{{ shopInformation.facebook }}</td>
                  <td v-if="shopInformation.youtube">{{ shopInformation.youtube }}</td>
                  <td v-else>0</td>
                  <td>{{ shopInformation.aboutSoftwareComment }}</td>

                 <td>
                    {{moment(shopInformation.created_at).fromNow()}}
                      </br>
                    {{moment(shopInformation.created_at).format("DD MMMM YYYY")}}
                      </br>
                    {{moment(shopInformation.created_at).format("h:mm:ss a")}}
                  </td>

                    <!-- <td>
                        <button @click.prevent="DeleteModalShow(shopInformation.id)" class="btn btn-sm btn-danger">Delete</button>
                     </td> -->


                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>

      <!-- note modal -->
      <div class="modal fade" id="DeleteModalShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Priority</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
             <form @submit.prevent="DeletePriorityStore">
            <div class="modal-body">

                 <div class="form-group">
                   <label>Note</label> <br>
                   <!-- <input type="text" v-model="form.note" class="form-control" placeholder="Note"> -->
                   <textarea v-model="form.note" class="form-control" placeholder="Note"></textarea>
                 </div>
                 <input type="hidden" v-model="form.shop_id" class="form-control">

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
             </form>
          </div>
        </div>
      </div>
      <!-- note modal -->

    </span>
  </template>

  <script>

    import moment from 'moment';
  export default {


    data() {
      return {

        form:new Form({
           shop_id:'',
           note:'',
        }),

        form2:new Form({
           employee_id:'',
           statusDelete:'',
        }),

        moment: moment,
        shopInformations: [],
        employeeLists: [],
        role:[],
      };
    },

    mounted() {
      this.view();
      this.viewEmployee();
    },

    methods: {

    view(){
      axios.get('priority/view/delete').then((response)=>{
        this.shopInformations = response.data.data;
        this.role=response.data.role;
      })
    },

    DeleteModalShow(shopId){
        this.form.shop_id = shopId;
        $('#DeleteModalShow').modal('show');
    },


    DeletePriorityStore(){
        this.form.post('/delete/priority/information').then((response)=>{
          $('#DeleteModalShow').modal('hide');
            this.form.note='';
            this.view();
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title: "Submitted Successfully",
            });
        });
      },

      viewEmployee(){
       axios.get('get/employee/list').then((response)=>{
          this.employeeLists=response.data.data;
       });
    },

    searchPriorityListWithEmployee(){
        this.form2.post('/priority/search/with/employee').then((response)=>{
            this.shopInformations = response.data.data;
        });
    },

    },
  };
  </script>

  <style scoped>
    .dropdown-item {
      display: block;
      width: 100%;
      padding: 2px 10px;
      clear: both;
      font-weight: 400;
      color: #212529;
      text-align: inherit;
      white-space: nowrap;
      background-color: transparent;
      border: 0;
    }

  #btn_form {
    margin: 2px 0px;
    border: none;
    border-radius: 20px;
  }
  fa.fa-edit{
    margin-left:-12px!important;
  }
 span#underscore_remove{
  color:transparent!important;
 }
 .table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #e9ecef;
  background: #d0c6a6;
}
.table-bordered th, .table-bordered td {
  border: 1px solid rgba(0,0,0,.3);
}
label{
  float:left;
}

.pagination button {
	border: none;
	padding: 5px 10px;
	background: #ddd;
	margin: 5px 1px;
	cursor: pointer;
	color: #000;
	border: 1px solid rgba(0,0,0,.1);
}
.pagination button:disabled,
.pagination button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
.search-form {
	margin-top: -21px;
}
.btn.btn-sm.btn-primary.search_btn {
	margin-top: 29px;
	padding: 7px 20px;
}
  </style>
