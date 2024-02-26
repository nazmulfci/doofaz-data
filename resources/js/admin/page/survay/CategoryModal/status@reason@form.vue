<template>
    <span>
        <form @submit.prevent="statusReasonStore">
            <div class="form-group">
                <label>Note</label>
                <input type="text" v-model="form.note" class="form-control" placeholder="Note">
              </div>
              <input type="hidden" v-model="form.shop_id" class="form-control">
              <input type="hidden" v-model="form.status_type_id" class="form-control">
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
export default{
    props:['shop_id','status_type_id'],
    data(){
        return{
            form:new Form({
                note:'',
                status_type_id:'',
                shop_id:'',
            }),
        }
    },

    watch:{
        shop_id(newVal){
            this.form.shop_id=newVal;
        },

        status_type_id(newVal1){
            this.form.status_type_id=newVal1;
        },

    },

    methods:{

    statusReasonStore(){
        this.form.post('/status/reason/store').then((response)=>{
            this.form.note='';
            this.$store.dispatch('getDataList');
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title: "Status Reason Submitted Successfully",
            });
        });
      },

    },

}
</script>
