<template id="">
    <span>

      <div class="card mt-5">
        <div class="card-header-tab card-header alert-info">
  <h4><i
              class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
            ></i>
            View Information </h4>

            <div class="col-md-2 numberList">
                <select class="form-control" v-model="search">
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                    <option value="5000">5000</option>
                </select>
              </div>

        </div>

        <div class="supplier-entry py-4 px-2">
           <div class="card-body table-responsive bg-white">
            <form @submit.prevent="checkTransfer()">
            <div class="col-md-2" style="margin-top:-20px;margin-bottom:5px;" v-if="role==3 && buttonHideShow=='all'">

                <select class="form-control" v-model="form4.employeeId">
                    <option value="">Select Employee</option>
                    <option v-for="(EmployeeInfo,index) in employeeLists" :key="index" :value="EmployeeInfo.id">
                       {{ EmployeeInfo.userName }}
                    </option>
               </select>

              </div>

             <div class="">
                <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered text-center">
                    <thead>
                      <tr>
                        <th>সি.নং</th>
                        <th v-if="role==3 && buttonHideShow=='all'">Select</th>
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
                        <th>Category</th>
                        <th>ব্যবধান </th>
                        <th>তারিখ<span id="underscore_remove">_</span>ও<span id="underscore_remove">_</span>সময় </th>
                        <th>Priority</th>
                        <th>Gallery</th>
                        <th>Metting</th>
                        <th width="10%">Edit</th>
                        <th width="10%">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                        <!-- <search-value :searchInformations="aponData" :role="getRoleShow"></search-value> -->
                      <tr v-for="(shopInformation, index) in paginatedItems" v-if="normalDataShows">
                        <td>{{ ++index }}</td>
                        <td v-if="role==3 && buttonHideShow=='all'">
                            <input type="checkbox" :value="shopInformation.id" v-model="form4.shop_id">
                        </td>
                        <td v-if="role==3">{{ shopInformation.create_by_name_show.userName }}</td>
                        <td><span>{{ shopInformation.area_information.areaName }}</span></td>
                         <td>
                          {{ shopInformation.shopOfficeName }} <br>
                            <button id="btn_form" @click.prevent="MessageModalShow(shopInformation.id)" class="btn-sm btn-pill btn-primary btn-hover-shine text-white">
                             Message
                           </button>
                         </td>
                          <td>
                          <span>{{ shopInformation.product_type_information.productType }}</span>
                          <br>
                          <span v-if="buttonHideShow=='all'">
                              <button id="btn_form" @click.prevent="timeLineInformationShow(shopInformation.id)" class="btn-sm btn-pill btn-info btn-hover-shine text-white">
                              TimeLine
                              </button>
                          </span>
                         </td>
                         <td v-if="shopInformation.category_information">
                          {{ shopInformation.category_information.category_name }}
                        </td>
                        <td v-else>0</td>
                        <td>{{ shopInformation.block_road.blockRoadNameNumber }}</td>
                        <td v-if="shopInformation.road_information">
                          {{ shopInformation.road_information.roadNameNumber }}
                        </td>
                        <td v-else>0</td>
                        <td>
                          {{ shopInformation.house_market.houseMarketName }}<br/>
                          H.No# {{ shopInformation.house_market.houseMarketNumber }}
                        </td>
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
                        <td>{{ shopInformation.facebook }}</td>
                        <td>{{ shopInformation.aboutSoftwareComment }}</td>
                        <td>
                           <button @click.prevent="CategoryProduct(shopInformation.id)" class="btn btn-sm btn-info">Category</button>
                        </td>

                        <td>
                          {{ shopInformation.time_distance }}
                        </td>

                       <td>
                          {{moment(shopInformation.created_at).fromNow()}}
                            </br>
                          {{moment(shopInformation.created_at).format("DD MMMM YYYY")}}
                            </br>
                          {{moment(shopInformation.created_at).format("h:mm:ss a")}}
                        </td>
                        <td v-if="shopInformation.priority_status==0">
                          <button id="btn_form" @click.prevent="PriorityInformation(shopInformation.id)" class="btn-sm btn-pill btn-primary btn-hover-shine text-white">
                              Priority
                           </button>
                        </td>
                        <td v-else>
                          <button class="btn btn-sm btn-success">Done</button>
                        </td>
                        <td>

                          <button id="btn_form" @click.prevent="GalleryModalShow(shopInformation.id)" class="btn-sm btn-pill btn-primary btn-hover-shine text-white">
                             Gallery
                          </button>

                           <a href="" @click.prevent="NoteModalShow(shopInformation.id)" class="btn btn-pill btn-info btn-hover-shine text-white">
                             Note
                           </a>

                        </td>
                           <td>

                           <button id="btn_form" @click.prevent="MettingModalShow(shopInformation.id)" class="btn-sm btn-pill btn-info btn-hover-shine text-white">
                             M.Setup
                           </button>
                        </td>

                        <td>
                          <router-link
                            :to="`/data@edit${shopInformation.id}`"
                            class="btn btn-pill btn-secondary text-white">
                            <!-- <i class="fa fa-edit"></i> -->
                             Edit </router-link
                          >



                        </td>
                        <!-- <td>
                          <button
                            @click.prevent="deletePost(shopInformation.id)"
                            class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine"
                        >
                          <i class="fa fa-trash"></i>Delete
                          </button>
                        </td> -->
                        <td>

                            <div class="dropdown">
                              <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Status
                              </button>
                              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  <a class="dropdown-item" @click.prevent="ShowReasonModal(statusType.id,shopInformation.id)" v-for="statusType in status_type_list">
                                      {{ statusType.name }}
                                     </a>
                              </div>
                            </div>

                        </td>
                      </tr>
                      <tr v-for="(shopInformation, index) in aponData" v-if="searchDataShows">
                        <td>{{ ++index }}</td>
                        <td v-if="role==3">{{ shopInformation.create_by_name_show.userName }}</td>
                        <td><span>{{ shopInformation.area_information.areaName }}</span></td>
                         <td>
                          {{ shopInformation.shopOfficeName }} <br>
                            <button id="btn_form" @click.prevent="MessageModalShow(shopInformation.id)" class="btn-sm btn-pill btn-primary btn-hover-shine text-white">
                             Message
                           </button>
                         </td>
                          <td>
                          <span>{{ shopInformation.product_type_information.productType }}</span>
                          <br>
                          <span v-if="buttonHideShow=='all'">
                              <button id="btn_form" @click.prevent="timeLineInformationShow(shopInformation.id)" class="btn-sm btn-pill btn-info btn-hover-shine text-white">
                              TimeLine
                              </button>
                          </span>
                         </td>
                         <td v-if="shopInformation.category_information">
                          {{ shopInformation.category_information.category_name }}
                        </td>
                        <td v-else>0</td>
                        <td>{{ shopInformation.block_road.blockRoadNameNumber }}</td>
                        <td v-if="shopInformation.road_information">
                          {{ shopInformation.road_information.roadNameNumber }}
                        </td>
                        <td v-else>0</td>
                        <td>
                          {{ shopInformation.house_market.houseMarketName }}<br/>
                          H.No# {{ shopInformation.house_market.houseMarketNumber }}
                        </td>
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
                        <td>{{ shopInformation.facebook }}</td>
                        <td>{{ shopInformation.aboutSoftwareComment }}</td>
                        <td>
                           <button @click.prevent="CategoryProduct(shopInformation.id)" class="btn btn-sm btn-info">Category</button>
                        </td>

                        <td>
                          {{ shopInformation.time_distance }}
                        </td>

                       <td>
                          {{moment(shopInformation.created_at).fromNow()}}
                            </br>
                          {{moment(shopInformation.created_at).format("DD MMMM YYYY")}}
                            </br>
                          {{moment(shopInformation.created_at).format("h:mm:ss a")}}
                        </td>
                        <td v-if="shopInformation.priority_status==0">
                          <button id="btn_form" @click.prevent="PriorityInformation(shopInformation.id)" class="btn-sm btn-pill btn-primary btn-hover-shine text-white">
                              Priority
                           </button>
                        </td>
                        <td v-else>
                          <button class="btn btn-sm btn-success">Done</button>
                        </td>
                        <td>

                          <button id="btn_form" @click.prevent="GalleryModalShow(shopInformation.id)" class="btn-sm btn-pill btn-primary btn-hover-shine text-white">
                             Gallery
                          </button>

                           <a href="" @click.prevent="NoteModalShow(shopInformation.id)" class="btn btn-pill btn-info btn-hover-shine text-white">
                             Note
                           </a>

                        </td>
                           <td>

                           <button id="btn_form" @click.prevent="MettingModalShow(shopInformation.id)" class="btn-sm btn-pill btn-info btn-hover-shine text-white">
                             M.Setup
                           </button>
                        </td>

                        <td>
                          <router-link
                            :to="`/data@edit${shopInformation.id}`"
                            class="btn btn-pill btn-secondary text-white">
                            <!-- <i class="fa fa-edit"></i> -->
                             Edit </router-link
                          >



                        </td>
                        <!-- <td>
                          <button
                            @click.prevent="deletePost(shopInformation.id)"
                            class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine"
                        >
                          <i class="fa fa-trash"></i>Delete
                          </button>
                        </td> -->
                        <td>

                            <div class="dropdown">
                              <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Status
                              </button>
                              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  <a class="dropdown-item" @click.prevent="ShowReasonModal(statusType.id,shopInformation.id)" v-for="statusType in status_type_list">
                                      {{ statusType.name }}
                                     </a>
                              </div>
                            </div>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="submit" class="btn btn-lg btn-primary mt-2 mb-4 ml-2" v-if="lengthReturn">Submit</button>
             </div>
            </form>
              <div class="pagination" v-if="normalDataShows">
                <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
                <button
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                @click="setPage(pageNumber)"
                :class="{ active: currentPage === pageNumber }"
                >{{ pageNumber }}</button>
                <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
            </div>

          </div>
        </div>


      </div>


        <!-- message modal -->
        <div class="modal fade" id="MessageModalShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Message Send</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body">

                    <div class="supplier-entry py-4 px-2 comm-form-back-img">
                        <div class="col-12 supplier-border comm-form-box-back-color">
                            <message-form :shop_id="shop_id"></message-form>
                        </div>
                    </div>


                </div>
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>
          <!-- message modal -->


      <!-- CategoryProduct modal -->
      <div class="modal fade" id="CategoryProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Category Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="supplier-entry py-4 px-2 comm-form-back-img">
                    <div class="col-12 supplier-border comm-form-box-back-color">
                        <category-form :shop_id="shop_id"></category-form>
                    </div>
                </div>



            </div>
            <div class="modal-footer"></div>

          </div>
        </div>
      </div>
      <!-- CategoryProduct modal -->

       <!-- note modal -->
       <div class="modal fade" id="NoteModalShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Note</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">

                <div class="supplier-entry py-4 px-2 comm-form-back-img">
                    <div class="col-12 supplier-border comm-form-box-back-color">
                         <note-form :shop_id="shop_id"></note-form>
                    </div>
                </div>



            </div>
            <div class="modal-footer"></div>

          </div>
        </div>
      </div>
      <!-- note modal -->

        <!-- metting modal -->
        <div class="modal fade" id="MettingModalShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Metting Information</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body">

                    <div class="supplier-entry py-4 px-2 comm-form-back-img">
                        <div class="col-12 supplier-border comm-form-box-back-color">
                            <metting-form :shop_id="shop_id"></metting-form>
                        </div>
                    </div>



                </div>
                <div class="modal-footer">

                </div>

              </div>
            </div>
          </div>
          <!-- metting modal -->

            <!--Reason Modal -->
            <div class="modal fade" id="ReasonModalShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Status Reason</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body">

                        <div class="supplier-entry py-4 px-2 comm-form-back-img">
                            <div class="col-12 supplier-border comm-form-box-back-color">
                                 <status-reason-form :shop_id="shop_id" :status_type_id="status_type_id"></status-reason-form>
                            </div>
                        </div>


                    </div>
                    <div class="modal-footer">

                    </div>

                  </div>
                </div>
              </div>
              <!-- Reason Modal -->

               <!-- Gallery Modal -->
               <div class="modal fade" id="GalleryModalShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel"> Gallery</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body">

                       <!-- <gallery-show :shop_id="shop_id"></gallery-show> -->

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>

                  </div>
                </div>
              </div>
              <!-- Gallery Modal -->


              <!-- timeline modal -->

              <div class="modal fade" id="timeLineInformationShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">

                    <div class="modal-body">
                        <timeline-information :shop_id="shop_id"></timeline-information>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
                <!-- timeline modal -->



    </span>
  </template>

