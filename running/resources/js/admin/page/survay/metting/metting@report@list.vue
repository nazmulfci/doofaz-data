<template id="">
    <span>
        <div class="card mt-5">
            <div class="card-header-tab card-header alert-info">
                <h4>
                    <i
                        class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
                    ></i>
                    View Information
                </h4>
            </div>

            <div class="supplier-entry py-4 px-2">
                <div class="card-body table-responsive bg-white">
                    <table
                        style="width: 100%;"
                        id="example"
                        class="table table-hover table-striped table-bordered"
                    >
                        <thead>
                            <tr>
                                <th>সি.নং</th>
                                <th v-if="role==3">প্রতিনিধি</th>
                                <th width="20%">প্রতিষ্ঠানের<span id="underscore_remove">_</span>নাম</th>
                                <th>শিরোনাম</th>
                                <th>ঠিকানা</th>
                                <th>
                                    কত<span id="underscore_remove">_</span
                                    >সময়<span id="underscore_remove">_</span
                                    >বাকী
                                </th>
                                <th>
                                    তারিখ<span id="underscore_remove">_</span
                                    >এবং<span id="underscore_remove">_</span>সময়
                                </th>
                                <th> তথ্য </th>
                                <th width="10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(MettingInfo, index) in MettingLists">
                                <td>{{ ++index }}</td>
                                <td v-if="role==3">{{ MettingInfo.create_by_name_show.userName }}</td>
                                <td v-if="MettingInfo.shop_name">
                                    {{ MettingInfo.shop_name.shopOfficeName
                                    }}<br />
                                    <button
                                        id="btn_form"
                                        class="btn-sm btn-pill btn-info btn-hover-shine text-white"
                                        @click.prevent="
                                            timeLineInformationShow(
                                                MettingInfo.shop_id
                                            )
                                        "
                                    >
                                        TimeLine
                                    </button>
                                    <button
                                        id="btn_form" @click.prevent="MessageModalShow(MettingInfo.shop_id)"
                                        class="btn-sm btn-pill btn-info btn-hover-shine text-white"
                                    >
                                        Message
                                    </button>
                                    <button id="btn_form" class="btn-sm btn-pill btn-info btn-hover-shine text-white" @click.prevent="MettingEditHistoryShow(MettingInfo.id,MettingInfo.shop_id)">
                                        M.Info
                                    </button>
                                </td>
                                <td>{{ MettingInfo.title }}</td>
                                <td>{{ MettingInfo.location }}</td>
                                <td>১ দিন ১২ ঘন্টা ৩০ মিনিট</td>
                                <td>

                                    {{moment(MettingInfo.date).format("DD MMMM YYYY")}}
                                    {{moment(MettingInfo.date).format("h:mm:ss a")}}

                                </td>
                                <td>{{ MettingInfo.person_info }}</td>

                                <td>
                                    <div class="dropdown">
                                        <button
                                            class="btn btn-primary dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Status
                                        </button>
                                        <div
                                            class="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton"
                                        >
                                            <router-link :to="`metting@edit${MettingInfo.id}`" class="dropdown-item">
                                                Edit
                                            </router-link
                                            >
                                            <a class="dropdown-item" @click.prevent="SuccessMettingStatus(MettingInfo.id,MettingInfo.shop_id)">
                                                Success
                                            </a>
                                            <a class="dropdown-item" @click.prevent="CancelMettingStatus(MettingInfo.id,MettingInfo.shop_id)">
                                                Cancel
                                            </a>
                                            <a
                                                class="dropdown-item"
                                                @click.prevent="
                                                    MettingInfoModalShow(
                                                        MettingInfo.id,
                                                        MettingInfo.shop_id
                                                    )
                                                "
                                                >Metting Information Entry</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- MettingInfoModalShow -->
        <div
            class="modal fade"
            id="MettingInfoModalShow"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Metting Info Create
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
                    <form @submit.prevent="MettingInfoStore">
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Next Discuss</label> <br />
                                <textarea
                                    v-model="form.information"
                                    class="form-control"
                                    placeholder="Information"
                                ></textarea>
                            </div>
                            <input
                                type="hidden"
                                v-model="form.shop_id"
                                class="form-control"
                            />
                            <input
                                type="hidden"
                                v-model="form.metting_id"
                                class="form-control"
                            />
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="submit" class="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- MettingInfoModalShow -->

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


        <!-- MettingEditHistoryShow modal -->
        <div
            class="modal fade"
            id="MettingEditHistoryShow"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="mt-5 mb-5">
                            <div class="row">
                                <div class="col-md-12 table-responsive">

                                    <h4>Metting History</h4>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>সি.নং</th>
                                                <th>শিরোনাম</th>
                                                <th>ঠিকানা</th>
                                                <th>তারিখ এবং সময় </th>
                                                <th>কারণ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                             <tr v-for="MettingInfoHistory,index in MettinghistoryInfo">
                                                <td>{{ ++index }}</td>
                                                <td>{{ MettingInfoHistory.title }}</td>
                                                <td>{{ MettingInfoHistory.location }}</td>
                                                <td>
                                                    {{moment(MettingInfoHistory.date).format("DD MMMM YYYY")}} ||
                                                    {{ MettingInfoHistory.time }}
                                                </td>
                                                <td>
                                                    {{ MettingInfoHistory.reason }}
                                                </td>
                                             </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- MettingEditHistoryShow modal -->

    </span>
