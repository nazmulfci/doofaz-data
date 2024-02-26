<template>
    <span>
        <select class="form-control" v-model="form.category_id">
            <option v-for="category,index in CategoryLists" :key="index" :value="category.id">
                {{ category.category_name }}
            </option>
        </select>
    </span>
</template>

<script>
export default {
   data(){
    return{
        CategoryLists:[],
    }
   },

   mounted(){
      this.getCategory();
   },

  methods: {
    getCategory(){
       axios.get('get/list/category/entry').then((response)=>{
          this.CategoryLists = response.data.data;
       });
     },
  },
}
</script>
