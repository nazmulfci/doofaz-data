<template id="">
    <span>

      <div class="card">

              <div class="card-header-tab card-header alert-info">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i
              class="header-icon lnr-pencil icon-gradient bg-premium-dark"
            ></i>
           <h4> Edit Metting </h4>
          </div>
        </div>



        <div class="supplier-entry py-4 px-2 comm-form-back-img ">
           <div class="card-body">
                <div class="col-lg-7 px-lg-10 col-sm-11 offset-sm-2 col-12 supplier-border comm-form-box-back-color">
                  <form @submit.prevent="MettingUpdate()">
               <div class="form-group">
                                   <label>Title</label>
                                   <input type="text" v-model="form1.title" class="form-control" placeholder="Title">
                                 </div>

                                 <div class="form-group">
                                   <label>Location</label>
                                   <input type="text" v-model="form1.location" class="form-control" placeholder="Location">
                                 </div>

                                 <input type="hidden" v-model="form1.shop_id">
                                 <input type="hidden" v-model="form1.metting_id">

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

                                 <div class="form-group">
                                   <label>Reason</label>
                                   <input type="text" v-model="form1.reason" class="form-control" placeholder="Reason">
                                 </div>

                                 <button type="submit" class="btn btn-md btn-primary mb-2">Submit</button>
             </form>
                </div>
           </div>
        </div>

      </div>

    </span>
  </template>

  <script>
    export default{
      data(){
        return{
            form1:new Form({
              shop_id:'',
              metting_id:'',
              title:'',
              location:'',
              date:'',
              time:'',
              person_info:'',
              reason:'',
            }),
        }
      },

      mounted(){
        this.getMettingInfo();
      },

      methods:{
         getMettingInfo(){
            axios.get('metting/edit/'+this.$route.params.id).then((response)=>{
                this.form1.fill(response.data.data);
                this.form1.metting_id = response.data.data.id;
                this.form1.shop_id = response.data.data.shop_id;
            });
         },

         MettingUpdate(){
          this.form1.post('update/metting/info').then((response)=>{
            this.form1.reset();
            this.$router.push('/metting@report@list1');
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title: "Update Successful.",
            });
          });
         },
      }

    }
  </script>