<script>
import CategoryForm from './CategoryModal/category@form.vue';
import MessageForm from './CategoryModal/message@form.vue';
import NoteForm from './CategoryModal/note@form.vue';
import MettingForm from './CategoryModal/metting@form.vue';
import StatusReasonForm from './CategoryModal/status@reason@form.vue';
import GalleryShow from './CategoryModal/gallery@show.vue';
import TimelineInformation from './CategoryModal/timeline@information.vue';
import SearchValue from './CategoryModal/search@value.vue';
import moment from 'moment';
export default{
    props:['shopInformations','role','buttonHideShow'],
    data(){
        return{
            form4:new Form({
                employeeId:'',
                shop_id:[],
           }),
            itemsPerPage: 10, // Number of items to display per page
            currentPage: 1,
            shop_id:'',
            status_type_id:'',
            status_type_list:[],
            moment:moment,
            searchData:'',
            search:'',
            searchDataShows:false,
            normalDataShows:true,
            aponData:[],
            employeeLists:[],
        }
    },

    components:{
        'category-form':CategoryForm,
        'message-form':MessageForm,
        'note-form':NoteForm,
        'metting-form':MettingForm,
        'status-reason-form':StatusReasonForm,
        'gallery-show':GalleryShow,
        'timeline-information':TimelineInformation,
        'search-value':SearchValue,
    },

    computed: {

        totalPages() {
        return Math.ceil(this.shopInformations.length / this.itemsPerPage);
        },

        paginatedItems() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.shopInformations.slice(startIndex, endIndex);
        },

        getRoleShow() {
            return this.$store.getters.getRoleShow;
        },

        lengthReturn(){
           let abc =this.form4.shop_id.length;
           return abc;
        },

    },

    mounted(){
        this.viewEmployee();
        this.statusTypeShow();
    },

    methods:{

    setPage: function(pageNumber) {
      this.currentPage = pageNumber;
    },

  nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    statusTypeShow(){
        axios.get('status/type/show').then((response) => {
          this.status_type_list = response.data.lists;
        });
      },


    // priority status
    PriorityInformation(shop_id){
         axios.get('priority/information/'+shop_id).then((response)=>{
            this.$store.dispatch('getDataList');
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title:"Priority Added Successful",
            });
         });
      },
    // priority status

    MessageModalShow(id){
        this.shop_id=id;
      $('#MessageModalShow').modal('show');
    },

    CategoryProduct(id){
        this.shop_id=id;
      $('#CategoryProduct').modal('show');
    },

    // note information
    NoteModalShow(id){
        this.shop_id = id;
        $('#NoteModalShow').modal('show');
      },
    // note information

    // metting information
    MettingModalShow(id){
        this.shop_id = id;
        $('#MettingModalShow').modal('show');
      },
    // metting information


    // statusReason
    ShowReasonModal(status_id,id){
         this.shop_id = id;
         this.status_type_id = status_id;
         $('#ReasonModalShow').modal('show');
      },
    // statusReason


    //timeline

    timeLineInformationShow(id) {
        this.shop_id=id;
       $('#timeLineInformationShow').modal('show');
    },
    //timeline

    //gallery
    GalleryModalShow(id){
         this.shop_id = id;
         $('#GalleryModalShow').modal('show');
      },
    //gallery

    searchItems(value){
        // alert(value)
        axios.get(`search/items/${value}`).then((response)=>{
            this.searchDataShows=true;
            this.normalDataShows=false;
            this.aponData = response.data.data;
            console.log(this.aponData);
         });
    },

    viewEmployee(){
            axios.get('get/employee/list').then((response)=>{
                this.employeeLists=response.data.data;
            });
        },

        checkTransfer(){
           this.form4.post('/items/tranfer').then((response)=>{
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title: "Submitted Successfully",
            });
            this.form4.reset();
           });
        },


    },

    watch: {

        search(){
        this.searchItems(this.search);
        //   this.normalValueShow=false;
        },

},


}
</script>

<style scoped>
.col-12.supplier-border.comm-form-box-back-color {
	padding: 5px 10px;
}
#btn_form{
	margin: 2px 0px;
	border: none;
	border-radius: 20px;
}
button{
    cursor: pointer;
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
</style>
