<template id="">
    <span>



      <div class="card mt-5">
        <div class="card-header-tab card-header alert-info">
  <h4><i
              class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
            ></i>
            Today All Information </h4>
        </div>

        <div class="supplier-entry py-4 px-2">
           <div class="card-body table-responsive bg-white">
          <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered text-center">
              <thead>
                <tr>
                  <th>সি.নং</th>
                  <th v-if="role==3">প্রতিনিধি</th>
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
                  <th>Category</th>
                  <th>তারিখ<span id="underscore_remove">_</span>ও<span id="underscore_remove">_</span>সময় </th>
                  <th>Gallery</th>
                  <th>Metting</th>
                  <th width="10%">Edit</th>
                  <th width="20%">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(shopInformation, index) in paginatedItems" >

                  <td>{{ ++index }}</td>
                  <td v-if="role==3">{{ shopInformation.create_by_name_show.userName }}</td>
                  <td><span v-for="areaList in viewAreaLists" v-if="areaList.id==shopInformation.areaId">{{ areaList.areaName }}</span></td>
                   <td>
                    {{ shopInformation.shopOfficeName }} <br>
                      <button id="btn_form" @click.prevent="MessageModalShow(shopInformation.id)" class="btn-sm btn-pill btn-primary btn-hover-shine text-white">
                       Message
                     </button>
                   </td>
                    <td>
                    <span v-for="productTypeList in productTypeLists" v-if="productTypeList.id==shopInformation.productTypeId">{{ productTypeList.productType }}</span>

                     <br>
                       <button id="btn_form" @click.prevent="timeLineInformationShow(shopInformation.id)" class="btn-sm btn-pill btn-info btn-hover-shine text-white">
                       TimeLine
                     </button>

                   </td>
                   <td v-if="shopInformation.status_type_information">
                      {{ shopInformation.status_type_information.name }}
                   </td>
                   <td v-else>0</td>
                   <td v-if="shopInformation.category_information">
                    {{ shopInformation.category_information.category_name }}
                  </td>
                  <td v-else>0</td>
                  <td>{{ shopInformation.block_road.blockRoadNameNumber }}</td>
                  <td v-if="shopInformation.road_information">
                    {{ shopInformation.road_information.roadNameNumber }}
                  </td>
                  <td v-else>0</td>
                  <td>{{ shopInformation.house_market.houseMarketName }}</td>
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
                    {{moment(shopInformation.created_at).fromNow()}}
                      </br>
                    {{moment(shopInformation.created_at).format("DD MMMM YYYY")}}
                      </br>
                    {{moment(shopInformation.created_at).format("h:mm:ss a")}}
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

                     <button id="btn_form" @click.prevent="MettingModalShow(shopInformation.id)" class="btn-sm btn-pill btn-primary btn-hover-shine text-white">
                       M.Info
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

                      <!--Reason Modal -->
                      <div class="modal fade" id="ReasonModalShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-sm" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                             <form @submit.prevent="statusReasonStore">
                            <div class="modal-body">

                                 <div class="form-group">
                                   <label>Note</label>
                                   <input type="text" v-model="form.note" class="form-control" placeholder="Note">
                                 </div>
                                 <input type="hidden" v-model="form.shop_id" class="form-control">
                                 <input type="hidden" v-model="form.status_type_id" class="form-control">

                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                             </form>
                          </div>
                        </div>
                      </div>
                      <!-- Reason Modal -->

                      <!-- note modal -->
                       <div class="modal fade" id="NoteModalShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-sm" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Note</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                             <form @submit.prevent="NoteStore">
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

                               <div class="row">
                                 <div class="col-md-6">
                                     <img :src="'images/invoice_logo/'+galleryShow.signboardImage" alt="" width="100%" height="350px">
                                 </div>
                                 <div class="col-md-6">
                                     <img :src="'images/invoice_logo/'+galleryShow.visitingCardImage" alt="" width="100%" height="350px">
                                 </div>
                               </div>

                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>

                          </div>
                        </div>
                      </div>
                      <!-- Gallery Modal -->

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
                             <form @submit.prevent="MettingStore">
                            <div class="modal-body">

                                 <div class="form-group">
                                   <label>Title</label>
                                   <input type="text" v-model="form1.title" class="form-control" placeholder="Title">
                                 </div>

                                 <div class="form-group">
                                   <label>Location</label>
                                   <input type="text" v-model="form1.location" class="form-control" placeholder="Location">
                                 </div>

                                 <div class="row">

                                   <div class="col-md-6">
                                     <div class="form-group">
                                        <label>Date</label>
                                        <input type="date" v-model="form1.date" class="form-control" placeholder="Location">
                                      </div>
                                   </div>

                                   <div class="col-md-6">
                                     <div class="form-group">
                                        <label>Time</label>
                                        <input type="time" v-model="form1.time" class="form-control apon" placeholder="Location">
                                      </div>
                                   </div>

                                 </div>

                                 <div class="form-group">
                                   <label>Person Inforamtion</label> <br>
                                   <textarea rows="5" v-model="form1.person_info" class="form-control"></textarea>
                                 </div>

                                 <input type="hidden" v-model="form1.shop_id" class="form-control">

                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                             </form>
                          </div>
                        </div>
                      </div>
                      <!-- metting modal -->

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
                             <form @submit.prevent="SendMessageStore">
                            <div class="modal-body">

                                 <div class="form-group">
                                   <label>Sender ID</label>
                                   <select class="form-control" v-model="form2.sender_id">
                                     <option value="12345678901">12345678901</option>
                                   </select>
                                 </div>

                                 <div class="form-group">
                                   <label>Phone Number</label>
                                   <textarea class="form-control" v-model="form2.mobile_no"></textarea>
                                 </div>

                                  <div class="form-group">
                                   <label></label>
                                   <select class="form-control" v-model="form2.default_message" @change.prevent="DefaultMessageShowTextarea($event)">
                                     <option value="">Select Message</option>
                                     <option value="" v-for="MessageShow,index in defaultMessages" :key="MessageShow.id" :value="MessageShow.message">
                                       {{ MessageShow.message }}
                                     </option>
                                   </select>
                                 </div>

                                 <div class="form-group">
                                   <label>
                                     Text Message
                                     {{ form2.message.length }}
                                   </label>
                                   <textarea class="form-control" maxlength="315" v-model="form2.message"></textarea><br/>
                                   <span style="color:red;float:left;">max character=315</span>
                                 </div>

                                 <input type="hidden" v-model="form2.shop_id" class="form-control">

                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                             </form>
                          </div>
                        </div>
                      </div>
                      <!-- message modal -->

                      <!-- timeline modal -->

                      <div class="modal fade" id="timeLineInformationShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">

                            <div class="modal-body">
                                <div class="mt-2 mb-2">
                        <div class="row">
                            <div class="col-md-10 offset-md-1 timeInfo">
                                <ul class="timeline">

                                    <li v-for="timeLineInfo in timeLists">

                                        <div class="" v-if="timeLineInfo.referanceTypeId!=1">
                                            <table class="table table-bordered text-center">
                                                <thead>
                                                    <tr>
                                                        <th>From</th>
                                                        <th>To</th>
                                                        <th>Date</th>
                                                    </tr>
                                                </thead>
                                                <tr>
                                                    <td>{{ timeLineInfo.from }}</td>
                                                    <td>{{ timeLineInfo.to }}</td>
                                                    <td>
                                                        {{moment(timeLineInfo.date).format("DD MMMM YYYY")}} <br>
                                                        {{ timeLineInfo.time }}
                                                    </td>
                                                </tr>
                                            </table>
                                             <div class="timeline_paragraph">
                                                <p>{{ timeLineInfo.description }}</p>
                                             </div>
                                        </div>

                                        <div class="shopInfo"  v-else>
                                            <a href="" class="title">
                                                {{ timeLineInfo.title }}
                                            </a>
                                            <p href="#" class="float-right">
                                                {{moment(timeLineInfo.date).format("DD MMMM YYYY")}}
                                            </p>
                                            <br>
                                            <p href="#" class="float-right aaa">
                                               {{ timeLineInfo.time }}
                                            </p>
                                        </div>
                                  </li>


                                </ul>
                            </div>
                        </div>
                        </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    <!-- timeline modal -->

                    <!-- CategoryProduct modal -->
                       <div class="modal fade" id="CategoryProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-sm" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Category Product</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                             <form @submit.prevent="addCategoryProduct">
                            <div class="modal-body">

                                 <div class="form-group">
                                   <label>Category</label>
                                   <select class="form-control" v-model="form3.category_id">
                                     <option v-for="category,index in CategoryLists" :key="index" :value="category.id">
                                        {{ category.category_name }}
                                     </option>
                                   </select>
                                 </div>

                                 <input type="hidden" v-model="form3.shop_id" class="form-control">

                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                             </form>
                          </div>
                        </div>
                      </div>
                      <!-- CategoryProduct modal -->


                  </td>
                </tr>
              </tbody>

            </table>

            <div class="pagination">
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
    </span>
  </template>

  <script>

    import moment from 'moment';
  export default {


    data() {
      return {

        form:new Form({
          note:'',
          status_type_id:'',
          shop_id:'',
        }),

          form1:new Form({
          shop_id:'',
                title: '',
              location: '',
          date:'',
          time:'',
          person_info:'',
          discussion_area:'',
        }),

        form2:new Form({
          shop_id:'',
          sender_id:'',
          default_message:'',
          mobile_no:'',
          message:'',
        }),

        form3:new Form({
          shop_id:'',
          category_id:'',
        }),

        defaultMessages: [],

        moment: moment,
        shopInformations: [],
        productTypeLists: [],
        viewAreaLists: [],
        status_type_list: [],
        galleryShow: [],
        role:[],
        timeLineList:[],
        timeLists:[],
        CategoryLists: [],
        itemsPerPage: 10, // Number of items to display per page
        currentPage: 1,
      };
    },

    mounted() {
      this.viewProductType();
      this.view();
      this.areaList();
      this.statusTypeShow();
     this.DefaultMessageShow();
    this.CategoryEntryShow();
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
  },

    methods: {

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

    timeLineInformationShow(shop_id) {
            axios.get('timeline/show/'+shop_id).then((response) => {
                this.timeLists = response.data.data;
            });
            $('#timeLineInformationShow').modal('show');
        },

   CategoryProduct(id){
      this.form3.shop_id =id;
      $('#CategoryProduct').modal('show');
    },

    addCategoryProduct(){
       this.form3.post('store/category/product').then((response)=>{
          this.form3.reset();
          this.view();
          $('#CategoryProduct').modal('hide');
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title: "Submitted Successfully",
            });
         });
    },

    CategoryEntryShow(){
       axios.get('get/list/category/entry').then((response)=>{
          this.CategoryLists = response.data.data;
       });
     },

      DefaultMessageShowTextarea(e){
         var defaultMessage = e.target.options[e.target.options.selectedIndex].text;
         this.form2.message = defaultMessage;
      },

      DefaultMessageShow(){
         axios.get('default/message/show').then((response)=>{
             this.defaultMessages =  response.data.data;
         });
      },

      SendMessageStore(){
         this.form2.post('send/message/store').then((response)=>{
          this.form2.reset();
          $('#MessageModalShow').modal('hide');
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title: "Message Send Successfully",
            });
         });
      },

      MessageModalShow(shop_id){
        this.form2.shop_id = shop_id;
        axios.get(`show/phone/number/${shop_id}`).then((response)=>{
           this.form2.mobile_no =response.data.data.mobileNo;
        });
        $('#MessageModalShow').modal('show');
      },

      MettingModalShow(shop_id){
        this.form1.shop_id = shop_id;
        $('#MettingModalShow').modal('show');
      },

      MettingStore(){
        this.form1.post('/metting/store').then((response)=>{
           $('#MettingModalShow').modal('hide');
           this.form1.reset();
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title:"Data Submitted Successfully",
            });
        });
      },

      ShowReasonModal(status_id,shop_id){
         this.form.shop_id = shop_id;
         this.form.status_type_id = status_id;
         $('#ReasonModalShow').modal('show');
      },

      GalleryModalShow(shop_id){
         axios.get('shop/gallery/show/'+shop_id).then((response)=>{
            this.galleryShow = response.data.data;
         });
         $('#GalleryModalShow').modal('show');
      },


      statusTypeShow(){
        axios.get('status/type/show').then((response) => {
          this.status_type_list = response.data.lists;
        });
      },

      view() {

        axios.get('get/today/data').then((response) => {
          this.shopInformations = response.data.data;
          this.role = response.data.role;
        });

      },
      viewProductType() {
        axios.get('productTypeView').then((response) => {
          this.productTypeLists = response.data.data;
        });

      },

      areaList() {
        axios.get("/viewArea").then((res) => {
          this.viewAreaLists = res.data.data;
        });
      },

      statusReasonStore(){
        this.form.post('/status/reason/store').then((response)=>{
          $('#ReasonModalShow').modal('hide');
          this.view();
            this.form.note='';
            this.view();
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title: "Status Reason Submitted Successfully",
            });
        });
      },

      NoteModalShow(shop_id){
        this.form.shop_id = shop_id;
        $('#NoteModalShow').modal('show');
      },

        NoteStore(){
        this.form.post('/note/store').then((response)=>{
            $('#NoteModalShow').modal('hide');
            this.form.note='';
            this.view();
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title:"Data Submitted Successfully",
            });
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

.timeInfo ul.timeline {
    list-style-type: none;
    position: relative;
}
.timeInfo ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 0px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
.timeInfo ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}
.timeInfo ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #22c0e8;
    left: -10px;
    width: 20px;
    height: 20px;
    z-index: 400;
}
.timeInfo ul.timeline > li{
	margin: 20px 0;
	border: 1px solid rgba(0,0,0,.1);
	padding: 10px 20px;
	text-align: left;
    min-height: 70px;
}

.timeInfo ul.timeline > li p {
	font-weight: 400;
}
.float-right.aaa {
	/* float: ; */
	position: absolute;
	right: 22px;
}
a.title {
	/* margin-top: 46px !important; */
	position: absolute;
	top: 13px;
	font-size: 14px;
	color: #000;
}
.timeInfo h4{
    text-align: left;
    font-weight: 600;
    color:green;
    font-size: 15px;
}
.shopInfo{
    position:relative;
}

.timeline_paragraph {
	background: #f0e9e9;
	padding: 15px 15px 5px 15px;
	/* border: 1px solid rgba(0,0,0,.1); */
}
  </style>
