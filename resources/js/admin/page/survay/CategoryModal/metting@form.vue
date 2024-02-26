<template>
    <span>
        <form @submit.prevent="MettingStore()">
            <div class="form-group">
                <label>Title</label>
                <input type="text" v-model="form1.title" class="form-control" placeholder="Title">
              </div>

              <div class="form-group">
                <label>Location</label>
                <input type="text" v-model="form1.location" class="form-control" placeholder="Location">
              </div>

              <div class="row">

                <div class="col-md-6">
                  <div class="form-group">
                     <label>Date</label>
                     <input type="date" v-model="form1.date" class="form-control" placeholder="Location">
                   </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                     <label>Time</label>
                     <input type="time" v-model="form1.time" class="form-control apon" placeholder="Location">
                   </div>
                </div>

              </div>

              <div class="form-group">
                <label>Person Inforamtion</label> <br>
                <textarea rows="5" v-model="form1.person_info" class="form-control"></textarea>
              </div>

              <input type="hidden" v-model="form1.shop_id" class="form-control">

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
    props:['shop_id'],
    data(){
        return{
            form1:new Form({
            shop_id:'',
            title:'',
            location:'',
            date:'',
            time:'',
            person_info:'',
            discussion_area:'',
            }),
        }
    },
    mounted(){

    },
    watch:{
       shop_id(newVal){
        this.form1.shop_id=newVal;
       }
    },

    methods:{
        MettingStore(){
        this.form1.post('/metting/store').then((response)=>{

           this.form1.reset();
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
