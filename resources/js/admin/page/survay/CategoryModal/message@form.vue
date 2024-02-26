<template>
  <span>
    <form @submit.prevent="SendMessageStore()">
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
        <select
          class="form-control"
          v-model="form2.default_message"
          @change.prevent="DefaultMessageShowTextarea($event)"
        >
          <option value="">Select Message</option>
          <option
            value=""
            v-for="(MessageShow, index) in defaultMessages"
            :key="MessageShow.id"
            :value="MessageShow.message"
          >
            {{ MessageShow.message }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label>
          Text Message
          {{ form2.message.length }}
        </label>
        <textarea class="form-control" maxlength="315" v-model="form2.message"></textarea
        ><br />
        <span style="color: red; float: left">max character=315</span>
      </div>

      <input type="hidden" v-model="form2.shop_id" class="form-control" />

      <button
        type="submit"
        class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right"
      >
        <span class="mr-2 opacity-7">
          <i class="fa fa-paper-plane"></i>
        </span>
        <span class="mr-1"> Submit </span>
      </button>
    </form>
  </span>
</template>

<script>
export default {
  props: ["shop_id"],
  data() {
    return {
      form2: new Form({
        shop_id: "",
        sender_id: "",
        default_message: "",
        mobile_no: "",
        message: "",
      }),
      defaultMessages: [],
    };
  },

  mounted() {
    this.DefaultMessageShow();
  },

  watch: {
    shop_id(newVal) {
      this.form2.shop_id = newVal;
      axios.get(`show/phone/number/${newVal}`).then((response) => {
        this.form2.mobile_no = response.data.data.mobileNo;
      });
    },
  },

  methods: {
    DefaultMessageShowTextarea(e) {
      var defaultMessage = e.target.options[e.target.options.selectedIndex].text;
      this.form2.message = defaultMessage;
    },

    DefaultMessageShow() {
      axios.get("default/message/show").then((response) => {
        this.defaultMessages = response.data.data;
      });
    },

    SendMessageStore() {
      this.form2.post("send/message/store").then((response) => {
        this.form2.reset();
        this.$store.dispatch("getDataList");
        Toast.fire({
          icon: "success",
          //background: '#fcd8d8', red
          background: "#c9f4c9", //green
          title: "Message Send Successfully",
        });
      });
    },

    //   getPhoneNumberShow(){
    //     // this.form2.shop_id = this.shop_id;
    //     axios.get(`show/phone/number/${this.form2.shop_id}`).then((response)=>{
    //        this.form2.mobile_no =response.data.data.mobileNo;
    //     });
    //     $('#MessageModalShow').modal('show');
    //   },
  },
};
</script>
