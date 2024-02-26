<template>
  <span>
    <div class="mt-2 mb-2">
      <div class="row">
        <div class="col-md-10 offset-md-1 timeInfo">
          <ul class="timeline">
            <li v-for="timeLineInfo in timeLineInfoLists">
              <div class="" v-if="timeLineInfo.referanceTypeId != 1">
                <table class="table text-center">
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
                      {{ moment(timeLineInfo.date).format("DD MMMM YYYY") }} <br />
                      {{ moment(timeLineInfo.time, "HH:mm").format("hh:mm A") }}
                    </td>
                  </tr>
                </table>
                <div class="timeline_paragraph">
                  <p>{{ timeLineInfo.description }}</p>
                </div>
              </div>

              <div class="shopInfo" v-else>
                <a href="" class="title">
                  {{ timeLineInfo.title }}
                </a>
                <p href="#" class="float-right">
                  {{ moment(timeLineInfo.date).format("DD MMMM YYYY") }}
                </p>
                <br />
                <p href="#" class="float-right aaa">
                  {{ moment(timeLineInfo.time, "HH:mm").format("hh:mm A") }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import moment from "moment";
export default {
  props: ["shop_id"],
  data() {
    return {
      timeLineInfoLists: [],
      shopNameInfo: [],
      moment: moment,
    };
  },

  mounted() {
    //    this.timeLineShow();
  },

  watch: {
    shop_id(newVal) {
      axios.get("timeline/show/" + newVal).then((response) => {
        this.timeLineInfoLists = response.data.data;
        this.shopNameInfo = response.data.shopName;
      });
    },
  },

  methods: {
    //    timeLineShow(){
    //         axios.get('timeline/show/'+this.form.shop_id).then((response) => {
    //             this.timeLineInfo = response.data.data;
    //             this.shopNameInfo = response.data.shopName;
    //         });
    //    }
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
fa.fa-edit {
  margin-left: -12px !important;
}
span#underscore_remove {
  color: transparent !important;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #e9ecef;
  background: #d0c6a6;
}
.table-bordered th,
.table-bordered td {
  border: 1px solid rgba(0, 0, 0, 0.3);
}
label {
  float: left;
}
.timeInfo ul.timeline {
  list-style-type: none;
  position: relative;
}
.timeInfo ul.timeline:before {
  content: " ";
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
  content: " ";
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
.timeInfo ul.timeline > li {
  margin: 20px 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
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
.timeInfo h4 {
  text-align: left;
  font-weight: 600;
  color: green;
  font-size: 15px;
}
.shopInfo {
  position: relative;
}

.timeline_paragraph {
  background: #f0e9e9;
  padding: 15px 15px 5px 15px;
  /* border: 1px solid rgba(0,0,0,.1); */
}
button {
  cursor: pointer;
}
.pagination button {
  border: none;
  padding: 5px 10px;
  background: #ddd;
  margin: 5px 1px;
  cursor: pointer;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.pagination button:disabled,
.pagination button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
.modal-header {
  background: #d0eeff;
}
.col-12.supplier-border.comm-form-box-back-color {
  padding: 10px;
}
</style>
