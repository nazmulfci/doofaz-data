<template id="">
  <span>
   <div class="card">
      <div class="card-header alert-info">
        <h3>Update Asset Supplier</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form  @submit.prevent="addAssetSupplierUpdate()">
          <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">
          

              <div class="form-group">
                  <label> Asset Supplier Name
                      <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input v-model="form.assetSupplierName" type="text" name="assetSupplierName" :class="{ 'is-invalid': form.errors.has('assetSupplierName') }" placeholder="Asset Supplier Name" class="form-control">
                  <has-error :form="form" field="assetSupplierName"></has-error>
              </div>

               <div class="form-group">
                  <label> Asset Supplier Code
                      <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input disabled  v-model="form.assetSupplierCode" type="text" name="assetSupplierCode" :class="{ 'is-invalid': form.errors.has('assetSupplierCode') }" placeholder="Asset Supplier Code" class="form-control">
                  <has-error :form="form" field="assetSupplierCode"></has-error>
              </div>

               <div class="form-group">
                  <label> Asset Supplier Phone Number
                      <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input v-model="form.assetSupplierPhone" type="text" name="assetSupplierPhone" :class="{ 'is-invalid': form.errors.has('assetSupplierPhone') }" placeholder="Asset Supplier Phone" class="form-control">
                  <has-error :form="form" field="assetSupplierPhone"></has-error>
              </div>

              <div class="form-group">
                  <label> Asset Supplier Hot Line</label>
                  <input v-model="form.assetSupplierHotLine" type="text" name="assetSupplierHotLine" :class="{ 'is-invalid': form.errors.has('assetSupplierHotLine') }" placeholder="Asset Supplier Hot Line" class="form-control">
                  <has-error :form="form" field="assetSupplierHotLine"></has-error>
              </div>

              <div class="form-group">
                  <label> Asset Supplier Mail</label>
                  <input v-model="form.assetSupplierMail" type="text" name="assetSupplierMail" :class="{ 'is-invalid': form.errors.has('assetSupplierMail') }" placeholder="Asset Supplier Mail..." class="form-control">
                  <has-error :form="form" field="assetSupplierMail"></has-error>
              </div>

                <div class="form-group">
                  <label> Asset Supplier Facebook</label>
                  <input v-model="form.assetSupplierFb" type="text" name="assetSupplierFb" :class="{ 'is-invalid': form.errors.has('assetSupplierFb') }" placeholder="Asset Supplier Facebook..." class="form-control">
                  <has-error :form="form" field="assetSupplierFb"></has-error>
              </div>

              <div class="form-group">
                  <label> Asset Supplier Web</label>
                  <input v-model="form.assetSupplierWeb" type="text" name="assetSupplierWeb" :class="{ 'is-invalid': form.errors.has('assetSupplierWeb') }" placeholder="Asset Supplier Web..." class="form-control">
                  <has-error :form="form" field="assetSupplierWeb"></has-error>
              </div>


                 <div class="form-group">
                  <label> Asset Supplier IMO</label>
                  <input v-model="form.assetSupplierImo" type="text" name="assetSupplierImo" :class="{ 'is-invalid': form.errors.has('assetSupplierImo') }" placeholder="Asset Supplier IMO..." class="form-control">
                  <has-error :form="form" field="assetSupplierImo"></has-error>
              </div>

              <div class="form-group">
                  <label>Address
                      <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <textarea v-model="form.assetSupplierAddress" type="text" name="assetSupplierAddress"  :class="{ 'is-invalid': form.errors.has('assetSupplierAddress') }" placeholder="Asset Supplier Address" class="form-control"></textarea>
                  <has-error :form="form" field="assetSupplierAddress"></has-error>
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
                    assetSupplierName : '',
                    assetSupplierCode: '',
                    assetSupplierPhone: '',
                    assetSupplierHotLine: '',
                    assetSupplierMail: '',
                    assetSupplierWeb: '',
                    assetSupplierFb: '',
                    assetSupplierImo: '',
                    assetSupplierAddress: '',
                }),
                assetSupplierAllDatas: [],
            }
        },
        mounted(){
            this.getData();
        },


        methods:{
            getData(){
                axios.get('/addAssetSupplier/'+this.$route.params.assetSupplierId+'/edit')
                    .then(res=>{
                        this.form.fill(res.data.data)
                    })
            },

            addAssetSupplierUpdate(){
                this.form.put('/addAssetSupplier/'+this.$route.params.assetSupplierId)
                    .then(res=>{
                      if (res.data.samePhone) {
                        Toast.fire({
                          icon: 'error',
                          title: 'Change Your Phone Number'
                        })
                      }
                    else if (res.data.sameMail) {
                          Toast.fire({
                              icon: 'error',
                              title: 'Change Your Mail'
                          })
                      }
                    else {
                      Toast.fire({
                          icon: 'success',
                          title: 'Asset  Update Successfully'
                      })
                      this.$router.push('/assetsupplier@entry')
                    }
                })
            }
        }
    }

</script>
