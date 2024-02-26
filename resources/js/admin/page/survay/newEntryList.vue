<template id="">
    <span>
<!--  -->
         <div class="search-form col-md-6 offset-md-3" v-if="role==3 && buttonHideShow=='guest'">
            <form @submit.prevent="searchGuest()" method="post">
               <div class="row">
                   <div class="col-md-6">
                        <div class="form-group">
                           <label for="">Employee</label><br/>
                            <select class="form-control" v-model="form2.employeeId">
                               <option value=""> Select Employee </option>
                               <option v-for="(EmployeeInfo,index) in employeeLists" :key="index" :value="EmployeeInfo.id">
                                   {{ EmployeeInfo.userName }}
                                </option>
                           </select>
                        </div>
                   </div>
                   <div class="col-md-4">
                        <div class="form-group">
                           <label for="">Limit</label><br/>
                           <!-- v-model="search" -->
                           <select class="form-control" v-model="form2.limit" >
                            <option value="">----</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="500">500</option>
                            <option value="1000">1000</option>
                            <option value="2000">2000</option>
                            <option value="5000">5000</option>
                        </select>
                        </div>
                   </div>

                   <div class="col-md-2">
                       <div class="form-group">
                           <button type="submit" class="btn btn-sm btn-primary search_btn">Search</button>
                       </div>

                  </div>
                </div>
            </form>
        </div>

      <div class="">
         
        <div class="supplier-entry py-4 px-2">
           <div class="card-body table-responsive bg-white">
            <form @submit.prevent="checkTransfer()">

            <div class="col-md-2 d-none" style="margin-top:-20px;margin-bottom:5px;" v-if="role==3 && buttonHideShow=='all'">

                <select class="form-control" v-model="form4.employeeId">
                    <option value="">Select Employee</option>
                    <option v-for="(EmployeeInfo,index) in employeeLists" :key="index" :value="EmployeeInfo.id">
                       {{ EmployeeInfo.userName }}
                    </option>
               </select>

              </div>

               <div class="col-md-2 d-none" style="margin-top:-20px;margin-bottom:5px;" v-if="role==3 && buttonHideShow=='guest'">

                <select class="form-control" v-model="form4.employeeId">
                    <option value="">Select Employee</option>
                    <option v-for="(EmployeeInfo,index) in employeeLists" :key="index" :value="EmployeeInfo.id">
                       {{ EmployeeInfo.userName }}
                    </option>
               </select>

              </div>

             <div class="">
              <h4> Toal Result : {{ shopInformations.length }} </h4>
                <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered text-center">
                    <thead>
                      <tr>
                        <th>সি.নং</th>
                        <th v-if="role==3 && buttonHideShow=='all'">Select</th>
                        <th v-if="role==3 && buttonHideShow=='guest'">Select</th>
                        <th v-if="role==3">প্রতিনিধি</th>
                        <th>এরিয়া</th>
                         <th v-if="buttonHideShow=='guest'">নাম</th>
                         <th v-if="buttonHideShow=='guest'">স্ট্যাটাস</th>
                         <th v-if="buttonHideShow=='guest'">মোবাইল<span id="underscore_remove">_</span>নাম্বার </th>
                         <th v-if="buttonHideShow=='guest'">Whatsapp</th>
                         <th v-if="buttonHideShow=='all' || buttonHideShow=='new'">প্রতিষ্ঠানের<span id="underscore_remove">_</span>নাম </th>
                         <th v-if="buttonHideShow=='all' || buttonHideShow=='new'">স্ট্যাটাস</th>

                         <th>ব্যবসার<span id="underscore_remove">_</span>ধরণ</th>
                         <th>ক্যাটেগরি </th>
                        <th>ব্লক</th>
                        <th>রোড</th>
                        <th>বাড়ি<span id="underscore_remove">_</span>মার্কেট </th>
                        <th>ফ্লোর<span id="underscore_remove">_</span>নাম্বার </th>
                        <th>দোকান<span id="underscore_remove">_</span>অফিস</th>

                        <th>অফিস<span id="underscore_remove">_</span>নং </th>

                        <th v-if="buttonHideShow=='all' || buttonHideShow=='new'">মোবাইল<span id="underscore_remove">_</span>নাম্বার </th>
                        <th v-if="buttonHideShow=='all' || buttonHideShow=='new'">WhatsApp</th>
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
                        <th v-if="priorityDelete"> Delete </th>
                      </tr>
                    </thead>
                    <tbody>
                        <!-- <search-value :searchInformations="aponData" :role="getRoleShow"></search-value> -->
                      <tr v-for="(shopInformation, index) in paginatedItems" v-if="normalDataShows">
                        <td>
                          <!-- 11- -->
                          {{ ++index }}</td>
                        <td v-if="role==3 && buttonHideShow=='all'">
                            <input type="checkbox" :value="shopInformation.id" v-model="form4.shop_id">
                        </td>

                         <td v-if="role==3 && buttonHideShow=='guest'">
                            <input type="checkbox" :value="shopInformation.id" v-model="form4.shop_id">
                        </td>

                        <td v-if="role==3">{{ shopInformation.create_by_name_show.userName }}</td>

                        <td v-if="shopInformation.area_information">
                            <span>{{ shopInformation.area_information.areaName }}</span>
                        </td>
                        <td v-else>0</td>

                         <td>
                          {{ shopInformation.shopOfficeName }} <br>
                            <button id="btn_form" @click.prevent="MessageModalShow(shopInformation.id)" class="btn-sm btn-pill btn-primary btn-hover-shine text-white">
                             Message
                           </button>
                         </td>

                          <td v-if="shopInformation.status_type_information">
                             {{ shopInformation.status_type_information.name }}
                          </td>

                          <td v-else>0</td>

                         <td v-if="buttonHideShow=='guest'">{{ shopInformation.mobileNo }}</td>
                         <td v-if="buttonHideShow=='guest'">{{ shopInformation.whatsapp }}</td>

                          <td v-if="shopInformation.product_type_information || buttonHideShow=='all'">
                          <span>{{ shopInformation.product_type_information.productType }}</span>
                          <br>
                          <span>
                              <button id="btn_form" @click.prevent="timeLineInformationShow(shopInformation.id)" class="btn-sm btn-pill btn-info btn-hover-shine text-white">
                              TimeLine
                              </button>
                          </span>

                         </td>

                         <td v-else>
                            <!-- <span>{{ shopInformation.productTypeId }}</span>
                            <br> -->
                            <span v-if="buttonHideShow=='guest'">
                                <button id="btn_form" @click.prevent="timeLineInformationShow(shopInformation.id)" class="btn-sm btn-pill btn-info btn-hover-shine text-white">
                                TimeLine
                                </button>
                            </span>
                         </td>


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
                        <td v-else-if="shopInformation.shopOrOffice==2">অফিস</td>
                        <td v-else>Guest</td>


                        <td>{{ shopInformation.shopOfficeNo }}</td>

                        <td v-if="buttonHideShow=='all' || buttonHideShow=='new'">{{ shopInformation.mobileNo }}</td>
                        <td v-if="buttonHideShow=='all' || buttonHideShow=='new'">{{ shopInformation.whatsapp }}</td>
                        <td>{{ shopInformation.contactNo }}</td>

                         <td>{{ shopInformation.owner_name }}</td>
                        <td>{{ shopInformation.owner_phone }}</td>
                        <td>{{ shopInformation.manager_name }}</td>
                        <td>{{ shopInformation.manager_phone }}</td>
                         <td>{{ shopInformation.shopOfficeSize }}</td>
                        <td v-if="shopInformation.intarest==1">Yes</td>
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

                        <td>
                          <button id="btn_form" @click.prevent="PriorityInformation(shopInformation.id)" class="btn-sm btn-pill btn-primary btn-hover-shine text-white">
                              Priority
                           </button>
                           <small v-if="shopInformation.priority_status==1" class="text-success">Done</small>
                           <small v-if="shopInformation.priority_status==2"  class="text-danger"> Delete </small>
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

                         <td v-if="shopInformation.shopOrOffice!=3">

                          <router-link :to="`/data@edit${shopInformation.id}`" class="btn btn-pill btn-secondary text-white">
                            Edit </router-link>

                        </td>

                           <td v-if="shopInformation.shopOrOffice==3">

                            <router-link :to="`/guest@edit${shopInformation.id}`" class="btn btn-pill btn-secondary text-white">
                            Edit </router-link>

                        </td>

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
                        <td v-if="priorityDelete"> 
                          <button @click.prevent="DeleteModalShow(shopInformation.id)" class="btn btn-sm btn-danger">Delete</button>
                        </td>
                      </tr>
                      <tr v-for="(shopInformation, index) in aponData" v-if="searchDataShows">
                        <td>
                          <!-- 22- -->
                          {{ ++index }}</td>
                        <td v-if="role==3">{{ shopInformation.create_by_name_show.userName }}</td>

                        <td v-if="shopInformation.area_information">
                            <span>{{ shopInformation.area_information.areaName }}</span>
                         </td>

                         <td v-else>0</td>

                        

                         <td>
                          {{ shopInformation.shopOfficeName }} <br>
                            <button id="btn_form" @click.prevent="MessageModalShow(shopInformation.id)" class="btn-sm btn-pill btn-primary btn-hover-shine text-white">
                             Message
                           </button>
                         </td>

                          <td v-if="shopInformation.status_type_information">
                             {{ shopInformation.status_type_information.name }}
                          </td>

                          <td v-else>0</td>

                          <td v-if="buttonHideShow=='guest'">{{ shopInformation.mobileNo }}</td>
                         <td v-if="buttonHideShow=='guest'">{{ shopInformation.whatsapp }}</td>

                          <td v-if="shopInformation.product_type_information">
                          <span>{{ shopInformation.product_type_information.productType }}</span>
                          <br>
                          <span v-if="buttonHideShow=='all'">
                              <button id="btn_form" @click.prevent="timeLineInformationShow(shopInformation.id)" class="btn-sm btn-pill btn-info btn-hover-shine text-white">
                              TimeLine
                              </button>
                          </span>
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
                        
                        <td v-if="shopInformation.floorId!=0">{{ shopInformation.floorId }} Floor</td>
                        <td v-else>0</td>

                        <td v-if="shopInformation.shopOrOffice==1">
                            দোকান
                        </td>
                        <td v-else-if="shopInformation.shopOrOffice==2">অফিস</td>
                        <td v-else>Guest</td>


                        <td>{{ shopInformation.shopOfficeNo }}</td>

                        <td v-if="buttonHideShow!='all'">{{ shopInformation.mobileNo }}</td>
                        <td v-if="buttonHideShow!='all'">{{ shopInformation.whatsapp }}</td>
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

                        <td>
                          <button id="btn_form" @click.prevent="PriorityInformation(shopInformation.id)" class="btn-sm btn-pill btn-primary btn-hover-shine text-white">
                              Priority
                           </button>
                           <small v-if="shopInformation.priority_status==1" class="text-success">Done</small>
                           <small v-if="shopInformation.priority_status==2"  class="text-danger"> Delete </small>
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

                        <td v-if="shopInformation.shopOrOffice!=3">

                          <router-link :to="`/data@edit${shopInformation.id}`" class="btn btn-pill btn-secondary text-white">
                            Edit </router-link>

                        </td>

                           <td v-if="shopInformation.shopOrOffice==3">

                            <router-link :to="`/guest@edit${shopInformation.id}`" class="btn btn-pill btn-secondary text-white">
                            guest </router-link>

                        </td>

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

              <!-- <div class="pagination" v-if="normalDataShows">
                <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
                <button
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                @click="setPage(pageNumber)"
                :class="{ active: currentPage === pageNumber }"
                >{{ pageNumber }}</button>
                <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
            </div> -->

            <div class="" v-if="normalDataShows">
                <custom-pagination v-if="paginationStatu!=1"
                  :currentPage="currentPage"
                  :totalPages="totalPages"
                  @page-changed="changePage"
                ></custom-pagination>
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

                       <gallery-show :shop_id="shop_id"></gallery-show>

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

      <!-- note modal -->
      <div class="modal fade" id="DeleteModalShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Priority</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
             <form @submit.prevent="DeletePriorityStore">
            <div class="modal-body">

                <div class="supplier-entry py-4 px-2 comm-form-back-img">
                    <div class="col-12 supplier-border comm-form-box-back-color">
                        <div class="form-group">
                            <label>Note</label> <br>
                            <!-- <input type="text" v-model="form.note" class="form-control" placeholder="Note"> -->
                            <textarea v-model="form.note" class="form-control" placeholder="Note"></textarea>
                          </div>
                          <input type="hidden" v-model="form.shop_id" class="form-control">
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button
                type="submit"
                class="
                  btn-pill btn-shadow btn-wide
                  fsize-1
                  btn btn-primary btn-lg
                  float-right
                "

              >
                <span class="mr-2 opacity-7">
                  <i class="fa fa-paper-plane"></i>
                </span>
                <span class="mr-1"> Submit </span>
              </button>
            </div>
             </form>
          </div>
        </div>
      </div>
      <!-- note modal -->



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
import CustomPagination from './pagination.vue';
import moment from 'moment';
export default{
    props:['shopInformations','role','buttonHideShow','paginationStatu','priorityDelete'],
    data(){
        return{

            form:new Form({
                note:'',
                shop_id:'',
            }),
            form2:new Form({
                employeeId:'',
                limit:'',
           }),

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
            search:'50',
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
        'custom-pagination':CustomPagination,
    },

    computed: {
        totalPages() {
          return Math.ceil(this.shopInformations.length / this.itemsPerPage);
        },
        paginatedItems() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            if(this.paginationStatu==1){
            return this.shopInformations;
            }
            else{
            return this.shopInformations.slice(start, end);
            }
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
      // this.searchItems(50)
      // this.viewEmployee();
      this.statusTypeShow();
    },

    methods:{

      DeleteModalShow(shopId){
        this.form.shop_id = shopId;
        $('#DeleteModalShow').modal('show');
    },


    DeletePriorityStore(){
        this.form.post('/delete/priority/information').then((response)=>{
          $('#DeleteModalShow').modal('hide');
            this.form.note='';
            // this.view();
            // window.history.pushState(null, null, "");
            window.location.replace("/priority@list");
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title: "Submitted Successfully",
            });
        });
      },

      
    changePage(page) {
      this.currentPage = page;
    },

    statusTypeShow(){
        axios.get('status/type/show').then((response) => {
          this.status_type_list = response.data.lists;
        });
      },


    // priority status
    PriorityInformation(shop_id){
         axios.get('priority/information/'+shop_id).then((response)=>{
           
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
        axios.get(`/guest/search/${value}`).then((response)=>{
            this.searchDataShows=true;
            this.normalDataShows=false;
            this.aponData = response.data.data;
         });
    },

    viewEmployee(){
            axios.get('get/employee/list').then((response)=>{
                this.employeeLists = response.data.data;
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

    viewEmployee(){
       axios.get('get/employee/list').then((response)=>{
          this.employeeLists=response.data.data;
       });
    },

    searchGuest(){
        this.searchDataShows=true;
            this.normalDataShows=false;
        if(this.form2.employeeId!=''){
            this.form2.post('/guest/search').then((response)=>{
            this.aponData = response.data.data;
        });
        }else{
            Toast.fire({
                icon: 'error',
                title: 'Please Select Information'
            });
        }

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
span#underscore_remove{
    color:transparent!important;
   }

   .btn.btn-sm.btn-primary.search_btn {
    margin-top: 29px;
    padding: 7px 20px;
}

.search-form{
    background: #fff;
    border: 1px solid rgba(0,0,0,.2);
    padding: 20px 15px 10px 10px;
}
</style>
