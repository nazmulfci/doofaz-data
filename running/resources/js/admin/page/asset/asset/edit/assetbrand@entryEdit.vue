<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Asset Brand  Update</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form  @submit.prevent="update()">
          <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">
          

              <div class="form-group">
                  <label>Asset Brand Name</label>
                  <input v-model="form.assetBrandName" type="text" name="uniteEntryName" :class="{ 'is-invalid': form.errors.has('assetBrandName') }" placeholder="Asset Brand Name" class="form-control">
                  <has-error :form="form" field="assetBrandName"></has-error>
              </div>

                
              </div>
 
       <!-- -----------------------------   card footer  -->
 
<div class="d-block p-0 pt-3 pb-4 card-footer overflow-hidden">
<div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">


                                <button type="reset"
                                onclick="window.history.back()"
                                 class="btn-pill btn-shadow btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Back </span>
                                </button>

                                <button type="submit" class="btn-pill btn-shadow btn btn-primary btn-lg float-right btn-hover-shine">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> Update </span>
                                </button>


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 
          </form>
        </div>
      </div>
  
  </span>
</template>
<script>
    export default {
        data () {
            return {
                form: new Form({
                    assetBrandName : '',
                    assetBrandStatus: '',
                }),

            }
        },
        mounted(){
            this.getData();
        },
        methods:{

            getData(){
                axios.get('/shopAssetBrandEntry/'+this.$route.params.assetBrandEntryId+'/edit')
                    .then(res=>{
                        this.form.fill(res.data.ShopAssetdata)
                    })
            },

            update(){
                this.form.put('/shopAssetBrandEntry/'+this.$route.params.assetBrandEntryId)
                    .then(res=>{
                      if (res.data.changeAssetName) {
                          Toast.fire({
                            icon: 'error',
                            title: 'Change Asset Brand  Name'
                          })
                      }
                      else {
                          Toast.fire({
                            icon: 'success',
                            title: 'Asset Brand  Update Successfully'
                         })
                         this.$router.push('/assetbrand@entry')
                     }
                 })
            }
        }
    }
</script>
