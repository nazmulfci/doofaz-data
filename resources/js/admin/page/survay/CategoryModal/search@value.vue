<template>
    <span>
        <tr v-for="(shopInformation, index) in searchInformations">
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
              <span v-if="apon=='all'">
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
    </span>
</template>

<script>
import moment from 'moment';
export default{
    props:['searchInformations','role'],
    data(){
        return{
            moment:moment,
        }
    }
}
</script>
