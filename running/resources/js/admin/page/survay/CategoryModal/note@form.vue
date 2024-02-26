<template>
    <span>
         <form @submit.prevent="NoteStore()">
            <div class="form-group">
                <label>Note</label> <br>
                <!-- <input type="text" v-model="form.note" class="form-control" placeholder="Note"> -->
                <textarea v-model="form.note" class="form-control" placeholder="Note"></textarea>
              </div>
              <input type="hidden" v-model="form.shop_id" class="form-control">

              <button
              type="submit"
              class="
                btn-pill btn-shadow btn-wide
                fsize-1
                btn btn-primary btn-lg
                float-right
              "

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
import GetCategoryData from './category@data.vue';
export default {
    props:['shop_id'],
   data(){
    return{
        form:new Form({
          shop_id:'',
          note:'',
        }),
    }
   },

   mounted(){

   },

   watch: {
        shop_id(newVal) {
            this.form.shop_id = newVal;
        }
    },

  methods: {
    NoteStore(){
        this.form.post('/note/store').then((response)=>{

            this.form.note='';
            this.$store.dispatch('getDataList');
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title:"Data Submitted Successfully",
            });
        });
      },
  }
}
</script>
