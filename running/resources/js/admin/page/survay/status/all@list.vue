<template id="">
  <span>
    <new-list-data
      :shopInformations="allDataShow"
      :role="getRoleShow"
      :buttonHideShow="buttonHideShow"
    ></new-list-data>
  </span>
</template>

<script>
import NewListData from "../table@data.vue";
import moment from "moment";
export default {
  components: {
    "new-list-data": NewListData,
  },
  data() {
    return {
      buttonHideShow: "all",
      shopInformatons: [],
      role: [],
    };
  },

  beforeMount: function () {
    this.$store.dispatch("getAllData");
  },

  computed: {
    allDataShow() {
      return this.$store.getters.allDataShow;
    },

    getRoleShow() {
      return this.$store.getters.getRoleShow;
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
