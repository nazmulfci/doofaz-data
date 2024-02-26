<template>
  <span>
    <div class="row">
      <div class="col-md-6">
        <img
          :src="'images/invoice_logo/' + galleryShow.signboardImage"
          v-if="galleryShow"
          style="border: 2px solid rgba(0, 0, 0, 0.4); width: 100%; height: 350px"
        />

        <img
          src="'images/map.jpg'"
          style="border: 2px solid rgba(0, 0, 0, 0.4); width: 100%; height: 350px"
          v-else
        />
      </div>
      <div class="col-md-6">
        <img
          :src="'images/invoice_logo/' + galleryShow.visitingCardImage"
          v-if="galleryShow"
          style="border: 2px solid rgba(0, 0, 0, 0.4); width: 100%; height: 350px"
        />

        <img
          src="'images/map.jpg'"
          style="border: 2px solid rgba(0, 0, 0, 0.4); width: 100%; height: 350px"
          v-else
        />
      </div>
    </div>
  </span>
</template>

<script>
export default {
  props: ["shop_id"],
  data() {
    return {
      galleryShow: [],
      shopInfoId: "",
    };
  },

  mounted() {
    // this.showGallery();
    // this.id = this.id;
  },

  watch: {
    shop_id(newVal) {
      axios.get(`shop/gallery/show/${newVal}`).then((response) => {
        this.galleryShow = response.data.data;
      });
    },
  },

  methods: {
    // showGallery() {
    //   axios.get(`shop/gallery/show/${this.shop_id}`).then((response) => {
    //     this.galleryShow = response.data.data;
    //   });
    // },
  },
};
</script>
