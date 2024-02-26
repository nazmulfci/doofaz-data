<template id="">
  <span>

    <div class="card">

            <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Data Entry </h4>
        </div>
      </div>


<form @submit.prevent="addShopInformation">
      <div class="supplier-entry py-4 px-2 comm-form-back-img ">



       <!-- ===================================================================== -->
       <!-- ===================== shop Address information =============== -->
       <!-- ===================================================================== -->
         <div
          class="col-lg-7 px-lg-10 col-sm-11 offset-sm-2 col-12 supplier-border comm-form-box-back-color mt-5"
        >



            <div class="row">

            <div class="col-12">




            <div class="form-group d-none">
              <label> Country
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

              <select
                v-model="form.countryId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('countryId') }"
                name="countryId"
                @change.prevent="divisionShow()"
              >
                 <option value=""> Select Currency  </option>
                <option
                  v-for="currencyList in currencyLists"
                  :key="currencyList.id"
                  :value="currencyList.id"
                >
                  {{ currencyList.country }}
                </option>

              </select>
              <has-error :form="form" field="countryId"></has-error>
            </div>



              <div class="form-group d-none">
              <label> Division
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

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
                {{++index}},
                  {{ divisionList.division_name }}
                </option>
                </select>
              <has-error :form="form" field="divisionId"></has-error>
            </div>


             <div class="form-group d-none">
              <label> District
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

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
                {{++index}},
                  {{ districtList.district_name }}
                </option>
                </select>
              <has-error :form="form" field="districtId"></has-error>
            </div>

            <div class="form-group d-none">
              <label> Upazilla
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

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
                >{{++index}},
                  {{ upazillaList.upazila_name }}
                </option>
                </select>
              <has-error :form="form" field="thanaId"></has-error>
            </div>


            <div class="form-group">
              <label> এরিয়া
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

              <select
                v-model="form.areaId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('areaId') }"
                @change.prevent="viewBlockRoad(0)"
                >
                <option value=""> Select Area </option>
               <option v-for="areaList,index in newAreaLists" :key="index" :value="areaList.areaId">
                  <span v-if="areaList.area">{{ areaList.area.areaName }}</span>
                </option>
                </select>
              <has-error :form="form" field="areaId"></has-error>
            </div>

            <div class="form-group">
              <label>  ব্লক

                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
              </label>
                 <select
                v-model="form.blockRoadId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('blockRoadId') }"
                name="blockRoadId"
                @change.prevent="viewRoad(0)"
              >
                 <option value=""> Select Block/Road (Name/ No) </option>
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

               <!-- road  -->
               <div class="form-group">
                  <label> রোড

                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>

                     <small
                      class="badge badge-primary"
                      data-toggle="modal"

                      data-target="#RoadModalShow"
                      title="Add Road"
                    >
                      +
                    </small>
                  </label>

                     <!-- ======================================== modal === -->

                  <!--Block Modal -->
                  <div
                    class="modal fade"
                    id="RoadModalShow"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add New Road
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="addRoad()">
                            <div
                              class="supplier-entry py-4 px-2 comm-form-back-img"
                            >
                              <div
                                class="
                                  col-12
                                  supplier-border
                                  comm-form-box-back-color
                                "
                              >


                                <div class="form-group">
                                  <label>রোড (নাম / নাম্বার )
                                    <i
                                      class="
                                        fa fa-star
                                        text-danger text-10
                                        cursor-pointer
                                      "
                                      title="Mendatory Field"
                                      data-placement="top"
                                      data-toggle="tooltip"
                                      data-original-title="Mendatory Field"
                                    ></i>
                                  </label>
                                  <input
                                    type="text"
                                    v-model="form.roadNameNumber"
                                    placeholder="Road (Name or Number)"
                                    class="form-control"
                                    :class="{
                                      'is-invalid':
                                        form.errors.has('roadNameNumber'),
                                    }"
                                  />
                                  <has-error
                                    :form="form"
                                    field="roadNameNumber"
                                  ></has-error>
                                </div>




                              </div>
                            </div>

                            <!-- -----------------------------   card footer  -->

                            <div
                              class="
                                d-block
                                pt-3
                                pb-4
                                card-footer
                                overflow-hidden
                              "
                            >
                              <div class="col-12">
                                <button
                                  type="submit"
                                  class="
                                    btn-pill btn-shadow btn-wide
                                    fsize-1
                                    btn btn-primary btn-lg
                                    float-right
                                  "
                                  :disabled="loading"
                                >
                                  <span
                                    v-if="loading"
                                    class="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                  ></span>

                                  <span v-else class="mr-2 opacity-7">
                                    <i class="fa fa-paper-plane"></i>
                                  </span>
                                  <span class="mr-1"> Submit </span>
                                </button>
                              </div>
                            </div>

                            <!-- -----------------------------   // card footer  -->
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ======================================== Block /modal === -->



                     <select
                    v-model="form.roadId"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('roadId') }"
                    name="roadId"
                    @change.prevent="viewHouseMarket(0)"
                  >
                     <option value=""> Select Road </option>
                    <option
                      v-for="roadInfo in newRoadLists"
                      :key="roadInfo.id"
                      :value="roadInfo.id"
                    >
                      {{ roadInfo.roadNameNumber }}
                    </option>

                  </select>
                  <has-error :form="form" field="roadId"></has-error>
                </div>
                <!-- road  -->




            <div class="form-group">
              <label> বাড়ি / মার্কেট
                 </label>

                 <select
                v-model="form.houseMarketId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('houseMarketId') }"
                name="houseMarketId"
                @change.prevent="getTotalFloor()"
              >
                 <option value=""> Select Market </option>
                <option
                  v-for="houseMarketList in houseMarketLists"
                  :key="houseMarketList.id"
                  :value="houseMarketList.id"
                >
                  {{ houseMarketList.houseMarketName }}
                  <span v-if="houseMarketList.houseMarketNumber">({{ houseMarketList.houseMarketNumber }})</span>
                </option>

              </select>
              <has-error :form="form" field="houseMarketId"></has-error>
            </div>




            <div class="form-group">
              <label>ফ্লোর নাম্বার
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

                 <select
                v-model="form.floorId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('floorId') }"
                name="countryId">
                 <option value=""> Select Floor </option>
                <option
                  v-for="n in totalFloor"
                  :key="n"
                  :value="n"
                >
                  Floor {{ n }}
                </option>
              </select>
              <has-error :form="form" field="floorId"></has-error>
            </div>

            <div class="form-group">
              <label> দোকান / অফিস ?
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>
                 </br>
           <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" @change.prevent="shopOrOffice(1)" value="1" name="shopOrOffice" id="shopOrOffice" >
                  <label class="form-check-label" for="shopOrOffice"> দোকান </label>
                  </div>
                  <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" @change.prevent="shopOrOffice(2)" value="2" name="shopOrOffice"  id="shopOrOffice1">
                  <label class="form-check-label" for="shopOrOffice1"> অফিস </label>
                  </div>

          </div>


            <div class="form-group">
              <label> প্রতিষ্ঠানের নাম
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

              <input type="text"
                v-model="form.shopOfficeName"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('shopOfficeName') }"
              >
              <has-error :form="form" field="shopOfficeName"></has-error>
            </div>


            <div class="form-group">
              <label> দোকান / অফিস নং
                 </label>

              <input type="text"
                v-model="form.shopOfficeNo"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('shopOfficeNo') }"
              >
              <has-error :form="form" field="shopOfficeNo"></has-error>
            </div>


            <div class="form-group">
              <label> দোকান / অফিস সাইজ
                  </label>

              <input type="text"
                v-model="form.shopOfficeSize"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('shopOfficeSize') }"
              >
              <has-error :form="form" field="shopOfficeSize"></has-error>
            </div>


            <div class="form-group">
              <label> মোবাইল  নাম্বার
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

              <input type="text"
                v-model="form.mobileNo"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('mobileNo') }"
              >
              <has-error :form="form" field="mobileNo"></has-error>
            </div>

            <div class="form-group">
              <label> WhatsApp
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                 </label>

              <input type="text"
                v-model="form.whatsapp"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('whatsapp') }"
              >
              <has-error :form="form" field="whatsapp"></has-error>
            </div>



            <div class="form-group">
              <label> জরুরী যোগাযোগ
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                 </label>

              <input type="text"
                v-model="form.contactNo"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('contactNo') }"
              >
              <has-error :form="form" field="contactNo"></has-error>
            </div>


            <div class="form-group">
              <label> ইমেইল
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                 </label>

              <input type="text"
                v-model="form.email"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('email') }"
              >
              <has-error :form="form" field="email"></has-error>
            </div>


            <div class="form-group">
              <label> ফেইসবুক
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                 </label>

              <input type="text"
                v-model="form.facebook"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('facebook') }"
              >
              <has-error :form="form" field="facebook"></has-error>
            </div>


            <div class="form-group">
              <label> ইউটিউব
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                 </label>

              <input type="text"
                v-model="form.youtube"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('youtube') }"
              >
              <has-error :form="form" field="youtube"></has-error>
            </div>


            <div class="form-group">
              <label> আগ্রহী ?
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

                 <div class="form-group">
           <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" @change.prevent="intarest(1)" value="1" name="intarest" id="intarest" >
                  <label class="form-check-label" for="intarest">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" @change.prevent="intarest(2)" value="2" name="intarest"  id="intarest1">
                  <label class="form-check-label" for="intarest1">No</label>
                  </div>

          </div>
            </div>


            <div class="form-group">
              <label> ব্যবহার করছেন ?
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

                 <div class="form-group">
           <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" @change.prevent="doYouUseSoftware(1)" value="1" name="doYouUseSoftware" id="doYouUseSoftware" >
                  <label class="form-check-label" for="doYouUseSoftware">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" @change.prevent="doYouUseSoftware(2)" value="2" name="doYouUseSoftware"  id="doYouUseSoftware1">
                  <label class="form-check-label" for="doYouUseSoftware1">No</label>
                  </div>

          </div>
            </div>


            <div class="form-group">
              <label> ব্যবহারকৃত নাম
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                 </label>

              <input type="text"
                v-model="form.usedSoftwareNme"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('usedSoftwareNme') }"
              >
              <has-error :form="form" field="usedSoftwareNme"></has-error>
            </div>


            <div class="form-group">
              <label> ব্যবহার না করার কারণ
                </label>

              <textarea type="text"
                v-model="form.whyDisagree"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('whyDisagree') }"
              ></textarea>
              <has-error :form="form" field="whyDisagree"></has-error>
            </div>


            <div class="form-group">
              <label> ব্যবসার ধরণ
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

                <select
                v-model="form.productTypeId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('productTypeId') }"
                name="productTypeId"
              >
                 <option value=""> Select Product Type  </option>
                <option
                  v-for="productTypeList in productTypeLists"
                  :key="productTypeList.id"
                  :value="productTypeList.id"
                >
                  {{ productTypeList.productType }}
                </option>
              </select>
              <has-error :form="form" field="productTypeId"></has-error>
            </div>



            <div class="form-group">
              <label>দায়িত্বে কে থাকেন
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

                 <div class="form-group">
           <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" @change.prevent="officerOrManager(1)" value="1" name="officerOrManager" id="officerOrManager" >
                  <label class="form-check-label" for="officerOrManager">Owner</label>
                  </div>
                  <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" @change.prevent="officerOrManager(2)" value="2" name="officerOrManager"  id="officerOrManager1">
                  <label class="form-check-label" for="officerOrManager1">Manager</label>
                  </div>

          </div>
            </div>

             <!--  owner info -->
                <div class="row" v-if="ownerInfoShow">

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">Owner Name</label>
                      <input type="text" v-model="form.owner_name" class="form-control" placeholder="Owner Name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">Phone No</label>
                      <input type="text" v-model="form.owner_phone" class="form-control" placeholder="Phone No">
                    </div>
                  </div>

                </div>
                <!--  owner info -->

                <!--  owner info -->
                <div class="row" v-if="managerInfoShow">

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">Manager Name</label>
                      <input type="text" v-model="form.manager_name" class="form-control" placeholder="Manager Name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">Phone No</label>
                      <input type="text" v-model="form.manager_phone" class="form-control" placeholder="Phone No">
                    </div>
                  </div>

                </div>
                <!--  owner info -->


            <div class="form-group">
              <label> কম্পিউটার আছে ?
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

                 <div class="form-group">
           <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" @change.prevent="haveComputer(1)"  v-model="this.form.haveComputer" value="1" name="haveComputer" id="haveComputer" >
                  <label class="form-check-label" for="haveComputer">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" @change.prevent="haveComputer(2)"  v-model="this.form.haveComputer" value="2" name="inlineRadioOptions"  id="haveComputer1">
                  <label class="form-check-label" for="haveComputer1">No</label>
                  </div>

          </div>
            </div>






            <div class="form-group">
              <label>মতামত
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                 </label>

              <textarea type="text"
                v-model="form.aboutSoftwareComment"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('aboutSoftwareComment') }"
              ></textarea>
              <has-error :form="form" field="aboutSoftwareComment"></has-error>
            </div>



            <div class="form-group">
              <label> অভিজ্ঞ আইটি লোক আছে ?
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

                 <div class="form-group">
           <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" @change.prevent="haveExpertPerson(1)" value="1" name="expertPerson" id="expertPerson" >
                  <label class="form-check-label" for="expertPerson">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" @change.prevent="haveExpertPerson(2)" value="2" name="expertPerson"  id="expertPerson1">
                  <label class="form-check-label" for="expertPerson1">No</label>
                  </div>

          </div>
            </div>






            <div class="form-group">
              <label> সাইনবোর্ড
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

                    <input type="file" id="logo" @change="changeImage($event)" class="form-control">
                    <has-error :form="form" field="logo"></has-error>
                    <center>
                      <img :src="'images/invoice_logo/'+form.logo"
                    class="img img-responsive"
                    style="max-height:300px; max-width:300px;margin:20px 0px;">
                    </center>
            </div>

            <div class="form-group">
              <label> ভিজিটিং কার্ড
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

                 <input type="file" id="logo1" @change="changeImage1($event)" class="form-control">
                    <has-error :form="form" field="logo1"></has-error>
                    <center>
                      <img :src="'images/invoice_logo/'+form.logo1"
                    class="img img-responsive"
                    style="max-height:300px; max-width:300px;margin:20px 0px;">
                    </center>
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

                                <button type="submit" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right"
                                :disabled="loading"
              >
                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>

                <span v-else class="mr-2 opacity-7">
                  <i class="fa fa-paper-plane"></i>
                </span>
                                    <span class="mr-1"> Update </span>
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
      ownerInfoShow:false,
      managerInfoShow:false,

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
        contactNo:'',
        whatsapp:'',
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

        roadNameNumber:'',
        roadId:'',

        houseMarketName:'',
        houseMarketNumber:'',
        howMuchFloor:'',
        logo:'',
        logo1:'',

        owner_name:'',
        owner_phone:'',

        manager_name:'',
        manager_phone:'',

      }),

      areaLists: [],
      blockRoadLists: [],
      houseMarketLists: [],
      totalFloor: 0,
      productTypeLists:[],
      logo1_view:[],
      logo2_view:[],
      viewAreaLists:[],
      newAreaLists:[],
      roadList:[],
      newRoadLists:[],
    };
  },

  mounted() {

    this.userList();
    this.allRoadList();
    this.shopTypeList();
    this.currencyList();
    this.view();
    this.viewProductType();
    this.dataEntryAreaShow();
  },

  methods: {

    allRoadList() {

axios.get('allRoadList').then((response) => {
  this.newRoadLists = response.data.data;
});

},

     changeImage(event){
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (event) => {
      this.form.logo = event.target.result;
      console.log(event.target.result);
    };
    reader.readAsDataURL(file);
  },

    changeImage1(event){
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (event) => {
      this.form.logo1 = event.target.result;
      console.log(event.target.result);
    };
    reader.readAsDataURL(file);
  },


      shopOrOffice(e){
          this.form.shopOrOffice = e;
      },
      intarest(e){
          this.form.intarest = e;
      },
      doYouUseSoftware(e){
          this.form.doYouUseSoftware = e;
      },
      officerOrManager(e){
          this.form.officerOrManager = e;
           if(e==1){
            this.ownerInfoShow=true;
            this.managerInfoShow=false;
          }else if(e==2){
            this.managerInfoShow=true;
             this.ownerInfoShow=false;
          }
      },
      haveComputer(e){
          this.form.haveComputer = e;
      },
      haveExpertPerson(e){
          this.form.expertPerson = e;
      },


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

  addHouseMarket() {

      this.loading=true;

      this.form.post("/houseMarketEntry").then((res) => {

          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
            background: '#c9f4c9', //green
            title: "House/Market Add Successful.",
          }),
            this.viewHouseMarket(this.form.blockRoadId);

            this.form.howMuchFloor = '';
            this.form.houseMarketNumber = '';
            this.form.houseMarketName = '';
            this.loading=false;

      });
    },

  addBlockRoad() {
      this.loading=true;

      this.form.post("/blockRoadEntry").then((res) => {

          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
            background: '#c9f4c9', //green
            title: "Area Add Successful.",
          }),
            this.viewBlockRoad(this.form.areaId);

            this.form.blockRoadNameNumber = '';
            this.loading=false;


      }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },

  

      viewProductType() {

      axios.get('productTypeView').then((response) => {
        this.productTypeLists = response.data.data;
      });

    },

    view() {

      axios.get('/dataInformationViewById/'+this.$route.params.id)
                  .then( res => {
                      this.form.fill(res.data.data);
                      this.form.areaId=res.data.data.areaId;
                      this.form.logo = res.data.data.signboardImage;
                      this.form.logo1 = res.data.data.visitingCardImage;
                       if(res.data.data.officerOrManager==1){
                            this.ownerInfoShow=true;
                            this.managerInfoShow=false;
                          }else if(res.data.data.officerOrManager==2){
                            this.managerInfoShow=true;
                             this.ownerInfoShow=false;
                          }
                      this.divisionShow();
                      this.districtShow();
                      this.upazillaShow();
                      this.unionShow();
                      this.viewHouseMarket(0);
                      this.getTotalFloor();
                      this.viewBlockRoad(0);


                      if(res.data.data.expertPerson==1){
                          $('#expertPerson').prop( "checked", true );
                      }
                      else{
                          $('#expertPerson1').prop( "checked", true );
                      }

                      if(res.data.data.haveComputer==1){
                      $('#haveComputer').prop( "checked", true );
                      }
                      else{
                          $('#haveComputer1').prop( "checked", true );
                      }

                      if(res.data.data.officerOrManager==1){
                      $('#officerOrManager').prop( "checked", true );
                      }
                      else{
                          $('#officerOrManager1').prop( "checked", true );
                      }

                      if(res.data.data.doYouUseSoftware==1){
                      $('#doYouUseSoftware').prop( "checked", true );
                      }
                      else{
                          $('#doYouUseSoftware1').prop( "checked", true );
                      }

                      if(res.data.data.intarest==1){
                      $('#intarest').prop( "checked", true );
                      }
                      else{
                          $('#intarest1').prop( "checked", true );
                      }

                      if(res.data.data.shopOrOffice==1){
                      $('#shopOrOffice').prop( "checked", true );
                      }
                      else{
                          $('#shopOrOffice1').prop( "checked", true );
                      }

                  });

    },

    viewHouseMarket(e){

          let id = 0;
          let areaId = this.form.areaId;
          let blockRoadId = this.form.blockRoadId;

          if(e==0){
              id = this.form.roadId;
          }
          else{
              id = e;
          }

          axios.get('houseByRoad/'+areaId+'/'+blockRoadId+'/'+id).then((response) => {
          this.houseMarketLists = response.data.data;
          this.totalFloor = response.data.totalFloor;
          });
          },

     //   road
  addRoad() {
      this.loading=true;

      this.form.post("/roadEntry").then((res) => {

          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
            background: '#c9f4c9', //green
            title: "Road Add Successful.",
          }),
           this.viewRoad(this.form.blockRoadId);

            this.form.roadNameNumber = '';
            this.loading=false;
            $("#RoadModalShow").modal("hide");


      }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },

    viewRoad(e){
      this.viewHouseMarket();
      let blockRoadId = 0;
      let areaId = this.form.areaId;
      if(e==0){
          blockRoadId = this.form.blockRoadId;
      }
      else{
          blockRoadId = e;
      }
      axios.get('blockByRoad/'+areaId+'/'+blockRoadId).then((response)=>{
          this.roadList = response.data.data;
      });
    },

  //   road

    getTotalFloor(){
      axios.get('getTotalFloor/'+this.form.houseMarketId).then((response) => {
        this.totalFloor = response.data.totalFloor;
      });
    },

    viewBlockRoad(e) {

      let id = 0;

      if(e==0){
          id = this.form.areaId;
      }
      else{
          id = e;
      }

      axios.get('blockRoadViewByArea/'+id).then((response) => {
        this.blockRoadLists = response.data.data;
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

    },

    currencyList() {
      let uri = `currencyList`;
      axios.get(uri).then((response) => {
        this.currencyLists = response.data.currencyList;
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
      // axios.get("/viewAreaById/" + this.form.thanaId).then((res) => {
      //   this.areaLists = res.data.data;
      // });
    },

    dataEntryAreaShow(){
       axios.get('data/entry/area/show').then((response)=>{
         this.viewAreaLists = response.data.data;
         this.newAreaLists = response.data.areaLists;
       })
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
          if(res.data.exist == 'Already exist.'){
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
                title: 'Delete Successful.'
            })
        this.view();
      });
    },



    addShopInformation() {

    this.loading=true;

      this.form.put("dataInformationEdit/"+this.$route.params.id).then((response) => {

          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
            background: '#c9f4c9', //green
            title: "Update Successful.",
          }),


            $('#expertPerson').prop( "checked", false );
            $('#expertPerson1').prop( "checked", false );
            $('#haveComputer').prop( "checked", false );
            $('#haveComputer1').prop( "checked", false );
            $('#officerOrManager').prop( "checked", false );
            $('#officerOrManager1').prop( "checked", false );
            $('#doYouUseSoftware').prop( "checked", false );
            $('#doYouUseSoftware1').prop( "checked", false );
            $('#intarest').prop( "checked", false );
            $('#intarest1').prop( "checked", false );
            $('#shopOrOffice').prop( "checked", false );
            $('#shopOrOffice').prop( "checked", false );


            this.form.reset();
            this.loading=false;
            this.$router.push('/new@entry@list');


      }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },
  },
};
</script>

  <style scoped>
input[type="radio"]:checked + label {
&::after {
 display:none;
}
}

input[type="radio"]:checked + label {
background:transparent;
box-shadow:none;
color:#000;
}
.invalid-feedback {
display: block;
width: 100%;
margin-top: .25rem;
font-size: 90%;
color: #d92550;
}
</style>
