<template>
  <span>
    <form @submit.prevent="AddCategorySetByShop()">
      <div class="form-group">
        <label>Category</label>
        <select class="form-control" v-model="form.category_id">
          <option
            v-for="(category, index) in CategoryLists"
            :key="index"
            :value="category.id"
          >
            {{ category.category_name }}
          </option>
        </select>
      </div>

      <input type="hidden" v-model="form.shop_id" class="form-control" />
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
import GetCategoryData from "./category@data.vue";
export default {
  props: ["shop_id"],
  data() {
    return {
      form: new Form({
        shop_id: "",
        category_id: "",
      }),
      CategoryLists: [],
    };
  },

  components: {
    "get-category-data": GetCategoryData,
  },

  mounted() {
    //   console.log(this.shop_id);
    this.getCategory();
  },

  methods: {
    AddCategorySetByShop() {
      this.form.shop_id = this.shop_id;
      this.form.post("store/category/product").then((response) => {
        if (response.data.msg == 0) {
          Toast.fire({
            icon: "error",
            background: "#fcd8d8",
            //   background: '#c9f4c9', //green
            title: "Already Exits",
          });
        } else {
          this.form.reset();

          this.$store.dispatch("getDataList");
          //   $('#CategoryProduct').modal('hide');
          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
            background: "#c9f4c9", //green
            title: "Submitted Successfully",
          });
        }
      });
    },
    getCategory() {
      axios.get("get/list/category/entry").then((response) => {
        this.CategoryLists = response.data.data;
      });
    },
  },
};
</script>