</template>

<script>
import moment from "moment";
export default {
    data() {
        return {
            form: new Form({
                shop_id: "",
                metting_id: "",
                information: ""
            }),

        form2:new Form({
          shop_id:'',
          sender_id:'',
          default_message:'',
          mobile_no:'',
          message:'',
        }),

            originalTime:'14:30:00',
            formattedTime:'',
            MettingLists: [],
            timeLineList: [],
            timeLists: [],
            MettinghistoryInfo: [],
            moment: moment,
            role:'',
            roltimePasse:'',
            defaultMessages: [],
        };
    },

    mounted() {
        this.MettingListShow();
        this.DefaultMessageShow();
    },

    computed:{
        TimePassing(TimePass){
                    // Split the original time into hours, minutes, and seconds
                    const [hours, minutes, seconds] = TimePass.toLocaleTimeString().split(':');

                // Create a JavaScript Date object (date doesn't matter for time-only conversion)
                const date = new Date();
                date.setHours(parseInt(hours, 10));
                date.setMinutes(parseInt(minutes, 10));
                date.setSeconds(parseInt(seconds, 10));

                // Format the time using toLocaleTimeString() to get AM/PM format
                return this.formattedTime = date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
                });
        }
    },

    methods: {

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

        SuccessMettingStatus(mettingId,ShopInfoId){
           axios.get(`metting/success/status/${mettingId}/${ShopInfoId}`).then((response)=>{
            this.MettingListShow();
            Toast.fire({
                    icon: "success",
                    //background: '#fcd8d8', red
                    background: "#c9f4c9", //green
                    title: "Status Change Successfully"
                });
           });
        },

        CancelMettingStatus(mettingId,ShopInfoId){
           axios.get(`metting/cancel/status/${mettingId}/${ShopInfoId}`).then((response)=>{
            this.MettingListShow();
            Toast.fire({
                    icon: "success",
                    //background: '#fcd8d8', red
                    background: "#c9f4c9", //green
                    title: "Status Change Successfully"
                });
           });
        },

        timeLineInformationShow(shop_id) {
            axios.get('timeline/show/'+shop_id).then((response) => {
                this.timeLists = response.data.data;
            });
            $('#timeLineInformationShow').modal('show');
        },

        MettingInfoModalShow(id, shop_id) {
            this.form.metting_id = id;
            this.form.shop_id = shop_id;
            $("#MettingInfoModalShow").modal("show");
        },

        MettingInfoStore() {
            this.form.post("metting/info/store").then(response => {
                $("#MettingInfoModalShow").modal("hide");
                this.MettingListShow();
                this.form.reset();
                Toast.fire({
                    icon: "success",
                    //background: '#fcd8d8', red
                    background: "#c9f4c9", //green
                    title: "Data Inserted Successfully"
                });
            });
        },

        MettingListShow() {
            axios.get(`metting/list/show/${this.$route.params.status}`).then(response => {
                this.MettingLists = response.data.data;
                this.role = response.data.role;
            });
        },

        MettingEditHistoryShow(MettingId,ShopInfoId){
            axios.get(`metting/edit/history/${MettingId}/${ShopInfoId}`).then((response)=>{
               this.MettinghistoryInfo = response.data.data;
               console.log(response.data.data);
            });
           $('#MettingEditHistoryShow').modal('show');
        },
    }
};
</script>

<style scoped>
span#underscore_remove {
    color: transparent !important;
}
#btn_form {
    margin: 2px 0px;
    border: none;
    border-radius: 20px;
}
button {
    display: inline-block;
}
p {
    font-weight: normal;
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
</style>
